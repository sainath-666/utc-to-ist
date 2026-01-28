const { utcToIst, istToUtc, formatIst } = require("./index");

console.log("=== UTC to IST Conversion Tests ===\n");

// Test 1: Specific UTC time to IST
const utcTime = "2026-01-28T10:00:00Z";
const istTime = utcToIst(utcTime);
console.log(`UTC: ${utcTime}`);
console.log(`IST: ${istTime.toISOString()}`);
console.log(`Formatted IST: ${formatIst(utcTime)}`);
console.log();

// Test 2: Current time conversion
console.log("Current time conversions:");
console.log(`Current IST: ${utcToIst()}`);
console.log(`Current UTC: ${istToUtc()}`);
console.log(`Formatted current IST: ${formatIst()}`);
console.log();

// Test 3: IST to UTC conversion
const istInput = "2026-01-28T15:30:00";
const utcOutput = istToUtc(istInput);
console.log(`IST Input: ${istInput}`);
console.log(`UTC Output: ${utcOutput.toISOString()}`);
console.log();

// Test 4: Round-trip conversion
console.log("=== Round-trip Test ===");
const original = new Date("2026-01-28T12:00:00Z");
const toIst = utcToIst(original);
const backToUtc = istToUtc(toIst);
console.log(`Original UTC: ${original.toISOString()}`);
console.log(`Converted to IST: ${toIst.toISOString()}`);
console.log(`Back to UTC: ${backToUtc.toISOString()}`);
console.log(`Match: ${original.getTime() === backToUtc.getTime()}`);
console.log();

// Test 5: Timestamp input
console.log("=== Timestamp Input Test ===");
const timestamp = 1706437200000;
console.log(`Timestamp: ${timestamp}`);
console.log(`IST: ${utcToIst(timestamp)}`);
console.log(`Formatted: ${formatIst(timestamp)}`);
console.log();

console.log("✅ All tests completed!");
