import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TEXT, MONTHS, EXPERIENCE_DATA } from '@shared/constants';
import citiLogo from '@assets/image_1753891620825.png';
import neosoftLogo from '@assets/image_1753891886557.png';
import learningmateLogo from '@assets/image_1753892028905.png';
import aoneLogo from '@assets/image_1753892111185.png';
import { SectionHeading } from '@/components/ui/section-heading';
import { Icon } from '@/components/ui/icon';

const logoMap: Record<string, React.ReactNode> = {
  Citi: (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img src={citiLogo} alt="Citi" className="w-full h-full object-contain" />
    </div>
  ),
  'NeoSoft Technologies Pvt. Ltd.': (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img src={neosoftLogo} alt="NeoSoft Technologies" className="w-full h-full object-contain" />
    </div>
  ),
  'LearningMate Solutions Pvt. Ltd.': (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img
        src={learningmateLogo}
        alt="LearningMate Solutions"
        className="w-full h-full object-contain"
      />
    </div>
  ),
  'A One Salasar Pvt. Ltd.': (
    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
      <img src={aoneLogo} alt="A One Salasar" className="w-full h-full object-contain" />
    </div>
  ),
};

type SharedExperience = (typeof EXPERIENCE_DATA)[number];

export function Experience() {
  useScrollAnimation();

  const formatDate = (dateString: string): string => {
    const [year, month] = dateString.split('-');

    const idx = Number.parseInt(month) - 1;
    const short = MONTHS[idx]?.slice(0, 3) ?? '';
    return `${short} ${year}`;
  };

  return (
    <section
      id="experience"
      className="section-transition relative py-10 text-white sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),transparent_24%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.12),transparent_32%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-16 stagger-child">
          <SectionHeading
            id="experience-heading"
            eyebrow="Career"
            title={TEXT.experience.heading}
            description={TEXT.experience.intro}
            tone="emerald"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl"
            descriptionClassName="px-4 text-lg sm:text-xl"
          />
        </div>

        <div className="space-y-8">
          {EXPERIENCE_DATA.map((experience: SharedExperience) => (
            <div
              key={experience.id}
              className="stagger-child rounded-[2rem] border border-white/10 bg-slate-900/65 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6 flex items-start gap-4">
                {logoMap[experience.company] && (
                  <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-2">{logoMap[experience.company]}</div>
                )}

                <div className="flex flex-1 items-start justify-between">
                  <div className="w-full sm:w-auto">
                    <h3 className="mb-2 text-sm font-bold leading-tight text-white sm:text-2xl">
                      {experience.position}
                    </h3>
                    <h4 className="text-xs font-semibold text-cyan-300 sm:text-xl">
                      {experience.company}
                    </h4>
                    {}
                    <div className="block w-full sm:hidden">
                      <span className="mt-1 block text-right text-xs font-medium text-slate-300">
                        {formatDate(experience.startDate)} -{' '}
                        {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                      </span>
                    </div>
                  </div>
                  {}
                  <div className="ml-4 hidden text-right text-slate-300 sm:block">
                    <span className="text-base font-medium">
                      {formatDate(experience.startDate)} -{' '}
                      {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="space-y-3">
                  {experience.description.map((item: string) => (
                    <div
                      key={item}
                      className="flex items-start text-sm text-slate-200 sm:text-base"
                    >
                      <span className="mr-3 mt-0.5 flex-shrink-0 text-cyan-300">
                        <Icon name="chevron-right" className="h-5 w-5" />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-200 sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-100 transition-colors duration-200 hover:bg-cyan-500/20"
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
    </section>
  );
}
