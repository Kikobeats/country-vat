# country-vat

![Last version](https://img.shields.io/github/tag/Kikobeats/country-vat.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/Kikobeats/country-vat/master.svg?style=flat-square)](https://travis-ci.com/Kikobeats/country-vat)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/country-vat.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/country-vat)
[![Dependency status](https://img.shields.io/david/Kikobeats/country-vat.svg?style=flat-square)](https://david-dm.org/Kikobeats/country-vat)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/country-vat.svg?style=flat-square)](https://david-dm.org/Kikobeats/country-vat#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/country-vat.svg?style=flat-square)](https://www.npmjs.org/package/country-vat)

> Get a country VAT rate. ISO 3166-1 compliant.

## Install

```bash
$ npm install country-vat --save
```

## Usage

```js
const countryVat = require('country-vat')

countriesVat('ES') // => 0.21
countriesVat('ESP') // => 0.21
countriesVat(724) // => 0.21
countriesVat('Spain') // => 0.21
```

## License

**country-vat** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/country-vat/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/Kikobeats/country-vat/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
