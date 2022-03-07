import config from '../config/default'

const TransformerUtils = {

  createCategoriesMap () {
    return new Map(
      config.consts.interests.map(i => [i.name, i.short])
    )
  },
  createReversedCategoriesMap () {
    return new Map(
      config.consts.interests.map(i => [i.short, i.name])
    )
  },
  createTypesMap () {
    return new Map(
      config.consts.types.map(i => [i.full, i.short])
    )
  },
  createReversedTypesMap () {
    return new Map(
      config.consts.types.map(i => [i.short, i.full])
    )
  },
  createPeriodsMap () {
    return new Map(
      config.consts.periods.map(i => [i.short, i.full])
    )
  },
  transformPeriods (value) {
    const perMap = this.createPeriodsMap()
    return perMap.get(value)
  },
  transformCategories (value) {
    const catMap = this.createCategoriesMap()
    return catMap.get(value)
  },
  transformCategoriesBack (value) {
    const catMap = this.createReversedCategoriesMap()
    return catMap.get(value)
  },

  transformTypes (value) {
    const typeMap = this.createTypesMap()
    return typeMap.get(value)
  },
  transformTypesBack (value) {
    const typeMap = this.createReversedTypesMap()
    return typeMap.get(value)
  },

  mapLoginErrorCodes (code) {
    const message = config.loginErrorMapping[code]
    return message || config.loginErrorMapping['default']
  },

  transformDate (stringDate) {
    const date = new Date(stringDate)
    let minutes = date.getUTCMinutes()
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes
    return `${date.getUTCDate()}/${date.getUTCMonth() +
      1}/${date.getUTCFullYear()} - ${date.getUTCHours()}:${minutes}`
  }
}

export default TransformerUtils
