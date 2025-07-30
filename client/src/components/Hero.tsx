/**
 * Hero Component - Main landing section of the portfolio
 * 
 * Features:
 * - Eye-catching introduction with animated elements
 * - Professional title and experience highlights
 * - Call-to-action buttons for key sections
 * - Responsive design with gradient background
 * - Staggered animations for smooth entrance
 * 
 * Layout:
 * - Centered content with hero text
 * - Professional headshot (optional)
 * - Action buttons for navigation
 * - Scroll indicator for user guidance
 */

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@shared/constants';
import { scrollToElement } from '@/utils/helpers';

/**
 * Hero section component - the first thing visitors see
 * @returns JSX element containing the hero section
 */
export function Hero() {
  // Enable scroll animations for this component
  useScrollAnimation();

  /**
   * Handle smooth scrolling to contact section
   */
  const handleContactClick = () => {
    scrollToElement('contact', -100);
  };

  /**
   * Handle smooth scrolling to projects section
   */
  const handleProjectsClick = () => {
    scrollToElement('projects', -100);
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      
      {/* Background decorative elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 dark:bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-screen py-20">
          
          {/* Left content */}
          <div className="text-left">
            {/* Main heading */}
            <div className="scroll-animate" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white dark:text-slate-100 mb-6 hidden md:block">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Professional title */}
            <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 dark:text-slate-200 mb-8">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {/* Professional summary */}
            <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl text-white/90 dark:text-slate-200 mb-12 leading-relaxed font-light">
                Transforming ideas into powerful digital experiences. Building modern web applications that users love.
              </p>
            </div>

            {/* Action buttons */}
            <div className="scroll-animate flex flex-col sm:flex-row gap-4 mb-8" style={{ animationDelay: '0.4s' }}>
              
              {/* Primary CTA - View Projects */}
              <button
                onClick={handleProjectsClick}
                className="inline-flex items-center px-8 py-4 bg-white/20 dark:bg-white/25 text-white dark:text-white rounded-lg hover:bg-white/30 dark:hover:bg-white/35 transition-all duration-200 font-medium text-lg shadow-lg backdrop-blur-sm"
              >
                View My Work
              </button>

              {/* Secondary CTA - Contact */}
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 dark:border-white/40 text-white dark:text-white hover:bg-white/20 dark:hover:bg-white/25 rounded-lg transition-all duration-200 font-medium text-lg shadow-lg backdrop-blur-sm"
              >
                Get In Touch
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4H2C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6C24 4.9 23.1 4 22 4zM22 8l-10 6L2 8V6l10 6 10-6V8z"/>
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="scroll-animate flex space-x-4" style={{ animationDelay: '0.5s' }}>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label="Email Contact"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4H2C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6C24 4.9 23.1 4 22 4zM22 8l-10 6L2 8V6l10 6 10-6V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="scroll-animate flex justify-center mt-8 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-300 shadow-2xl">
                <img
                  src="/attached_assets/20231120_210945_IMG_0457_1753609330229.JPG"
                  alt="Sumit Lokhande - Frontend Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}