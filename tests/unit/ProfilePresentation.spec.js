import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import { createLocalVue, mount } from '@vue/test-utils'
import ProfilePage from '@/views/login/ProfilePage.vue'
import fb from '@/firebase'
import router from '@/router'

jest.mock('@/firebase', () => ({ updateUser: jest.fn() }))
jest.mock('@/router', () => ({ push: jest.fn() }))
jest.mock('@/components/home/homeContent', () => ({ footerGroups: [], privacyHref: '/privacy' }))
jest.mock('@/assets/logo_new.svg', () => '/logo.svg')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Vuelidate)

const student = { firstName: 'Anna', lastName: 'Nováková', occupation: 'student', email: 'anna@example.test', sendNewsletter: false }
const settle = async () => { await Vue.nextTick(); await Vue.nextTick() }

describe('Profil: prezentace a zachované ukládání', () => {
  let wrapper
  let fetchUser
  let updateUser

  async function render () {
    fetchUser = jest.fn(() => Promise.resolve())
    updateUser = jest.fn()
    const store = new Vuex.Store({
      getters: { user: () => ({ ...student }) },
      actions: { fetchUser },
      mutations: { updateUser }
    })
    wrapper = mount(ProfilePage, { localVue, store, stubs: ['footer-block', 'home-footer', 'router-link'] })
    await settle()
    return wrapper
  }

  function button (text) {
    return wrapper.findAll('button').wrappers.find(item => item.text() === text)
  }

  beforeEach(() => { jest.clearAllMocks(); fb.updateUser.mockResolvedValue('OK') })
  afterEach(() => { if (wrapper) wrapper.destroy() })

  test('má hlavní landmark pro skip link a jediný hlavní nadpis', async () => {
    await render()
    expect(wrapper.find('main#home-main').exists()).toBe(true)
    expect(wrapper.findAll('h1').length).toBe(1)
    expect(wrapper.find('h1').text()).toBe('Profil')
  })

  test('načte profil a zachová pořadí polí a needitovatelný e-mail', async () => {
    await render()
    expect(fetchUser).toHaveBeenCalledWith(expect.anything(), 'profile')
    expect(wrapper.findAll('.label').wrappers.map(field => field.text())).toEqual(['Povolání', 'Jméno', 'Příjmení', 'Email'])
    const inputs = wrapper.findAll('input').wrappers
    expect(inputs.slice(0, 3).map(input => input.element.value)).toEqual(['Anna', 'Nováková', 'anna@example.test'])
    expect(inputs[2].attributes('disabled')).toBeDefined()
  })

  test('každé pole má programově přiřazený label', async () => {
    await render()
    const fields = wrapper.findAll('select, input:not([type="checkbox"])').wrappers
    fields.forEach(field => {
      expect(field.attributes('id')).toBeTruthy()
      expect(wrapper.find(`label[for="${field.attributes('id')}"]`).exists()).toBe(true)
    })
  })

  test('jedno Uložit odešle původní payload včetně změněného newsletteru', async () => {
    await render()
    const firstName = wrapper.findAll('input').at(0)
    firstName.setValue('Anežka')
    wrapper.find('input[type="checkbox"]').setChecked(true)
    await settle()
    button('Uložit').trigger('click')
    await settle()
    expect(fb.updateUser).toHaveBeenCalledTimes(1)
    expect(fb.updateUser).toHaveBeenCalledWith('anna@example.test', {
      occupation: 'student', firstName: 'Anežka', lastName: 'Nováková', email: 'anna@example.test', sendNewsletter: true
    })
    expect(updateUser).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toContain('Změny byly uloženy')
  })

  test('jediné Uložit sdílí řádek s nadpisem Správa účtu a další akce jsou pod ním', async () => {
    await render()
    const header = wrapper.find('#profile-account-title').element.parentElement
    expect(header.querySelector('button').textContent.trim()).toBe('Uložit')
    expect(wrapper.findAll('button').wrappers.filter(item => item.text() === 'Uložit')).toHaveLength(1)
    expect(header.nextElementSibling.classList.contains('profile-account-actions')).toBe(true)
  })

  test.each([0, 1])('prázdné povinné pole %s neodešle změny', async index => {
    await render()
    wrapper.findAll('input').at(index).setValue('')
    await settle()
    button('Uložit').trigger('click')
    await settle()
    expect(fb.updateUser).not.toHaveBeenCalled()
    expect(wrapper.find('.help.is-danger').exists()).toBe(true)
  })

  test('zobrazí stejnou chybu ukládání a ponechá editované údaje', async () => {
    await render()
    fb.updateUser.mockResolvedValue('Uložení se nezdařilo')
    wrapper.findAll('input').at(0).setValue('Anežka')
    button('Uložit').trigger('click')
    await settle()
    expect(wrapper.text()).toContain('Uložení se nezdařilo')
    expect(wrapper.findAll('input').at(0).element.value).toBe('Anežka')
  })

  test('správa účtu zachová své původní cíle', async () => {
    await render()
    button('Změnit heslo').trigger('click')
    expect(router.push).toHaveBeenLastCalledWith('/change-password')
    button('Vymazat účet').trigger('click')
    expect(router.push).toHaveBeenLastCalledWith('/delete-account')
  })
})
