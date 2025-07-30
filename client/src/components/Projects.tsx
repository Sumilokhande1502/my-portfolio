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
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing frontend development skills',
    longDescription: 'A modern, responsive portfolio website built with React and TypeScript. Features include dark/light theme toggle, smooth animations, contact form with email integration, and optimized performance. Showcases professional experience and technical skills.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Nodemailer', 'Express'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    liveUrl: 'https://portfolio-sumit-lokhande.replit.app/',
    githubUrl: `${SOCIAL_LINKS.github}`,
    featured: true,
    completedDate: '2025-01'
  }

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

        {/* Projects grid with micro-interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              
              {/* Project image with overlay effects */}
              <div className="relative overflow-hidden project-image-container">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover project-image"
                  loading="lazy"
                />
                
                {/* Animated overlay */}
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View
                        </button>
                      )}
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        Code
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg featured-badge">
                    Featured
                  </div>
                )}
                
                {/* Completion date */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs completion-date">
                  {formatDate(project.completedDate)}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 project-content">
                
                {/* Project title and description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-heading-primary mb-2 group-hover:text-primary transition-colors duration-300">
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
                        className="tech-tag px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project links - hidden as overlay shows them */}
                <div className="hidden gap-4">
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


      </div>
    </section>
  );
}