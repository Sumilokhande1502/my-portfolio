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
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit, 
  SiJest,
  SiWebpack,
  SiJenkins
} from 'react-icons/si';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Skills() {
  // Enable scroll-triggered animations for this component
  useScrollAnimation();

  /**
   * Skills Data Structure - Matching the UI template design
   * - Three main categories: Frontend, Backend, DevOps & Tools
   * - Clean, simple layout with brand-colored icons
   * - Each skill has name and appropriately sized icon
   */
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
        { name: 'Angular', icon: <SiAngular className="w-5 h-5 text-[#DD0031]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" /> },
        { name: 'HTML', icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
        { name: 'CSS', icon: <SiCss3 className="w-5 h-5 text-[#1572B6]" /> },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
        { name: 'Express', icon: <SiExpress className="w-5 h-5 text-slate-600 dark:text-slate-300" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
        { name: 'Webpack', icon: <SiWebpack className="w-5 h-5 text-[#8DD6F9]" /> },
        { name: 'Jenkins', icon: <SiJenkins className="w-5 h-5 text-[#D33833]" /> },
        { name: 'Jest', icon: <SiJest className="w-5 h-5 text-[#C21325]" /> },
        { name: 'CI/CD', icon: <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center text-white text-xs font-bold">⚡</div> },
      ]
    }
  ];



  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-900 section-transition">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration skills">Skills & Technologies</h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">
            The tools and technologies I work with every day
          </p>
        </div>

        {/* Skills Layout - Three separate cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-heading-primary border-b border-slate-200 dark:border-slate-600 pb-3 mb-6">
                {category.title}
              </h3>
              
              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-2"
                  >
                    {/* Skill Icon */}
                    <div className="flex-shrink-0">
                      {skill.icon}
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-sm text-body-primary">
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