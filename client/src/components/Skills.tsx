import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Wrench, Globe } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'SQL', 'Ruby', 'HTML', 'CSS', 'Bash']
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Globe,
    skills: ['React', 'Node.js', 'Express', 'Flask', 'Ruby on Rails', 'GraphQL', 'React Query', 'MUI', 'WXT']
  },
  {
    id: 'tools',
    title: 'Developer Tools & Testing',
    icon: Wrench,
    skills: ['RSpec', 'Jest', 'Pytest', 'Git', 'Linux', 'Jira', 'Docker', 'AWS EC2', 'CI/CD', 'Pipelines']
  },
  {
    id: 'practices',
    title: 'Practices & Concepts',
    icon: Database,
    skills: ['Object Oriented Design', 'REST', 'SOLID', 'Agile/Scrum', 'Distributed Computing', 'Networking Fundamentals (TCP)', 'AdTech']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center" data-testid="text-skills-title">
          Technical Skills
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto" data-testid="text-skills-description">
          A comprehensive toolkit developed through hands-on experience in software engineering, 
          academic coursework, and personal projects.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="p-6 hover-elevate" data-testid={`card-skill-category-${category.id}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid={`text-category-title-${category.id}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2" data-testid={`tags-skills-${category.id}`}>
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover-elevate cursor-default"
                    data-testid={`tag-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 hover-elevate" data-testid="card-learning">
            <h4 className="font-semibold mb-2" data-testid="text-learning-title">
              Always Learning
            </h4>
            <p className="text-muted-foreground max-w-lg" data-testid="text-learning-description">
              I'm constantly exploring new technologies and frameworks. Currently diving deeper into 
              distributed systems, cloud architecture, and advanced React patterns.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}