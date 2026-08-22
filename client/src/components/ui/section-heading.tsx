import { cn } from '@/lib/utils';

type SectionTone = 'cyan' | 'violet' | 'amber' | 'emerald' | 'rose';

const toneStyles: Record<
  SectionTone,
  {
    dot: string;
    line: string;
  }
> = {
  cyan: {
    dot: 'bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]',
    line: 'from-cyan-400/0 via-cyan-400/70 to-cyan-400/0',
  },
  violet: {
    dot: 'bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.7)]',
    line: 'from-violet-400/0 via-violet-400/70 to-violet-400/0',
  },
  amber: {
    dot: 'bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.7)]',
    line: 'from-amber-400/0 via-amber-400/70 to-amber-400/0',
  },
  emerald: {
    dot: 'bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.7)]',
    line: 'from-emerald-400/0 via-emerald-400/70 to-emerald-400/0',
  },
  rose: {
    dot: 'bg-rose-400 shadow-[0_0_18px_rgba(251,113,133,0.7)]',
    line: 'from-rose-400/0 via-rose-400/70 to-rose-400/0',
  },
};

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: SectionTone;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = 'cyan',
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const styles = toneStyles[tone];

  return (
    <div className={cn('mx-auto max-w-4xl', className)}>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-300 shadow-[0_20px_45px_rgba(15,23,42,0.2)] backdrop-blur-xl">
        <span className={cn('h-2 w-2 rounded-full', styles.dot)} aria-hidden />
        <span>{eyebrow}</span>
      </div>

      <h2
        id={id}
        className={cn(
          'text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl',
          titleClassName
        )}
      >
        {title}
      </h2>

      <div className="mt-5 flex items-center justify-center gap-3" aria-hidden>
        <span className={cn('h-px w-12 bg-gradient-to-r', styles.line)} />
        <span className={cn('h-2.5 w-2.5 rounded-full', styles.dot)} />
        <span className={cn('h-px w-12 bg-gradient-to-r', styles.line)} />
      </div>

      {description ? (
        <p className={cn('mx-auto mt-5 max-w-3xl text-xl text-slate-300', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
