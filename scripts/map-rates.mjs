// JSON.stringify drops undefined values, which would delete that country.
const mapRates = rates => {
  const entries = Object.entries(rates)
  if (entries.length === 0) throw new TypeError('Expected at least one rate')

  return Object.fromEntries(
    entries.map(([code, entry]) => {
      if (!/^[A-Z]{2}$/.test(code)) {
        throw new TypeError(`Invalid country code ${code}`)
      }
      const rate = entry.rate
      if (!Number.isFinite(rate) || rate < 0) {
        throw new TypeError(`Invalid rate for ${code}`)
      }
      return [code, rate]
    })
  )
}

export { mapRates }
