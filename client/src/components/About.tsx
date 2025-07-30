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
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                  className="w-full h-auto rounded-xl object-cover max-h-80"
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
                <p className="text-lg text-body-secondary">
                  with <span className="text-accent-emphasis font-semibold">{PERSONAL_INFO.experience}+ years</span> of professional experience
                </p>
              </div>

              {/* Professional Summary */}
              <div className="space-y-4">
                <p className="text-body-primary leading-relaxed">
                  I'm a passionate <span className="text-accent-emphasis font-medium">{PERSONAL_INFO.title}</span> specializing in 
                  modern web technologies and user experience design. With over <span className="text-accent-emphasis font-medium">{PERSONAL_INFO.experience} years</span> of 
                  experience, I've had the privilege of working with diverse teams and creating digital solutions that make a real impact.
                </p>
                
                <p className="text-body-primary leading-relaxed">
                  My expertise spans across <span className="text-accent-emphasis font-medium">React</span>, 
                  <span className="text-accent-emphasis font-medium"> TypeScript</span>, 
                  <span className="text-accent-emphasis font-medium"> Redux</span>, and modern frontend architectures. 
                  I'm passionate about writing clean, maintainable code and creating intuitive user interfaces that 
                  provide exceptional user experiences.
                </p>

                <p className="text-body-primary leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community. I believe in continuous learning and staying 
                  up-to-date with the latest industry trends and best practices.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">50+ Projects</h4>
                      <p className="text-sm text-body-secondary">Successfully delivered</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">Fast Delivery</h4>
                      <p className="text-sm text-body-secondary">Quality & efficiency</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">Team Player</h4>
                      <p className="text-sm text-body-secondary">Collaborative approach</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">User-Focused</h4>
                      <p className="text-sm text-body-secondary">Experience-driven</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Let's Work Together
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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