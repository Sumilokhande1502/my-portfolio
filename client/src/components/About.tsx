import { Download } from 'lucide-react';
import { PERSONAL_INFO } from '@shared/constants';

export function About() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-heading-primary mb-4">About Me</h2>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto">
            Passionate about creating exceptional user experiences through clean code and thoughtful design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-body-primary">
              I'm a <span className="text-accent-emphasis">{PERSONAL_INFO.title}</span> with <span className="text-accent-emphasis">{PERSONAL_INFO.experience} years</span> of experience developing responsive web applications using React, Redux Toolkit, Angular, JavaScript, and TypeScript. I have proven expertise in designing user-focused interfaces, integrating RESTful APIs with frontend components, and working in Agile environments.
            </p>
            <p className="text-lg text-body-primary">
              I'm skilled in version control and DevOps practices using Jenkins and GIT to streamline deployment and maintain code integrity. I believe in creating optimized, user-centric applications that deliver exceptional performance and user experience.
            </p>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleResumeDownload}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
              <span className="text-slate-500 dark:text-slate-400">• Updated January 2025</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Modern web development setup" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Code editor with TypeScript" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
