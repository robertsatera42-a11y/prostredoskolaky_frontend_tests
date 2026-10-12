import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import { createLocalVue, mount } from '@vue/test-utils'
import LoginPage from '@/views/login/LoginPage.vue'
import Login from '@/components/login/Login.vue'
import RenewPassword from '@/views/login/RenewPasswordPage.vue'
import fb from '@/firebase'
import router from '@/router'
import config from '@/config/default'

jest.mock('@/firebase', () => ({ loginUser: jest.fn(), createUser: jest.fn(), renewPassword: jest.fn() }))
jest.mock('@/router', () => ({ push: jest.fn() }))
jest.mock('@/components/home/homeContent', () => ({ footerGroups: [], privacyHref: '/privacy' }))
jest.mock('@/assets/logo_new.svg', () => '/logo.svg')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Buefy)
localVue.use(Vuelidate)
const settle = async () => { await Vue.nextTick(); await Promise.resolve(); await Vue.nextTick() }
const deferred = () => { let finish; const promise = new Promise(resolve => { finish = resolve }); return { promise, resolve: finish } }

describe('Vstup do účtu: prezentace a původní autentizační kontrakty', () => {
  let wrapper, store, updateUser
  async function render (component = LoginPage, path = '/login') {
    updateUser = jest.fn()
    store = new Vuex.Store({ state: { logged: false }, getters: { isLoggedIn: state => state.logged }, mutations: { updateUser } })
    const navigation = new VueRouter({ mode: 'abstract', routes: ['/login', '/renew-password'].map(path => ({ path, component: { render: h => h('div') } })) })
    navigation.push(path)
    wrapper = mount(component, { localVue, router: navigation, store, attachTo: document.body, stubs: ['home-footer'] })
    await settle()
  }
  async function registration () { await wrapper.find('#auth-tab-signup').trigger('click'); await settle() }
  async function fillRegistration () {
    await registration()
    wrapper.find('#auth-signup-first-name').setValue('Anna')
    wrapper.find('#auth-signup-last-name').setValue('Nováková')
    wrapper.find('#auth-signup-email').setValue('anna@example.test')
    wrapper.find('#auth-signup-password').setValue('fixture-password')
    wrapper.find('#auth-signup-password-repeat').setValue('fixture-password')
    wrapper.find('#auth-signup-consent').setChecked(true)
    await settle()
  }
  async function fillLogin () {
    wrapper.find('#auth-login-email').setValue('anna@example.test')
    wrapper.find('#auth-login-password').setValue('fixture-password')
    await settle()
  }
  beforeEach(() => {
    jest.clearAllMocks()
    fb.loginUser.mockResolvedValue('OK')
    fb.createUser.mockResolvedValue('OK')
    fb.renewPassword.mockResolvedValue('OK')
  })
  afterEach(() => { if (wrapper) wrapper.destroy(); document.body.innerHTML = '' })

  test('výchozí přihlášení, dvě propojené záložky a jediný hlavní nadpis', async () => {
    await render()
    expect(wrapper.find('main#home-main').exists()).toBe(true)
    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(2)
    expect(wrapper.find('#auth-tab-login').attributes('aria-selected')).toBe('true')
    expect(wrapper.find('#auth-panel-login').isVisible()).toBe(true)
    expect(wrapper.find('#auth-panel-signup').isVisible()).toBe(false)
    expect(wrapper.find('#auth-tab-signup').attributes('aria-controls')).toBe('auth-panel-signup')
  })

  test('klávesnice mění aktivní záložku i focus a oba formuláře zachovají rozepsané údaje', async () => {
    await render()
    await fillLogin()
    const loginVm = wrapper.findComponent(Login).vm
    wrapper.find('#auth-tab-login').trigger('keydown', { key: 'ArrowRight' })
    await settle()
    expect(document.activeElement.id).toBe('auth-tab-signup')
    wrapper.find('#auth-signup-first-name').setValue('Anna')
    wrapper.find('#auth-tab-signup').trigger('keydown', { key: 'Home' })
    await settle()
    expect(wrapper.findComponent(Login).vm).toBe(loginVm)
    expect(wrapper.find('#auth-login-email').element.value).toBe('anna@example.test')
    wrapper.find('#auth-tab-login').trigger('keydown', { key: 'End' })
    await settle()
    expect(wrapper.find('#auth-signup-first-name').element.value).toBe('Anna')
    wrapper.find('#auth-tab-signup').trigger('keydown', { key: 'ArrowLeft' })
    await settle()
    expect(wrapper.find('#auth-tab-login').attributes('aria-selected')).toBe('true')
  })

  test('labels, autofill a odkaz na obnovu jsou programově dostupné', async () => {
    await render()
    for (const field of wrapper.findAll('input:not([type="checkbox"]), select').wrappers) {
      expect(wrapper.find(`label[for="${field.attributes('id')}"]`).exists()).toBe(true)
    }
    expect(wrapper.find('#auth-login-email').attributes('autocomplete')).toBe('username')
    expect(wrapper.find('#auth-login-password').attributes('autocomplete')).toBe('current-password')
    expect(wrapper.find('#auth-signup-password').attributes('autocomplete')).toBe('new-password')
    expect(wrapper.find('a[href="/renew-password"]').exists()).toBe(true)
  })

  test('zobrazení hesla mění pouze viditelnost a má přístupný stav', async () => {
    await render()
    await fillLogin()
    const reveal = wrapper.find('[aria-controls="auth-login-password"]')
    reveal.trigger('click')
    await settle()
    expect(wrapper.find('#auth-login-password').attributes('type')).toBe('text')
    expect(wrapper.find('#auth-login-password').element.value).toBe('fixture-password')
    expect(reveal.attributes('aria-pressed')).toBe('true')
    expect(fb.loginUser).not.toHaveBeenCalled()
  })

  test('submit formuláře přihlášení předá původní argumenty a vrátí uživatele domů', async () => {
    await render()
    await fillLogin()
    wrapper.find('#auth-login-form').trigger('submit')
    await settle()
    expect(fb.loginUser).toHaveBeenCalledWith('anna@example.test', 'fixture-password')
    expect(router.push).toHaveBeenCalledWith('/')
  })

  test('zachová původní redirect při změně autentizačního stavu', async () => {
    await render(LoginPage, '/login?redirect=databaze')
    await fillLogin()
    wrapper.find('#auth-login-form').trigger('submit')
    await settle()
    expect(router.push).not.toHaveBeenCalledWith('/')
    store.state.logged = true
    await settle()
    expect(router.push).toHaveBeenCalledWith('/databaze')
    expect(wrapper.text()).toContain('Pro přístup do databáze mimoškolních aktivit se nejdříve přihlaste.')
  })

  test('neplatné přihlášení zaměří první chybné pole a nic neodešle', async () => {
    await render()
    wrapper.find('#auth-login-form').trigger('submit')
    await settle()
    expect(fb.loginUser).not.toHaveBeenCalled()
    expect(document.activeElement.id).toBe('auth-login-email')
    expect(wrapper.find('#auth-login-form [role="alert"]').text()).toBeTruthy()
  })

  test('pending přihlášení zamkne formulář i záložky a zabrání opakování', async () => {
    await render()
    await fillLogin()
    const request = deferred()
    fb.loginUser.mockReturnValue(request.promise)
    wrapper.find('#auth-login-form').trigger('submit')
    await settle()
    wrapper.find('#auth-login-form').trigger('submit')
    await settle()
    expect(fb.loginUser).toHaveBeenCalledTimes(1)
    expect(wrapper.find('#auth-tab-signup').element.disabled).toBe(true)
    expect(wrapper.find('#auth-login-email').element.disabled).toBe(true)
    expect(wrapper.text()).toContain('Přihlašuji…')
    request.resolve('Chybné heslo')
    await settle()
    expect(wrapper.find('#auth-tab-signup').element.disabled).toBe(false)
    expect(wrapper.find('#auth-login-email').element.value).toBe('anna@example.test')
    expect(wrapper.text()).toContain('Chybné heslo')
  })

  test('registrace zachová povolání, výchozí newsletter, přesný payload a potvrzení', async () => {
    await render()
    await fillRegistration()
    expect(wrapper.findAll('#auth-signup-occupation option').wrappers.map(option => option.text())).toEqual(['student', 'učitel', 'organizátor mimoškolních aktivit', 'prostě návštěvník'])
    wrapper.find('#auth-signup-form').trigger('submit')
    await settle()
    expect(fb.createUser).toHaveBeenCalledWith({ occupation: 'student', firstName: 'Anna', lastName: 'Nováková', email: 'anna@example.test', sendNewsletter: true }, 'fixture-password')
    expect(updateUser.mock.calls[0][1]).toEqual({ firstName: 'Anna', lastName: 'Nováková', email: 'anna@example.test' })
    expect(wrapper.text()).toContain('Děkujeme, byli jste úspěšně zaregistrováni.')
    expect(wrapper.text()).toContain('Zaslali jsme do Vašeho e-mailu potvrzovací link.')
    wrapper.find('.auth-success button').trigger('click')
    await settle()
    expect(wrapper.find('#auth-tab-login').attributes('aria-selected')).toBe('true')
  })

  test.each(['email', 'password-repeat', 'consent'])('registrace odmítne neplatné %s bez skutečného zápisu', async invalid => {
    await render()
    await fillRegistration()
    const field = wrapper.find('#auth-signup-' + invalid)
    if (invalid === 'consent') field.setChecked(false)
    else field.setValue(invalid === 'email' ? 'neplatny-email' : 'jine-heslo')
    await settle()
    wrapper.find('#auth-signup-form').trigger('submit')
    await settle()
    expect(fb.createUser).not.toHaveBeenCalled()
    expect(document.activeElement.id).toBe('auth-signup-' + invalid)
    if (invalid !== 'consent') expect(wrapper.find('#auth-signup-' + invalid + '-error').text()).toBe(invalid === 'email' ? config.errors.email : config.errors.passwordsNotMatch)
  })

  test('registrace zachová odmítnutý newsletter a údaje po chybě, pending se neodešle dvakrát', async () => {
    await render()
    await fillRegistration()
    wrapper.find('#auth-signup-newsletter').setChecked(false)
    const request = deferred()
    fb.createUser.mockReturnValue(request.promise)
    wrapper.find('#auth-signup-form').trigger('submit')
    await settle()
    wrapper.find('#auth-signup-form').trigger('submit')
    expect(fb.createUser).toHaveBeenCalledTimes(1)
    expect(fb.createUser.mock.calls[0][0].sendNewsletter).toBe(false)
    expect(wrapper.text()).toContain('Registruji…')
    request.resolve('Email je už registrován')
    await settle()
    expect(wrapper.find('#auth-signup-first-name').element.value).toBe('Anna')
    expect(wrapper.find('#auth-tab-login').element.disabled).toBe(false)
    expect(wrapper.text()).toContain('Email je už registrován')
  })

  test('obnova hesla předá e-mail pouze jednou a zobrazí jedinou zprávu', async () => {
    await render(RenewPassword, '/renew-password')
    wrapper.find('#auth-renew-email').setValue('anna@example.test')
    const request = deferred()
    fb.renewPassword.mockReturnValue(request.promise)
    wrapper.find('#auth-renew-form').trigger('submit')
    await settle()
    wrapper.find('#auth-renew-form').trigger('submit')
    expect(fb.renewPassword).toHaveBeenCalledTimes(1)
    expect(fb.renewPassword).toHaveBeenCalledWith('anna@example.test')
    request.resolve('OK')
    await settle()
    expect(wrapper.text().match(/Email byl odeslán\. Podívejte se do své pošty\./g)).toHaveLength(1)
    expect(wrapper.find('#auth-renew-email').element.value).toBe('')
    expect(wrapper.find('a[href="/login"]').exists()).toBe(true)
  })

  test('obnova odmítne chybný e-mail a po serverové chybě ponechá platný e-mail', async () => {
    await render(RenewPassword, '/renew-password')
    wrapper.find('#auth-renew-email').setValue('neplatny')
    wrapper.find('#auth-renew-form').trigger('submit')
    await settle()
    expect(fb.renewPassword).not.toHaveBeenCalled()
    expect(document.activeElement.id).toBe('auth-renew-email')
    wrapper.find('#auth-renew-email').setValue('anna@example.test')
    await settle()
    fb.renewPassword.mockResolvedValue('Odeslání se nezdařilo')
    wrapper.find('#auth-renew-form').trigger('submit')
    await settle()
    expect(wrapper.find('#auth-renew-email').element.value).toBe('anna@example.test')
    expect(wrapper.text()).toContain('Odeslání se nezdařilo')
  })

  test.each(['login', 'signup', 'renew'])('neočekávané odmítnutí %s uvolní ovládání a zachová údaje', async mode => {
    await render(mode === 'renew' ? RenewPassword : LoginPage, mode === 'renew' ? '/renew-password' : '/login')
    let form
    if (mode === 'login') {
      await fillLogin()
      fb.loginUser.mockRejectedValue(new Error('fixture'))
      form = '#auth-login-form'
    } else if (mode === 'signup') {
      await fillRegistration()
      fb.createUser.mockRejectedValue(new Error('fixture'))
      form = '#auth-signup-form'
    } else {
      wrapper.find('#auth-renew-email').setValue('anna@example.test')
      await settle()
      fb.renewPassword.mockRejectedValue(new Error('fixture'))
      form = '#auth-renew-form'
    }
    wrapper.find(form).trigger('submit')
    await settle()
    expect(wrapper.find(form + ' input[type="email"]').element.value).toBe('anna@example.test')
    expect(wrapper.find(form + ' button[type="submit"]').element.disabled).toBe(false)
    expect(wrapper.find(form + ' [role="alert"]').text()).toContain('Požadavek se nepodařilo dokončit.')
  })
})
