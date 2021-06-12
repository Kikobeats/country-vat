# country-vat

![Last version](https://img.shields.io/github/tag/Kikobeats/country-vat.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/country-vat.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/country-vat)
[![NPM Status](https://img.shields.io/npm/dm/country-vat.svg?style=flat-square)](https://www.npmjs.org/package/country-vat)

> Get a country VAT rate. ISO 3166-1 compliant.

## Install

```bash
$ npm install country-vat --save
```

## Usage

```js
const countryVat = require('country-vat')

countryVat('ES') // => 0.21
countryVat('ESP') // => 0.21
countryVat(724) // => 0.21
countryVat('Spain') // => 0.21
```

## Related

- [is-european](https://github.com/Kikobeats/is-european) – Check if a country is part of the EU (European Union) or EEA (European Economic Area). ISO 3166-1 compliant.
- [country-vat](https://github.com/Kikobeats/country-vat) – Given a request, get the country associated with it. ISO 3166-1 alpha-2 compliant.
- [tom.js.org](https://tom.js.org) – tom 🐶 is a backoffice for your projects.

## License

**country-vat** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/country-vat/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/country-vat/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
