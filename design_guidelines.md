# Portfolio Design Guidelines

## Design Approach: Reference-Based (Modern Developer Portfolio)

**Primary References:** dejan.works, benadam.me, adrienlaurent.fr - focusing on minimalist aesthetics with strategic use of space and typography

**Design Principles:**
- Content-first minimalism with generous whitespace
- Strategic micro-interactions and smooth transitions
- Technical sophistication through subtle details
- Information hierarchy through typography and spacing

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 220 15% 8% (deep charcoal)
- Surface: 220 12% 12% (elevated surfaces)
- Text Primary: 220 10% 95% (near white)
- Text Secondary: 220 8% 70% (muted)

**Blue Accent System:**
- Primary Blue: 220 85% 65% (modern tech blue)
- Blue Hover: 220 90% 70% (interactive states)
- Blue Subtle: 220 40% 25% (backgrounds/borders)

### B. Typography
**Primary:** Inter via Google Fonts (clean, technical)
**Code/Monospace:** JetBrains Mono (repository names, technical details)

**Hierarchy:**
- Hero: 3xl-4xl, font-weight 600
- Section Headers: xl-2xl, font-weight 600  
- Body: base-lg, font-weight 400
- Captions: sm, font-weight 500, muted color

### C. Layout System
**Spacing Units:** Tailwind 4, 8, 12, 16 (consistent rhythm)
- Container: max-width 6xl with horizontal padding
- Section spacing: py-16 to py-24
- Component spacing: gap-8 to gap-12
- Micro-spacing: p-4, m-2 for cards/buttons

### D. Component Library

**Navigation:**
- Fixed header with blur background effect
- Smooth scroll navigation with active state indicators
- Minimal logo/name treatment

**Hero Section:**
- Single viewport height with centered content
- Animated typing effect for role/title
- Subtle particle or grid background pattern
- Contact links as minimal buttons

**Project Cards:**
- Glass morphism effect (subtle backdrop blur)
- Hover elevation with smooth transitions
- Live GitHub data: language dots, star count, description
- Thumbnail images from repository social cards when available

**Experience Timeline:**
- Clean vertical timeline with connection lines
- Company logos (simple, monochrome treatment)
- Expandable details with smooth animations

**Skills Grid:**
- Icon + label combinations
- Subtle hover states with scale transforms
- Organized by categories (Languages, Frameworks, Tools)

### E. Animations
**Minimal but Impactful:**
- Page load: Stagger animations for sections (0.1s delays)
- Scroll: Intersection observer for fade-up reveals
- Hover: Subtle scale (1.02) and shadow transitions
- No parallax or heavy animations - focus on performance

## Images
**Repository Thumbnails:** Automatically pull social preview images from GitHub repositories
**Company Logos:** Simple, monochromatic versions for StackAdapt, UofT
**Background Elements:** Subtle geometric patterns or dot grids in hero section
**Profile Image:** Professional headshot in about section (rounded, with subtle border)

**Note:** No large hero image - instead use background patterns/graphics with typography-focused hero content

## Key Layout Sections
1. **Hero** - Name, role, key contact actions
2. **About** - Brief professional summary with personality
3. **Experience** - Timeline format with key achievements
4. **Projects** - Grid of 6 repositories with live GitHub data
5. **Skills** - Categorized technology grid
6. **Education** - UofT focus with awards/coursework
7. **Contact** - Simple, accessible contact information

This design balances technical sophistication with accessibility, ensuring the portfolio performs well while showcasing modern web development skills through its execution.