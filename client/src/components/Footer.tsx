import { SiGithub, SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { SOCIAL_LINKS, PERSONAL_INFO, TEXT } from '@shared/constants';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{PERSONAL_INFO.name}</h3>
            <p className="text-slate-300 leading-relaxed">© 2025 All rights reserved</p>
          </div>
          <div className="md:text-right">
            <h4 className="font-semibold mb-4 text-white">{TEXT.footer.connect}</h4>
            <div className="flex space-x-4 md:justify-end">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <SiGithub className="w-6 h-6" aria-hidden />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-6 h-6" aria-hidden />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <HiOutlineMail className="w-6 h-6" aria-hidden />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">{TEXT.footer.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
