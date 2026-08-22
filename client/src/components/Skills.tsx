import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { SKILL_CATEGORIES } from '@shared/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { Icon } from '@/components/ui/icon';

type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export function Skills() {
  useScrollAnimation();

  const iconMap: Record<string, { name: string; brand?: boolean; className: string }> = {
    React: { name: 'react', brand: true, className: 'h-5 w-5 text-[#61DAFB]' },
    Angular: { name: 'angular', brand: true, className: 'h-5 w-5 text-[#DD0031]' },
    JavaScript: { name: 'js', brand: true, className: 'h-5 w-5 text-[#F7DF1E]' },
    TypeScript: { name: 'typescript', brand: true, className: 'h-5 w-5 text-[#3178C6]' },
    HTML: { name: 'html5', brand: true, className: 'h-5 w-5 text-[#E34F26]' },
    CSS: { name: 'css3-alt', brand: true, className: 'h-5 w-5 text-[#1572B6]' },
    'Node.js': { name: 'node-js', brand: true, className: 'h-5 w-5 text-[#339933]' },
    Express: { name: 'server', className: 'h-5 w-5 text-slate-300' },
    MongoDB: { name: 'database', className: 'h-5 w-5 text-[#47A248]' },
    Git: { name: 'git-alt', brand: true, className: 'h-5 w-5 text-[#F05032]' },
    Webpack: { name: 'cubes', className: 'h-5 w-5 text-[#8DD6F9]' },
    Jenkins: { name: 'jenkins', brand: true, className: 'h-5 w-5 text-[#D33833]' },
    Jest: { name: 'vial', className: 'h-5 w-5 text-[#C21325]' },
    Storybook: { name: 'storybook', brand: true, className: 'h-5 w-5 text-[#FF4785]' },
    Zod: { name: 'cube', className: 'h-5 w-5 text-[#2F74C0]' },
    Zustand: { name: 'circle-nodes', className: 'h-5 w-5 text-[#00C7B7]' },
    'CI/CD': { name: 'bolt', className: 'h-5 w-5 text-orange-300' },
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-transition relative py-10 text-white sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.13),transparent_24%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center stagger-child">
          <SectionHeading
            id="skills-heading"
            eyebrow="Toolkit"
            title="Skills & Technologies"
            description="The tools and technologies I work with every day"
            tone="violet"
            descriptionClassName="max-w-3xl"
          />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {SKILL_CATEGORIES.map((category: SkillCategory) => (
            <section
              key={category.title}
              aria-labelledby={`skills-${category.title.replaceAll(/\s+/g, '-').toLowerCase()}-title`}
              className="scroll-animate rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3
                id={`skills-${category.title.replaceAll(/\s+/g, '-').toLowerCase()}-title`}
                className="mb-6 border-b border-white/10 pb-3 text-xl font-bold text-white"
              >
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skillName) => (
                  <li
                    key={skillName}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-2.5 text-slate-200 transition-all duration-200 hover:border-cyan-400/40 hover:bg-slate-800/80"
                  >
                    <div className="flex-shrink-0" aria-hidden="true">
                      <Icon
                        {...(iconMap[skillName] ?? { name: 'code', className: 'h-5 w-5 text-slate-300' })}
                      />
                    </div>

                    <span className="text-sm text-slate-200">{skillName}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
