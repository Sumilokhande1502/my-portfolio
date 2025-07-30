/**
 * About Component - Professional introduction and overview
 * 
 * Features:
 * - Personal introduction with professional photo
 * - Experience highlights and key achievements
 * - Professional summary with call-to-action
 * - Responsive layout with gradient background
 * - Scroll-triggered animations
 * 
 * Layout:
 * - Left side: Professional photo with decorative elements
 * - Right side: Text content with structured information
 * - Mobile: Stacked layout for better readability
 */

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PERSONAL_INFO } from '@shared/constants';

/**
 * About section component
 * @returns JSX element containing the about section
 */
export function About() {
  // Enable scroll animations for this component
  useScrollAnimation();

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration about">
            About Me
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Profile Image */}
          <div className="scroll-animate">
            <div className="relative">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              
              {/* Profile image container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                  className="w-full h-auto rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="scroll-animate">
            <div className="space-y-6">
              
              {/* Professional Title */}
              <div>
                <h3 className="text-2xl font-bold text-heading-primary mb-2">
                  {PERSONAL_INFO.title}
                </h3>
                <p className="text-lg text-accent-emphasis">
                  {PERSONAL_INFO.experience} years of experience
                </p>
              </div>

              {/* Professional Summary */}
              <div className="space-y-4 text-body-primary">
                <p>
                  I'm a passionate <span className="text-accent-emphasis font-semibold">Frontend Engineer</span> with 
                  over <span className="text-accent-emphasis font-semibold">{PERSONAL_INFO.experience} years</span> of 
                  experience building modern, responsive web applications.
                </p>
                
                <p>
                  Specializing in <span className="text-accent-emphasis font-semibold">React</span>, 
                  <span className="text-accent-emphasis font-semibold"> TypeScript</span>, and 
                  <span className="text-accent-emphasis font-semibold"> modern JavaScript frameworks</span>, 
                  I create user-centered digital experiences that combine beautiful design with robust functionality.
                </p>
                
                <p>
                  My expertise spans the entire frontend development lifecycle, from initial concept and 
                  design to deployment and optimization. I'm committed to writing clean, maintainable code 
                  and staying current with the latest industry trends and best practices.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-heading-secondary mb-2">Frontend Focus</h4>
                  <p className="text-sm text-body-secondary">React, Angular, TypeScript</p>
                </div>
                
                <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-heading-secondary mb-2">Experience</h4>
                  <p className="text-sm text-body-secondary">{PERSONAL_INFO.experience}+ years professional</p>
                </div>
                
                <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-heading-secondary mb-2">Location</h4>
                  <p className="text-sm text-body-secondary">{PERSONAL_INFO.location}</p>
                </div>
                
                <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-heading-secondary mb-2">Approach</h4>
                  <p className="text-sm text-body-secondary">User-centered design</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  Let's Work Together
                  <svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}