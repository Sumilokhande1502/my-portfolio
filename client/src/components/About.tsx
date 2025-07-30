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

  /**
   * Generate dynamic resume update date
   * @returns Current month and year string
   */
  const getResumeUpdateDate = (): string => {
    const now = new Date();
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[now.getMonth()]} ${now.getFullYear()}`;
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration about">
            About Me
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        {/* Main Content - Single Column */}
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate stagger-child">
            <div className="space-y-8 text-center">
              
              {/* Professional Title */}
              <div>
                <h3 className="text-3xl font-bold text-heading-primary mb-3">
                  {PERSONAL_INFO.title}
                </h3>
                <p className="text-xl text-body-secondary">
                  with <span className="text-accent-emphasis font-semibold">{PERSONAL_INFO.experience}+ years</span> of professional experience
                </p>
              </div>

              {/* Professional Summary */}
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-body-primary leading-relaxed text-lg">
                  I'm a <span className="text-accent-emphasis font-medium">{PERSONAL_INFO.title}</span> with <span className="text-accent-emphasis font-medium">{PERSONAL_INFO.experience}+ years</span> of 
                  experience developing responsive web applications using React, Redux Toolkit, Angular, JavaScript, and TypeScript. 
                  I have proven expertise in designing user-focused interfaces, integrating RESTful APIs with frontend components, 
                  and working in Agile environments.
                </p>
                
                <p className="text-body-primary leading-relaxed text-lg">
                  I'm skilled in version control and DevOps practices using Jenkins and GIT to streamline deployment and 
                  maintain code integrity. I believe in creating optimized, user-centric applications that deliver 
                  exceptional performance and user experience.
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
                      <h4 className="font-semibold text-heading-primary">Quality Code</h4>
                      <p className="text-sm text-body-secondary">Clean & maintainable</p>
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

              {/* Download Resume Button */}
              <div className="pt-6">
                <a
                  href="/attached_assets/Resume_Updated_2025_1753601334419.pdf"
                  download="Sumit_Lokhande_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
                <p className="text-sm text-body-secondary mt-2">• Updated in {getResumeUpdateDate()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}