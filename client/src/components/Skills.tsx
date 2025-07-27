import { type Skill } from '@shared/schema';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: '⚛️',
      color: 'primary',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Redux Toolkit', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 88 },
      ]
    },
    {
      title: 'Core Technologies',
      icon: '🗄️',
      color: 'secondary',
      skills: [
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'JSON', level: 88 },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '⚙️',
      color: 'accent',
      skills: [
        { name: 'Jenkins', level: 82 },
        { name: 'GIT', level: 90 },
        { name: 'SQL', level: 75 },
        { name: 'Unit Testing', level: 80 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary';
      case 'secondary':
        return 'text-secondary bg-secondary';
      case 'accent':
        return 'text-accent bg-accent';
      default:
        return 'text-primary bg-primary';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            The tools and technologies I work with every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">{skill.name}</span>
                    <div className="w-24 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className={`${getColorClasses(category.color)} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
