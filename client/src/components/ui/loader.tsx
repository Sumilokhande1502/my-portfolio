import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Loader({ className, size = "md" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className={cn(
          "animate-spin rounded-full border-4 border-slate-200 border-t-primary-solid",
          sizeClasses[size],
          className
        )}></div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-heading-primary mb-2">Sumit Lokhande</h2>
          <p className="text-body-secondary">Loading portfolio...</p>
        </div>
      </div>
    </div>
  )
}