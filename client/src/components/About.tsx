import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TEXT, MONTHS } from '@shared/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { Icon } from '@/components/ui/icon';

export function About() {
  useScrollAnimation();

  const getResumeUpdateDate = (): string => {
    const now = new Date();
    return `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  };

  return (
    <section
      id="about"
      className="section-transition relative py-10 text-white sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center stagger-child">
          <SectionHeading
            id="about-heading"
            eyebrow="About Me"
            title={TEXT.about.heading}
            description={TEXT.about.subheading}
            tone="cyan"
            titleClassName="text-4xl sm:text-5xl lg:text-6xl"
            descriptionClassName="max-w-2xl"
          />
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="scroll-animate stagger-child">
            <div className="space-y-8 text-center">
              <div className="mx-auto max-w-3xl space-y-6">
                {TEXT.about.paragraphs.map((p) => (
                  <p key={p} className="text-lg leading-8 text-slate-300">
                    {p}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                      <Icon name="check" className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {TEXT.about.highlights[0].title}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {TEXT.about.highlights[0].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                      <Icon name="bolt" className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {TEXT.about.highlights[1].title}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {TEXT.about.highlights[1].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                      <Icon name="users" className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {TEXT.about.highlights[2].title}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {TEXT.about.highlights[2].subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-300">
                      <Icon name="heart" className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {TEXT.about.highlights[3].title}
                      </h4>
                      <p className="text-sm text-slate-300">
                        {TEXT.about.highlights[3].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="/resume.pdf"
                  download="Sumit_Lokhande_Resume.pdf"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_20px_40px_rgba(59,130,246,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_rgba(59,130,246,0.45)]"
                >
                  <Icon name="download" className="mr-2 h-5 w-5" />
                  {TEXT.about.downloadLabel}
                </a>
                <p className="mt-2 text-sm text-slate-300">
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
