/**
 * Experience Component - Professional experience showcase
 * 
 * Features:
 * - Clean, simple layout matching deployed version
 * - Professional experience cards with company, role, dates
 * - Technology tags for each position
 * - Responsive design for all screen sizes
 * - Scroll animations for smooth entrance effects
 * 
 * Layout matches the deployed portfolio exactly
 */

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';
import citiLogo from '@assets/image_1753891620825.png';
import neosoftLogo from '@assets/image_1753891886557.png';
import learningmateLogo from '@assets/image_1753892028905.png';
import aoneLogo from '@assets/image_1753892111185.png';

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
  logo?: React.ReactNode;
}

/**
 * Experience data - matches deployed version
 */
const experienceData: ExperienceItem[] = [
  {
    id: 'experience-1',
    company: 'Citi',
    position: 'Senior Software Engineer',
    startDate: '2022-08',
    endDate: undefined, // Current position
    location: 'India',
    description: [
      'Engineering high-performance React.js applications with Redux Toolkit, implementing scalable component architectures, and accelerating product delivery through modern development practices.'
    ],
    technologies: ['React', 'Redux Toolkit', 'Reflux', 'JavaScript', 'TypeScript', 'Java Microservices', 'Oracle', 'Jenkins', 'GIT'],
    logo: (
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
        <img 
          src={citiLogo} 
          alt="Citi" 
          className="w-full h-full object-contain"
        />
      </div>
    )
  },
  {
    id: 'experience-2',
    company: 'NeoSoft Technologies Pvt. Ltd.',
    position: 'Software Engineer',
    startDate: '2020-04',
    endDate: '2022-08',
    location: 'India',
    description: [
      'Built dynamic single-page applications with Angular and developed reusable UI components integrated with Java Microservices via RESTful APIs.'
    ],
    technologies: ['Angular', 'RESTful APIs', 'GIT', 'Grunt', 'TypeScript'],
    logo: (
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
        <img 
          src={neosoftLogo} 
          alt="NeoSoft Technologies" 
          className="w-full h-full object-contain"
        />
      </div>
    )
  },
  {
    id: 'experience-3',
    company: 'LearningMate Solutions Pvt. Ltd.',
    position: 'Front End Web Developer',
    startDate: '2019-10',
    endDate: '2020-12',
    location: 'India',
    description: [
      'Developed responsive online course pages using HTML, CSS, and JavaScript while providing technical support and troubleshooting.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
    logo: (
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
        <img 
          src={learningmateLogo} 
          alt="LearningMate Solutions" 
          className="w-full h-full object-contain"
        />
      </div>
    )
  },
  {
    id: 'experience-4',
    company: 'A One Salasar Pvt. Ltd.',
    position: 'Associate Business Developer',
    startDate: '2019-03',
    endDate: '2019-06',
    location: 'India',
    description: [
      'Expanded business through strategic outreach and maintained strong client relationships while effectively communicating company services.'
    ],
    technologies: ['Business Development', 'Client Relations', 'Communication'],
    logo: (
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
        <img 
          src={aoneLogo} 
          alt="A One Salasar" 
          className="w-full h-full object-contain"
        />
      </div>
    )
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
      className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 stagger-child">
          <h2 className="text-3xl sm:text-4xl text-heading-primary mb-4 section-heading-decoration experience">
            Work Experience
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-lg sm:text-xl text-body-secondary px-4">
            5+ years delivering scalable web solutions across diverse industries
          </p>
        </div>

        {/* Experience Cards - Simple Layout matching deployed version */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div 
              key={experience.id}
              className="experience-card bg-white dark:bg-slate-800 rounded-lg p-4 sm:p-8 shadow-lg stagger-child"
            >
              
              {/* Header with Logo and Date */}
              <div className="flex items-start gap-4 mb-6">
                {/* Company Logo */}
                {experience.logo && (
                  <div className="flex-shrink-0">
                    {experience.logo}
                  </div>
                )}
                
                {/* Experience Details */}
                <div className="flex-1 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-heading-primary mb-2 leading-tight">
                      {experience.position}
                    </h3>
                    <h4 className="text-base sm:text-xl font-semibold text-accent-emphasis">
                      {experience.company}
                    </h4>
                  </div>
                  
                  {/* Date on the right */}
                  <div className="text-body-secondary text-right ml-4">
                    <span className="font-medium text-sm sm:text-base">
                      {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Job description */}
              <div className="mb-6">
                <div className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-body-primary flex items-start">
                      <span className="text-primary mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
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