# Using utc-to-ist in Angular and React

This package works seamlessly with both Angular and React (and any other JavaScript framework)!

## 🔷 React Usage

### Installation

```bash
npm install utc-to-ist
```

### Basic Usage in React Component

```jsx
import React, { useState, useEffect } from "react";
import { utcToIst, formatIst } from "utc-to-ist";

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(formatIst());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current IST Time</h2>
      <p>{currentTime}</p>
    </div>
  );
}

export default TimeDisplay;
```

### Converting API Response Times

```jsx
import { formatIst, utcToIst } from "utc-to-ist";

function EventList({ events }) {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          {/* Convert UTC timestamp from API to IST */}
          <p>Time: {formatIst(event.timestamp)}</p>
        </div>
      ))}
    </div>
  );
}
```

### Custom Hook for IST Time

```jsx
import { useState, useEffect } from "react";
import { formatIst } from "utc-to-ist";

function useISTTime() {
  const [time, setTime] = useState(formatIst());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatIst());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}

// Usage
function Clock() {
  const istTime = useISTTime();
  return <div>IST: {istTime}</div>;
}
```

---

## 🅰️ Angular Usage

### Installation

```bash
npm install utc-to-ist
```

### Basic Usage in Component

```typescript
import { Component, OnInit, OnDestroy } from "@angular/core";
import { utcToIst, formatIst } from "utc-to-ist";

@Component({
  selector: "app-time-display",
  template: `
    <div>
      <h2>Current IST Time</h2>
      <p>{{ currentTime }}</p>
    </div>
  `,
})
export class TimeDisplayComponent implements OnInit, OnDestroy {
  currentTime: string = "";
  private intervalId: any;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = formatIst();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
```

### Creating an Angular Service

```typescript
import { Injectable } from "@angular/core";
import { utcToIst, istToUtc, formatIst } from "utc-to-ist";

@Injectable({
  providedIn: "root",
})
export class TimeConverterService {
  convertToIST(utcDate: Date | string): Date {
    return utcToIst(utcDate);
  }

  convertToUTC(istDate: Date | string): Date {
    return istToUtc(istDate);
  }

  formatAsIST(date?: Date | string): string {
    return formatIst(date);
  }

  getCurrentIST(): string {
    return formatIst();
  }
}
```

### Using the Service in Component

```typescript
import { Component, OnInit } from "@angular/core";
import { TimeConverterService } from "./services/time-converter.service";

@Component({
  selector: "app-event-list",
  template: `
    <div *ngFor="let event of events">
      <h3>{{ event.name }}</h3>
      <p>Time: {{ convertTime(event.utcTimestamp) }}</p>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private timeConverter: TimeConverterService) {}

  ngOnInit() {
    // Fetch events from API
    this.loadEvents();
  }

  convertTime(utcTimestamp: string): string {
    return this.timeConverter.formatAsIST(utcTimestamp);
  }

  loadEvents() {
    // Your API call here
  }
}
```

### Angular Pipe for Time Conversion

```typescript
import { Pipe, PipeTransform } from "@angular/core";
import { formatIst } from "utc-to-ist";

@Pipe({
  name: "istTime",
})
export class IstTimePipe implements PipeTransform {
  transform(value: Date | string | number): string {
    return formatIst(value);
  }
}
```

**Usage in template:**

```html
<p>Event Time: {{ event.timestamp | istTime }}</p>
```

---

## 🌐 Common Use Cases

### 1. Display Server Timestamps in IST

```javascript
// Server sends UTC time
const serverTime = "2026-01-28T10:00:00Z";

// Display in IST
console.log(formatIst(serverTime)); // "2026-01-28 15:30:00"
```

### 2. Submit Form Data in UTC

```javascript
import { istToUtc } from "utc-to-ist";

// User selects time in IST
const userSelectedTime = "2026-01-28T19:30:00";

// Convert to UTC before sending to server
const utcTime = istToUtc(userSelectedTime);
fetch("/api/events", {
  method: "POST",
  body: JSON.stringify({ eventTime: utcTime }),
});
```

### 3. Real-time Clock

```javascript
import { formatIst } from "utc-to-ist";

setInterval(() => {
  const istTime = formatIst();
  document.getElementById("clock").textContent = istTime;
}, 1000);
```

---

## ✅ Why It Works with Any Framework

This package is:

- ✅ **Pure JavaScript** - No framework dependencies
- ✅ **Zero external dependencies** - Won't conflict with your project
- ✅ **CommonJS & ES6** - Works with any module system
- ✅ **TypeScript support** - Full type definitions included
- ✅ **Lightweight** - ~1KB, won't bloat your bundle

---

## 📦 TypeScript Support

The package includes TypeScript definitions, so you get full IntelliSense in both Angular and React:

```typescript
import { utcToIst, istToUtc, formatIst } from "utc-to-ist";

// TypeScript knows the types!
const istDate: Date = utcToIst();
const utcDate: Date = istToUtc();
const formatted: string = formatIst();
```

---

## 🚀 Next Steps

1. Install: `npm install utc-to-ist`
2. Import the functions you need
3. Use them in your components/services
4. Enjoy hassle-free timezone conversion!

**Works with:** React, Angular, Vue, Svelte, Next.js, Nuxt, and any JavaScript/TypeScript project! 🎉
