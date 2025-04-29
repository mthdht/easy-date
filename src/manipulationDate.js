/**
 * Add time to a date.
 * 
 * @param {Date|string|number} input - The input date.
 * @param {Object} amount - Amount of time to add.
 * @param {number} [amount.days=0] - Days to add.
 * @param {number} [amount.months=0] - Months to add.
 * @param {number} [amount.years=0] - Years to add.
 * @param {number} [amount.hours=0] - Hours to add.
 * @param {number} [amount.minutes=0] - Minutes to add.
 * @param {number} [amount.seconds=0] - Seconds to add.
 * @returns {Date} - New Date instance.
 */
export function addDate(input, { days = 0, months = 0, years = 0, hours = 0, minutes = 0, seconds = 0 } = {}) { 
    const date = input instanceof Date ? new Date(input.getTime()) : new Date(input)

    if (isNaN(date)) return null
    
    if (years)  date.setFullYear(date.getFullYear() + years)
    if (months) date.setMonth(date.getMonth() + months)
    if (days)   date.setDate(date.getDate() + days)
    if (hours)  date.setHours(date.getHours() + hours)
    if (minutes) date.setMinutes(date.getMinutes() + minutes)
    if (seconds) date.setSeconds(date.getSeconds() + seconds)

    return date
}

export function subtractDate(input, params = {}) {
  const negativeParams = {}
  for (const key in params) {
    if (typeof params[key] === 'number') {
      negativeParams[key] = -params[key]
    }
  }
  return addDate(input, negativeParams)
}
