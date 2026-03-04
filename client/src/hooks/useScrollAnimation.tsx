import { useEffect } from 'react';
import { SCROLL_ANIMATION } from '@shared/constants';

export function useScrollAnimation(): void {
  useEffect(() => {
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

    const triggerInitialAnimations = () => {
      const animatedElements = document.querySelectorAll<HTMLElement>('.scroll-animate');
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          el.classList.add('animate');
        }
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('section-visible');

            const staggerElements = entry.target.querySelectorAll<HTMLElement>('.stagger-child');
            for (let index = 0; index < staggerElements.length; index++) {
              const child = staggerElements[index];
              const delay = window.innerWidth < 768 ? index * 50 : index * 100;
              setTimeout(() => {
                child.classList.add('animate');
              }, delay);
            }
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : 0.2,
        rootMargin: window.innerWidth < 768 ? '-20px 0px' : '-50px 0px',
      }
    );

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
      { threshold: 0 }
    );

    const animatedElements = document.querySelectorAll<HTMLElement>('.scroll-animate');
    const sectionElements = document.querySelectorAll<HTMLElement>('.section-transition');
    const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax-element');

    animatedElements.forEach((el) => basicObserver.observe(el));
    sectionElements.forEach((el) => sectionObserver.observe(el));
    parallaxElements.forEach((el) => parallaxObserver.observe(el));

    triggerInitialAnimations();

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      const heroElements = document.querySelectorAll<HTMLElement>('.hero-parallax');
      heroElements.forEach((el) => {
        const rate = scrolled * -0.5;
        el.style.transform = `translateY(${rate}px)`;
      });

      const navbar = document.querySelector<HTMLElement>('.navbar-scroll');
      if (navbar) {
        const opacity = Math.min(scrolled / 100, 1);
        navbar.style.background = `rgba(255, 255, 255, ${opacity})`;
      }
    };

    handleScroll();

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

    return () => {
      basicObserver.disconnect();
      sectionObserver.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
}
