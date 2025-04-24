export function formatRelativeDate(input, locale = 'fr-FR') {
    const date = input instanceof Date ? input : new Date(input)
    const now = new Date()
    const diffMs = date.getTime() - now.getTime()
    const diffMin = Math.round(diffMs / 60000)
    const diffHr = Math.round(diffMin / 60)
    const diffDay = Math.round(diffHr / 24)
    const diffMonth = Math.round(diffDay / 30)
    const diffYear = Math.round(diffMonth / 12)
  
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  
    if (Math.abs(diffMin) < 1) {
      return locale.startsWith('fr') ? "à l'instant" : "just now"
    }
  
    if (Math.abs(diffHr) < 1) return rtf.format(diffMin, 'minute')
    if (Math.abs(diffDay) < 1) return rtf.format(diffHr, 'hour')
    if (Math.abs(diffDay) <= 30) return rtf.format(diffDay, 'day')
    if (Math.abs(diffMonth) <= 12) return rtf.format(diffMonth, 'month')
  
    return rtf.format(diffYear, 'year')
  }
  