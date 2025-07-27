import { type Experience } from '@shared/schema';
import { Briefcase, Code, Laptop } from 'lucide-react';

export function Experience() {
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-white" />;
      case 'code':
        return <Code className="w-6 h-6 text-white" />;
      case 'laptop':
        return <Laptop className="w-6 h-6 text-white" />;
      default:
        return <Briefcase className="w-6 h-6 text-white" />;
    }
  };

  const getIconColor = (index: number) => {
    const colors = ['gradient-primary', 'gradient-secondary', 'gradient-accent'];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            My professional journey in frontend development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start space-x-6">
                <div className={`hidden md:flex items-center justify-center w-16 h-16 ${getIconColor(index)} rounded-full border-4 border-white dark:border-slate-900 relative z-10`}>
                  {getIcon(experience.icon)}
                </div>
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.position}</h3>
                      <p className="font-medium text-primary">{experience.company}</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{experience.duration}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`px-3 py-1 ${getIconColor(index).replace('bg-', 'bg-').replace('bg-', 'bg-').replace('primary', 'primary/10').replace('secondary', 'secondary/10').replace('accent', 'accent/10')} ${getIconColor(index).replace('bg-', 'text-')} text-sm rounded-full`}
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
      </div>
    </section>
  );
}
