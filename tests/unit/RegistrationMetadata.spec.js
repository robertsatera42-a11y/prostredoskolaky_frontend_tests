import store from '@/store'
import { registrationMetadata } from '@/utils/registrationTimestamps'

jest.mock('@/firebase', () => ({ auth: { onAuthStateChanged: jest.fn() } }))
jest.mock('@/client/client', () => ({}))
jest.mock('@/utils/tracking', () => ({ track: jest.fn() }))

describe('Persisted registration metadata', () => {
  const metadata = { registrationId: 42, createdAt: '2026-02-03T04:05:06.000Z', updatedAt: '2026-11-05T12:34:56.123Z' }
  beforeEach(() => { store.replaceState({ user: { activities: [], interests: [] } }) })

  it('hydrates registration timestamps without confusing registration ID with user ID', () => {
    store.commit('setUser', { ...metadata, id: 7, email: 'user@example.invalid', activities: [], interests: [], hasRegistration: true })
    expect(store.state.user.registrationId).toBe(42)
    expect(store.state.user.createdAt).toBe(metadata.createdAt)
    expect(store.state.user.updatedAt).toBe(metadata.updatedAt)
    expect(store.state.user.lastSaved.toISOString()).toBe(metadata.updatedAt)
  })

  it('keeps submission timestamps unchanged while the browser draft is edited', () => {
    store.commit('setUser', { ...metadata, email: 'user@example.invalid', activities: [], interests: [] })
    store.state.user.summary = 'Draft changed without a submission'
    store.state.user.activities.push({ name: 'Unsaved activity' })
    expect(store.state.user.createdAt).toBe(metadata.createdAt)
    expect(store.state.user.updatedAt).toBe(metadata.updatedAt)
    expect(store.state.user.lastSaved.toISOString()).toBe(metadata.updatedAt)
  })

  it('ignores missing or malformed response dates and retains known server metadata', () => {
    const current = { ...metadata, lastSaved: new Date(metadata.updatedAt) }
    const result = registrationMetadata({ registrationId: 42, createdAt: 'invalid', updatedAt: null }, current)
    expect(result.createdAt).toBe(metadata.createdAt)
    expect(result.updatedAt).toBe(metadata.updatedAt)
    expect(result.lastSaved.toISOString()).toBe(metadata.updatedAt)
    expect(registrationMetadata({}).createdAt).toBe('')
    expect(registrationMetadata({}).updatedAt).toBe('')
    expect(registrationMetadata({}).lastSaved).toBeUndefined()
  })
})
