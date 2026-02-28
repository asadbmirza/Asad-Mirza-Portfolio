import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, Rocket, X } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  repo: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const experiences: ExperienceItem[] = [
  {
    id: 'amazon-incoming',
    role: 'Incoming Software Development Engineer Intern',
    company: 'Amazon',
    location: 'Summer 2026',
    period: 'May 2026 - August 2026',
    bullets: ['Joining Amazon as an incoming Software Development Engineer Intern for Summer 2026.'],
  },
  {
    id: 'stackadapt-returning',
    role: 'Returning Software Engineer Intern',
    company: 'StackAdapt - Measurements Team',
    location: 'Toronto, ON',
    period: 'September 2025 - December 2025',
    bullets: [
      'Delivered over one-third of StackAdapt\'s first CCA product, projected to generate $100M+ in revenue.',
      'Rebuilt CCA data pipeline and GraphQL schema with normalized metrics and sub-5-second latency.',
    ],
  },
  {
    id: 'stackadapt-intern',
    role: 'Software Engineer Intern',
    company: 'StackAdapt - Measurements Team',
    location: 'Toronto, ON',
    period: 'January 2025 - April 2025',
    bullets: [
      'Built a full-stack React and Rails metric feature enabling over $5M in business opportunities.',
      'Led a deletion pipeline that reduced repetitive on-call work by 95% for 3,000+ advertisers.',
    ],
  },
  {
    id: 'saige',
    role: 'Software Developer Intern',
    company: 'Saige',
    location: 'Remote',
    period: 'November 2024 - January 2025',
    bullets: [
      'Built search and scraping workflows for a real estate analytics platform, driving 27% higher conversion.',
      'Implemented AWS EC2 VPN switching that improved pipeline throughput by 500%.',
    ],
  },
  {
    id: 'riipen-servicenext',
    role: 'Frontend Developer',
    company: 'Riipen | ServiceNext',
    location: 'Remote',
    period: 'July 2024 - September 2024',
    bullets: [
      'Developed responsive React components from Figma designs for a service professional marketplace.',
      'Led form and scheduling flows and earned a $1,400 Riipen project award.',
    ],
  },
];

const projects: ProjectItem[] = [
  {
    id: 'thumbmarks',
    title: 'Thumbmarks',
    summary: 'Chrome extension for visual bookmarking with exact scroll restore.',
    stack: ['React', 'WXT', 'Supabase'],
    repo: 'https://github.com/asadbmirza/Thumbmarks',
  },
  {
    id: 'papertrail',
    title: 'PaperTrail',
    summary: 'AI receipt dashboard with Gmail ingestion and OCR extraction.',
    stack: ['Next.js', 'Gemini', 'Supabase'],
    repo: 'https://github.com/asadbmirza',
  },
  {
    id: 'battleship',
    title: 'Async Battleship',
    summary: 'Concurrent multiplayer C server using epoll and signal handling.',
    stack: ['C', 'epoll', 'Networking'],
    repo: 'https://github.com/asadbmirza/Multiplayer-Online-Asynchronous-Battleship',
  },
  {
    id: 'planetze',
    title: 'Planetze',
    summary: 'Android emissions dashboard with Firebase-backed CRUD and notifications.',
    stack: ['Java', 'Android', 'Firebase'],
    repo: 'https://github.com/asadbmirza/Planetze-Mobile-Application',
  },
  {
    id: 'quiztime',
    title: 'Quiztime',
    summary: 'Flashcard learning app with repetition and progress tracking.',
    stack: ['React', 'Express', 'Postgres'],
    repo: 'https://github.com/RishiJain905/flashcard-project',
  },
  {
    id: 'tetris',
    title: 'Tetris Assembly',
    summary: 'Classic Tetris implemented in x86 assembly with low-level control.',
    stack: ['Assembly', 'x86', 'Systems'],
    repo: 'https://github.com/asadbmirza/tetris-assembly',
  },
  {
    id: 'pokemon',
    title: 'Pokemon Simulator',
    summary: 'Turn-based battle simulator implementing accurate combat logic.',
    stack: ['Java', 'OOP', 'Game Logic'],
    repo: 'https://github.com/asadbmirza/Pokemon-Battle-Simulator',
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionNodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const updateActiveSection = () => {
      const headerOffset = 104;
      const scrollPosition = window.scrollY + headerOffset;
      const pageBottom = window.scrollY + window.innerHeight;
      const nearBottom = pageBottom >= document.documentElement.scrollHeight - 4;

      if (nearBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      let currentSection = navItems[0].id;
      sectionNodes.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 88, behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-shell min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-8">
          <button onClick={() => scrollToSection('home')} className="brand-mark" data-testid="button-brand">
            Asad.M
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-pill ${activeSection === item.id ? 'nav-pill-active' : ''}`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <a
              href="https://drive.google.com/drive/folders/1-2zHdZil_2alXBk0OXFyBjzLqMRty9Jr?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="primary-pill"
              data-testid="button-resume"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-trigger md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'is-open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />
      <aside className={`mobile-nav-drawer ${isMobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Menu</span>
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            data-testid="button-mobile-menu-close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-2 px-5 py-5">
          {navItems.map((item) => (
            <button
              key={`mobile-${item.id}`}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`mobile-nav-pill ${activeSection === item.id ? 'mobile-nav-pill-active' : ''}`}
              data-testid={`mobile-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1-2zHdZil_2alXBk0OXFyBjzLqMRty9Jr?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="primary-pill mt-3 w-full justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
            data-testid="mobile-button-resume"
          >
            Resume
          </a>
        </nav>
      </aside>

      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 pb-16 pt-28 md:px-8">
        <section id="home" className="section-frame reveal-up">
          <div className="p-6 md:p-8">
            <div className="space-y-4">
              <p className="tag-pill">
                <MapPin className="h-3.5 w-3.5" />
                Toronto
              </p>

              <h1 className="text-5xl font-semibold leading-[0.94] md:text-7xl" data-testid="text-name">
                Asad Mirza
              </h1>

              <p className="max-w-xl rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary md:text-base">
                Incoming <span className="text-[#FF9900]">Amazon SDE Intern</span> - Summer 2026
              </p>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Software engineer building full-stack systems, analytics workflows, and reliable developer tooling with
                strong product impact.
              </p>

              <div className="flex flex-wrap gap-2">
                <a href="mailto:asadbmirza.05@gmail.com" className="action-pill">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a href="https://linkedin.com/in/asadbmirza" target="_blank" rel="noreferrer" className="action-pill">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/asadbmirza" target="_blank" rel="noreferrer" className="action-pill">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-frame reveal-up" style={{ animationDelay: '120ms' }}>
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
              I am Asad, a third-year Computer Science student at the University of Toronto specializing in Software
              Engineering. I recently completed my second Software Engineer internship at StackAdapt on the
              Measurements team, where I delivered over one-third of the end-to-end development for the first
              Cross-Channel Attribution product, projected to drive around $100M in advertiser spend this year. Across
              both terms, I worked primarily with React and TypeScript on the frontend, Ruby on Rails on the backend,
              and GraphQL.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
              During my first term at StackAdapt, I led the launch of a full-stack deletion pipeline that removed 95%
              of repetitive on-call work and built features for political clients that unlocked over $5M in business
              opportunities. Beyond internships, I have served as a Computer Science Teaching Assistant for more than
              600 students, helping them build strong Python and CS fundamentals, and I have also worked in startup
              environments building data analytics features with React and Python. I am also an incoming Amazon
              Software Development Engineer Intern for Summer 2026.
            </p>
          </div>
        </section>

        <section id="experience" className="section-frame reveal-up" style={{ animationDelay: '180ms' }}>
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold md:text-4xl">Experience</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {experiences.map((experience, index) => (
                <article
                  key={experience.id}
                  className="experience-card reveal-up"
                  style={{ animationDelay: `${index * 70 + 140}ms` }}
                  data-testid={`card-experience-${experience.id}`}
                >
                  <h3 className="text-xl font-semibold leading-tight">{experience.role}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.11em] text-primary">{experience.company}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    {experience.period} | {experience.location}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-6 text-muted-foreground">
                        - {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-frame reveal-up" style={{ animationDelay: '220ms' }}>
          <div className="p-6 md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-3xl font-semibold md:text-4xl">Project Library</h2>
              <Rocket className="h-6 w-6 text-primary" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="project-card reveal-up"
                  style={{ animationDelay: `${index * 55 + 120}ms` }}
                  data-testid={`card-project-${project.id}`}
                >
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={`${project.id}-${tech}`}
                          className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary"
                  >
                    Code
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-frame reveal-up" style={{ animationDelay: '260ms' }}>
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <a href="mailto:asadbmirza.05@gmail.com" className="contact-card">
                <Mail className="h-4 w-4" />
                asadbmirza.05@gmail.com
              </a>
              <a href="https://linkedin.com/in/asadbmirza" target="_blank" rel="noreferrer" className="contact-card">
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/asadbmirza
              </a>
              <a href="https://github.com/asadbmirza" target="_blank" rel="noreferrer" className="contact-card">
                <Github className="h-4 w-4" />
                github.com/asadbmirza
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
