import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center" data-testid="text-about-title">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 hover-elevate">
              <h3 className="text-xl font-semibold mb-4" data-testid="text-about-subtitle">
                Software Engineer & Student
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-description">
                I'm a Computer Science student at the University of Toronto with a 3.70 cGPA, 
                currently working as a Returning Software Engineer Intern at StackAdapt. 
                I specialize in full-stack development with expertise in React, TypeScript, 
                and distributed systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-experience">
                At StackAdapt, I've led the design and launch of full-stack features that 
                directly impact 2,000+ advertisers, cutting operational work by 95% and 
                safeguarding company revenue. I'm passionate about building scalable 
                solutions and optimizing user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-about-interests">
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and helping fellow students as a Teaching Assistant 
                for Intro to Computer Science at UofT.
              </p>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 hover-elevate">
              <h4 className="font-semibold mb-2" data-testid="text-current-role">
                Current Role
              </h4>
              <p className="text-muted-foreground" data-testid="text-current-position">
                Returning Software Engineer Intern at StackAdapt
              </p>
            </Card>
            
            <Card className="p-6 hover-elevate">
              <h4 className="font-semibold mb-2" data-testid="text-education-status">
                Education
              </h4>
              <p className="text-muted-foreground" data-testid="text-university">
                Computer Science (BSc) at University of Toronto
              </p>
              <p className="text-sm text-muted-foreground" data-testid="text-gpa">
                3.70 cGPA • Dean's List • Presidents Scholarship
              </p>
            </Card>
            
            <Card className="p-6 hover-elevate">
              <h4 className="font-semibold mb-2" data-testid="text-focus-areas">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Full-Stack Development', 'Distributed Systems', 'AdTech', 'UI/UX'].map((area) => (
                  <span 
                    key={area} 
                    className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                    data-testid={`tag-focus-${area.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}