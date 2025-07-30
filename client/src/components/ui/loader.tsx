import { cn } from "@/lib/utils"
import { LOADER_COLORS, ANIMATION_CONSTANTS } from "@shared/constants"

interface LoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Loader({ className, size = "lg" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20", 
    lg: "w-28 h-28"
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center space-y-8 min-h-screen w-full">
        {/* Enhanced animated spinner with multiple colorful rings */}
        <div className="relative drop-shadow-2xl">
          {/* Outer ring - primary color with glow */}
          <div className={cn(
            `animate-spin rounded-full border-6 border-transparent ${LOADER_COLORS.rings.outer} shadow-lg`,
            sizeClasses[size],
            className
          )} style={{ 
            animationDuration: ANIMATION_CONSTANTS.durations.spin,
            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))'
          }}></div>
          
          {/* Middle ring - secondary color with glow */}
          <div className={cn(
            `absolute inset-2 animate-spin rounded-full border-4 border-transparent ${LOADER_COLORS.rings.middle} shadow-md`,
            className
          )} style={{ 
            animationDuration: '1.5s', 
            animationDirection: 'reverse',
            filter: 'drop-shadow(0 0 6px rgba(147, 51, 234, 0.4))'
          }}></div>
          
          {/* Inner ring - accent color with glow */}
          <div className={cn(
            `absolute inset-4 animate-spin rounded-full border-3 border-transparent ${LOADER_COLORS.rings.inner} shadow-sm`,
            className
          )} style={{ 
            animationDuration: '2s',
            filter: 'drop-shadow(0 0 4px rgba(20, 184, 166, 0.4))'
          }}></div>
          
          {/* Center dot with enhanced pulse and glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn(
              "w-6 h-6 rounded-full animate-pulse", 
              LOADER_COLORS.center
            )} style={{
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
              animationDuration: '1.5s'
            }}></div>
          </div>
        </div>
        
        {/* Animated text content */}
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center space-x-1">
            <p className="text-heading-secondary text-xl font-semibold tracking-wide">Loading portfolio</p>
            <div className="flex space-x-1 ml-2">
              <span className={cn("animate-bounce text-2xl", LOADER_COLORS.dots.first)} style={{ animationDelay: '0ms' }}>.</span>
              <span className={cn("animate-bounce text-2xl", LOADER_COLORS.dots.second)} style={{ animationDelay: '150ms' }}>.</span>
              <span className={cn("animate-bounce text-2xl", LOADER_COLORS.dots.third)} style={{ animationDelay: '300ms' }}>.</span>
            </div>
          </div>
          <p className="text-body-secondary text-sm mt-2 opacity-80">Crafting amazing experiences</p>
        </div>
      </div>
    </div>
  )
}