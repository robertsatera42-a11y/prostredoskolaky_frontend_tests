import Vue from 'vue'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import { createLocalVue, mount } from '@vue/test-utils'
import DeleteAccount from '@/views/login/DeleteAccountPage.vue'
import store from '@/store'
import client from '@/client/client'
import fb from '@/firebase'
import router from '@/router'
import { DELETE_USER, SET_USER } from '@/types'

jest.mock('@/firebase', () => ({ auth: { onAuthStateChanged: jest.fn() }, reauthenticate: jest.fn(), logoutUser: jest.fn() }))
jest.mock('@/client/client', () => ({ deleteUser: jest.fn() }))
jest.mock('@/router', () => ({ push: jest.fn() }))

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuelidate)
const settle = async () => { await Vue.nextTick(); await Promise.resolve(); await Vue.nextTick() }

describe('Account deletion waits for the API', () => {
  let wrapper
  beforeEach(() => {
    jest.clearAllMocks()
    store.commit(SET_USER, { email: 'anna@example.test', firstName: 'Anna', lastName: 'Nováková' })
    fb.reauthenticate.mockResolvedValue('OK')
    fb.logoutUser.mockResolvedValue(undefined)
  })
  afterEach(() => { if (wrapper) wrapper.destroy(); document.body.innerHTML = '' })

  async function render () {
    wrapper = mount(DeleteAccount, { localVue, store, stubs: ['footer-block'], attachTo: document.body })
    wrapper.find('input[type="password"]').setValue('fixture-password')
    await settle()
  }

  test('keeps the user and waits before showing success or navigating', async () => {
    let finish
    client.deleteUser.mockReturnValueOnce(new Promise(resolve => { finish = resolve }))
    await render()
    const submission = wrapper.vm.submit()
    await settle()
    expect(wrapper.text()).not.toContain('Účet byl vymazán')
    expect(router.push).not.toHaveBeenCalled()
    expect(fb.logoutUser).not.toHaveBeenCalled()
    expect(store.getters.isLoggedIn).toBe('anna@example.test')
    finish(200)
    await submission
    await settle()
    expect(wrapper.text()).toContain('Účet byl vymazán')
    expect(router.push).toHaveBeenCalledWith('/')
    expect(fb.logoutUser).toHaveBeenCalledTimes(1)
    expect(store.getters.isLoggedIn).toBe('')
  })

  test('shows an error and stays signed in when the API rejects deletion', async () => {
    client.deleteUser.mockRejectedValueOnce(new Error('fixture API unavailable'))
    await render()
    await wrapper.vm.submit()
    await settle()
    expect(wrapper.text()).not.toContain('Účet byl vymazán')
    expect(wrapper.find('.message-text.error').text()).not.toBe('')
    expect(router.push).not.toHaveBeenCalled()
    expect(fb.logoutUser).not.toHaveBeenCalled()
    expect(store.getters.isLoggedIn).toBe('anna@example.test')
  })

  test('propagates API deletion failure from the actual store action', async () => {
    const failure = new Error('fixture deletion failure')
    client.deleteUser.mockRejectedValueOnce(failure)
    await expect(store.dispatch(DELETE_USER)).rejects.toBe(failure)
    expect(store.getters.isLoggedIn).toBe('anna@example.test')
  })
})
