'use strict'

const test = require('ava').default

const getVatRate = require('..')

test('ISO 3166-1 alpha-2', t => {
  t.is(getVatRate('ES'), 0.21)
})

test('ISO 3166-1 alpha-3', t => {
  t.is(getVatRate('ESP'), 0.21)
})

test('ISO 3166-1 numeric', t => {
  t.is(getVatRate(724), 0.21)
})

test('ISO 3166-1 name', t => {
  t.is(getVatRate('Spain'), 0.21)
})

test('invalid', t => {
  ;['XX', 0, '', null, undefined, NaN].forEach(input => {
    t.is(getVatRate(input), undefined)
  })
})

test('first country in the upstream list', t => {
  t.is(getVatRate('AE'), 0.05)
})

test('rates are keyed by alpha-2 code only', t => {
  const rates = require('../src/rates.json')
  Object.keys(rates).forEach(key => t.regex(key, /^[A-Z]{2}$/))
})
