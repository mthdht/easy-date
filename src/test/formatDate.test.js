import { formatDate } from '../library.js'

function assertEqual(actual, expected, label) {
  if (actual === expected) {
    console.log(`✅ ${label}`)
  } else {
    console.error(`❌ ${label}\n  attendu : ${expected}\n  reçu    : ${actual}`)
  }
}

function runTests() {
  const d = new Date('2025-04-23T04:30:00')

  // Format objet (via Intl)
  assertEqual(
    formatDate(d, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }, 'fr-FR'),
    'mercredi 23 avril 2025',
    'Format avec toLocaleDateString + fr-FR'
  )

  // Format string custom (à implémenter plus tard)
  assertEqual(
    formatDate(d, 'dd/MM/yyyy', 'fr-FR'),
    '23/04/2025',
    'Format custom avec string "dd/MM/yyyy"'
  )
}

runTests()