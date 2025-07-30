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
        
        {/* Simple but catchy animated logo */}
        <div className="relative">
          {/* Main initials with bounce animation */}
          <div className="flex items-center justify-center space-x-4 animate-bounce-gentle">
            
            {/* Simple animated "S" */}
            <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 animate-pulse-scale transition-all duration-300 hover:scale-110">
              S
            </div>
            
            {/* Animated separator dot */}
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
            
            {/* Simple animated "L" */}
            <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 animate-pulse-scale transition-all duration-300 hover:scale-110" style={{ animationDelay: '0.2s' }}>
              L
            </div>
          </div>
          
          {/* Simple floating sparkles */}
          <div className="absolute -inset-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-2 left-6 animate-float opacity-70"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute top-8 right-4 animate-float opacity-70" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full absolute bottom-4 left-4 animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full absolute bottom-8 right-6 animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
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