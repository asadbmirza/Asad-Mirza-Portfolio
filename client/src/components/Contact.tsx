import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

interface ContactMethod {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  description: string;
  testId: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'asadbmirza.05@gmail.com',
    href: 'mailto:asadbmirza.05@gmail.com',
    description: 'Best way to reach me for opportunities',
    testId: 'contact-email'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '905-244-5490',
    href: 'tel:905-244-5490',
    description: 'Available for calls and messages',
    testId: 'contact-phone'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/asadbmirza',
    href: 'https://github.com/asadbmirza',
    description: 'Check out my latest projects and contributions',
    testId: 'contact-github'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/asadbmirza',
    href: 'https://linkedin.com/in/asadbmirza',
    description: 'Connect with me professionally',
    testId: 'contact-linkedin'
  }
];

export default function Contact() {
  const handleContactClick = (method: ContactMethod) => {
    window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self');
    console.log(`Contacting via ${method.label}: ${method.href}`);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center" data-testid="text-contact-title">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto" data-testid="text-contact-description">
          I'm always interested in discussing new opportunities, collaborations, or just connecting 
          with fellow developers. Feel free to reach out through any of these channels.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Card 
              key={method.label} 
              className="p-6 hover-elevate cursor-pointer transition-all duration-300"
              onClick={() => handleContactClick(method)}
              data-testid={`card-${method.testId}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-semibold mb-2" data-testid={`text-${method.testId}-label`}>
                  {method.label}
                </h3>
                
                <p className="text-primary font-mono text-sm mb-3 break-all" data-testid={`text-${method.testId}-value`}>
                  {method.value}
                </p>
                
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-${method.testId}-description`}>
                  {method.description}
                </p>
                
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="inline-block p-8 hover-elevate" data-testid="card-location">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold" data-testid="text-location-title">
                Based in Toronto
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-location-description">
              Currently studying at the University of Toronto and working with StackAdapt. 
              Open to opportunities in the Greater Toronto Area and remote positions.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => handleContactClick(contactMethods[0])}
                data-testid="button-primary-contact"
              >
                Send Email
              </Button>
              <Button
                onClick={() => handleContactClick(contactMethods[2])}
                data-testid="button-view-github"
              >
                View GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}