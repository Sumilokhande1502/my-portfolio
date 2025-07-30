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
        
        {/* Elegant animated logo with single rotating circle */}
        <div className="relative">
          {/* Main logo container with subtle float animation */}
          <div className="flex items-center justify-center animate-bounce-gentle">
            
            {/* Single rotating circle with both initials */}
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-gradient-to-r from-blue-500 via-purple-500 to-teal-500 animate-spin-slow opacity-70"></div>
              
              {/* Middle rotating ring - opposite direction */}
              <div className="absolute inset-1 w-30 h-30 rounded-full border-2 border-dotted border-gradient-to-l from-teal-400 via-purple-400 to-blue-400 animate-spin-reverse opacity-50"></div>
              
              {/* Inner circle with both initials */}
              <div className="absolute inset-3 w-26 h-26 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-teal-600 flex items-center justify-center shadow-2xl animate-pulse-scale">
                <div className="flex items-center space-x-1">
                  <span className="text-3xl font-bold text-white tracking-tight animate-pulse-scale" style={{ animationDelay: '0ms' }}>S</span>
                  <span className="text-2xl text-white/80">•</span>
                  <span className="text-3xl font-bold text-white tracking-tight animate-pulse-scale" style={{ animationDelay: '200ms' }}>L</span>
                </div>
              </div>
              
              {/* Orbiting glowing dots */}
              <div className="absolute inset-0 w-32 h-32 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Elegant floating particles around the circle */}
          <div className="absolute -inset-16">
            <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-8 left-12 animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute top-16 right-8 animate-float opacity-60" style={{ animationDelay: '0.8s' }}></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full absolute bottom-12 left-8 animate-float opacity-60" style={{ animationDelay: '1.4s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full absolute bottom-16 right-12 animate-float opacity-60" style={{ animationDelay: '2.0s' }}></div>
            <div className="w-1 h-1 bg-purple-300 rounded-full absolute top-12 right-16 animate-float opacity-60" style={{ animationDelay: '2.6s' }}></div>
            <div className="w-1 h-1 bg-teal-300 rounded-full absolute bottom-8 left-16 animate-float opacity-60" style={{ animationDelay: '3.2s' }}></div>
          </div>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-teal-500/15 rounded-full blur-2xl animate-pulse"></div>
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