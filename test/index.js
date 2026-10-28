'use strict'

const { readFileSync } = require('fs')
const { join } = require('path')

const test = require('ava').default

const getVatRate = require('..')
const rates = require('../src/rates.json')

const loadMapRates = async () =>
  (await import('../scripts/map-rates.mjs')).mapRates

test('ISO 3166-1 alpha-2', t => {
  const rate = getVatRate('ES')
  t.is(rate, rates.ES)
  t.true(Number.isFinite(rate))
})

test('ISO 3166-1 alpha-3', t => {
  const rate = getVatRate('ESP')
  t.is(rate, rates.ES)
  t.true(Number.isFinite(rate))
})

test('ISO 3166-1 numeric', t => {
  const rate = getVatRate(724)
  t.is(rate, rates.ES)
  t.true(Number.isFinite(rate))
})

test('ISO 3166-1 name', t => {
  const rate = getVatRate('Spain')
  t.is(rate, rates.ES)
  t.true(Number.isFinite(rate))
})

test('invalid', t => {
  ;['XX', 0, '', null, undefined, NaN].forEach(input => {
    t.is(getVatRate(input), undefined)
  })
})

test('first country in the upstream list', t => {
  t.true(Number.isFinite(rates.AE))
  t.is(getVatRate('AE'), rates.AE)
})

test('rates are keyed by alpha-2 code only', t => {
  const keys = Object.keys(rates)
  t.true(keys.length > 0)
  keys.forEach(key => {
    t.regex(key, /^[A-Z]{2}$/)
    t.true(Number.isFinite(rates[key]))
    t.true(rates[key] >= 0)
  })
})

test('postinstall writes mapper output', t => {
  const source = readFileSync(
    join(__dirname, '../scripts/postinstall.mjs'),
    'utf8'
  )
  t.regex(source, /JSON\.stringify\(\s*mapRates\(rates\),\s*null,\s*2\s*\)/)
})

test('mapper keeps the first country and a zero rate', async t => {
  const mapRates = await loadMapRates()
  t.deepEqual(mapRates({ AE: { rate: 0.05, currency: 'AED' } }), {
    AE: 0.05
  })
  t.deepEqual(
    mapRates({
      AE: { rate: 0.05 },
      US: { rate: 0 }
    }),
    { AE: 0.05, US: 0 }
  )
})

test('mapper rejects input that would publish a bad file', async t => {
  const mapRates = await loadMapRates()

  ;[null, undefined, 0].forEach(input => {
    t.throws(() => mapRates(input))
  })
  ;[{}, []].forEach(input => {
    t.throws(() => mapRates(input), { message: /at least one rate/ })
  })
  ;['ae', 'A', 'USA', 'A1', '0'].forEach(code => {
    t.throws(() => mapRates({ [code]: { rate: 0.05 } }), {
      message: /Invalid country code/
    })
  })

  t.throws(() => mapRates('AE'), { message: /Invalid country code/ })
  t.throws(() => mapRates([{ rate: 0.05 }]), {
    message: /Invalid country code/
  })

  t.throws(() => mapRates({ AE: null }))
  ;[
    [],
    0.05,
    {},
    { rate: '0.05' },
    { rate: -0.01 },
    { rate: Number.NaN },
    { rate: Infinity },
    { rate: true }
  ].forEach(entry => {
    t.throws(() => mapRates({ AE: entry }), { message: /Invalid rate/ })
  })
})
