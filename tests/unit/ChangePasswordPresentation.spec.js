import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import { createLocalVue, mount } from '@vue/test-utils'
import ChangePassword from '@/views/login/ChangePasswordPage.vue'
import fb from '@/firebase'
import router from '@/router'
import config from '@/config/default'

jest.mock('@/firebase', () => ({ changePassword: jest.fn() }))
jest.mock('@/router', () => ({ push: jest.fn() }))
jest.mock('@/components/home/homeContent', () => ({ footerGroups: [], privacyHref: '/privacy' }))
jest.mock('@/assets/logo_new.svg', () => '/logo.svg')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Buefy)
localVue.use(Vuelidate)
const settle = async () => { await Vue.nextTick(); await Promise.resolve(); await Vue.nextTick() }
const inputIds = ['auth-change-old-password', 'auth-change-password', 'auth-change-password-repeat']

describe('Změna hesla: dostupný formulář a původní kontrakt', () => {
  let wrapper
  async function render () {
    const navigation = new VueRouter({ mode: 'abstract', routes: [{ path: '/change-password', component: { render: h => h('div') } }] })
    navigation.push('/change-password')
    const store = new Vuex.Store({ getters: { user: () => ({ email: 'anna@example.test' }) } })
    wrapper = mount(ChangePassword, { localVue, router: navigation, store, attachTo: document.body, stubs: ['home-footer', 'footer-block'] })
    await settle()
  }
  async function fill () {
    wrapper.find('#' + inputIds[0]).setValue('original-fixture-password')
    wrapper.find('#' + inputIds[1]).setValue('new-fixture-password')
    wrapper.find('#' + inputIds[2]).setValue('new-fixture-password')
    await settle()
  }
  beforeEach(() => { jest.clearAllMocks(); fb.changePassword.mockResolvedValue('OK') })
  afterEach(() => { if (wrapper) wrapper.destroy(); document.body.innerHTML = '' })

  test('hlavní obsah, popisky a autofill zpřístupní tři pole hesla', async () => {
    await render()
    expect(wrapper.find('main#home-main').exists()).toBe(true)
    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.find('form').attributes('novalidate')).toBeDefined()
    inputIds.forEach((id, index) => {
      expect(wrapper.find(`label[for="${id}"]`).exists()).toBe(true)
      expect(wrapper.find('#' + id).attributes('autocomplete')).toBe(index === 0 ? 'current-password' : 'new-password')
      expect(wrapper.find('#' + id).attributes('type')).toBe('password')
    })
  })

  test('zobrazení jednotlivého hesla nezmění hodnotu ani ostatní pole', async () => {
    await render()
    await fill()
    const toggle = wrapper.find('[aria-controls="auth-change-password"]')
    await toggle.trigger('click')
    expect(toggle.attributes('aria-pressed')).toBe('true')
    expect(wrapper.find('#auth-change-password').attributes('type')).toBe('text')
    expect(wrapper.find('#auth-change-password').element.value).toBe('new-fixture-password')
    expect(wrapper.find('#auth-change-old-password').attributes('type')).toBe('password')
    expect(wrapper.find('#auth-change-password-repeat').attributes('type')).toBe('password')
    await toggle.trigger('click')
    expect(wrapper.find('#auth-change-password').attributes('type')).toBe('password')
  })

  test('prázdný formulář neodešle požadavek a zaměří první chybu', async () => {
    await render()
    await wrapper.find('form').trigger('submit')
    await settle()
    expect(fb.changePassword).not.toHaveBeenCalled()
    expect(document.activeElement.id).toBe('auth-change-old-password')
    const field = wrapper.find('#auth-change-old-password')
    expect(field.attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('#' + field.attributes('aria-describedby')).text()).toBe(config.errors.required)
    expect(wrapper.find('[role="alert"]').text()).not.toBe('')
  })

  test('chybějící nové heslo zaměří nové pole a ponechá původní heslo', async () => {
    await render()
    wrapper.find('#auth-change-old-password').setValue('original-fixture-password')
    await wrapper.find('form').trigger('submit')
    await settle()
    expect(fb.changePassword).not.toHaveBeenCalled()
    expect(document.activeElement.id).toBe('auth-change-password')
    expect(wrapper.find('#auth-change-old-password').element.value).toBe('original-fixture-password')
  })

  test('neshodná hesla neodešle a propojí potvrzení s chybou shody', async () => {
    await render()
    await fill()
    wrapper.find('#auth-change-password-repeat').setValue('different-fixture-password')
    await wrapper.find('form').trigger('submit')
    await settle()
    expect(fb.changePassword).not.toHaveBeenCalled()
    expect(document.activeElement.id).toBe('auth-change-password-repeat')
    expect(wrapper.find('#auth-change-password-repeat-error').text()).toBe(config.errors.passwordsNotMatch)
    expect(wrapper.find('#auth-change-password-repeat').attributes('aria-describedby')).toBe('auth-change-password-repeat-error')
  })

  test('platný submit zachová argumenty, oznámí úspěch a vymaže hesla', async () => {
    await render()
    await fill()
    await wrapper.find('form').trigger('submit')
    await settle()
    expect(fb.changePassword).toHaveBeenCalledTimes(1)
    expect(fb.changePassword).toHaveBeenCalledWith('anna@example.test', 'original-fixture-password', 'new-fixture-password')
    expect(wrapper.find('[role="status"]').text()).toBe('Heslo bylo uloženo')
    inputIds.forEach(id => expect(wrapper.find('#' + id).element.value).toBe(''))
    expect(wrapper.findAll('.help.is-danger')).toHaveLength(0)
    expect(router.push).not.toHaveBeenCalled()
  })

  test('čekání zamkne vstupy a přepínače a odmítne opakovaný submit', async () => {
    await render()
    await fill()
    let finish
    fb.changePassword.mockReturnValue(new Promise(resolve => { finish = resolve }))
    await wrapper.find('form').trigger('submit')
    expect(wrapper.find('form').attributes('aria-busy')).toBe('true')
    expect(wrapper.find('button[type="submit"]').text()).toBe('Ukládám…')
    expect(wrapper.find('button[type="submit"]').element.disabled).toBe(true)
    inputIds.forEach(id => {
      expect(wrapper.find('#' + id).element.disabled).toBe(true)
      expect(wrapper.find(`[aria-controls="${id}"]`).element.disabled).toBe(true)
    })
    await wrapper.find('form').trigger('submit')
    expect(fb.changePassword).toHaveBeenCalledTimes(1)
    finish('Nesprávné původní heslo')
    await settle()
    expect(wrapper.find('[role="alert"]').text()).toBe('Nesprávné původní heslo')
    expect(wrapper.find('form').attributes('aria-busy')).toBe('false')
    expect(wrapper.find('button[type="submit"]').element.disabled).toBe(false)
    expect(wrapper.find('#auth-change-old-password').element.value).toBe('original-fixture-password')
    expect(wrapper.find('#auth-change-password').element.value).toBe('new-fixture-password')
    expect(wrapper.find('#auth-change-password-repeat').element.value).toBe('new-fixture-password')
  })

  test('odmítnutý požadavek oznámí chybu, ponechá hesla a umožní další pokus', async () => {
    await render()
    await fill()
    fb.changePassword.mockRejectedValueOnce(new Error('fixture network failure'))
    await expect(wrapper.vm.changePassword()).resolves.toBeUndefined()
    await settle()
    expect(wrapper.find('[role="alert"]').text()).toContain('Zkuste to prosím znovu.')
    expect(wrapper.find('button[type="submit"]').element.disabled).toBe(false)
    expect(wrapper.find('#auth-change-password').element.value).toBe('new-fixture-password')
    await wrapper.find('form').trigger('submit')
    await settle()
    expect(wrapper.find('[role="status"]').text()).toBe('Heslo bylo uloženo')
  })

  test('prázdná chybová odpověď nezůstane bez dostupné zpětné vazby', async () => {
    await render()
    await fill()
    fb.changePassword.mockResolvedValueOnce(undefined)
    await wrapper.find('form').trigger('submit')
    await settle()
    expect(wrapper.find('[role="alert"]').text()).toContain('Zkuste to prosím znovu.')
    expect(wrapper.find('#auth-change-password-repeat').element.value).toBe('new-fixture-password')
  })

  test('návrat na profil neodešle rozepsaný formulář', async () => {
    await render()
    await fill()
    await wrapper.find('.change-password-actions button[type="button"]').trigger('click')
    expect(router.push).toHaveBeenCalledWith('/profil')
    expect(fb.changePassword).not.toHaveBeenCalled()
  })
})
