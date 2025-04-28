# Date Utilities Library

This library provides utility functions to format, manipulate, and display dates in JavaScript in a simple and flexible way.

---

## Table of Contents

1. [Installation](#installation)
2. [Features](#features)
   1. [formatDate](#formatdate)
   2. [formatTime](#formattime)
   3. [formatRelativeDate](#formatrelativedate)
3. [Presets](#presets)
4. [Tokens](#tokens)
5. [Usage Examples](#usage-examples)
6. [Contributing](#contributing)
7. [License](#license)
8. [About `toLocaleDateString`](#about-tolocaledatestring)

---

## Installation

You can install this library into your JavaScript project with:

```bash
npm install date-utilities-library
```

Or import it directly if you're using ES modules:

```javascript
import { formatDate, formatTime, formatRelativeDate } from 'date-utilities-library';
```

---

## Features

### 1. formatDate

The `formatDate` function allows you to format a date using predefined **presets**, custom **format schemas** with tokens, or even a **toLocaleDateString** options object.

---

### 2. formatTime

The `formatTime` function formats a time in a natural and concise way (24h or 12h formats).

---

### 3. formatRelativeDate

The `formatRelativeDate` function displays how far a date is relative to another date (e.g., "2 days ago", "yesterday", "just now").

---

## Presets

Presets are predefined formats you can use directly with `formatDate`. Here’s the full list:

| Name                | Format                      | Example                     |
|---------------------|------------------------------|------------------------------|
| `dateShort`          | `'dd/MM/yyyy'`               | `23/04/2025`                 |
| `dateCompact`        | `'dd/MM'`                    | `23/04`                      |
| `dateText`           | `'DD d MMMM yyyy'`            | `Wednesday 23 April 2025`    |
| `dateShortText`      | `'D d MMM yyyy'`              | `Wed 23 Apr 2025`            |
| `dateTextMonth`      | `'d MMMM yyyy'`               | `23 April 2025`              |
| `dateIso`            | `'yyyy-MM-dd'`                | `2025-04-23`                 |
| `dateIsoFull`        | `'yyyy-MM-dd HH:mm:ss'`       | `2025-04-23 15:45:30`        |
| `time24h`            | `'HH:mm'`                     | `15:45`                      |
| `time24hSeconds`     | `'HH:mm:ss'`                  | `15:45:30`                   |
| `time12h`            | `'hh:mm'`                     | `03:45 PM`                   |
| `timeNatural`        | `'time:natural'`              | `15h45`                      |
| `dateTime`           | `'dd/MM/yyyy à HH:mm'`        | `23/04/2025 at 15:45`        |
| `dateTimeText`       | `'DD d MMMM yyyy à HH:mm'`    | `Wednesday 23 April 2025 at 3:45 PM` |
| `isoTimestamp`       | `'yyyy-MM-dd HH:mm:ss'`       | `2025-04-23 15:45:30`        |

---

## Tokens

Tokens are special symbols you can combine to build your own custom formats. Here’s the list of available tokens:

| Token   | Description                              | Example         |
|---------|------------------------------------------|-----------------|
| `d`     | Day of the month without leading zero    | `3`             |
| `dd`    | Day of the month with leading zero       | `03`            |
| `D`     | Day of the week (short)                  | `Wed`           |
| `DD`    | Day of the week (full)                   | `Wednesday`     |
| `M`     | Month without leading zero               | `4`             |
| `MM`    | Month with leading zero                  | `04`            |
| `MMM`   | Month (short name)                       | `Apr`           |
| `MMMM`  | Month (full name)                        | `April`         |
| `yy`    | Year (two digits)                        | `25`            |
| `yyyy`  | Year (four digits)                       | `2025`          |
| `H`     | Hours (24h) without leading zero         | `15`            |
| `HH`    | Hours (24h) with leading zero            | `15`            |
| `h`     | Hours (12h) without leading zero         | `3`             |
| `hh`    | Hours (12h) with leading zero            | `03`            |
| `m`     | Minutes without leading zero             | `7`             |
| `mm`    | Minutes with leading zero                | `07`            |
| `s`     | Seconds without leading zero             | `5`             |
| `ss`    | Seconds with leading zero                | `05`            |
| `t`     | AM/PM (uppercase)                        | `AM`            |
| `tt`    | am/pm (lowercase)                        | `am`            |
| `time:natural` | Natural time format (e.g., 15h45)   | `15h45`         |

---

## About `toLocaleDateString`

When `formatDate` receives an **object** instead of a preset or a schema, it internally uses the native [`toLocaleDateString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) method to format dates according to specific locale and options.

Example:

```javascript
const date = new Date('2025-04-23T15:45:30');
const formatted = formatDate(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
console.log(formatted); // Outputs: "Wednesday 23 April 2025"
```

This method is very powerful and fully customizable based on the locale and format options you pass.

---

## Usage Examples

### 1. Format a date using a preset

```javascript
const date = new Date('2025-04-23T15:45:30');
console.log(formatDate(date, 'dateIso')); // Output: "2025-04-23"
```

### 2. Format a date using a custom schema

```javascript
const date = new Date('2025-04-23T15:45:30');
console.log(formatDate(date, 'DD d MMMM yyyy à HH:mm')); // Output: "Wednesday 23 April 2025 at 15:45"
```

### 3. Format a date using a `toLocaleDateString` object

```javascript
const date = new Date('2025-04-23T15:45:30');
console.log(formatDate(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
// Output: "Wednesday 23 April 2025"
```

### 4. Format a time

```javascript
console.log(formatTime('14:07')); // Output: "14h07"
console.log(formatTime('03:07', true)); // Output: "3h07" (without leading zero)
```

### 5. Display relative time

```javascript
const now = new Date('2025-04-25T12:00:00');
console.log(formatRelativeDate(new Date('2025-04-24T12:00:00'), 'en-US', now)); // Output: "yesterday"
```

---

## Contributing

Contributions are very welcome!  
To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Implement your feature or fix.
4. Submit a Pull Request.

---

## License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Would you also like me to format this nicely into a `README.md` file you can paste directly? 🚀  
I can also prepare a short "Quick Start" section if you want to make it even more developer-friendly!