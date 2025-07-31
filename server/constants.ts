// Server-side constants that can safely use process.env
import { PERSONAL_INFO } from '@shared/constants';

// Email Configuration (Server-only)
export const EMAIL_CONFIG = {
  host: process.env.EMAIL_USER ? 'smtp.gmail.com' : 'smtp.ethereal.email',
  port: 587,
  secure: false,
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO || PERSONAL_INFO.email,
} as const;

// Environment Variables (Server-only)
export const SERVER_ENV = {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_TO: process.env.EMAIL_TO,
  GITHUB_URL: process.env.GITHUB_URL,
  LINKEDIN_URL: process.env.LINKEDIN_URL,
  PORTFOLIO_URL: process.env.PORTFOLIO_URL,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || '5000',
} as const;

// Dynamic Social Links (can be overridden by environment variables)
export const DYNAMIC_SOCIAL_LINKS = {
  github: process.env.GITHUB_URL || 'https://github.com/sumitlokhande',
  linkedin: process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/sumit-lokhande-0a2380148/',
  portfolio: process.env.PORTFOLIO_URL || 'https://sumitlokhande.dev',
} as const;