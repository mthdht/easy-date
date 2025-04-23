const getDayName = (date, locale, length = 'long') =>
    date.toLocaleDateString(locale, { weekday: length })

const getMonthName = (date, locale, length = 'long') =>
    date.toLocaleDateString(locale, { month: length })

const formatTokens = {
    d: (date) => date.getDate(),
    dd: (date) => String(date.getDate()).padStart(2, '0'),

    ddd: (date, locale) => date.toLocaleDateString(locale, { weekday: 'short' }),
    dddd: (date, locale) => date.toLocaleDateString(locale, { weekday: 'long' }),

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

    a: (date) => (date.getHours() < 12 ? 'AM' : 'PM'),

    m: (date) => date.getMinutes(),
    mm: (date) => String(date.getMinutes()).padStart(2, '0'),

    s: (date) => date.getSeconds(),
    ss: (date) => String(date.getSeconds()).padStart(2, '0'),
}  

export function formatDate(input, format = {}, locale = 'fr-FR') {
    const date = input instanceof Date ? input : new Date(input)
    if (isNaN(date)) return ''

    if (typeof format === 'string') {
    return format.replace(/dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|ss|s|a/g, (token) => {
        const fn = formatTokens[token]
        return fn ? fn(date, locale) : token
    })
    }

    return date.toLocaleDateString(locale, format)
}