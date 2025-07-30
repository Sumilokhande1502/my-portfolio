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
 * Portfolio projects data
 * In a real application, this would come from a CMS or API
 */
const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Dashboard',
    description: 'Modern admin dashboard for e-commerce management with real-time analytics',
    longDescription: 'A comprehensive admin dashboard built with React and TypeScript, featuring real-time sales analytics, inventory management, and customer insights. The application includes advanced filtering, data visualization with charts, and a responsive design that works seamlessly across all devices.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Tailwind CSS'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    liveUrl: 'https://dashboard-demo.vercel.app',
    githubUrl: `${SOCIAL_LINKS.github}/ecommerce-dashboard`,
    featured: true,
    completedDate: '2024-01'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features',
    longDescription: 'A full-stack task management application that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop task organization, team member assignments, and progress tracking. Built with modern web technologies and optimized for performance.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'fullstack',
    imageUrl: '/api/placeholder/600/400',
    liveUrl: 'https://taskapp-demo.vercel.app',
    githubUrl: `${SOCIAL_LINKS.github}/task-management`,
    featured: true,
    completedDate: '2023-11'
  },
  {
    id: 'project-3',
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with location-based forecasts and interactive maps',
    longDescription: 'An elegant weather application that provides accurate forecasts with beautiful visualizations. Features include location-based weather data, interactive maps, 7-day forecasts, and weather alerts. The app uses modern APIs and provides a smooth user experience across all devices.',
    technologies: ['React', 'JavaScript', 'Weather API', 'Mapbox', 'CSS3'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    liveUrl: 'https://weather-app-demo.vercel.app',
    githubUrl: `${SOCIAL_LINKS.github}/weather-app`,
    featured: false,
    completedDate: '2023-09'
  },
  {
    id: 'project-4',
    title: 'Recipe Finder Mobile App',
    description: 'Cross-platform mobile app for discovering and saving recipes',
    longDescription: 'A mobile application that helps users discover new recipes based on available ingredients. Features include ingredient-based search, recipe saving, shopping list generation, and nutritional information. Built with React Native for cross-platform compatibility.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Recipe API'],
    category: 'mobile',
    imageUrl: '/api/placeholder/600/400',
    githubUrl: `${SOCIAL_LINKS.github}/recipe-finder`,
    featured: false,
    completedDate: '2023-07'
  },
  {
    id: 'project-5',
    title: 'Portfolio Website Generator',
    description: 'Tool for creating professional portfolio websites with customizable themes',
    longDescription: 'A web application that allows users to create professional portfolio websites without coding. Features include drag-and-drop interface, customizable themes, responsive designs, and easy deployment. Built with modern React architecture and optimized for performance.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
    category: 'web',
    imageUrl: '/api/placeholder/600/400',
    liveUrl: 'https://portfolio-generator.vercel.app',
    githubUrl: `${SOCIAL_LINKS.github}/portfolio-generator`,
    featured: true,
    completedDate: '2023-05'
  },
  {
    id: 'project-6',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for complex data analysis and visualization',
    longDescription: 'A comprehensive data visualization platform that transforms complex datasets into interactive charts and insights. Features include multiple chart types, real-time data updates, filtering capabilities, and export functionality. Designed for business intelligence and analytics teams.',
    technologies: ['D3.js', 'React', 'Python', 'PostgreSQL', 'FastAPI'],
    category: 'fullstack',
    imageUrl: '/api/placeholder/600/400',
    liveUrl: 'https://dataviz-demo.vercel.app',
    githubUrl: `${SOCIAL_LINKS.github}/data-visualization`,
    featured: false,
    completedDate: '2023-03'
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