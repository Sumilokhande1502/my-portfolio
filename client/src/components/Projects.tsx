import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  SOCIAL_LINKS,
  TEXT,
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  type Project,
} from '@shared/constants';
import { SectionHeading } from '@/components/ui/section-heading';
import { Icon } from '@/components/ui/icon';

const categories = PROJECT_CATEGORIES.map((c) => ({
  ...c,
  count:
    c.id === 'all' ? PROJECTS_DATA.length : PROJECTS_DATA.filter((p) => p.category === c.id).length,
}));

export function Projects() {
  useScrollAnimation();

  return (
    <section
      id="projects"
      className="section-transition relative py-10 text-white sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.12),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center stagger-child">
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected Work"
            title={TEXT.projects.heading}
            description={TEXT.projects.intro}
            tone="amber"
            titleClassName="text-4xl sm:text-5xl lg:text-6xl"
          />
        </div>

        <div className="mb-16 text-center">
          <div className="project-card group mx-auto max-w-2xl cursor-pointer rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">
              🚧
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
              {TEXT.projects.previewTitle}
            </h3>
            <p className="mb-6 leading-relaxed text-slate-300">
              {TEXT.projects.previewDescription}
            </p>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_20px_45px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_50px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10">{TEXT.projects.previewCTA}</span>
              <Icon
                name="arrow-up-right-from-square"
                className="relative z-10 ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
