# utc-to-ist

A lightweight JavaScript utility to convert UTC time to IST (Indian Standard Time) and vice versa. No dependencies, works in both Node.js and browser environments.

[![npm version](https://img.shields.io/npm/v/utc-to-ist.svg)](https://www.npmjs.com/package/utc-to-ist)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 Zero dependencies
- 📦 Lightweight (~1KB)
- 🔄 Bidirectional conversion (UTC ↔ IST)
- 🎯 Simple and intuitive API
- 💪 TypeScript support
- 🌐 Works in Node.js and browsers

## Installation

```bash
npm install utc-to-ist
```

## Usage

### Basic Usage

```javascript
const { utcToIst, istToUtc, formatIst } = require("utc-to-ist");

// Convert current UTC time to IST
const istTime = utcToIst();
console.log(istTime); // Date object in IST

// Convert specific UTC time to IST
const specificIstTime = utcToIst("2026-01-28T10:00:00Z");
console.log(specificIstTime); // 2026-01-28T15:30:00.000Z (IST)

// Convert IST to UTC
const utcTime = istToUtc("2026-01-28T15:30:00");
console.log(utcTime); // 2026-01-28T10:00:00.000Z (UTC)

// Get formatted IST string
const formatted = formatIst("2026-01-28T10:00:00Z");
console.log(formatted); // "2026-01-28 15:30:00"
```

### ES6 Module

```javascript
import { utcToIst, istToUtc, formatIst } from "utc-to-ist";

const istTime = utcToIst();
```

### Browser Usage

```html
<script src="node_modules/utc-to-ist/index.js"></script>
<script>
  // Functions are available globally on the window object
  console.log(formatIst());
  console.log(utcToIst());
  console.log(istToUtc());
</script>
```

## API Reference

### `utcToIst(date?)`

Converts UTC time to IST (adds 5 hours 30 minutes).

**Parameters:**

- `date` (optional): Date object, date string, or timestamp. Defaults to current time.

**Returns:** Date object representing the IST time.

**Example:**

```javascript
utcToIst(); // Current time in IST
utcToIst("2026-01-28T10:00:00Z"); // Specific UTC time to IST
utcToIst(new Date()); // Date object to IST
utcToIst(1706437200000); // Timestamp to IST
```

### `istToUtc(date?)`

Converts IST time to UTC (subtracts 5 hours 30 minutes).

**Parameters:**

- `date` (optional): Date object, date string, or timestamp. Defaults to current time.

**Returns:** Date object representing the UTC time.

**Example:**

```javascript
istToUtc(); // Current time in UTC
istToUtc("2026-01-28T15:30:00"); // Specific IST time to UTC
istToUtc(new Date()); // Date object to UTC
```

### `formatIst(date?)`

Converts UTC time to IST and returns a formatted string.

**Parameters:**

- `date` (optional): Date object, date string, or timestamp. Defaults to current time.

**Returns:** String in format `YYYY-MM-DD HH:MM:SS` (IST).

**Example:**

```javascript
formatIst(); // "2026-01-28 15:30:00"
formatIst("2026-01-28T10:00:00Z"); // "2026-01-28 15:30:00"
```

## TypeScript Support

This package includes TypeScript definitions:

```typescript
import { utcToIst, istToUtc, formatIst } from "utc-to-ist";

const istTime: Date = utcToIst();
const utcTime: Date = istToUtc();
const formatted: string = formatIst();
```

## How It Works

IST (Indian Standard Time) is UTC+5:30. This package:

- **UTC to IST**: Adds 5 hours and 30 minutes (19,800,000 milliseconds)
- **IST to UTC**: Subtracts 5 hours and 30 minutes (19,800,000 milliseconds)

## Use Cases

- Converting server timestamps (UTC) to Indian local time
- Displaying IST time in web applications
- Logging events in IST timezone
- Scheduling tasks based on IST
- Converting user input from IST to UTC for storage

## License

MIT © Sai

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Issues

If you find any bugs or have feature requests, please create an issue on [GitHub](https://github.com/sainath-666/utc-to-ist/issues).

## Changelog

### 1.0.0

- Initial release
- UTC to IST conversion
- IST to UTC conversion
- Formatted IST output
