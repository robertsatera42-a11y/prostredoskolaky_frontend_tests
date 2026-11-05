import transformerUtils from '@/utils/transformerUtils'

describe('Registration dates in Prague', () => {
  test.each([
    ['2026-11-05T12:34:56.123Z', '5. 11. 2026 13:34:56 (Europe/Prague)'],
    ['2026-07-01T23:30:00Z', '2. 7. 2026 01:30:00 (Europe/Prague)'],
    ['2026-03-29T00:30:00Z', '29. 3. 2026 01:30:00 (Europe/Prague)'],
    ['2026-03-29T01:30:00Z', '29. 3. 2026 03:30:00 (Europe/Prague)']
  ])('formats %s independently of the browser timezone', (value, expected) => {
    expect(transformerUtils.formatRegistrationTimestamp(value)).toBe(expected)
  })

  test.each([undefined, null, '', 0, 'invalid'])('does not show a fabricated date for %s', value => {
    expect(transformerUtils.formatRegistrationTimestamp(value)).toBe('—')
  })
})
