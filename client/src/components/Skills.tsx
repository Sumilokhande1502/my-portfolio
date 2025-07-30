/**
 * Skills Component - Displays technical skills organized by category
 * 
 * Features:
 * - Categorized skill display (Frontend, Languages, Styling, Tools)
 * - Scroll-triggered animations for better UX
 * - Responsive grid layout
 * - Brand-colored icons for each technology
 * - Hover effects for interactivity
 */

import { 
  SiReact, 
  SiRedux, 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiJenkins, 
  SiGit, 
  SiMysql,
  SiJest,
  SiDocker,
  SiWebpack,
  SiVite
} from 'react-icons/si';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Skills() {
  // Enable scroll-triggered animations for this component
  useScrollAnimation();

  /**
   * Skills Data Structure
   * - Organized by category for better readability
   * - Each skill has name and brand-colored icon
   * - Icons use official brand colors for authenticity
   * - Small 4x4 icons for clean, minimal design
   */
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'React', icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: 'Angular', icon: <SiAngular className="w-4 h-4 text-[#DD0031]" /> },
        { name: 'Redux Toolkit', icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: 'HTML5', icon: <SiHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: 'CSS3', icon: <SiCss3 className="w-4 h-4 text-[#1572B6]" /> },
      ]
    },
    {
      title: 'Styling & UI',
      skills: [
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
        { name: 'SCSS', icon: <SiSass className="w-4 h-4 text-[#CC6699]" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: 'Material-UI', icon: <SiMui className="w-4 h-4 text-[#007FFF]" /> },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
        { name: 'Docker', icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: 'Jenkins', icon: <SiJenkins className="w-4 h-4 text-[#D33833]" /> },
        { name: 'Webpack', icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" /> },
        { name: 'Vite', icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: 'Jest', icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: 'MySQL', icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
      ]
    }
  ];



  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration skills">Skills & Technologies</h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">
            The tools and technologies I work with every day
          </p>
        </div>

        {/* Skills Grid Layout - Responsive design with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 scroll-animate"
              style={{ 
                // Stagger animation delays for smoother entrance
                animationDelay: `${categoryIndex * 0.1}s` 
              }}
            >
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-heading-secondary mb-4 text-center">
                {category.title}
              </h3>
              
              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    {/* Skill Icon */}
                    <div className="flex-shrink-0">
                      {skill.icon}
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-sm font-medium text-body-primary">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
