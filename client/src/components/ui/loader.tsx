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
        
        {/* Catchy animated logo/brand loader */}
        <div className="relative">
          {/* Main logo container with bounce animation */}
          <div className="flex items-center justify-center space-x-3 animate-bounce-gentle">
            {/* Animated "S" letter */}
            <div className="relative">
              <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 animate-pulse-scale" style={{ animationDelay: '0ms' }}>
                S
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full animate-ping"></div>
            </div>
            
            {/* Animated "L" letter */}
            <div className="relative">
              <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 animate-pulse-scale" style={{ animationDelay: '200ms' }}>
                L
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping" style={{ animationDelay: '100ms' }}></div>
            </div>
          </div>
          
          {/* Floating particles around the letters */}
          <div className="absolute -inset-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0 left-4 animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full absolute top-8 right-2 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full absolute bottom-2 left-2 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full absolute bottom-8 right-6 animate-float" style={{ animationDelay: '1.5s' }}></div>
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