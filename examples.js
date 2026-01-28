// Example usage of utc-to-ist package

const { utcToIst, istToUtc, formatIst } = require("./index");

console.log("📅 UTC to IST Converter - Examples\n");
console.log("=".repeat(50));

// Example 1: Convert current time
console.log("\n1️⃣  Current Time Conversion");
console.log("-".repeat(50));
const now = new Date();
console.log("Current UTC:", now.toISOString());
console.log("Current IST:", utcToIst(now).toISOString());
console.log("Formatted IST:", formatIst(now));

// Example 2: Convert specific UTC time
console.log("\n2️⃣  Specific UTC Time to IST");
console.log("-".repeat(50));
const meetingTime = "2026-01-28T14:00:00Z"; // 2 PM UTC
console.log("Meeting Time (UTC):", meetingTime);
console.log("Meeting Time (IST):", formatIst(meetingTime));

// Example 3: Convert IST to UTC (for storing in database)
console.log("\n3️⃣  IST to UTC (for database storage)");
console.log("-".repeat(50));
const userInputIST = "2026-01-28T19:30:00"; // User enters IST time
const utcForDB = istToUtc(userInputIST);
console.log("User Input (IST):", userInputIST);
console.log("Store in DB (UTC):", utcForDB.toISOString());

// Example 4: Working with timestamps
console.log("\n4️⃣  Working with Timestamps");
console.log("-".repeat(50));
const timestamp = Date.now();
console.log("Timestamp:", timestamp);
console.log("IST Time:", formatIst(timestamp));

// Example 5: Scheduling tasks
console.log("\n5️⃣  Scheduling Example");
console.log("-".repeat(50));
const dailyReportTime = "2026-01-29T09:00:00"; // 9 AM IST
const utcScheduleTime = istToUtc(dailyReportTime);
console.log("Daily Report Time (IST):", dailyReportTime);
console.log("Schedule in UTC:", utcScheduleTime.toISOString());
console.log("(Use UTC time for cron jobs/schedulers)");

// Example 6: Display times for Indian users
console.log("\n6️⃣  Display Server Times in IST");
console.log("-".repeat(50));
const serverLogs = [
  { event: "Server Started", time: "2026-01-28T05:30:00Z" },
  { event: "API Request", time: "2026-01-28T06:15:00Z" },
  { event: "Database Backup", time: "2026-01-28T18:30:00Z" },
];

serverLogs.forEach((log) => {
  console.log(`${log.event}: ${formatIst(log.time)} IST`);
});

console.log("\n" + "=".repeat(50));
console.log("✨ All examples completed!\n");
