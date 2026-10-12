import config from '../../config/default'

export const invalidFormMessage = 'Zkontrolujte prosím vyplněné údaje.'
export const requestErrorMessage = 'Požadavek se nepodařilo dokončit. Zkuste to prosím znovu.'

export function fieldError (context, validation, focused) {
  if (!validation.$invalid || (context[focused] !== false && context.submitStatus !== 'ERROR')) return { type: '', message: '' }
  const message = validation.required === false ? config.errors.required
    : validation.email === false ? config.errors.email
      : validation.sameAsPassword === false ? config.errors.passwordsNotMatch : config.errors.required
  return { type: config.errors.type, message }
}

export function focusField (context, id) {
  context.$nextTick(() => {
    const field = context.$el.querySelector('#' + id)
    if (field) field.focus()
  })
}
