'use strict'

const test = require('ava')

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
