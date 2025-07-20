# Modern Landscaping Website

## Overview

This is a modern, responsive landscaping website built with React and Express.js, featuring a full-stack architecture with TypeScript, Tailwind CSS, and shadcn/ui components. The application showcases landscaping services through an interactive, animated interface with 3D effects and smooth transitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom theming for landscaping aesthetics
- **UI Components**: shadcn/ui library with Radix UI primitives
- **Animations**: Framer Motion for scroll animations, transitions, and 3D effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations
- **Development Setup**: Hot module replacement in development mode
- **Middleware**: Express middleware for JSON parsing, CORS, and request logging

### Design System
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Color Palette**: Custom landscaping theme with forest green, sage green, warm brown, sandstone, and accent gold
- **Component Library**: Comprehensive UI components including forms, dialogs, navigation, and interactive elements

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scroll navigation and mobile menu
2. **Hero Section**: Full-screen background with animated text and call-to-action buttons
3. **About Section**: Company information with animated cards for values and mission
4. **Services Section**: Grid of landscaping services with hover effects and feature lists
5. **Projects Section**: Portfolio gallery with filtering and project showcases
6. **Testimonials Section**: Customer reviews with star ratings and rotating quotes
7. **Contact Section**: Quote request form with validation and toast notifications
8. **Footer**: Company information, social links, and site navigation

### Backend Components
1. **Server Setup**: Express server with development/production configuration
2. **Route Registration**: Modular route system for API endpoints
3. **Storage Interface**: Abstract storage layer with in-memory implementation
4. **Database Schema**: User management schema with Drizzle ORM
5. **Vite Integration**: Development server with HMR and static file serving

## Data Flow

1. **Client-Side Rendering**: React components render based on scroll position and user interactions
2. **Animation Triggers**: Framer Motion useInView hooks trigger animations when sections become visible
3. **Form Handling**: Contact forms collect user data and display success/error messages via toast notifications
4. **API Communication**: TanStack React Query manages server state and API calls
5. **Database Operations**: Drizzle ORM handles type-safe database queries through the storage interface

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript support
- **Animation**: Framer Motion for complex animations and transitions
- **Icons**: Lucide React for consistent iconography, React Icons for social media
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Components**: Extensive Radix UI component library through shadcn/ui

### Backend Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **ORM**: Drizzle ORM with PostgreSQL dialect and Zod integration
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Utilities**: Date-fns for date manipulation, various utility libraries

### Development Tools
- **Build**: Vite with React plugin and TypeScript support
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Database**: Drizzle Kit for schema migrations and database operations
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR and Replit integration
- **Database**: Environment variable configuration for DATABASE_URL
- **Asset Handling**: Vite handles static assets with optimized loading
- **Error Handling**: Runtime error overlay in development mode

### Production Build
- **Frontend**: Vite builds optimized static assets to dist/public
- **Backend**: esbuild bundles server code with external package resolution
- **Environment**: NODE_ENV-based configuration switching
- **Database**: Drizzle migrations for schema deployment

### Configuration Management
- **TypeScript**: Unified configuration for client, server, and shared code
- **Path Aliases**: Organized imports with @ prefix for client code and @shared for common utilities
- **Build Scripts**: Separate development, build, and production start commands
- **Database Operations**: Drizzle Kit integration for schema management and migrations

The application follows modern web development practices with a focus on performance, accessibility, and user experience, specifically tailored for showcasing landscaping services through an engaging, interactive interface.