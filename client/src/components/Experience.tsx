/**
 * Experience Component - Professional experience showcase
 * 
 * Features:
 * - Clean, simple layout matching deployed version
 * - Professional experience cards with company, role, dates
 * - Technology tags for each position
 * - Responsive design for all screen sizes
 * 
 * Layout matches the deployed portfolio exactly
 */

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

/**
 * Experience data interface
 */
interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

/**
 * Experience data - matches deployed version
 */
const experienceData: ExperienceItem[] = [
  {
    id: 'experience-1',
    company: 'Citi',
    position: 'Apps Dev Intmd Programmer Analyst - C11',
    startDate: '2022-08',
    endDate: undefined, // Current position
    location: 'India',
    description: [
      'Lead front-end development for web applications using React and Redux Toolkit, focusing on state management, performance optimization, and user-centric design.',
      'Reduced page load times by 40% through React optimization and led development of a product increasing user engagement by 30%.'
    ],
    technologies: ['React', 'Redux Toolkit', 'Reflux', 'TypeScript', 'Java Microservices', 'Oracle', 'Jenkins', 'GIT']
  },
  {
    id: 'experience-2',
    company: 'NeoSoft Technologies Pvt. Ltd.',
    position: 'Software Engineer',
    startDate: '2020-04',
    endDate: '2022-08',
    location: 'India',
    description: [
      'Created dynamic, single-page applications (SPA) using Angular providing seamless experience across devices.',
      'Developed reusable UI components with Angular, collaborating with backend teams to integrate Java Microservices and Oracle databases via RESTful APIs.'
    ],
    technologies: ['Angular', 'RESTful APIs', 'GIT', 'Gulp', 'TypeScript']
  },
  {
    id: 'experience-3',
    company: 'LearningMate Solutions Pvt. Ltd.',
    position: 'Front End Web Developer',
    startDate: '2019-10',
    endDate: '2020-12',
    location: 'India',
    description: [
      'Developed Front End online course pages using HTML, CSS by migrating content from various sources.',
      'Oversaw technical issues and troubleshooting requests to resolve surfaced problems.',
      'Multi-tasked across multiple functions and roles to generate project results.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Frontend Development']
  },
  {
    id: 'experience-4',
    company: 'A One Salasar Pvt. Ltd.',
    position: 'Associate Business Developer',
    startDate: '2019-03',
    endDate: '2019-06',
    location: 'India',
    description: [
      'Developed and expanded business by cold calling and follow-up calls to clients.',
      'Pitched clients about company services and products while maintaining relationships.',
      'Increased customer satisfaction by resolving client issues and maintained energy in fast-paced environment.'
    ],
    technologies: ['Business Development', 'Client Relations', 'Communication']
  }
];

/**
 * Experience section component
 * @returns JSX element containing the experience showcase
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

  return (
    <section 
      id="experience" 
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration experience">
            Work Experience
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">
            Building exceptional digital experiences across industries with cutting-edge technologies
          </p>
        </div>

        {/* Experience Cards - Simple Layout matching deployed version */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-heading-primary mb-2">
                  {experience.position}
                </h3>
                <h4 className="text-xl font-semibold text-accent-emphasis mb-3">
                  {experience.company}
                </h4>
                
                {/* Date */}
                <div className="text-body-secondary">
                  <span className="font-medium">
                    {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                  </span>
                </div>
              </div>

              {/* Job description */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-body-primary flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies used */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}