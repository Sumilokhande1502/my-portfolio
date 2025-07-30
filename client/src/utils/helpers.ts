/**
 * Helper Functions - Essential utility functions used throughout the application
 * 
 * This file contains only the utility functions that are actually used in the codebase.
 * Each function is documented with examples and designed to be reusable.
 */

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