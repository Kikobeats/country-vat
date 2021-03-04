'use strict'

const writeJsonFile = require('write-json-file')
const got = require('got')

const mapper = rates =>
  Object.keys(rates).reduce(
    (acc, alpha2) => ({ ...acc, [alpha2]: rates[alpha2].rate }),
    {}
  )

got(
  'https://raw.githack.com/valeriansaliou/node-sales-tax/master/res/sales_tax_rates.json'
)
  .json()
  .then(buffer => writeJsonFile('src/rates.json', mapper(buffer)))
  .catch(err => console.error(err) && process.exit(0))
  .then(process.exit)
