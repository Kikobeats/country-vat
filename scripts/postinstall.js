'use strict'

const writeJsonFile = require('write-json-file')
const got = require('got')

const main = async () => {
  const rates = await got(
    'https://raw.githack.com/valeriansaliou/node-sales-tax/master/res/sales_tax_rates.json'
  ).json()

  await writeJsonFile('index.json', rates)
}

main()
  .catch(err => console.error(err) && process.exit(0))
  .then(process.exit)
