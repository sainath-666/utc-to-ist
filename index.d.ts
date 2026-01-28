/**
 * Converts UTC time to IST (Indian Standard Time)
 * @param date - Date object, date string, or timestamp. Defaults to current time.
 * @returns Date object representing the IST time
 */
export function utcToIst(date?: Date | string | number): Date;

/**
 * Converts IST (Indian Standard Time) to UTC
 * @param date - Date object, date string, or timestamp. Defaults to current time.
 * @returns Date object representing the UTC time
 */
export function istToUtc(date?: Date | string | number): Date;

/**
 * Converts UTC time to IST and returns a formatted string
 * @param date - Date object, date string, or timestamp. Defaults to current time.
 * @returns Formatted string in format "YYYY-MM-DD HH:MM:SS" (IST)
 */
export function formatIst(date?: Date | string | number): string;
