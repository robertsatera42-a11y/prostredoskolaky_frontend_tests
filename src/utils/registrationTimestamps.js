const registrationFormatter = new Intl.DateTimeFormat('cs-CZ', {
  timeZone: 'Europe/Prague',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23'
})

function formatRegistrationTimestamp (value) {
  if (!value || !(typeof value === 'string' || value instanceof Date)) return '—'
  const date = new Date(value)
  if (!Number.isFinite(date.getTime())) return '—'
  const parts = Object.fromEntries(registrationFormatter.formatToParts(date).map(part => [part.type, part.value]))
  return `${parts.day}. ${parts.month}. ${parts.year} ${parts.hour}:${parts.minute}:${parts.second} (Europe/Prague)`
}

const isoTimestamp = value => {
  if (!value || !(typeof value === 'string' || value instanceof Date)) return null
  const date = new Date(value)
  return Number.isFinite(date.getTime()) ? date.toISOString() : null
}

// Dates come only from persisted server metadata. An older response may omit
// them; retain known values instead of substituting the browser's clock.
function registrationMetadata (payload = {}, current = {}) {
  const createdAt = isoTimestamp(payload.createdAt) || current.createdAt || ''
  const updatedAt = isoTimestamp(payload.updatedAt) || current.updatedAt || ''
  const id = payload.registrationId
  const validId = (typeof id === 'number' && Number.isFinite(id) && id > 0) || (typeof id === 'string' && id.trim())
  return {
    registrationId: validId ? id : current.registrationId || null,
    createdAt,
    updatedAt,
    lastSaved: isoTimestamp(updatedAt) ? new Date(updatedAt) : current.lastSaved
  }
}

export { formatRegistrationTimestamp, registrationMetadata }
