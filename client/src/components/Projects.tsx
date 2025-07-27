import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setProjectFilter } from '@/store/slices/uiSlice';
import { type Project } from '@shared/schema';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const dispatch = useDispatch();
  const { activeProjectFilter } = useSelector((state: RootState) => state.ui);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Enterprise Web Application',
      description: 'Lead front-end development for web applications using React and Redux Toolkit at Citi. Achieved 40% reduction in page load times through optimization and increased user engagement by 30% with interactive components.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450',
      technologies: ['React', 'Redux Toolkit', 'Reflux', 'TypeScript', 'Java Microservices'],
      githubUrl: 'https://github.com/sumitlokhande/enterprise-app',
      liveUrl: 'https://demo.sumitlokhande.dev',
      category: 'react',
      featured: true
    },
    {
      id: '2',
      title: 'Angular SPA Platform',
      description: 'Created dynamic, single-page applications using Angular providing seamless experience across devices. Developed reusable UI components integrating with Java Microservices and Oracle databases via RESTful APIs.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450',
      technologies: ['Angular', 'TypeScript', 'RESTful APIs', 'Oracle', 'Jenkins'],
      githubUrl: 'https://github.com/sumitlokhande/angular-spa',
      liveUrl: 'https://spa.sumitlokhande.dev',
      category: 'typescript',
      featured: true
    },
    {
      id: '3',
      title: 'E-Learning Course Platform',
      description: 'Developed front-end online course pages using HTML, CSS by migrating content from various sources. Built responsive and accessible educational content interfaces.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubUrl: 'https://github.com/sumitlokhande/elearning-platform',
      liveUrl: 'https://learning.sumitlokhande.dev',
      category: 'fullstack',
      featured: false
    },
    {
      id: '4',
      title: 'Banking Web Dashboard',
      description: 'Financial services dashboard with real-time data visualization and secure user interactions. Built with React and integrated with backend microservices.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['React', 'Charts.js', 'TypeScript'],
      githubUrl: 'https://github.com/sumitlokhande/banking-dashboard',
      liveUrl: 'https://dashboard.sumitlokhande.dev',
      category: 'react',
      featured: false
    },
    {
      id: '5',
      title: 'State Management System',
      description: 'Advanced state management implementation using Redux Toolkit and Reflux for complex enterprise applications with optimized performance.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['Redux Toolkit', 'Reflux', 'React'],
      githubUrl: 'https://github.com/sumitlokhande/state-management',
      liveUrl: 'https://state.sumitlokhande.dev',
      category: 'react',
      featured: false
    }
  ];

  const filters = ['all', 'react', 'typescript', 'fullstack'];

  const filteredProjects = projects.filter(project => 
    activeProjectFilter === 'all' || project.category === activeProjectFilter
  );

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  const handleFilterChange = (filter: string) => {
    dispatch(setProjectFilter(filter));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-heading-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-body-secondary mb-8">
            Some of my recent work that I'm proud to share
          </p>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeProjectFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Placeholder - Content Coming Soon */}
        <div className="text-center py-20">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-12 shadow-lg">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl text-heading-primary mb-4">Projects Coming Soon</h3>
            <p className="text-lg text-body-primary max-w-2xl mx-auto">
              I'm currently working on showcasing my best projects. Check back soon to see detailed case studies 
              of my work at <span className="text-accent-emphasis">Citi</span>, <span className="text-accent-emphasis">NeoSoft Technologies</span>, and other exciting projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
