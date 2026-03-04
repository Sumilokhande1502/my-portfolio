import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PERSONAL_INFO, SOCIAL_LINKS, TEXT } from '@shared/constants';
import { scrollToElement } from '@/utils/helpers';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

export function Hero() {
  useScrollAnimation();

  const handleContactClick = () => {
    scrollToElement('contact', -100);
  };

  const handleProjectsClick = () => {
    scrollToElement('projects', -100);
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:bg-gradient-to-br dark:from-white/10 dark:via-gray-700/20 dark:to-gray-900/30">
      {}
      <div className="absolute inset-0 overflow-hidden">
        {}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl dark:hidden"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl dark:hidden"></div>
        {}
        <div className="absolute -top-40 -right-40 w-80 h-80 hidden dark:block bg-gradient-to-br from-white/10 via-gray-700/20 to-gray-900/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 hidden dark:block bg-gradient-to-br from-white/10 via-gray-700/20 to-gray-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center min-h-screen py-20">
          {}
          <div className="text-left">
            {}
            <div className="scroll-animate" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white dark:text-slate-100 mb-6 hidden md:block">
                {PERSONAL_INFO.name}
              </h2>
            </div>

            {}
            <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 dark:text-slate-200 mb-8">
                {PERSONAL_INFO.title}
              </h2>
            </div>

            {}
            <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl text-white/90 dark:text-slate-200 mb-12 leading-relaxed font-light">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {}
            <div
              className="scroll-animate flex flex-col sm:flex-row gap-4 mb-8"
              style={{ animationDelay: '0.4s' }}
            >
              {}
              <button
                onClick={handleProjectsClick}
                className="inline-flex items-center px-8 py-4 bg-white/20 dark:bg-white/25 text-white dark:text-white rounded-lg hover:bg-white/30 dark:hover:bg-white/35 transition-all duration-200 font-medium text-lg shadow-lg backdrop-blur-sm"
              >
                {TEXT.hero.ctaView}
              </button>

              {}
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 dark:border-white/40 text-white dark:text-white hover:bg-white/20 dark:hover:bg-white/25 rounded-lg transition-all duration-200 font-medium text-lg shadow-lg backdrop-blur-sm"
              >
                {TEXT.hero.ctaContact}
                <HiOutlineMail className="ml-2 w-5 h-5" aria-hidden />
              </button>
            </div>

            {}
            <div className="scroll-animate flex space-x-4" style={{ animationDelay: '0.5s' }}>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label={TEXT.hero.socialAria.github}
              >
                <SiGithub className="w-6 h-6" aria-hidden />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label={TEXT.hero.socialAria.linkedin}
              >
                <SiLinkedin className="w-6 h-6" aria-hidden />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-white/70 dark:text-white/70 hover:text-white dark:hover:text-white transition-colors duration-200"
                aria-label={TEXT.hero.socialAria.email}
              >
                <HiOutlineMail className="w-6 h-6" aria-hidden />
              </a>
            </div>
          </div>

          {}
          <div
            className="scroll-animate flex justify-center mt-8 lg:mt-0"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-300 shadow-2xl">
                <img
                  src="/20231120_210945_IMG_0457_1753609330229.JPG"
                  alt="Sumit Lokhande - Frontend Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
