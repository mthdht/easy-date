import { formatDate } from "./formatDate";

const date = "2025-04-23T15:45:00"
console.log(formatDate(date, "D d MMM yyyy à HH:mm", "fr-FR"))
console.log(formatDate(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}, "fr-FR"))
console.log(formatDate(date, "h:mm", "fr-FR"))