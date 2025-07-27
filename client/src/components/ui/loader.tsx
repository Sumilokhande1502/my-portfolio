import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Loader({ className, size = "md" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-6">
        {/* Animated spinner with multiple rings */}
        <div className="relative">
          <div className={cn(
            "animate-spin rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-primary-solid",
            sizeClasses[size],
            className
          )}></div>
          <div className={cn(
            "absolute inset-2 animate-spin rounded-full border-2 border-slate-100 dark:border-slate-600 border-r-secondary-solid",
            "animate-pulse",
            className
          )} style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Animated text content */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-heading-primary mb-2 animate-pulse">
            Sumit Lokhande
          </h2>
          <div className="flex items-center space-x-1">
            <p className="text-body-secondary">Loading portfolio</p>
            <div className="flex space-x-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}