export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animationDelay?: number;
  enableAnimation?: boolean;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  color?: string;
}

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

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactSubmissionResponse extends ApiResponse {
  data?: {
    id: string;
    timestamp: string;
  };
}

export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

export type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingState {
  status: AsyncStatus;
  error?: string;
}

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
  options?: Array<{ value: string; label: string }>;
}

export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

export interface AnimationConfig {
  duration?: string;
  delay?: string;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
}

export interface ScrollAnimationConfig {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface RootState {
  theme: {
    isDarkMode: boolean;
  };
  ui: {
    sidebarOpen: boolean;
    loading: boolean;
  };
}

export type { FC, ReactNode, ComponentType, PropsWithChildren } from 'react';
