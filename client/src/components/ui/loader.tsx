interface LoaderProps {
  readonly className?: string;
  readonly size?: 'sm' | 'md' | 'lg';
}

export function Loader({ className, size = 'lg' }: LoaderProps) {
  const progressWidth = size === 'sm' ? 'w-40' : size === 'md' ? 'w-52' : 'w-64';

  return (
    <div
      className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white ${className ?? ''}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.16),transparent_32%)]" />
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-8 px-6">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-3xl border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.22)] backdrop-blur-sm" />
          <div className="absolute inset-3 rounded-2xl border border-white/15 border-t-cyan-300 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-cyan-200">
            S
          </div>
        </div>

        {}
        <div className="animate-fade-in text-center">
          <p className="text-xl font-semibold tracking-tight text-white">Loading portfolio</p>
          <div className={`mt-7 h-1 overflow-hidden rounded-full bg-white/10 ${progressWidth}`}>
            <div className="h-full w-1/2 animate-progress-bar rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_18px_rgba(56,189,248,0.7)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
