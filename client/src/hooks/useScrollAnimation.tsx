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

import { useEffect } from "react";
import { SCROLL_ANIMATION } from "@shared/constants";

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
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : SCROLL_ANIMATION.threshold,
        rootMargin:
          window.innerWidth < 768 ? "-10px 0px" : SCROLL_ANIMATION.rootMargin,
      },
    );

    // Trigger animations for elements already in view on component mount
    const triggerInitialAnimations = () => {
      const animatedElements =
        document.querySelectorAll<HTMLElement>(".scroll-animate");
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          el.classList.add("animate");
        }
      });
    };

    // Observer for section transitions with mobile-optimized threshold
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("section-visible");
            // Add staggered animation to child elements
            const staggerElements =
              entry.target.querySelectorAll<HTMLElement>(".stagger-child");
            for (let index = 0; index < staggerElements.length; index++) {
              const child = staggerElements[index];
              const delay = window.innerWidth < 768 ? index * 50 : index * 100; // Faster on mobile
              setTimeout(() => {
                child.classList.add("animate");
              }, delay);
            }
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : 0.2, // Lower threshold on mobile
        rootMargin: window.innerWidth < 768 ? "-20px 0px" : "-50px 0px", // Smaller margin on mobile
      },
    );

    // Observer for parallax effects (applies small transform while element is in view)
    const parallaxObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            element.style.transform = `translateY(${parallax}px)`;
          }
        });
      },
      { threshold: 0 },
    );

    // Find and observe different element types
    const animatedElements =
      document.querySelectorAll<HTMLElement>(".scroll-animate");
    const sectionElements = document.querySelectorAll<HTMLElement>(
      ".section-transition",
    );
    const parallaxElements =
      document.querySelectorAll<HTMLElement>(".parallax-element");

    animatedElements.forEach((el) => basicObserver.observe(el));
    sectionElements.forEach((el) => sectionObserver.observe(el));
    parallaxElements.forEach((el) => parallaxObserver.observe(el));

    // Trigger initial animations for elements already in view
    triggerInitialAnimations();

    // Handle continuous scroll-based updates (parallax, navbar)
    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // Apply parallax to hero background elements
      const heroElements =
        document.querySelectorAll<HTMLElement>(".hero-parallax");
      heroElements.forEach((el) => {
        const rate = scrolled * -0.5;
        el.style.transform = `translateY(${rate}px)`;
      });

      // Update navbar transparency based on scroll
      const navbar = document.querySelector<HTMLElement>(".navbar-scroll");
      if (navbar) {
        const opacity = Math.min(scrolled / 100, 1);
        navbar.style.background = `rgba(255, 255, 255, ${opacity})`;
      }
    };

    // Run once to set initial scroll-dependent states
    handleScroll();

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

    window.addEventListener("scroll", throttledScroll, { passive: true });

    // Cleanup function
    return () => {
      basicObserver.disconnect();
      sectionObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);
}
