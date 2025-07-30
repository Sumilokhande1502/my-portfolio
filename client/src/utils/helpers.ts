/**
 * Helper Functions - Utility functions used throughout the application
 * 
 * This file contains pure utility functions that perform common operations.
 * All functions are documented with examples and are designed to be reusable.
 * 
 * Categories:
 * - String Utilities: Text manipulation and formatting
 * - Date Utilities: Date formatting and calculations
 * - Array Utilities: Array manipulation helpers
 * - Object Utilities: Object manipulation and validation
 * - DOM Utilities: DOM interaction helpers
 * - Validation Utilities: Input validation functions
 */

// =============================================================================
// String Utilities
// =============================================================================

/**
 * Capitalizes the first letter of a string
 * 
 * @param str - The string to capitalize
 * @returns String with first letter capitalized
 * 
 * Example:
 * capitalize('hello world') // 'Hello world'
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to title case (capitalizes each word)
 * 
 * @param str - The string to convert
 * @returns String in title case
 * 
 * Example:
 * toTitleCase('hello world') // 'Hello World'
 */
export function toTitleCase(str: string): string {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
}

/**
 * Truncates text to a specified length with ellipsis
 * 
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @param suffix - String to append when truncated (default: '...')
 * @returns Truncated string
 * 
 * Example:
 * truncateText('This is a long text', 10) // 'This is a...'
 */
export function truncateText(text: string, maxLength: number, suffix = '...'): string {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Converts a string to a URL-friendly slug
 * 
 * @param str - The string to convert
 * @returns URL-friendly slug
 * 
 * Example:
 * createSlug('Hello World!') // 'hello-world'
 */
export function createSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// =============================================================================
// Date Utilities
// =============================================================================

/**
 * Formats a date into a human-readable string
 * 
 * @param date - Date to format (Date object, string, or number)
 * @param format - Format style ('short', 'medium', 'long', 'full')
 * @returns Formatted date string
 * 
 * Example:
 * formatDate(new Date(), 'medium') // 'Jan 15, 2024'
 */
export function formatDate(
  date: Date | string | number, 
  format: 'short' | 'medium' | 'long' | 'full' = 'medium'
): string {
  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  const options: Intl.DateTimeFormatOptions = {
    short: { month: 'short' as const, year: 'numeric' as const },
    medium: { month: 'short' as const, day: 'numeric' as const, year: 'numeric' as const },
    long: { month: 'long' as const, day: 'numeric' as const, year: 'numeric' as const },
    full: { weekday: 'long' as const, month: 'long' as const, day: 'numeric' as const, year: 'numeric' as const }
  }[format];

  return dateObj.toLocaleDateString('en-US', options);
}

/**
 * Calculates the time elapsed since a given date
 * 
 * @param date - The date to compare against
 * @returns Human-readable time elapsed string
 * 
 * Example:
 * getTimeElapsed(new Date(Date.now() - 86400000)) // 'a day ago'
 */
export function getTimeElapsed(date: Date | string | number): string {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (diffMs < minute) return 'just now';
  if (diffMs < hour) return `${Math.floor(diffMs / minute)} minutes ago`;
  if (diffMs < day) return `${Math.floor(diffMs / hour)} hours ago`;
  if (diffMs < month) return `${Math.floor(diffMs / day)} days ago`;
  if (diffMs < year) return `${Math.floor(diffMs / month)} months ago`;
  return `${Math.floor(diffMs / year)} years ago`;
}

// =============================================================================
// Array Utilities
// =============================================================================

/**
 * Removes duplicate items from an array based on a key function
 * 
 * @param array - Array to deduplicate
 * @param keyFn - Function to extract comparison key (optional)
 * @returns Array with duplicates removed
 * 
 * Example:
 * uniqueBy([{id: 1}, {id: 2}, {id: 1}], item => item.id) // [{id: 1}, {id: 2}]
 */
export function uniqueBy<T>(array: T[], keyFn?: (item: T) => any): T[] {
  if (!keyFn) return Array.from(new Set(array));
  
  const seen = new Set();
  return array.filter(item => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Chunks an array into smaller arrays of specified size
 * 
 * @param array - Array to chunk
 * @param size - Size of each chunk
 * @returns Array of chunks
 * 
 * Example:
 * chunkArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 * 
 * @param array - Array to shuffle
 * @returns New shuffled array
 * 
 * Example:
 * shuffleArray([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4] (random order)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// =============================================================================
// Object Utilities
// =============================================================================

/**
 * Deep clones an object or array
 * 
 * @param obj - Object to clone
 * @returns Deep copy of the object
 * 
 * Example:
 * deepClone({a: {b: 1}}) // {a: {b: 1}} (new object)
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  
  const cloned = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

/**
 * Checks if an object is empty (has no enumerable properties)
 * 
 * @param obj - Object to check
 * @returns True if object is empty
 * 
 * Example:
 * isEmpty({}) // true
 * isEmpty({a: 1}) // false
 */
export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Omits specified keys from an object
 * 
 * @param obj - Source object
 * @param keys - Keys to omit
 * @returns New object without specified keys
 * 
 * Example:
 * omit({a: 1, b: 2, c: 3}, ['b']) // {a: 1, c: 3}
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => delete result[key]);
  return result;
}

/**
 * Picks specified keys from an object
 * 
 * @param obj - Source object
 * @param keys - Keys to pick
 * @returns New object with only specified keys
 * 
 * Example:
 * pick({a: 1, b: 2, c: 3}, ['a', 'c']) // {a: 1, c: 3}
 */
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}

// =============================================================================
// DOM Utilities
// =============================================================================

/**
 * Smoothly scrolls to an element on the page
 * 
 * @param elementId - ID of element to scroll to
 * @param offset - Offset from top in pixels (default: 0)
 * 
 * Example:
 * scrollToElement('about-section', -100) // Scroll to element with 100px offset
 */
export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Copies text to clipboard
 * 
 * @param text - Text to copy
 * @returns Promise that resolves to success boolean
 * 
 * Example:
 * copyToClipboard('Hello World').then(success => console.log(success))
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      textArea.remove();
      return result;
    }
  } catch (error) {
    console.error('Failed to copy text:', error);
    return false;
  }
}

// =============================================================================
// Validation Utilities
// =============================================================================

/**
 * Validates an email address
 * 
 * @param email - Email address to validate
 * @returns True if email is valid
 * 
 * Example:
 * isValidEmail('user@example.com') // true
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a URL
 * 
 * @param url - URL to validate
 * @returns True if URL is valid
 * 
 * Example:
 * isValidUrl('https://example.com') // true
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitizes HTML by removing script tags and other dangerous elements
 * 
 * @param html - HTML string to sanitize
 * @returns Sanitized HTML string
 * 
 * Example:
 * sanitizeHtml('<script>alert("xss")</script><p>Safe content</p>') // '<p>Safe content</p>'
 */
export function sanitizeHtml(html: string): string {
  // Remove script tags and their content
  const withoutScripts = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove dangerous attributes
  const withoutDangerousAttrs = withoutScripts.replace(
    /\s*(on\w+|href\s*=\s*["']javascript:|src\s*=\s*["']javascript:)[^>]*/gi, 
    ''
  );
  
  return withoutDangerousAttrs;
}

// =============================================================================
// Performance Utilities
// =============================================================================

/**
 * Debounces a function call
 * 
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 * 
 * Example:
 * const debouncedSearch = debounce(searchFunction, 300);
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttles a function call
 * 
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 * 
 * Example:
 * const throttledScroll = throttle(scrollHandler, 100);
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}