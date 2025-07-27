import { type Experience } from '@shared/schema';
import { Briefcase, Code, Laptop } from 'lucide-react';
import { useEffect } from 'react';
import { SCROLL_ANIMATION } from '@shared/constants';

export function Experience() {
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

  const experiences: Experience[] = [
    {
      id: '1',
      position: 'Apps Dev Intmd Programmer Analyst - C11',
      company: 'Citi',
      duration: 'Aug 2022 - Present',
      description: 'Lead front-end development for web applications using React and Redux Toolkit, focusing on state management, performance optimization, and user-centric design. Reduced page load times by 40% through React optimization and led development of a product increasing user engagement by 30%.',
      technologies: ['React', 'Redux Toolkit', 'Reflux', 'TypeScript', 'Java Microservices', 'Oracle', 'Jenkins', 'GIT'],
      icon: 'briefcase'
    },
    {
      id: '2',
      position: 'Software Engineer',
      company: 'NeoSoft Technologies Pvt. Ltd.',
      duration: 'Apr 2020 - Aug 2022',
      description: 'Created dynamic, single-page applications (SPA) using Angular providing seamless experience across devices. Developed reusable UI components with Angular, collaborating with backend teams to integrate Java Microservices and Oracle databases via RESTful APIs.',
      technologies: ['Angular', 'Java Microservices', 'Oracle', 'RESTful APIs', 'Jenkins', 'GIT'],
      icon: 'code'
    },
    {
      id: '3',
      position: 'Front End Web Developer',
      company: 'LearningMate Solutions Pvt. Ltd.',
      duration: 'Oct 2019 - Dec 2020',
      description: 'Developed Front End online course pages using HTML, CSS by migrating content from various sources. Oversaw technical issues and troubleshooting requests to resolve surfaced problems. Multi-tasked across multiple functions and roles to generate project results.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
      icon: 'laptop'
    },
    {
      id: '4',
      position: 'Associate Business Developer',
      company: 'A One Salasar Pvt. Ltd.',
      duration: 'Mar 2019 - Jun 2019',
      description: 'Developed and expanded business by cold calling and follow-up calls to clients. Pitched clients about company services and products while maintaining relationships. Increased customer satisfaction by resolving client issues and maintained energy in fast-paced environment.',
      technologies: ['Business Development', 'Client Relations', 'Communication'],
      icon: 'briefcase'
    }
  ];



  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-slate-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl text-heading-primary mb-4">Work Experience</h2>
          <p className="text-xl text-body-secondary max-w-2xl mx-auto">
            Building exceptional digital experiences across industries with cutting-edge technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative scroll-animate" style={{ animationDelay: `${index * SCROLL_ANIMATION.staggerDelay}s` }}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg card-hover border-l-4 border-primary-solid">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl text-heading-primary mb-2">{experience.position}</h3>
                    <p className="text-lg font-semibold text-primary-solid mb-2">{experience.company}</p>
                    <span className="inline-block px-4 py-1 bg-primary-solid/10 text-primary-solid rounded-full text-sm font-medium">{experience.duration}</span>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-solid to-secondary-solid rounded-full"></div>
                  </div>
                </div>
                <p className="text-body-primary mb-6 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-body-primary rounded-lg text-sm font-medium hover:bg-primary-solid hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-px h-8 bg-gradient-to-b from-primary-solid to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
