interface LoaderProps {
  readonly className?: string;
  readonly size?: 'sm' | 'md' | 'lg';
}

export function Loader({ className, size = 'lg' }: LoaderProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center space-y-8 min-h-screen w-full">
        {}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full animate-progress-bar"></div>
        </div>

        {}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">⚡</span>
            <p className="text-heading-secondary text-xl font-semibold tracking-wide">
              Loading Portfolio
            </p>
            <span className="text-2xl animate-spin-slow">✨</span>
          </div>
          <p className="text-body-secondary text-sm mt-2 opacity-80 animate-pulse">
            Preparing something awesome for you...
          </p>
        </div>
      </div>
    </div>
  );
}
