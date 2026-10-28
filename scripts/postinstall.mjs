import { writeFile } from 'fs/promises'
import { mapRates } from './map-rates.mjs'

const URL =
  'https://raw.githack.com/valeriansaliou/node-sales-tax/master/res/sales_tax_rates.json'

fetch(URL)
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
    return res.json()
  })
  .then(rates =>
    writeFile('src/rates.json', JSON.stringify(mapRates(rates), null, 2))
  )
  .catch(error => console.error(error) || process.exit(1))
