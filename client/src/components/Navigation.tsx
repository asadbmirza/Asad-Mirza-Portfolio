import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onSectionClick('home')}
            className="text-xl font-mono font-semibold hover-elevate px-3 py-1 rounded-md"
            data-testid="button-home"
          >
            asad.mirza
          </button>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`text-sm font-medium transition-colors hover-elevate px-3 py-1 rounded-md ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`button-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                window.open('https://drive.google.com/drive/folders/1-2zHdZil_2alXBk0OXFyBjzLqMRty9Jr?usp=drive_link', '_blank');
                console.log('Opening resume');
              }}
              data-testid="button-header-resume"
            >
              <FileText className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
}