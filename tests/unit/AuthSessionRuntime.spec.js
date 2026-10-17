import store from '@/store'
import fb from '@/firebase'
import client from '@/client/client'
import { EMPTY_USER } from '@/types'

jest.mock('@/firebase', () => ({ auth: { onAuthStateChanged: jest.fn() }, getRole: jest.fn() }))
jest.mock('@/client/client', () => ({ hasRegistration: jest.fn() }))

const sessionChanged = fb.auth.onAuthStateChanged.mock.calls[0][0]
const signedInUser = { uid: 'fixture-user', email: 'anna@example.test', displayName: 'Anna Nováková' }
const settle = async () => { await Promise.resolve(); await Promise.resolve() }

describe('Firebase session survives an unavailable registration API', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    store.commit(EMPTY_USER)
    fb.getRole.mockResolvedValue('user')
  })

  test('exposes the identity while the optional registration lookup is pending', async () => {
    let finish
    client.hasRegistration.mockReturnValueOnce(new Promise(resolve => { finish = resolve }))
    const loading = sessionChanged(signedInUser)
    await settle()
    expect(store.getters.isLoggedIn).toBe('anna@example.test')
    expect(store.state.user.hasRegistration).toBeNull()
    expect(store.state.registrationStatus).toBe('loading')
    expect(store.state.user).not.toHaveProperty('registrationStatus')
    finish(true)
    await loading
    expect(store.state.user.hasRegistration).toBe(true)
    expect(store.state.registrationStatus).toBe('ready')
  })

  test('keeps the identity and records unknown registration status on API failure', async () => {
    client.hasRegistration.mockRejectedValueOnce(new Error('fixture API outage'))
    await expect(sessionChanged(signedInUser)).resolves.toBeUndefined()
    expect(store.getters.isLoggedIn).toBe('anna@example.test')
    expect(store.state.user.firstName).toBe('Anna')
    expect(store.state.user.hasRegistration).toBeNull()
    expect(store.state.registrationStatus).toBe('error')
  })

  test('does not restore a session after sign-out during the lookup', async () => {
    let finish
    client.hasRegistration.mockReturnValueOnce(new Promise(resolve => { finish = resolve }))
    const loading = sessionChanged(signedInUser)
    await settle()
    await sessionChanged(null)
    finish(true)
    await loading
    expect(store.getters.isLoggedIn).toBe('')
  })

  test('treats a malformed lookup response as unknown rather than a missing registration', async () => {
    client.hasRegistration.mockResolvedValueOnce(undefined)
    await sessionChanged(signedInUser)
    expect(store.getters.isLoggedIn).toBe('anna@example.test')
    expect(store.state.user.hasRegistration).toBeNull()
    expect(store.state.registrationStatus).toBe('error')
  })
})
