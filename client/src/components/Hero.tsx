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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          
          {/* Main heading */}
          <div className="scroll-animate" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading-primary mb-6">
              {PERSONAL_INFO.name}
            </h1>
          </div>

          {/* Professional title */}
          <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-heading-secondary mb-8">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          {/* Professional summary */}
          <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg text-body-primary max-w-3xl mx-auto mb-12 leading-relaxed">
              Frontend Engineer with <span className="text-accent-emphasis font-medium">{PERSONAL_INFO.experience}+ years</span> of experience developing responsive web applications using React, Redux Toolkit, Angular, JavaScript, and TypeScript. Skilled in designing user-focused interfaces and integrating RESTful APIs.
            </p>
          </div>

          {/* Action buttons */}
          <div className="scroll-animate flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.4s' }}>
            
            {/* Primary CTA - View Projects */}
            <button
              onClick={handleProjectsClick}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View My Work
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>

            {/* Secondary CTA - Contact */}
            <button
              onClick={handleContactClick}
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" 
                />
              </svg>
            </button>
          </div>

          {/* Social links */}
          <div className="scroll-animate flex justify-center space-x-6 mb-16" style={{ animationDelay: '0.6s' }}>
            
            {/* GitHub link */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-secondary hover:text-primary transition-colors duration-200 transform hover:scale-110"
              aria-label="Visit GitHub profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn link */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-secondary hover:text-primary transition-colors duration-200 transform hover:scale-110"
              aria-label="Visit LinkedIn profile"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-body-secondary hover:text-primary transition-colors duration-200 transform hover:scale-110"
              aria-label="Send email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-animate animate-bounce" style={{ animationDelay: '0.7s' }}>
            <button
              onClick={() => scrollToElement('about', -100)}
              className="text-body-secondary hover:text-primary transition-colors duration-200"
              aria-label="Scroll to about section"
            >
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}