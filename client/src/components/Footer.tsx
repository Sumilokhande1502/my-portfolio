import { SOCIAL_LINKS, PERSONAL_INFO, TEXT } from '@shared/constants';
import { Icon } from '@/components/ui/icon';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.14),transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
              Portfolio
            </p>
            <h3 className="text-3xl font-black tracking-tight text-white">{PERSONAL_INFO.name}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">{TEXT.footer.rights}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:text-right">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              {TEXT.footer.connect}
            </h4>

            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon name="github" brand className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-500/10 hover:text-white hover:shadow-lg hover:shadow-sky-500/10"
              >
                <Icon name="linkedin" brand className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400 hover:bg-violet-500/10 hover:text-white hover:shadow-lg hover:shadow-violet-500/10"
              >
                <Icon name="envelope" className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-400">{TEXT.footer.crafted}</p>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Built with care</span>
        </div>
      </div>
    </footer>
  );
}
