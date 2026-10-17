import fb from '@/firebase'
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth'

jest.mock('firebase/app', () => ({ initializeApp: jest.fn() }))
jest.mock('firebase/auth', () => ({
  getAuth: () => ({ currentUser: null }),
  EmailAuthProvider: { credential: jest.fn((email, password) => ({ email, password })) },
  reauthenticateWithCredential: jest.fn(),
  updatePassword: jest.fn()
}))
jest.mock('@/client/client', () => ({}))

describe('Firebase modular password change', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    fb.auth.currentUser = { uid: 'fixture-user' }
    reauthenticateWithCredential.mockResolvedValue(undefined)
    updatePassword.mockResolvedValue(undefined)
  })

  test('reauthenticates before updating the signed-in user through the modular SDK', async () => {
    await expect(fb.changePassword('anna@example.test', 'old-fixture', 'new-fixture')).resolves.toBe('OK')
    expect(EmailAuthProvider.credential).toHaveBeenCalledWith('anna@example.test', 'old-fixture')
    expect(reauthenticateWithCredential).toHaveBeenCalledWith(fb.auth.currentUser, { email: 'anna@example.test', password: 'old-fixture' })
    expect(updatePassword).toHaveBeenCalledWith(fb.auth.currentUser, 'new-fixture')
  })

  test('does not update the password when reauthentication fails', async () => {
    reauthenticateWithCredential.mockRejectedValueOnce({ code: 'auth/wrong-password' })
    const result = await fb.changePassword('anna@example.test', 'wrong-fixture', 'new-fixture')
    expect(result).not.toBe('OK')
    expect(updatePassword).not.toHaveBeenCalled()
  })
})
