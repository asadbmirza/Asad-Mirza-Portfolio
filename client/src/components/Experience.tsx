import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'stackadapt-returning',
    title: 'Returning Software Engineer Intern',
    company: 'StackAdapt',
    location: 'Toronto, ON',
    period: 'September 2025 - Present',
    description: 'Measurements Team',
    achievements: [
      'Shipped multiple scalable analytics & observability features/fixes for an AdTech platform serving 2,000+ advertisers handling large-scale workflow data'
    ],
    technologies: ['React', 'TypeScript', 'Rails', 'GraphQL', 'Docker', 'React Query', 'RSpec', 'Jest']
  },
  {
    id: 'stackadapt-intern',
    title: 'Software Engineer Intern',
    company: 'StackAdapt',
    location: 'Toronto, ON',
    period: 'January 2025 – April 2025',
    description: 'Measurements Team',
    achievements: [
      'Led the end-to-end design and launch of a full-stack deletion pipeline, cutting a large chunk of repetitive on-call work and preventing unintended charges for 2,000+ advertisers',
      'Refactored an old dropdown table with SOLID principles, supporting customizable props and replacing 1,000+ LoC',
      'Wrote requirements-driven black-box RSpec & Jest suites for every feature shipped, keeping code above 90% coverage',
      'Collaborated with PMs, designers, and code owners to nail down requirements and trade-offs early, helping deliver multiple 8-point stories with zero scope churn.'
    ],
    technologies: ['React', 'TypeScript', 'Rails', 'GraphQL', 'Docker', 'React Query', 'RSpec', 'Jest']
  },
  {
    id: 'saige',
    title: 'Software Developer Intern',
    company: 'Saige',
    location: 'Remote',
    period: 'November 2024 – January 2025',
    description: 'Real Estate Analytics Platform',
    achievements: [
      'Developed new searching & optimized web scraping features for a data analytics real estate platform for agents that houses thousands of properties, leading to a 27% higher client conversion rate',
      'Modularized real estate filtering code by abstracting shared logic into reusable classes, accelerating development from days to hours',
      'Optimized real estate data pipeline code by developing a VPN switcher on AWS EC2 that increased throughput by 500% to deliver fresher metrics to users'
    ],
    technologies: ['React', 'Python', 'Flask', 'MySQL', 'AWS EC2']
  },
  {
    id: 'uoft-ta',
    title: 'Teaching Assistant – Intro to Computer Science I',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    period: 'September 2024 – Present',
    description: 'Computer Science Department',
    achievements: [
      'Selected by Professor Gawde from 200+ applicants as an undergrad to teach over 600 students Python and computer science concepts during lectures, leading to being personally requested for office hours.',
      'Led weekly office hours, code-reviewing programming assignments and providing constructive feedback to enhance understanding of coding concepts and problem-solving strategies.'
    ],
    technologies: ['Python', 'Teaching', 'Mentorship']
  },
  {
    id: 'uoft-research',
    title: 'Research Associate',
    company: 'University of Toronto',
    location: 'Remote',
    period: 'March 2024 – January 2025',
    description: 'Professor Brian Harrington',
    achievements: [
      'Co-authored and submitted "A Systematic Literature Mapping of Early Generative AI Research in CS Education" to SIGCSE 2025',
      'Presented research findings at academic seminars with faculty and grad students to refine methodology and interpretations.'
    ],
    technologies: ['Research', 'Academic Writing', 'Data Analysis']
  },
  {
    id: 'riipen-servicenext',
    title: 'Frontend Developer',
    company: 'Riipen | ServiceNext',
    location: 'Remote',
    period: 'July 2024 – September 2024',
    description: 'Service Professional Marketplace',
    achievements: [
      'Developed responsive frontend components from scratch for a service provider web application using Figma, React, JavaScript, and CSS, showcasing expertise in frontend development and ehnancing UI/UX.', 
      'Led React component development within an agile environment, taking ownership of code reviews for fellow interns and majorly structuring user profile forms, validation, and scheduling systems using Formik, Yup, and Axios, earning a $1,400 project award from Riipen for excellence.'
    ],
    technologies: ['React', 'React Bootstrap', 'Javascript', 'Formik']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center" data-testid="text-experience-title">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-8 h-8 bg-background rounded-full" />
                </div>
                
                <Card className="flex-1 p-6 hover-elevate" data-testid={`card-experience-${exp.id}`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1" data-testid={`text-title-${exp.id}`}>
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-2" data-testid={`text-company-${exp.id}`}>
                        {exp.company} • {exp.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1" data-testid={`text-period-${exp.id}`}>
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1" data-testid={`text-location-${exp.id}`}>
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6" data-testid={`list-achievements-${exp.id}`}>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-muted-foreground flex">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2" data-testid={`tags-technologies-${exp.id}`}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}