import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, ExternalLink, FileText } from 'lucide-react';

const roles = [
  'Software Engineer',
  'Full-Stack Developer', 
  'Computer Science Student',
  'Problem Solver'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentRole, displayText, isTyping]);

  const contactLinks = [
    {
      icon: Github,
      href: 'https://github.com/asadbmirza',
      label: 'GitHub',
      testId: 'link-github'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/asadbmirza',
      label: 'LinkedIn',
      testId: 'link-linkedin'
    },
    {
      icon: Mail,
      href: 'mailto:asadbmirza.05@gmail.com',
      label: 'Email',
      testId: 'link-email'
    },
    {
      icon: FileText,
      href: 'https://drive.google.com/drive/folders/1-2zHdZil_2alXBk0OXFyBjzLqMRty9Jr?usp=drive_link',
      label: 'Resume',
      testId: 'link-resume'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-name">
          Asad Mirza
        </h1>
        
        <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
          <span data-testid="text-role">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" data-testid="text-description">
          Currently a Returning Software Engineer Intern at StackAdapt, building scalable 
          measurements solutions for 2000+ clients. Computer Science student and Teaching Assistant at the University of Toronto with 
          a passion for systems and full-stack development.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {contactLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => {
                window.open(link.href, '_blank');
                console.log(`Opening ${link.label}`);
              }}
              data-testid={link.testId}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
              <ExternalLink className="w-4 h-4" />
            </Button>
          ))}
        </div>

        <Button 
          size="lg" 
          className="gap-2"
          onClick={() => {
            const element = document.getElementById("experience");
            if (element) {
              const offsetTop = element.offsetTop - 80;
              window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          }}
          data-testid="button-view-work"
        >
          View My Experience
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}