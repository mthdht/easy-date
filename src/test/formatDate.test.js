import { formatDate, formatPresets, formatRelativeDate, formatTime } from '../library.js'

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

const testsRelative = [
  { input: new Date('2025-04-25T11:59:30'), expected: 'à l\'instant', label: 'Just now' },
  { input: new Date('2025-04-25T11:00:00'), expected: 'il y a 1 heure', label: '1 hour ago' },
  { input: new Date('2025-04-25T10:00:00'), expected: 'il y a 2 heures', label: '2 hours ago' },
  { input: new Date('2025-04-24T12:00:00'), expected: 'hier', label: 'Yesterday' },
  { input: new Date('2025-04-23T12:00:00'), expected: 'avant-hier', label: '2 days ago' },
  { input: new Date('2025-04-18T12:00:00'), expected: 'il y a 7 jours', label: '1 week ago' },
  { input: new Date('2025-04-10T12:00:00'), expected: 'il y a 15 jours', label: '2 weeks ago' },
  { input: new Date('2025-03-25T12:00:00'), expected: 'le mois dernier', label: '1 month ago' },
  { input: new Date('2024-04-25T12:00:00'), expected: 'il y a 12 mois', label: '1 year ago' },
  { input: new Date('2023-04-25T12:00:00'), expected: 'il y a 2 ans', label: '2 years ago' },
]

const testsTime = [
  { input: '04:35', expected: '4h35', label: 'Time format 04:35' },
  { input: '14:07', expected: '14h07', label: 'Time format 14:07' },
  { input: '12:00', expected: '12h', label: 'Time format midnight' },
  { input: '23:59', expected: '23h59', label: 'Time format 23:59' },
  { input: '04:00', expected: '4h', label: 'Time format with 0 minute' },
  { input: '00:35', expected: '00h35', label: 'Time format with 0 hour' },
  { input: '00:00', expected: '00h00', label: 'Time format with 0 hour and minute' },
  
  // Test avec Date
  { input: new Date('2025-04-23T04:35:00'), expected: '4h35', label: 'Time from Date 04:35' },
  { input: new Date('2025-04-23T14:07:00'), expected: '14h07', label: 'Time from Date 14:07' },
]

function assertEqual(actual, expected, label) {
  if (actual === expected) {
    console.log(`✅ ${label}  attendu : ${expected}  reçu    : ${actual}`)
  } else {
    console.error(`❌ ${label}\n  attendu : ${expected}\n  reçu    : ${actual}`)
  }
}

function runTests() {
  const formatDateExemple = new Date('2025-04-23T15:45:30')
  const formatRelativeDateExemple = new Date('2025-04-25T12:00:00')
  console.log('---- TEST formatDate ----')
  
  for (const { format, expected, label } of tests) {
    const result = formatDate(formatDateExemple, format, 'fr-FR')
    assertEqual(result, expected, label)
  }
  
  console.log('---- TEST relativeDate ----')

  for (const { input, expected, label } of testsRelative) {
    const result = formatRelativeDate(input, 'fr-FR', formatRelativeDateExemple)
    assertEqual(result, expected, label)
  }

  console.log('---- TEST formatTime ----')

  for (const { input, expected, label } of testsTime) {
    const result = formatTime(input, true)  // true pour enlever les zéros inutiles
    assertEqual(result, expected, label)
  }

  // Test locale string object format
  assertEqual(
    formatDate(formatDateExemple, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }, 'fr-FR'),
    'mercredi 23 avril 2025',
    'Format toLocaleDateString avec fr-FR'
  )
}

runTests()