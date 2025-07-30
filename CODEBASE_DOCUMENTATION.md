# Portfolio Codebase Documentation

## 📁 Project Structure Overview

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/          # Utility functions and configurations
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux state management
│   │   └── main.tsx      # Application entry point
├── server/               # Backend Express server
├── shared/               # Shared code between frontend/backend
└── api/                  # Serverless functions (Vercel deployment)
```

## 🎯 Core Principles

### 1. **Simplicity First**
- Each component has a single responsibility
- Clear, descriptive naming for variables and functions
- Minimal dependencies and complexity

### 2. **Documentation Everywhere**
- Every function and component is documented
- Complex logic has inline comments
- README files explain purpose and usage

### 3. **Type Safety**
- TypeScript used throughout
- Shared schemas for data validation
- Proper type definitions for all props and functions

### 4. **Performance Optimized**
- Lazy loading where appropriate
- Optimized re-renders with proper dependencies
- Efficient state management

## 🔧 Key Technologies

### Frontend Stack
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **Redux Toolkit** - Simplified state management
- **React Query** - Server state management and caching

### Backend Stack
- **Node.js + Express** - RESTful API server
- **TypeScript** - Type-safe backend development
- **Zod** - Runtime schema validation

### Development Tools
- **Vite** - Fast build tool and development server
- **ESBuild** - Fast TypeScript compilation
- **Vercel** - Deployment platform with serverless functions

## 📋 Component Documentation Standards

### Component Structure
```typescript
/**
 * ComponentName - Brief description of what this component does
 * 
 * @param props - Description of props if any
 * @returns JSX element
 * 
 * Features:
 * - Feature 1: Description
 * - Feature 2: Description
 * 
 * Usage:
 * <ComponentName prop="value" />
 */
```

### Function Documentation
```typescript
/**
 * functionName - Brief description of what this function does
 * 
 * @param param1 - Description of parameter
 * @param param2 - Description of parameter
 * @returns Description of return value
 * 
 * Example:
 * const result = functionName(value1, value2);
 */
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Basic understanding of React and TypeScript

### Quick Start
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. Open http://localhost:5000 in browser

### Project Scripts
- `npm run dev` - Development mode with hot reload
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

## 📝 Code Style Guidelines

### Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile`)
- **Functions**: camelCase (e.g., `getUserData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **Files**: kebab-case (e.g., `user-profile.tsx`)

### Import Organization
```typescript
// 1. React and external libraries
import React from 'react';
import { useState } from 'react';

// 2. Internal components and hooks
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

// 3. Types and constants
import type { User } from '@/types';
import { API_ENDPOINTS } from '@/constants';
```

## 🔄 Data Flow Architecture

### State Management Pattern
```
User Action → Component → Redux Action → Reducer → State Update → UI Re-render
```

### API Communication Pattern
```
Component → React Query → API Call → Backend → Database → Response → Cache → UI Update
```

## 🎨 Styling System

### Tailwind Configuration
- Custom color palette defined in CSS variables
- Dark/light theme support
- Responsive design utilities
- Component-specific utility classes

### CSS Organization
```css
/* 1. Tailwind base styles */
@tailwind base;
@tailwind components; 
@tailwind utilities;

/* 2. CSS variables for theming */
:root { --primary-color: hsl(...); }

/* 3. Custom component styles */
.custom-component { ... }

/* 4. Utility classes */
.text-gradient { ... }
```

## 🔐 Security Considerations

### Environment Variables
- Sensitive data stored in environment variables
- Client-side variables prefixed with `VITE_`
- Server-side secrets kept separate

### Data Validation
- All user inputs validated with Zod schemas
- Client and server-side validation
- Sanitized data handling

## 📊 Performance Optimizations

### Bundle Optimization
- Code splitting at route level
- Tree shaking for unused code
- Optimized asset loading

### Runtime Performance
- Memoized expensive calculations
- Proper dependency arrays in hooks
- Efficient re-render patterns

## 🚀 Deployment Guide

### Vercel Deployment
1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Environment Setup
- Development: Local Vite server
- Production: Vercel serverless functions
- Database: Ready for PostgreSQL integration

---

This documentation will be continuously updated as the codebase evolves.