import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@shared/constants';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{PERSONAL_INFO.name}</h3>
            <p className="text-slate-300 leading-relaxed">
              {PERSONAL_INFO.title} crafting exceptional web experiences with React, Redux Toolkit, Angular, and modern technologies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4H2C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6C24 4.9 23.1 4 22 4zM22 8l-10 6L2 8V6l10 6 10-6V8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center space-y-2">
          <p className="text-slate-400">© 2025 All rights reserved</p>
          <p className="text-slate-400">Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
