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

  const skills = [
    { name: 'React', icon: <SiReact className="w-8 h-8 text-[#61DAFB]" /> },
    { name: 'Angular', icon: <SiAngular className="w-8 h-8 text-[#DD0031]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" /> },
    { name: 'Redux Toolkit', icon: <SiRedux className="w-8 h-8 text-[#764ABC]" /> },
    { name: 'HTML5', icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" /> },
    { name: 'CSS3', icon: <SiCss3 className="w-8 h-8 text-[#1572B6]" /> },
    { name: 'SCSS', icon: <SiSass className="w-8 h-8 text-[#CC6699]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="w-8 h-8 text-[#7952B3]" /> },
    { name: 'Material-UI', icon: <SiMui className="w-8 h-8 text-[#007FFF]" /> },
    { name: 'Git', icon: <SiGit className="w-8 h-8 text-[#F05032]" /> },
    { name: 'Docker', icon: <SiDocker className="w-8 h-8 text-[#2496ED]" /> },
    { name: 'Jenkins', icon: <SiJenkins className="w-8 h-8 text-[#D33833]" /> },
    { name: 'Webpack', icon: <SiWebpack className="w-8 h-8 text-[#8DD6F9]" /> },
    { name: 'Vite', icon: <SiVite className="w-8 h-8 text-[#646CFF]" /> },
    { name: 'Jest', icon: <SiJest className="w-8 h-8 text-[#C21325]" /> },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8 text-[#4479A1]" /> },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-3">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-center text-body-primary">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
