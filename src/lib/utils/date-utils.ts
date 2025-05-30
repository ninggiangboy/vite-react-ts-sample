import {
  format,
  parseISO,
  isValid,
  addDays,
  subDays,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  differenceInDays,
  isSameDay,
  isToday,
  isPast,
  isFuture,
} from "date-fns";

export const dateUtils = {
  /**
   * Format a date to a string using the specified format
   * @param date - Date to format
   * @param formatStr - Format string (e.g., 'yyyy-MM-dd')
   * @returns Formatted date string
   */
  formatDate(date: Date | string, formatStr: string = "yyyy-MM-dd"): string {
    const dateObj = typeof date === "string" ? parseISO(date) : date;
    if (!isValid(dateObj)) {
      throw new Error("Invalid date");
    }
    return format(dateObj, formatStr);
  },

  /**
   * Parse a date string to a Date object
   * @param dateStr - Date string to parse
   * @returns Date object
   */
  parseDate(dateStr: string): Date {
    const date = parseISO(dateStr);
    if (!isValid(date)) {
      throw new Error("Invalid date string");
    }
    return date;
  },

  /**
   * Add days to a date
   * @param date - Date to add days to
   * @param amount - Number of days to add
   * @returns New date
   */
  addDaysToDate(date: Date, amount: number): Date {
    return addDays(date, amount);
  },

  /**
   * Subtract days from a date
   * @param date - Date to subtract days from
   * @param amount - Number of days to subtract
   * @returns New date
   */
  subtractDaysFromDate(date: Date, amount: number): Date {
    return subDays(date, amount);
  },

  /**
   * Get the start of a day
   * @param date - Date to get start of day for
   * @returns Date at start of day
   */
  getStartOfDay(date: Date): Date {
    return startOfDay(date);
  },

  /**
   * Get the end of a day
   * @param date - Date to get end of day for
   * @returns Date at end of day
   */
  getEndOfDay(date: Date): Date {
    return endOfDay(date);
  },

  /**
   * Check if two dates are the same day
   * @param date1 - First date
   * @param date2 - Second date
   * @returns True if dates are the same day
   */
  isSameDayCheck(date1: Date, date2: Date): boolean {
    return isSameDay(date1, date2);
  },

  /**
   * Check if a date is today
   * @param date - Date to check
   * @returns True if date is today
   */
  isTodayCheck(date: Date): boolean {
    return isToday(date);
  },

  /**
   * Check if a date is in the past
   * @param date - Date to check
   * @returns True if date is in the past
   */
  isPastDate(date: Date): boolean {
    return isPast(date);
  },

  /**
   * Check if a date is in the future
   * @param date - Date to check
   * @returns True if date is in the future
   */
  isFutureDate(date: Date): boolean {
    return isFuture(date);
  },

  /**
   * Calculate the difference in days between two dates
   * @param date1 - First date
   * @param date2 - Second date
   * @returns Number of days between dates
   */
  getDaysDifference(date1: Date, date2: Date): number {
    return differenceInDays(date1, date2);
  },

  /**
   * Get the start of the month for a date
   * @param date - Date to get start of month for
   * @returns Date at start of month
   */
  getStartOfMonth(date: Date): Date {
    return startOfMonth(date);
  },

  /**
   * Get the end of the month for a date
   * @param date - Date to get end of month for
   * @returns Date at end of month
   */
  getEndOfMonth(date: Date): Date {
    return endOfMonth(date);
  },
};
