// Personal Information Constants
export const PERSONAL_INFO = {
  name: 'Sumit Lokhande',
  email: 'sumitlokhande53@gmail.com',
  phone: '+91 9021181123',
  location: 'Maharashtra, India',
  title: 'Frontend Engineer',
  experience: '5+',
  profileImage: '/attached_assets/20231120_210945_IMG_0457_1753609330229.JPG',
} as const;

// Social Media Links (Client-safe constants)
export const SOCIAL_LINKS = {
  github: 'https://github.com/Sumilokhande1502',
  linkedin: 'https://www.linkedin.com/in/sumit-lokhande-0a2380148/',
  portfolio: 'https://sumitlokhande.dev',
} as const;

// UI Constants
export const UI_CONSTANTS = {
  toastRemoveDelay: 5000,
  toastLimit: 1,
  gradientAnimationDuration: '15s',
  transitionDuration: '0.3s',
  hoverTransitionDuration: '0.2s',
} as const;

// Animation Constants
export const ANIMATION_CONSTANTS = {
  delays: {
    delay100: '0.1s',
    delay200: '0.2s',
    delay300: '0.3s',
    delay400: '0.4s',
    delay500: '0.5s',
  },
  durations: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    fadeIn: '0.6s',
    loader: '0.8s',
    spin: '1s',
  },
  easing: {
    default: 'ease-out',
    bounce: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Loader Colors
export const LOADER_COLORS = {
  rings: {
    outer: 'border-t-blue-500',
    middle: 'border-r-purple-500', 
    inner: 'border-b-teal-500',
  },
  dots: {
    first: 'text-blue-500',
    second: 'text-purple-500',
    third: 'text-teal-500',
  },
  center: 'bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500',
} as const;

// Scroll Animation Settings
export const SCROLL_ANIMATION = {
  threshold: 0.1,
  rootMargin: '50px 0px -100px 0px',
  staggerDelay: 0.2, // seconds between animations
} as const;

// Navigation Items
export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

// Skills Categories
export const SKILLS_CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'Tools',
  'Mobile',
] as const;

// Project Filters
export const PROJECT_FILTERS = [
  'All',
  'React',
  'Angular',
  'Vue',
  'Mobile',
  'Full Stack',
] as const;

// Color Themes
export const COLOR_THEMES = {
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #a8edea 0%, #74b9ff 100%)',
    accent: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
    warm: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
    cool: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #a8edea 100%)',
  },
  darkGradients: {
    primary: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
    secondary: 'linear-gradient(135deg, #2b6cb0 0%, #3182ce 100%)',
    accent: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
    warm: 'linear-gradient(135deg, #e53e3e 0%, #d69e2e 100%)',
    cool: 'linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%)',
    hero: 'linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #2b6cb0 100%)',
  },
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  contacts: '/api/contacts',
} as const;

// Form Validation Constants
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  subject: {
    minLength: 5,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
} as const;

// Client Environment Variables (using import.meta.env for Vite)
export const CLIENT_ENV = {
  NODE_ENV: typeof window !== 'undefined' ? import.meta.env.MODE : 'development',
} as const;