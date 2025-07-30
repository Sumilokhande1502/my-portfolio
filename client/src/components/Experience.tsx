/**
 * Experience Component - Professional work history timeline
 * 
 * Features:
 * - Chronological work experience display
 * - Company logos and descriptions
 * - Technology stack highlights
 * - Responsive timeline layout
 * - Scroll-triggered animations
 * 
 * Layout:
 * - Vertical timeline with connecting lines
 * - Left: Company info and timeline marker
 * - Right: Role details and achievements
 * - Mobile: Simplified single-column layout
 */

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Work experience data structure
 */
interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // undefined means current position
  location: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

/**
 * Professional experience data
 * Based on actual resume information
 */
const experienceData: ExperienceItem[] = [
  {
    id: 'experience-1',
    company: 'Citi',
    position: 'Apps Dev Intmd Programmer Analyst - C11',
    startDate: '2022-08',
    location: 'India',
    description: [
      'Lead front-end development for web applications using React and Redux Toolkit and Reflux, focusing on state management, performance optimization, and user-centric design',
      'Developed and maintained web applications using React and Redux Toolkit, focusing on performance, scalability, and user experience',
      'Built and optimized UI components, leveraging JavaScript and TypeScript to create responsive, modular code that enhances code maintainability',
      'Integrated front-end features with backend RESTful APIs developed in Java Microservices and utilized Oracle databases for dynamic data',
      'Utilized GIT and Jenkins for version control and continuous deployment, maintaining high standards of code quality and minimizing deployment issues'
    ],
    technologies: ['React', 'Redux Toolkit', 'Reflux', 'JavaScript', 'TypeScript', 'Java Microservices', 'Oracle', 'Jenkins', 'GIT'],
    achievements: [
      'Reduced page load times by 40% through React optimization, including code-splitting and lazy loading',
      'Led the development of a product, increasing user engagement by 30% with interactive and responsive components'
    ]
  },
  {
    id: 'experience-2',
    company: 'NeoSoft Technologies Pvt. Ltd.',
    position: 'Software Engineer',
    startDate: '2020-04',
    endDate: '2022-08',
    location: 'India',
    description: [
      'Created dynamic, single-page applications (SPA) using Angular providing a seamless experience across devices',
      'Developed reusable UI components with Angular, collaborating with backend teams to integrate Java Microservices and Oracle databases via RESTful APIs',
      'Managed code versions and automated deployment processes using Jenkins and GIT, ensuring continuous integration and streamlined project releases'
    ],
    technologies: ['Angular', 'JavaScript', 'TypeScript', 'Java Microservices', 'Oracle', 'RESTful APIs', 'Jenkins', 'GIT'],
    achievements: [
      'Successfully delivered multiple SPAs with seamless cross-device experience',
      'Collaborated effectively with backend teams for smooth API integration'
    ]
  },
  {
    id: 'experience-3',
    company: 'LearningMate Solutions Pvt. Ltd.',
    position: 'Front End Web Developer',
    startDate: '2019-10',
    endDate: '2020-12',
    location: 'India',
    description: [
      'Developed Front End online course pages using HTML, CSS by migrating content from various sources',
      'Oversaw technical issues and troubleshooting requests to resolve surfaced problems',
      'Multi-tasked across multiple functions and roles to generate project results and meet deadlines and organizational expectations'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    achievements: [
      'Successfully migrated content from various sources to create engaging online course pages',
      'Maintained high standards while working across multiple projects simultaneously'
    ]
  },
  {
    id: 'experience-4',
    company: 'A One Salasar Pvt. Ltd.',
    position: 'Associate Business Developer',
    startDate: '2019-03',
    endDate: '2019-06',
    location: 'India',
    description: [
      'Developing and expanding business by cold calling',
      'Doing follow up calls to clients',
      'Pitching clients about the company\'s services and products. Maintaining relationships with clients',
      'Increased customer satisfaction by resolving CLIENT issues'
    ],
    technologies: ['Business Development', 'Client Relations', 'Sales'],
    achievements: [
      'Increased customer satisfaction by resolving client issues',
      'Developed and maintained courteous and effective working relationships'
    ]
  }
];

/**
 * Experience section component
 * @returns JSX element containing the experience timeline
 */
export function Experience() {
  // Enable scroll animations for this component
  useScrollAnimation();

  /**
   * Format date string to readable format
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

  /**
   * Calculate duration between start and end dates
   * @param startDate - Start date in YYYY-MM format
   * @param endDate - End date in YYYY-MM format (optional)
   * @returns Duration string
   */
  const calculateDuration = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) return `${remainingMonths} months`;
    if (remainingMonths === 0) return `${years} ${years === 1 ? 'year' : 'years'}`;
    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} months`;
  };

  return (
    <section 
      id="experience" 
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration experience">
            Professional Experience
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">
            Building exceptional digital experiences across industries with cutting-edge technologies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          
          {/* Timeline connecting line - hidden on mobile */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2 hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-16">
            {experienceData.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative scroll-animate ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex md:items-center`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                
                {/* Timeline marker */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 ${
                  index % 2 === 0 ? 'md:translate-x-2' : 'md:-translate-x-2'
                }`}>
                  <div className="absolute inset-1 bg-white dark:bg-slate-800 rounded-full"></div>
                </div>

                {/* Experience card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                    
                    {/* Company and position header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-heading-primary mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-accent-emphasis mb-2">
                        {experience.company}
                      </h4>
                      
                      {/* Date and location info */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-body-secondary">
                        <span>
                          {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                        </span>
                        <span className="sm:ml-4">
                          {calculateDuration(experience.startDate, experience.endDate)} • {experience.location}
                        </span>
                      </div>
                    </div>

                    {/* Job description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-body-primary flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key achievements (if available) */}
                    {experience.achievements && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-heading-secondary mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-body-primary flex items-start">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies used */}
                    <div>
                      <h5 className="text-sm font-semibold text-heading-secondary mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full hover:bg-primary/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-heading-primary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-body-secondary mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Get In Touch
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
    </section>
  );
}