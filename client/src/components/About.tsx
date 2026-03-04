import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TEXT, MONTHS } from '@shared/constants';
import { FiCheck, FiZap, FiUsers, FiHeart, FiDownload } from 'react-icons/fi';

export function About() {
  useScrollAnimation();

  const getResumeUpdateDate = (): string => {
    const now = new Date();
    return `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration about">
            {TEXT.about.heading}
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary">{TEXT.about.subheading}</p>
        </div>

        {}
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate stagger-child">
            <div className="space-y-8 text-center">
              {}
              <div className="space-y-6 max-w-3xl mx-auto">
                {TEXT.about.paragraphs.map((p) => (
                  <p key={p} className="text-body-primary leading-relaxed text-lg">
                    {p}
                  </p>
                ))}
              </div>

              {}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">
                        {TEXT.about.highlights[0].title}
                      </h4>
                      <p className="text-sm text-body-secondary">
                        {TEXT.about.highlights[0].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <FiZap className="w-5 h-5 text-secondary" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">
                        {TEXT.about.highlights[1].title}
                      </h4>
                      <p className="text-sm text-body-secondary">
                        {TEXT.about.highlights[1].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <FiUsers className="w-5 h-5 text-accent" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">
                        {TEXT.about.highlights[2].title}
                      </h4>
                      <p className="text-sm text-body-secondary">
                        {TEXT.about.highlights[2].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-warm/10 rounded-lg flex items-center justify-center">
                      <FiHeart className="w-5 h-5 text-orange-500" aria-hidden />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading-primary">
                        {TEXT.about.highlights[3].title}
                      </h4>
                      <p className="text-sm text-body-secondary">
                        {TEXT.about.highlights[3].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="pt-6">
                <a
                  href="/resume.pdf"
                  download="Sumit_Lokhande_Resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FiDownload className="mr-2 w-5 h-5" aria-hidden />
                  {TEXT.about.downloadLabel}
                </a>
                <p className="text-sm text-body-secondary mt-2">
                  {TEXT.about.updatedPrefix}
                  {getResumeUpdateDate()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
