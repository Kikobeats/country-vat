import { writeFile } from 'fs/promises'

const mapper = rates =>
  Object.keys(rates).reduce(
    (acc, alpha2) => ({ ...acc, [alpha2]: rates[alpha2].rate }),
    {}
  )

fetch('https://raw.githack.com/valeriansaliou/node-sales-tax/master/res/sales_tax_rates.json')
  .then(res => res.json())
  .then(rates => writeFile('src/rates.json', JSON.stringify(mapper(rates), null, 2)))
  .catch(error => console.error(error) || process.exit(1))
