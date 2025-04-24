import { formatDate, formatPresets } from '../library.js'

const tests = [
  { format: formatPresets.dateShort, expected: '23/04/2025', label: 'dateShort' },
  { format: formatPresets.dateCompact, expected: '23/04', label: 'dateCompact' },
  { format: formatPresets.dateText, expected: 'mercredi 23 avril 2025', label: 'dateText' },
  { format: formatPresets.dateShortText, expected: 'mer. 23 avr. 2025', label: 'dateShortText' },
  { format: formatPresets.dateTextMonth, expected: '23 avril 2025', label: 'dateTextMonth' },
  { format: formatPresets.dateIso, expected: '2025-04-23', label: 'dateIso' },
  { format: formatPresets.dateIsoFull, expected: '2025-04-23 15:45:30', label: 'dateIsoFull' },
  { format: formatPresets.time24h, expected: '15:45', label: 'time24h' },
  { format: formatPresets.time24hSeconds, expected: '15:45:30', label: 'time24hSeconds' },
  { format: formatPresets.time12h, expected: '03:45 PM', label: 'time12h' },
  { format: formatPresets.dateTime, expected: '23/04/2025 à 15:45', label: 'dateTime' },
  { format: formatPresets.dateTimeText, expected: 'mercredi 23 avril 2025 à 15:45', label: 'dateTimeText' },
  { format: formatPresets.isoTimestamp, expected: '2025-04-23 15:45:30', label: 'isoTimestamp' },
  { format: 'hey donc dateTimeText DD d MMMM yyyy à HH:mm', expected: 'hey donc dateTimeText mercredi 23 avril 2025 à 15:45', label: 'custom with false token' },
  { format: 'hey donc dateTimeText DD d MMMM yyyy à hh:mm', expected: 'hey donc dateTimeText mercredi 23 avril 2025 à 03:45 PM', label: 'custom with am pm expect h in word' },
  { format: 'hey donc dateTimeText t DD d MMMM yyyy à HH:mm', expected: 'hey donc dateTimeText PM mercredi 23 avril 2025 à 15:45', label: 'custom with ampm token and H' },
  { format: 'hey donc dateTimeText t DD d MMMM yyyy à hh:mm', expected: 'hey donc dateTimeText PM mercredi 23 avril 2025 à 03:45', label: 'custom with ampm token and h' },
]

function assertEqual(actual, expected, label) {
  if (actual === expected) {
    console.log(`✅ ${label}`)
  } else {
    console.error(`❌ ${label}\n  attendu : ${expected}\n  reçu    : ${actual}`)
  }
}

function runTests() {
  const d = new Date('2025-04-23T15:45:30')

  for (const { format, expected, label } of tests) {
    const result = formatDate(d, format, 'fr-FR')
    assertEqual(result, expected, label)
  }

  // Test locale string object format
  assertEqual(
    formatDate(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }, 'fr-FR'),
    'mercredi 23 avril 2025',
    'Format toLocaleDateString avec fr-FR'
  )
}

runTests()