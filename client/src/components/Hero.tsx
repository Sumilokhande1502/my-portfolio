import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

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
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">👋 Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Alex Johnson
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 font-medium">
                Frontend Developer
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                I craft beautiful, performant web experiences using React, TypeScript, and modern technologies. 5+ years of turning ideas into digital reality.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://github.com/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/alexjohnson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
