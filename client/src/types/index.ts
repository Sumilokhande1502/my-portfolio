/**
 * Type Definitions - Central location for all TypeScript interfaces and types
 * 
 * This file contains all the TypeScript type definitions used throughout the application.
 * Organizing types in a central location improves maintainability and reusability.
 * 
 * Categories:
 * - UI Component Types: Props and state types for components
 * - Data Types: Structure definitions for application data
 * - API Types: Request/response interfaces
 * - Utility Types: Helper types for common patterns
 */

// =============================================================================
// UI Component Types
// =============================================================================

/**
 * Base props that all components can accept
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

/**
 * Props for components that can be animated
 */
export interface AnimatedComponentProps extends BaseComponentProps {
  animationDelay?: number;
  enableAnimation?: boolean;
}

/**
 * Theme-related types
 */
export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

// =============================================================================
// Data Structure Types
// =============================================================================

/**
 * Skill item with icon and name
 */
export interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

/**
 * Skill category containing multiple skills
 */
export interface SkillCategory {
  title: string;
  skills: Skill[];
  color?: string;
}

/**
 * Project information structure
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  featured?: boolean;
}

/**
 * Work experience entry
 */
export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // undefined means current position
  description: string[];
  technologies: string[];
  location?: string;
}

/**
 * Contact form data structure
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Navigation menu item
 */
export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
}

// =============================================================================
// API Types
// =============================================================================

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Contact form submission response
 */
export interface ContactSubmissionResponse extends ApiResponse {
  data?: {
    id: string;
    timestamp: string;
  };
}

// =============================================================================
// Utility Types
// =============================================================================

/**
 * Make all properties of T optional except for K
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * Extract the props type from a React component
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Status types for async operations
 */
export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Common loading state interface
 */
export interface LoadingState {
  status: AsyncStatus;
  error?: string;
}

// =============================================================================
// Form Types
// =============================================================================

/**
 * Generic form field configuration
 */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | undefined;
  };
  options?: Array<{ value: string; label: string }>; // for select fields
}

/**
 * Form state management
 */
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

// =============================================================================
// Animation Types
// =============================================================================

/**
 * Animation configuration
 */
export interface AnimationConfig {
  duration?: string;
  delay?: string;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
}

/**
 * Scroll animation settings
 */
export interface ScrollAnimationConfig {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// =============================================================================
// Redux State Types (if using Redux)
// =============================================================================

/**
 * Root state structure for Redux store
 */
export interface RootState {
  theme: {
    isDarkMode: boolean;
  };
  ui: {
    sidebarOpen: boolean;
    loading: boolean;
  };
}

// =============================================================================
// Export commonly used type utilities
// =============================================================================

// Re-export React types for convenience
export type { 
  FC, 
  ReactNode, 
  ComponentType, 
  PropsWithChildren 
} from 'react';