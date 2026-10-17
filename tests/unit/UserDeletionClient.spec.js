import axios from 'axios'
import client from '@/client/client'

jest.mock('axios', () => {
  const transport = { delete: jest.fn() }
  return { create: () => transport }
})
jest.mock('@/firebase', () => ({ getIdToken: async () => 'fixture-id-token' }))

describe('Deletion acknowledgement from the legacy API', () => {
  test('keeps the numeric status after an acknowledged deletion', async () => {
    axios.create().delete.mockResolvedValueOnce({ status: 200, data: { message: 'success' } })
    await expect(client.deleteUser()).resolves.toBe(200)
    expect(axios.create().delete).toHaveBeenLastCalledWith('/user', { headers: { Authorization: 'Bearer fixture-id-token' } })
  })

  test('does not mistake an empty HTTP 200 response for a deleted account', async () => {
    axios.create().delete.mockResolvedValueOnce({ status: 200, data: '' })
    await expect(client.deleteUser()).rejects.toThrow()
  })
})
