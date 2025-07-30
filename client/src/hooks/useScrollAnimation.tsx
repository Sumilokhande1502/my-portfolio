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
 * Sets up multiple Intersection Observers for different animation types:
 * - Basic scroll animations (.scroll-animate)
 * - Section transitions (.section-transition) 
 * - Staggered animations (.stagger-animate)
 * - Parallax effects (.parallax-element)
 * 
 * @returns void - This hook doesn't return anything, it sets up side effects
 */
export function useScrollAnimation(): void {
  useEffect(() => {
    // Observer for basic scroll animations with mobile optimization
    const basicObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : SCROLL_ANIMATION.threshold,
        rootMargin: window.innerWidth < 768 ? '-10px 0px' : SCROLL_ANIMATION.rootMargin,
      }
    );

    // Trigger animations for elements already in view on component mount
    const triggerInitialAnimations = () => {
      const animatedElements = document.querySelectorAll('.scroll-animate');
      animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          element.classList.add('animate');
        }
      });
    };

    // Observer for section transitions with mobile-optimized threshold
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            // Add staggered animation to child elements
            const staggerElements = entry.target.querySelectorAll('.stagger-child');
            staggerElements.forEach((child, index) => {
              const delay = window.innerWidth < 768 ? index * 50 : index * 100; // Faster on mobile
              setTimeout(() => {
                child.classList.add('animate');
              }, delay);
            });
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : 0.2, // Lower threshold on mobile
        rootMargin: window.innerWidth < 768 ? '-20px 0px' : '-50px 0px', // Smaller margin on mobile
      }
    );

    // Observer for parallax effects
    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            element.style.transform = `translateY(${parallax}px)`;
          }
        });
      },
      { threshold: 0 }
    );

    // Find and observe different element types
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const sectionElements = document.querySelectorAll('.section-transition');
    const parallaxElements = document.querySelectorAll('.parallax-element');

    // Trigger initial animations for elements already in view
    triggerInitialAnimations();

    animatedElements.forEach((element) => basicObserver.observe(element));
    sectionElements.forEach((element) => sectionObserver.observe(element));
    parallaxElements.forEach((element) => parallaxObserver.observe(element));

    // Enhanced scroll listener for smooth transitions
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Apply parallax to hero background elements
      const heroElements = document.querySelectorAll('.hero-parallax');
      heroElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateY(${rate}px)`;
      });

      // Update navbar transparency based on scroll
      const navbar = document.querySelector('.navbar-scroll');
      if (navbar) {
        const opacity = Math.min(scrolled / 100, 1);
        (navbar as HTMLElement).style.background = `rgba(255, 255, 255, ${opacity})`;
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Cleanup function
    return () => {
      basicObserver.disconnect();
      sectionObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
}