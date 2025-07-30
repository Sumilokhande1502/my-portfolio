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

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SOCIAL_LINKS } from '@shared/constants';

/**
 * Project data structure
 */
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'other';
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedDate: string;
}

/**
 * Project filter categories
 */
const projectCategories = [
  { id: 'all', label: 'All Projects', count: 0 },
  { id: 'web', label: 'Web Apps', count: 0 },
  { id: 'fullstack', label: 'Full Stack', count: 0 },
  { id: 'mobile', label: 'Mobile', count: 0 },
  { id: 'other', label: 'Other', count: 0 }
];

/**
 * Portfolio projects data - Real projects from professional experience
 * Showcasing actual work and achievements
 */
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Banking Application Frontend',
    description: 'Enterprise banking web application with React and Redux Toolkit',
    longDescription: 'Led front-end development for a comprehensive banking application at Citi using React and Redux Toolkit. Focused on state management, performance optimization, and user-centric design. Integrated with Java Microservices and Oracle databases for dynamic financial data.',
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'JavaScript', 'Jenkins', 'GIT'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    githubUrl: `${SOCIAL_LINKS.github}`,
    featured: true,
    completedDate: '2024-01'
  },
  {
    id: 'project-2',
    title: 'Angular Single Page Applications',
    description: 'Enterprise SPAs with seamless cross-device experience',
    longDescription: 'Created dynamic, single-page applications using Angular at NeoSoft Technologies, providing seamless experience across devices. Developed reusable UI components and collaborated with backend teams to integrate Java Microservices and Oracle databases via RESTful APIs.',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'RESTful APIs', 'Java Microservices', 'Oracle'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    githubUrl: `${SOCIAL_LINKS.github}`,
    featured: true,
    completedDate: '2022-08'
  },
  {
    id: 'project-3',
    title: 'Online Course Platform',
    description: 'Frontend development for educational content management',
    longDescription: 'Developed Front End online course pages using HTML, CSS by migrating content from various sources at LearningMate Solutions. Managed technical issues and troubleshooting while working across multiple projects simultaneously.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Content Migration'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    githubUrl: `${SOCIAL_LINKS.github}`,
    featured: false,
    completedDate: '2020-12'
  },

];

// Update category counts
projectCategories.forEach(category => {
  if (category.id === 'all') {
    category.count = projectsData.length;
  } else {
    category.count = projectsData.filter(project => project.category === category.id).length;
  }
});

/**
 * Projects section component
 * @returns JSX element containing the projects showcase
 */
export function Projects() {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Enable scroll animations
  useScrollAnimation();

  /**
   * Filter projects based on active category
   */
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  /**
   * Handle filter change
   * @param filterId - The ID of the selected filter
   */
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  /**
   * Format completion date
   * @param dateString - Date in YYYY-MM format
   * @returns Formatted date string
   */
  const formatDate = (dateString: string): string => {
    const [year, month] = dateString.split('-');
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration projects">
            Featured Projects
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with 
            cutting-edge technologies and best practices.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-body-primary hover:bg-primary/10 dark:hover:bg-slate-700'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
                
                {/* Completion date */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {formatDate(project.completedDate)}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                
                {/* Project title and description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-heading-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-body-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects link */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-heading-primary mb-4">
              Explore More Projects
            </h3>
            <p className="text-body-secondary mb-6">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}