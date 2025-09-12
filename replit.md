# Portfolio Website - Asad Mirza

## Overview

This is a modern, responsive portfolio website built for Asad Mirza, showcasing his experience as a Software Engineer and Computer Science student. The application features a clean, minimalist design with smooth animations and interactive elements. It includes sections for personal information, work experience, projects, skills, education, and contact details. The site integrates with GitHub to dynamically fetch and display repository information, providing real-time project data.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks for local state, TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful endpoints with JSON responses
- **Data Storage**: In-memory storage for user data (MemStorage class) with interface for future database integration
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions and migrations setup

### Design System
- **Component Library**: Custom implementation based on Radix UI primitives
- **Typography**: Inter font for UI text, JetBrains Mono for code/technical content
- **Color Scheme**: Dark mode optimized with blue accent system
- **Layout**: CSS Grid and Flexbox with responsive breakpoints
- **Animations**: CSS transitions and hover effects for enhanced user experience

### Data Integration
- **GitHub API**: Real-time repository data fetching using Octokit
- **Authentication**: Replit connector system for secure GitHub access
- **Caching**: Query-based caching for API responses to reduce external calls

### Development Environment
- **Module System**: ES modules throughout the application
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)
- **Type Safety**: Strict TypeScript configuration with comprehensive type coverage
- **Development Tools**: Hot module replacement, error overlays, and development banners

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **UI Framework**: Radix UI components for accessible, customizable primitives
- **Styling**: Tailwind CSS with PostCSS for processing and optimization
- **State Management**: TanStack React Query for server state and caching

### Backend Services
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **GitHub Integration**: Octokit REST API client for repository data
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript compiler with strict mode enabled
- **Development Environment**: Replit-specific plugins for enhanced development experience

### Utility Libraries
- **Date Handling**: date-fns for date formatting and manipulation
- **Styling Utilities**: clsx and class-variance-authority for conditional styling
- **Icons**: Lucide React for consistent iconography
- **Command Interface**: cmdk for command palette functionality