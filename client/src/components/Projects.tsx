import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import thumbmarksImg from '../assets/thumbmarks.png'
import planetzeImg from '../assets/planetze.jpg'
import quiztimeImg from '../assets/quiztime.png'
import tetrisImg from '../assets/tetris.png'
import pbsImg from '../assets/pbs.png'

interface ProjectData {
  id: string;
  title: string;
  description: string;
  repo: string;
  technologies: string[];
  featured: boolean;
  homepage?: string;
  image?: string;
}

// Static project data
const projectsData: ProjectData[] = [
  {
    id: 'thumbmarks',
    title: 'Thumbmarks',
    description: 'Introducing Thumbmarks, the intelligent Chrome Extension that transforms how you save and revisit webpages. Instead of just bookmarking a URL, Thumbmarks captures the visual state of your page, including its precise scroll position and a screenshot, allowing you to instantly jump back to exactly where you left off, every single time.',
    repo: 'asadbmirza/Thumbmarks',
    technologies: ['TypeScript', 'React', 'WXT', 'Supabase', 'Chrome API'],
    featured: true,
    homepage: undefined,
    image: thumbmarksImg
  },
  {
    id: 'planetze',
    title: 'Planetze (Carbon Emissions Dashboard)', 
    description: 'Android app in Java with CRUD operations, push notifications, and carbon footprint visualization backed by Firebase',
    repo: 'asadbmirza/Planetze-Mobile-Application',
    technologies: ['Java', 'Android Studio', 'Firebase'],
    featured: true,
    homepage: undefined,
    image: planetzeImg
  },
  {
    id: 'flashcard',
    title: 'Quiztime: Flashcard Learning System',
    description: 'Interactive flashcard application for efficient learning with spaced repetition algorithms and progress tracking',
    repo: 'RishiJain905/flashcard-project',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    featured: true,
    homepage: undefined,
    image: quiztimeImg
  },
  {
    id: 'tetris',
    title: 'Tetris Assembly',
    description: 'Classic Tetris game implemented in x86 Assembly language, showcasing low-level programming skills and game logic',
    repo: 'asadbmirza/tetris-assembly',
    technologies: ['Assembly', 'x86', 'Game Development'],
    featured: false,
    homepage: undefined,
    image: tetrisImg
  },
  {
    id: 'battleship',
    title: 'Multiplayer Online Asynchronous Battleship',
    description: 'Scalable multiplayer Battleship server in C using epoll for I/O multiplexing and signal handling for concurrent connections',
    repo: 'asadbmirza/Multiplayer-Online-Asynchronous-Battleship',
    technologies: ['C', 'Networking', 'Concurrency', 'System Programming'],
    featured: true,
    homepage: undefined
  },
  {
    id: 'pokemon',
    title: 'Pokemon Battle Simulator',
    description: 'Turn-based Pokemon battle simulation with accurate battle mechanics, type effectiveness, and move calculations',
    repo: 'asadbmirza/Pokemon-Battle-Simulator',
    technologies: ['Java', 'Game Logic', 'OOP'],
    featured: false,
    homepage: undefined,
    image: pbsImg
  }
];

export default function Projects() {

  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  const ProjectCard = ({ project, isLarge = false }: { project: ProjectData, isLarge?: boolean }) => {
    return (
      <Card 
        className={`p-6 hover-elevate h-full flex flex-col ${isLarge ? 'md:col-span-2' : ''}`}
        data-testid={`card-project-${project.id}`}
      >
        {project.image && (
          <div className="mb-4 overflow-hidden rounded-md">
            <img 
              src={project.image} 
              alt={`${project.title} preview`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              data-testid={`img-project-${project.id}`}
            />
          </div>
        )}
        
        <h3 className={`font-semibold ${isLarge ? 'text-xl' : 'text-lg'} mb-4`} data-testid={`text-project-title-${project.id}`}>
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 flex-grow" data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6" data-testid={`tags-technologies-${project.id}`}>
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 flex-1"
            onClick={() => {
              window.open(`https://github.com/${project.repo}`, '_blank');
              console.log(`Opening GitHub repo: ${project.repo}`);
            }}
            data-testid={`button-github-${project.id}`}
          >
            <Github className="w-4 h-4" />
            Code
          </Button>
          {project.homepage && (
            <Button
              size="sm"
              className="gap-2 flex-1"
              onClick={() => {
                window.open(project.homepage, '_blank');
                console.log(`Opening demo: ${project.homepage}`);
              }}
              data-testid={`button-demo-${project.id}`}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </Button>
          )}
        </div>
      </Card>
    );
  };


  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto" data-testid="text-projects-description">
          A collection of projects showcasing my skills in full-stack development, 
          system programming, and problem-solving across various technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isLarge={index === 0}
            />
          ))}
        </div>
        
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="text-other-projects-title">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}