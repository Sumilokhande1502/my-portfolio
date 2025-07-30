/**
 * useScrollAnimation Hook - Reusable scroll-triggered animation logic
 * 
 * This custom hook encapsulates the Intersection Observer logic for scroll animations.
 * It provides a clean, reusable way to add scroll-triggered animations to components.
 * 
 * Features:
 * - Automatic cleanup to prevent memory leaks
 * - Configurable animation trigger settings
 * - Works with any element that has 'scroll-animate' class
 * 
 * Usage:
 * import { useScrollAnimation } from '@/hooks/useScrollAnimation';
 * 
 * function MyComponent() {
 *   useScrollAnimation(); // Enables scroll animations for this component
 *   return <div className="scroll-animate">Content</div>;
 * }
 */

import { useEffect } from 'react';
import { SCROLL_ANIMATION } from '@shared/constants';

/**
 * Custom hook for scroll-triggered animations
 * 
 * Sets up Intersection Observer to add 'animate' class to elements
 * when they enter the viewport. Elements must have 'scroll-animate' class.
 * 
 * @returns void - This hook doesn't return anything, it sets up side effects
 */
export function useScrollAnimation(): void {
  useEffect(() => {
    // Create observer with predefined settings from constants
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element becomes visible
            entry.target.classList.add('animate');
          }
        });
      },
      {
        // Trigger when 10% of element is visible
        threshold: SCROLL_ANIMATION.threshold,
        // Start observing 50px before element enters viewport
        rootMargin: SCROLL_ANIMATION.rootMargin,
      }
    );

    // Find and observe all elements with scroll animation class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((element) => observer.observe(element));

    // Cleanup function: disconnect observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array - effect runs once on mount
}