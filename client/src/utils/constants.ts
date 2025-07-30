/**
 * Frontend-Specific Constants - Client-side configuration and settings
 * 
 * This file contains constants that are specific to the frontend application.
 * These complement the shared constants but are only used on the client side.
 * 
 * Categories:
 * - Animation Settings: Client-side animation configurations
 * - UI Constants: Frontend-specific UI settings
 * - Validation Rules: Form validation constants
 * - Performance Settings: Client optimization constants
 */

// =============================================================================
// Animation Settings
// =============================================================================

/**
 * CSS animation class names used throughout the application
 */
export const ANIMATION_CLASSES = {
  // Entrance animations
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  
  // Loading animations
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  
  // Hover effects
  scaleHover: 'hover:scale-105',
  shadowHover: 'hover:shadow-lg',
  
  // Scroll-triggered animations
  scrollReveal: 'scroll-animate',
} as const;

/**
 * Animation delay values for staggered animations
 */
export const STAGGER_DELAYS = {
  fast: 0.1,    // 100ms between elements
  normal: 0.2,  // 200ms between elements  
  slow: 0.3,    // 300ms between elements
} as const;

// =============================================================================
// UI Constants
// =============================================================================

/**
 * Breakpoint values for responsive design
 * These match Tailwind CSS default breakpoints
 */
export const BREAKPOINTS = {
  sm: 640,   // Small devices
  md: 768,   // Medium devices  
  lg: 1024,  // Large devices
  xl: 1280,  // Extra large devices
  '2xl': 1536, // 2X large devices
} as const;

/**
 * Z-index values for layering components
 */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1010,
  fixed: 1020,
  modalBackdrop: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
} as const;

/**
 * Common spacing values used in the design system
 */
export const SPACING = {
  section: 'py-20',      // Vertical padding for sections
  container: 'px-4 sm:px-6 lg:px-8', // Horizontal padding for containers
  card: 'p-6',           // Padding for cards
  button: 'px-6 py-3',   // Padding for buttons
} as const;

// =============================================================================
// Form Validation Rules
// =============================================================================

/**
 * Common validation patterns and limits
 */
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number',
  },
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'Name should contain only letters and spaces',
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message should be between 10 and 1000 characters',
  },
} as const;

/**
 * Form field character limits
 */
export const FIELD_LIMITS = {
  name: 50,
  email: 100,
  subject: 200,
  message: 1000,
} as const;

// =============================================================================
// Performance Settings
// =============================================================================

/**
 * Image optimization settings
 */
export const IMAGE_SETTINGS = {
  // Lazy loading threshold (pixels before image comes into view)
  lazyLoadThreshold: 300,
  
  // Image quality for different use cases
  quality: {
    thumbnail: 60,
    preview: 80,
    fullSize: 90,
  },
  
  // Maximum dimensions
  maxWidth: {
    thumbnail: 300,
    preview: 800,
    fullSize: 1920,
  },
} as const;

/**
 * API request settings
 */
export const API_SETTINGS = {
  // Request timeout in milliseconds
  timeout: 10000,
  
  // Retry configuration
  retry: {
    attempts: 3,
    delay: 1000, // milliseconds
  },
  
  // Cache duration for different types of requests
  cacheDuration: {
    static: 300000,    // 5 minutes
    dynamic: 60000,    // 1 minute
    realtime: 5000,    // 5 seconds
  },
} as const;

// =============================================================================
// Feature Flags
// =============================================================================

/**
 * Feature toggles for enabling/disabling functionality
 */
export const FEATURE_FLAGS = {
  enableAnimations: true,
  enableDarkMode: true,
  enableAnalytics: false,
  enableServiceWorker: false,
  enablePushNotifications: false,
} as const;

// =============================================================================
// Content Settings
// =============================================================================

/**
 * Content-related constants
 */
export const CONTENT_SETTINGS = {
  // Maximum items to show in lists
  maxItems: {
    projects: 6,
    skills: 20,
    testimonials: 5,
  },
  
  // Text truncation limits
  truncation: {
    projectDescription: 150,
    cardTitle: 50,
    excerpt: 200,
  },
  
  // Pagination settings
  pagination: {
    itemsPerPage: 10,
    maxPageButtons: 5,
  },
} as const;

// =============================================================================
// Accessibility Settings
// =============================================================================

/**
 * Accessibility-related constants
 */
export const A11Y_SETTINGS = {
  // ARIA labels and descriptions
  labels: {
    mainNav: 'Main navigation',
    skipToContent: 'Skip to main content',
    toggleTheme: 'Toggle dark/light theme',
    closeModal: 'Close modal',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  
  // Focus management
  focus: {
    // CSS class for visible focus indicators
    visible: 'focus-visible:ring-2 focus-visible:ring-primary',
    // Timeout for focus trapping
    trapTimeout: 100,
  },
  
  // Reduced motion preferences
  reducedMotion: {
    // CSS media query
    mediaQuery: '(prefers-reduced-motion: reduce)',
    // Alternative animation durations for reduced motion
    duration: '0.01s',
  },
} as const;

// =============================================================================
// Development Settings
// =============================================================================

/**
 * Development and debugging constants
 */
export const DEV_SETTINGS = {
  // Enable console logging in development
  enableLogging: import.meta.env.DEV,
  
  // Show performance metrics
  showPerformanceMetrics: import.meta.env.DEV,
  
  // Enable React DevTools
  enableReactDevTools: import.meta.env.DEV,
} as const;

// =============================================================================
// Type definitions for constants
// =============================================================================

export type AnimationClass = keyof typeof ANIMATION_CLASSES;
export type ZIndexLayer = keyof typeof Z_INDEX;
export type BreakpointKey = keyof typeof BREAKPOINTS;
export type ValidationRule = keyof typeof VALIDATION_RULES;