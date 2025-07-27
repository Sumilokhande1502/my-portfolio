import { type Experience } from '@shared/schema';
import { Briefcase, Code, Laptop } from 'lucide-react';

export function Experience() {
  const experiences: Experience[] = [
    {
      id: '1',
      position: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      duration: '2022 - Present',
      description: 'Lead frontend development for enterprise web applications serving 100k+ users. Architected and implemented scalable React applications with TypeScript, Redux Toolkit, and modern tooling. Mentored junior developers and established coding standards.',
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Next.js', 'AWS'],
      icon: 'briefcase'
    },
    {
      id: '2',
      position: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      duration: '2020 - 2022',
      description: 'Developed responsive web applications using React, JavaScript, and modern CSS frameworks. Collaborated with design and backend teams to deliver pixel-perfect user interfaces. Optimized application performance and implemented accessibility best practices.',
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Jest'],
      icon: 'code'
    },
    {
      id: '3',
      position: 'Junior Web Developer',
      company: 'StartupLab',
      duration: '2019 - 2020',
      description: 'Built and maintained company websites and landing pages. Gained experience with HTML, CSS, JavaScript, and basic React development. Worked closely with designers to implement mockups and prototypes.',
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Git', 'Figma'],
      icon: 'laptop'
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
    const colors = ['bg-primary', 'bg-secondary', 'bg-accent'];
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
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.position}</h3>
                      <p className={`font-medium ${getIconColor(index).replace('bg-', 'text-')}`}>{experience.company}</p>
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
