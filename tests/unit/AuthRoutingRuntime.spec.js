import router from '@/router'
import { getAuth } from 'firebase/auth'

jest.mock('@/views/Home.vue', () => ({ render: h => h('main') }))
jest.mock('firebase/auth', () => ({ getAuth: jest.fn() }))

const guard = router.beforeHooks[0]
const destination = path => router.resolve(path).route

describe('Authenticated navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    getAuth.mockReturnValue({ currentUser: null })
  })

  test.each(['/databaze', '/profil', '/change-password', '/delete-account', '/users', '/events', '/competition'])('finishes guest navigation to %s with a login redirect', async path => {
    const next = jest.fn()
    await guard(destination(path), {}, next)
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith('/login?redirect=' + path.slice(1))
  })

  test('preserves query and fragment in the return destination', async () => {
    const next = jest.fn()
    await guard(destination('/profil?tab=mail#formular'), {}, next)
    expect(next).toHaveBeenCalledWith('/login?redirect=profil%3Ftab%3Dmail%23formular')
  })

  test.each(['/', '/abffd7', '/amigo', '/soutez', '/login', '/renew-password'])('keeps %s public', async path => {
    const next = jest.fn()
    await guard(destination(path), {}, next)
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith()
  })

  test.each(['/users', '/events', '/competition'])('enforces the declared role for %s', async path => {
    getAuth.mockReturnValue({ currentUser: { getIdTokenResult: async () => ({ claims: { role: 'user' } }) } })
    const next = jest.fn()
    await guard(destination(path), {}, next)
    expect(next).toHaveBeenCalledWith('/login?redirect=' + path.slice(1))
  })

  test.each(['manager', 'admin'])('allows %s to access the competition list', async role => {
    getAuth.mockReturnValue({ currentUser: { getIdTokenResult: async () => ({ claims: { role } }) } })
    const next = jest.fn()
    await guard(destination('/competition'), {}, next)
    expect(next).toHaveBeenCalledWith()
  })

  test('finishes navigation when role verification fails', async () => {
    getAuth.mockReturnValue({ currentUser: { getIdTokenResult: async () => { throw new Error('fixture token failure') } } })
    const next = jest.fn()
    await guard(destination('/events'), {}, next)
    expect(next).toHaveBeenCalledTimes(1)
    expect(next).toHaveBeenCalledWith('/login?redirect=events')
  })
})
