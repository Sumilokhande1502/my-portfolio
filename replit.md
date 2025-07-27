# Portfolio Application - Sumit S. Lokhande

## Overview

This is a modern portfolio web application built with a full-stack architecture featuring a React/TypeScript frontend and Express backend. The application showcases Sumit S. Lokhande's frontend engineering work, skills, and experience with a clean, responsive design and contact functionality. The portfolio highlights 5+ years of experience with React, Redux Toolkit, Angular, and modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: Redux Toolkit for global state (theme, UI state)
- **Data Fetching**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints
- **Data Storage**: In-memory storage (MemStorage class) with interface for future database integration
- **Validation**: Zod schemas shared between frontend and backend

### Development Setup
- **Build Tool**: Vite for fast development and optimized builds
- **Dev Server**: Integrated Vite dev server with Express backend
- **Hot Reload**: HMR support for frontend changes
- **TypeScript**: Strict type checking across the entire codebase

## Key Components

### Frontend Components
1. **Layout Components**: Navbar, Hero, Footer with responsive design
2. **Content Sections**: About, Skills, Projects, Experience, Contact
3. **Theme System**: Dark/light mode toggle with persistent storage
4. **UI Components**: Complete Shadcn/ui component library
5. **Form Handling**: Contact form with validation and submission

### Backend Services
1. **Contact API**: POST `/api/contacts` for form submissions
2. **Contact Management**: GET `/api/contacts` for retrieving messages
3. **Storage Interface**: Abstracted storage layer for easy database migration
4. **Error Handling**: Centralized error handling with proper HTTP status codes

### Shared Resources
1. **Schema Definitions**: Zod schemas for data validation
2. **Type Definitions**: TypeScript interfaces for frontend-only data
3. **Path Aliases**: Organized imports with `@/` and `@shared/` prefixes

## Data Flow

### Contact Form Submission
1. User fills out contact form in frontend
2. Form validation occurs client-side using Zod schema
3. Valid data submitted to `/api/contacts` endpoint
4. Backend validates data again using shared schema
5. Contact stored in memory storage
6. Success/error response sent to frontend
7. UI updated with toast notification

### Theme Management
1. Theme preference stored in localStorage
2. Redux state manages current theme
3. CSS classes applied to document root
4. Tailwind CSS variables handle color changes

### Project Filtering
1. Project filter state managed in Redux
2. Component filters projects based on category
3. Smooth animations for filter transitions

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI/Styling**: Radix UI, Tailwind CSS, Class Variance Authority
- **State Management**: Redux Toolkit, TanStack React Query
- **Utilities**: Date-fns, Clsx, Lucide React (icons)
- **Validation**: Zod, Hookform Resolvers

### Backend Dependencies
- **Server**: Express, HTTP module
- **Database**: Drizzle ORM with PostgreSQL dialect (configured but not used)
- **Session**: Connect-pg-simple (configured for future use)
- **Utilities**: Crypto (for UUID generation)

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript
- **Development**: TSX for development server, Replit plugins

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Single Deployment**: Combined frontend and backend in single package

### Environment Configuration
- **Development**: Uses TSX for hot reloading TypeScript
- **Production**: Runs compiled JavaScript with Node.js
- **Database**: Configured for PostgreSQL via DATABASE_URL environment variable
- **Session Storage**: Ready for PostgreSQL session storage

### Hosting Considerations
- Designed for platforms like Replit, Vercel, or similar
- Static assets served by Express in production
- Environment variables for database and session configuration
- Health check and logging capabilities built-in

The architecture supports easy migration from in-memory storage to PostgreSQL database by implementing the IStorage interface with a new database-backed class, making it production-ready with minimal changes.