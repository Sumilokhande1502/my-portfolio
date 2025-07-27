import { cn } from "@/lib/utils"
import { LOADER_COLORS, ANIMATION_CONSTANTS } from "@shared/constants"

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
        {/* Enhanced animated spinner with multiple colorful rings */}
        <div className="relative">
          {/* Outer ring - primary color */}
          <div className={cn(
            `animate-spin rounded-full border-4 border-transparent ${LOADER_COLORS.rings.outer}`,
            sizeClasses[size],
            className
          )} style={{ animationDuration: ANIMATION_CONSTANTS.durations.spin }}></div>
          
          {/* Middle ring - secondary color */}
          <div className={cn(
            `absolute inset-1 animate-spin rounded-full border-3 border-transparent ${LOADER_COLORS.rings.middle}`,
            className
          )} style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          
          {/* Inner ring - accent color */}
          <div className={cn(
            `absolute inset-3 animate-spin rounded-full border-2 border-transparent ${LOADER_COLORS.rings.inner}`,
            className
          )} style={{ animationDuration: '2s' }}></div>
          
          {/* Center dot with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn("w-3 h-3 rounded-full animate-pulse", LOADER_COLORS.center)}></div>
          </div>
        </div>
        
        {/* Animated text content */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center space-x-1">
            <p className="text-body-secondary text-lg font-medium">Loading portfolio</p>
            <div className="flex space-x-1">
              <span className={cn("animate-bounce", LOADER_COLORS.dots.first)} style={{ animationDelay: '0ms' }}>.</span>
              <span className={cn("animate-bounce", LOADER_COLORS.dots.second)} style={{ animationDelay: '150ms' }}>.</span>
              <span className={cn("animate-bounce", LOADER_COLORS.dots.third)} style={{ animationDelay: '300ms' }}>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}