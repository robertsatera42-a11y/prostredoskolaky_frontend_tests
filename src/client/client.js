import axios from 'axios'
import config from '../config/default'
import firebase from '../firebase'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL
  // baseURL: 'http://localhost:5000'
})

const getHeaders = (token) => {
  return {
    Authorization: `Bearer ${token}`
  }
}

const getSchools = async (value) => {
  const { data } = await client.get('/schools', { params: { school: value } })
  return data
}

const sendEvent = async (event) => {
  const token = await firebase.getIdToken()
  const data = await client.post('/event', { event }, { headers: token ? getHeaders(token) : {} })
  return data
}

const deleteEvent = async (id) => {
  const token = await firebase.getIdToken()
  const data = await client.delete('/event', { params: { id }, headers: getHeaders(token) })
  return data
}

const saveReport = async report => {
  await client.post('/report', report)
}

const deleteReport = async id => {
  const token = await firebase.getIdToken()
  const data = await client.delete('/report', { params: { id }, headers: getHeaders(token) })
  return data
}

const getReports = async () => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/reports', { headers: getHeaders(token) })
  return data
}

const getEventsListing = async () => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/events', { params: { listing: 'all' }, headers: getHeaders(token) })
  return data
}

const getProposalsListing = async () => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/events', { params: { listing: 'proposals' }, headers: getHeaders(token) })
  return data
}

const getEvents = async (value, categories, types, page = 1) => {
  const { data } = await client.get('/events', {
    params: {
      limit: config.database.activitiesPerPage,
      page: page,
      name: value,
      categories: [...categories],
      types: [...types]
    }
  })
  return data
}

const getEvent = async (id) => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/event',
    { params: { id }, headers: getHeaders(token) })
  return data
}

const createRegistration = async (registration) => {
  const token = await firebase.getIdToken()
  const { data } = await client.post('/registration',
    registration,
    { headers: getHeaders(token) })
  return data
}

const getRegistration = async registrationId => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/registration', { params: { registrationId }, headers: getHeaders(token) })
  return data
}

const getRegistrations = async () => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/registrations', { headers: getHeaders(token) })
  return data
}

const hasRegistration = async () => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/has-registration', { headers: getHeaders(token) })
  return data.hasRegistration
}

const saveEmail = async (email) => {
  try {
    const { status } = await client.post('/email', { email })
    return status
  } catch (err) {
    if (err.response && err.response.status) {
      return err.response.status
    }
    return 500
  }
}

const createUser = async (user) => {
  const token = await firebase.getIdToken()
  const { status } = await client.post(
    '/user',
    { ...user },
    { headers: getHeaders(token) })
  return status
}

const getUser = async (content) => {
  const token = await firebase.getIdToken()
  const path = content === 'full' ? '/user?full=true' : 'user'
  const { data } = await client.get(path, { headers: getHeaders(token) })
  return data.user
}

const updateUser = async (email, user) => {
  const token = await firebase.getIdToken()
  const { status } = await client.put(
    '/user',
    { email, ...user },
    { headers: getHeaders(token) })
  return status
}

const deleteUser = async () => {
  const token = await firebase.getIdToken()
  const { status, data } = await client.delete(
    '/user',
    { headers: getHeaders(token) }
  )
  if (!data || data.message !== 'success') throw new Error('Account deletion was not acknowledged')
  return status
}

const getUsers = async () => {
  const token = await firebase.getIdToken()
  const { data } = await client.get('/users', { headers: getHeaders(token) })
  return data.users
}

const updateRole = async (email, newRole) => {
  const token = await firebase.getIdToken()
  const { status } = await client.put(
    '/role',
    { email, newRole },
    { headers: getHeaders(token) })
  return status
}

export default {
  getSchools,
  getEvent,
  getEvents,
  getEventsListing,
  getProposalsListing,
  sendEvent,
  deleteEvent,
  saveReport,
  deleteReport,
  getReports,
  createRegistration,
  getRegistrations,
  getRegistration,
  hasRegistration,
  saveEmail,
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  updateRole
}
