const formatTokens = {
    d: (date) => date.getDate(),
    dd: (date) => String(date.getDate()).padStart(2, '0'),

    D: (date, locale) => date.toLocaleDateString(locale, { weekday: 'short' }),
    DD: (date, locale) => date.toLocaleDateString(locale, { weekday: 'long' }),

    M: (date) => date.getMonth() + 1,
    MM: (date) => String(date.getMonth() + 1).padStart(2, '0'),
    MMM: (date, locale) => date.toLocaleDateString(locale, { month: 'short' }),
    MMMM: (date, locale) => date.toLocaleDateString(locale, { month: 'long' }),

    yy: (date) => String(date.getFullYear()).slice(-2),
    yyyy: (date) => date.getFullYear(),

    H: (date) => date.getHours(),
    HH: (date) => String(date.getHours()).padStart(2, '0'),

    h: (date) => {
        const hour = date.getHours() % 12;
        return hour === 0 ? 12 : hour;
    },
    hh: (date) => {
        const hour = date.getHours() % 12;
        return String(hour === 0 ? 12 : hour).padStart(2, '0');
    },

    m: (date) => date.getMinutes(),
    mm: (date) => String(date.getMinutes()).padStart(2, '0'),

    s: (date) => date.getSeconds(),
    ss: (date) => String(date.getSeconds()).padStart(2, '0'),
    t: (date) => date.getHours() < 12 ? 'AM' : 'PM',
    tt: (date) => date.getHours() < 12 ? 'am' : 'pm',
}

export const formatPresets = {
    // 📅 Date seulement
    dateShort: 'dd/MM/yyyy',                   // 23/04/2025
    dateCompact: 'dd/MM',                      // 23/04
    dateText: 'DD d MMMM yyyy',              // mercredi 23 avril 2025
    dateShortText: 'D d MMM yyyy',           // mer. 23 avr. 2025
    dateTextMonth: 'd MMMM yyyy',              // 23 avril 2025
    dateIso: 'yyyy-MM-dd',                     // 2025-04-23
    dateIsoFull: 'yyyy-MM-dd HH:mm:ss',        // 2025-04-23
  
    // 🕐 Heure seulement
    time24h: 'HH:mm',                          // 15:45
    time24hSeconds: 'HH:mm:ss',               // 15:45:30
    time12h: 'hh:mm',                          // 3:45 PM
  
    // 📅🕐 Date + Heure
    dateTime: 'dd/MM/yyyy à HH:mm',            // 23/04/2025 à 15:45
    dateTimeText: 'DD d MMMM yyyy à HH:mm',  // mercredi 23 avril 2025 à 3:45 PM
    isoTimestamp: 'yyyy-MM-dd HH:mm:ss'        // 2025-04-23 15:45:30
  }

export function formatDate(input, format = "", locale = 'fr-FR') {
    const date = input instanceof Date ? input : new Date(input)
    if (isNaN(date)) return ''

    if (typeof format === 'object') {
        return date.toLocaleDateString(locale, format)
    }

    let result = format

    // Trie les tokens par longueur pour éviter que `d` ne remplace dans `dd` ou `dddd`
    const tokens = Object.keys(formatTokens).sort((a, b) => b.length - a.length)

    for (const token of tokens) {
        const replacer = formatTokens[token]
        const value = replacer(date, locale)

        const notSafe = token.length === 1 || ['m', 'h', 'd', 'H', 'M'].includes(token)
        const pattern = notSafe
            ? new RegExp(`(?<!\\w)${token}(?!\\w)`, 'g') // pour les tokens courts
            : new RegExp(token, 'g') // tokens longs → pas besoin de précaution

        result = result.replace(pattern, value)
    }

    if (/\b(hh|h)\b/.test(format) && !/\bt\b/.test(format)) {
        const amPm = date.getHours() < 12 ? 'AM' : 'PM'
        return `${result} ${amPm}`.trim()
    }

    return result
}