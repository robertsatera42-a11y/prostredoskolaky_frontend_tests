import config from '../config/default'

// TODO sjednotit a predelat

const ValidationUtils = {
  validate (context, input, focused) {
    if (!context.$v.user[input].$invalid) {
      return { message: '', type: '' }
    }
    if (context[focused] === false && context.$v.user[input].email === false) {
      return { message: config.errors.email, type: config.errors.type }
    } else if (context[focused] === false && context.$v.user[input].$invalid) {
      return { message: config.errors.required, type: config.errors.type }
    } else if (context.submitStatus === 'ERROR') {
      return { message: config.errors.required, type: config.errors.type }
    } else return { message: '', type: '' }
  },

  validateBasic (context, input, focused) {
    if (!context.$v[input].$invalid) {
      return { message: '', type: '' }
    }
    if (context[focused] === false && context.$v[input].email === false) {
      return { message: config.errors.email, type: config.errors.type }
    } else if (context[focused] === false && context.$v[input].sameAsPassword === false) {
      return { message: config.errors.passwordsNotMatch, type: config.errors.type }
    } else if (context[focused] === false && context.$v[input].$invalid) {
      return { message: config.errors.required, type: config.errors.type }
    } else if (context.submitStatus === 'ERROR') {
      return { message: config.errors.required, type: config.errors.type }
    } else return { message: '', type: '' }
  },

  getError (error) {
    if (error) {
      const message = config.errorMapping[error.status]
      return message || config.defaultErrorMessage
    }
    return config.defaultErrorMessage
  }
}

export default ValidationUtils
