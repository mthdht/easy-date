import { addDate } from '../manipulationDate.js'

function assertEqual(actual, expected, label) {
  if (actual === expected) {
    console.log(`✅ ${label}  attendu : ${expected}  reçu    : ${actual}`)
  } else {
    console.error(`❌ ${label}\n  attendu : ${expected}\n  reçu    : ${actual}`)
  }
}

// Tests for addDate function
const testsAddDate = [
  { input: new Date('2025-04-23T12:00:00'), addParams: { days: 5 }, expected: '2025-04-28T12:00:00', label: 'Add 5 days' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { months: 2 }, expected: '2025-06-23T12:00:00', label: 'Add 2 months' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { years: 1 }, expected: '2026-04-23T12:00:00', label: 'Add 1 year' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { days: -5 }, expected: '2025-04-18T12:00:00', label: 'Subtract 5 days' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { months: -2 }, expected: '2025-02-23T12:00:00', label: 'Subtract 2 months' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { years: -1 }, expected: '2024-04-23T12:00:00', label: 'Subtract 1 year' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { hours: 3 }, expected: '2025-04-23T15:00:00', label: 'Add 3 hours' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { hours: -3 }, expected: '2025-04-23T09:00:00', label: 'Subtract 3 hours' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { minutes: 30 }, expected: '2025-04-23T12:30:00', label: 'Add 30 minutes' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { minutes: -30 }, expected: '2025-04-23T11:30:00', label: 'Subtract 30 minutes' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { seconds: 45 }, expected: '2025-04-23T12:00:45', label: 'Add 45 seconds' },
  { input: new Date('2025-04-23T12:00:00'), addParams: { seconds: -45 }, expected: '2025-04-23T11:59:15', label: 'Subtract 45 seconds' },
]

export function runManipulationTests() {
    console.log('---- TEST addDate ----')
    for (const { input, addParams, expected, label } of testsAddDate) {
        const result = addDate(input, addParams)
        const toCompare = new Date(expected)
        //const compared = compareDateComponents(result, new Date(expected))
        assertEqual(result.toJSON(), toCompare.toJSON(), label)
    }
}
