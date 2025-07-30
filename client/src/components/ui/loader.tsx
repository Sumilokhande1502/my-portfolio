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
        
        {/* Modern geometric loader */}
        <div className="relative">
          {/* Animated geometric shapes */}
          <div className="flex items-center justify-center space-x-3">
            
            {/* Bouncing dots with different colors */}
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            
            {/* Central pulsing element */}
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-pulse-scale shadow-lg"></div>
            
            {/* More bouncing dots */}
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
              <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '750ms' }}></div>
            </div>
          </div>
          
          {/* Subtle wave effect underneath */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1 h-8 bg-blue-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-6 bg-purple-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-4 bg-teal-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-1 h-6 bg-blue-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.6s' }}></div>
            <div className="w-1 h-8 bg-purple-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.8s' }}></div>
          </div>
        </div>
        
        {/* Animated progress bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full animate-progress-bar"></div>
        </div>
        
        {/* Dynamic text with typewriter effect */}
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
  )
}