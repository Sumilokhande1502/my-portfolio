import { type Skill } from '@shared/schema';
import { 
  SiReact, 
  SiRedux, 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiJenkins, 
  SiGit, 
  SiMysql,
  SiJest,
  SiSpring,
  SiDocker,
  SiWebpack,
  SiVite
} from 'react-icons/si';
import { FaCode, FaDatabase, FaCog } from 'react-icons/fa';
import { useEffect } from 'react';
import { SCROLL_ANIMATION } from '@shared/constants';

export function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { 
      threshold: SCROLL_ANIMATION.threshold, 
      rootMargin: SCROLL_ANIMATION.rootMargin 
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: <FaCode className="w-8 h-8 text-primary-solid" />,
      color: 'primary',
      skills: [
        { name: 'React', icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
        { name: 'Redux Toolkit', icon: <SiRedux className="w-6 h-6 text-[#764ABC]" /> },
        { name: 'Angular', icon: <SiAngular className="w-6 h-6 text-[#DD0031]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
        { name: 'HTML5', icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" /> },
        { name: 'CSS3', icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" /> },
        { name: 'Reflux', icon: <FaCode className="w-6 h-6 text-[#00D4FF]" /> },
      ]
    },
    {
      title: 'Backend & Database',
      icon: <FaDatabase className="w-8 h-8 text-secondary-solid" />,
      color: 'secondary',
      skills: [
        { name: 'Java Microservices', icon: <SiSpring className="w-6 h-6 text-[#6DB33F]" /> },
        { name: 'RESTful APIs', icon: <FaCode className="w-6 h-6 text-secondary-solid" /> },
        { name: 'SQL', icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
      ]
    },
    {
      title: 'DevOps & Build Tools',
      icon: <FaCog className="w-8 h-8 text-accent-solid" />,
      color: 'accent',
      skills: [
        { name: 'Docker', icon: <SiDocker className="w-6 h-6 text-[#2496ED]" /> },
        { name: 'Jenkins', icon: <SiJenkins className="w-6 h-6 text-[#D33833]" /> },
        { name: 'CI/CD', icon: <FaCog className="w-6 h-6 text-accent-solid" /> },
        { name: 'Git', icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
        { name: 'Webpack', icon: <SiWebpack className="w-6 h-6 text-[#8DD6F9]" /> },
        { name: 'Vite', icon: <SiVite className="w-6 h-6 text-[#646CFF]" /> },
      ]
    },
    {
      title: 'Testing & Quality',
      icon: <FaCode className="w-8 h-8 text-primary-solid" />,
      color: 'primary',
      skills: [
        { name: 'Jest', icon: <SiJest className="w-6 h-6 text-[#C21325]" /> },
        { name: 'Unit Testing', icon: <FaCode className="w-6 h-6 text-primary-solid" /> },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg card-hover scroll-animate`} style={{ animationDelay: `${index * SCROLL_ANIMATION.staggerDelay}s` }}>
              <div className="flex items-center mb-6">
                <div className="mr-4">{category.icon}</div>
                <h3 className="text-xl text-heading-secondary">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:shadow-md transition-all duration-200">
                    <div className="mb-3">
                      {skill.icon}
                    </div>
                    <span className="text-body-primary font-medium text-center text-sm">{skill.name}</span>
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
