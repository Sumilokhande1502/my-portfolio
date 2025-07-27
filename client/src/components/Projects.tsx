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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.alexjohnson.dev',
      category: 'fullstack',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Next.js and Socket.io.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450',
      technologies: ['Next.js', 'Redux', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com/alexjohnson/task-manager',
      liveUrl: 'https://tasks.alexjohnson.dev',
      category: 'react',
      featured: true
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts and beautiful animations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['React', 'API Integration'],
      githubUrl: 'https://github.com/alexjohnson/weather-app',
      liveUrl: 'https://weather.alexjohnson.dev',
      category: 'react',
      featured: false
    },
    {
      id: '4',
      title: 'Expense Tracker',
      description: 'Personal finance tracker with budget planning and expense categorization.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['Vue.js', 'Charts.js'],
      githubUrl: 'https://github.com/alexjohnson/expense-tracker',
      liveUrl: 'https://expenses.alexjohnson.dev',
      category: 'typescript',
      featured: false
    },
    {
      id: '5',
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with real-time metrics and interactive charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['D3.js', 'Node.js'],
      githubUrl: 'https://github.com/alexjohnson/analytics-dashboard',
      liveUrl: 'https://analytics.alexjohnson.dev',
      category: 'fullstack',
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
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
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

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-primary"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-primary"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://github.com/alexjohnson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-200"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
