import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@shared/constants';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden gradient-animated">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-white/90 font-semibold text-lg">👋 Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/90 font-medium">
                {PERSONAL_INFO.title}
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                {PERSONAL_INFO.title} with {PERSONAL_INFO.experience} years of experience developing responsive web applications using React, Redux Toolkit, Angular, JavaScript, and TypeScript. Skilled in designing user-focused interfaces and integrating RESTful APIs.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white/50 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-6">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative">
              <img 
                src="/attached_assets/20231120_210945_IMG_0457_1753609330229.JPG" 
                alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`} 
                className="rounded-full shadow-2xl w-80 h-80 object-cover border-4 border-white dark:border-slate-800" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
