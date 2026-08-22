import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PERSONAL_INFO, SOCIAL_LINKS, TEXT } from '@shared/constants';
import { scrollToElement } from '@/utils/helpers';
import { Icon } from '@/components/ui/icon';

export function Hero() {
  useScrollAnimation();

  const handleContactClick = () => {
    scrollToElement('contact', -100);
  };

  const handleProjectsClick = () => {
    scrollToElement('projects', -100);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#050816] text-white"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-light hero-light-cyan" />
        <div className="hero-light hero-light-violet" />
        <div className="hero-grid" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-10 lg:pt-36">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.03fr)_minmax(24rem,0.97fr)] lg:gap-10 xl:gap-20">
          <div className="max-w-2xl">
            <div className="scroll-animate" style={{ animationDelay: '0.1s' }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.08)]">
                <Icon name="wand-magic-sparkles" className="h-3.5 w-3.5 text-cyan-300" />
                Frontend Engineer
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                Hello, I&apos;m
              </p>
              <h1
                id="hero-heading"
                className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[5.8rem]"
              >
                {PERSONAL_INFO.name}
              </h1>
            </div>

            <div className="scroll-animate" style={{ animationDelay: '0.2s' }}>
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xl font-medium text-slate-200 sm:text-2xl">
                <span>{PERSONAL_INFO.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-base font-normal text-slate-400">
                  <Icon name="location-dot" className="h-4 w-4 text-cyan-300" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div
              className="scroll-animate mt-10 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '0.4s' }}
            >
              <button
                onClick={handleProjectsClick}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3.5 text-base font-bold text-slate-950 shadow-[0_18px_45px_rgba(14,165,233,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,165,233,0.4)]"
              >
                {TEXT.hero.ctaView}
                <Icon name="arrow-up" className="h-4 w-4 rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={handleContactClick}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/[0.08]"
              >
                {TEXT.hero.ctaContact}
                <Icon name="envelope" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>

            <div
              className="scroll-animate mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-4"
              style={{ animationDelay: '0.5s' }}
            >
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">05+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">Years building</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">React</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">Primary craft</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">UI</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">User focused</p>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">India</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">Working globally</p>
              </div>
            </div>

            <div className="scroll-animate mt-9 flex items-center gap-3" style={{ animationDelay: '0.6s' }}>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:text-white"
                aria-label={TEXT.hero.socialAria.github}
              >
                <Icon name="github" brand className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:text-white"
                aria-label={TEXT.hero.socialAria.linkedin}
              >
                <Icon name="linkedin" brand className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-violet-300/60 hover:text-white"
                aria-label={TEXT.hero.socialAria.email}
              >
                <Icon name="envelope" className="h-5 w-5" />
              </a>
              <a
                href="#about"
                className="ml-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-cyan-200"
              >
                Scroll to explore
                <Icon name="arrow-down" className="h-4 w-4 rotate-[-45deg] text-cyan-300" />
              </a>
            </div>
          </div>

          <div
            className="scroll-animate relative mx-auto h-[29rem] w-full max-w-[31rem] sm:h-[36rem] lg:h-[40rem]"
            style={{ animationDelay: '0.25s' }}
          >
            <div className="hero-visual-glow" aria-hidden="true" />
            <div className="hero-orbit hero-orbit-primary" aria-hidden="true" />
            <div className="hero-visual-crosshair" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="hero-portrait-frame">
              <div className="hero-portrait-image-wrap">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="Sumit Lokhande, Software Engineer"
                  className="hero-portrait-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-cyan-100/5" />
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-top">
              <Icon name="wand-magic-sparkles" className="h-4 w-4 text-cyan-300" />
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-400">Focused on</p>
                <p className="mt-1 text-sm font-semibold text-white">Product UI</p>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-bottom">
              <Icon name="code" className="h-4 w-4 text-violet-300" />
              <span className="text-sm font-medium text-slate-100">React + TypeScript</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
