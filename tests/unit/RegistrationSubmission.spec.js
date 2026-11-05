import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import FinaliseStep from '@/components/form/FinaliseStep.vue'
import client from '@/client/client'
import fb from '@/firebase'

jest.mock('@/client/client', () => ({ createRegistration: jest.fn() }))
jest.mock('@/firebase', () => ({ updateProfileForCurrentUser: jest.fn() }))
jest.mock('@/utils/tracking', () => ({ track: jest.fn() }))
jest.mock('@/components/form/ActivitiesStep', () => ({ name: 'activities-step', render: h => h('div') }))
jest.mock('@/components/form/FirstStep', () => ({ name: 'first-step', render: h => h('div') }))
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Legacy registration submission compatibility', () => {
  let wrapper, store
  beforeEach(() => {
    window.scrollTo = jest.fn()
    client.createRegistration.mockReset()
    fb.updateProfileForCurrentUser.mockReset().mockResolvedValue(undefined)
    store = new Vuex.Store({ state: { user: { email: 'user@example.invalid', grade: '3-4', dob: '2008-02-03', interests: [], activities: [], createdAt: '2026-01-02T03:04:05.000Z', lastSaved: new Date('2026-01-02T03:04:05Z') } }, getters: { getField }, mutations: { updateField } })
    wrapper = shallowMount(FinaliseStep, { localVue, store, stubs: ['b-loading', 'b-checkbox', 'router-link'] })
    wrapper.setData({ isAgree: true })
  })
  afterEach(() => wrapper.destroy())

  it('applies persisted metadata before profile work even when confirmation delivery failed', async () => {
    client.createRegistration.mockResolvedValue({ registrationId: 42, createdAt: '2026-01-02T03:04:05.000Z', updatedAt: '2026-11-05T12:34:56.123Z', emailSent: false })
    fb.updateProfileForCurrentUser.mockImplementationOnce(() => {
      expect(store.state.user.updatedAt).toBe('2026-11-05T12:34:56.123Z')
      return Promise.resolve()
    })
    await wrapper.vm.submit()
    expect(store.state.user.registrationId).toBe(42)
    expect(store.state.user.lastSaved.toISOString()).toBe('2026-11-05T12:34:56.123Z')
    expect(wrapper.vm.showSuccess).toBe(true)
  })

  it('preserves old metadata for an older response without inventing a browser timestamp', async () => {
    client.createRegistration.mockResolvedValue({ registrationId: 42 })
    await wrapper.vm.submit()
    expect(store.state.user.createdAt).toBe('2026-01-02T03:04:05.000Z')
    expect(store.state.user.lastSaved.toISOString()).toBe('2026-01-02T03:04:05.000Z')
    expect(wrapper.vm.showSuccess).toBe(true)
  })

  it('keeps a confirmed submission successful when profile completion fails and does not POST again', async () => {
    const log = jest.spyOn(console, 'error').mockImplementation(() => {})
    client.createRegistration.mockResolvedValue({ registrationId: 42, updatedAt: '2026-11-05T12:34:56.123Z' })
    fb.updateProfileForCurrentUser.mockRejectedValueOnce(new Error('Profile unavailable'))
    await wrapper.vm.submit()
    expect(store.state.user.hasRegistration).toBe(true)
    expect(wrapper.vm.error).toBe('')
    await wrapper.vm.submit()
    expect(client.createRegistration).toHaveBeenCalledTimes(1)
    log.mockRestore()
  })
})
