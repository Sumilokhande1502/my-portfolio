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
        
        {/* Elegant animated logo with circular design */}
        <div className="relative">
          {/* Main logo container with subtle float animation */}
          <div className="flex items-center justify-center space-x-6 animate-bounce-gentle">
            
            {/* Animated "S" in circle */}
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="w-24 h-24 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-60"></div>
              {/* Inner circle with letter */}
              <div className="absolute inset-2 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-xl animate-pulse-scale">
                <span className="text-3xl font-bold text-white tracking-tight">S</span>
              </div>
              {/* Glowing dots */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Animated "L" in circle */}
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="w-24 h-24 rounded-full border-4 border-gradient-to-r from-purple-500 to-teal-500 animate-spin-slow opacity-60" style={{ animationDelay: '0.3s' }}></div>
              {/* Inner circle with letter */}
              <div className="absolute inset-2 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-teal-600 flex items-center justify-center shadow-xl animate-pulse-scale" style={{ animationDelay: '0.2s' }}>
                <span className="text-3xl font-bold text-white tracking-tight">L</span>
              </div>
              {/* Glowing dots */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </div>
          
          {/* Elegant floating particles */}
          <div className="absolute -inset-12">
            <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-4 left-8 animate-float opacity-70" style={{ animationDelay: '0s' }}></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute top-12 right-6 animate-float opacity-70" style={{ animationDelay: '0.7s' }}></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full absolute bottom-6 left-4 animate-float opacity-70" style={{ animationDelay: '1.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full absolute bottom-12 right-10 animate-float opacity-70" style={{ animationDelay: '1.8s' }}></div>
            <div className="w-1 h-1 bg-purple-300 rounded-full absolute top-6 right-12 animate-float opacity-70" style={{ animationDelay: '2.3s' }}></div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse"></div>
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