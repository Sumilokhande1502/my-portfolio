/**
 * Projects Component - Portfolio showcase with filtering
 * 
 * Features:
 * - Grid layout of project cards
 * - Category filtering functionality
 * - Project details with technologies used
 * - Links to live demos and source code
 * - Responsive design with hover effects
 * 
 * Layout:
 * - Filter buttons at the top
 * - Grid of project cards
 * - Each card shows image, title, description, and links
 * - Mobile-friendly responsive layout
 */

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SOCIAL_LINKS } from '@shared/constants';

/**
 * Projects section component
 * @returns JSX element containing the projects showcase
 */
export function Projects() {
  // Enable scroll animations
  useScrollAnimation();


  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration projects">
            Featured Projects
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto">
            Some of my recent work that I'm proud to share
          </p>
        </div>

        {/* Interactive Projects Preview */}
        <div className="text-center mb-16">
          <div className="project-card bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto group cursor-pointer">
            <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">🚧</div>
            <h3 className="text-2xl font-bold text-heading-primary mb-4 group-hover:text-primary transition-colors duration-300">Projects Coming Soon</h3>
            <p className="text-body-secondary leading-relaxed mb-6">
              I'm currently working on showcasing my best projects. Check back soon to see detailed case studies 
              of my work at Citi, NeoSoft Technologies, and other exciting projects.
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">View GitHub Projects</span>
              <svg className="ml-2 w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}