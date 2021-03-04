'use strict'

const iso31661 = require('iso-3166')
const rates = require('./rates.json')

const isEqual = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()
const isNumber = input => typeof input === 'number'

const getValidator = input => {
  if (isNumber(input)) return item => input === Number(item.numeric)
  if (input.length === 2) return item => isEqual(input, item.alpha2)
  if (input.length === 3) return item => isEqual(input, item.alpha3)
  return item => isEqual(input, item.name)
}

module.exports = input => {
  if (input === null || input === undefined) return null
  const item = iso31661.find(getValidator(input))
  return item ? rates[item.alpha2] : null
}
