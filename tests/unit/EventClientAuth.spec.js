import axios from 'axios'
import client from '@/client/client'
import fb from '@/firebase'

jest.mock('axios', () => {
  const transport = { post: jest.fn() }
  return { create: () => transport }
})
jest.mock('@/firebase', () => ({ getIdToken: jest.fn() }))

describe('Event proposal authentication headers', () => {
  test('omits Authorization for an anonymous proposal', async () => {
    fb.getIdToken.mockResolvedValueOnce(undefined)
    const event = { id: '', name: 'Fixture activity', status: 'proposal' }
    await client.sendEvent(event)
    const request = axios.create().post
    expect(request).toHaveBeenLastCalledWith('/event', { event }, { headers: {} })
  })

  test('keeps the Firebase bearer token and integer id for an authenticated edit', async () => {
    fb.getIdToken.mockResolvedValueOnce('fixture-id-token')
    const event = { id: 42, name: 'Updated activity', status: 'active' }
    await client.sendEvent(event)
    expect(axios.create().post).toHaveBeenLastCalledWith('/event', { event }, { headers: { Authorization: 'Bearer fixture-id-token' } })
  })
})
