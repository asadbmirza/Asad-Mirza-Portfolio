import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

interface CourseCategory {
  category: string;
  courses: string[];
}

const relevantCourses: CourseCategory[] = [
  {
    category: 'Core Computer Science',
    courses: ['Software Design', 'Systems Programming', 'Computer Organization', 'Data Structures & Algorithms', 'Human Computer Interaction']
  },
  {
    category: 'Mathematics',
    courses: ['Linear Algebra I-II', 'Calculus I-III']
  }
];

const awards = [
  'Dean\'s List',
  'President\'s Scholarship Award ($7,500)',
  'Academic Excellence Recognition'
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center" data-testid="text-education-title">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate" data-testid="card-university">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold" data-testid="text-degree">
                    Bachelor of Science, Computer Science
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span data-testid="text-duration">2023 – 2027</span>
                  </div>
                </div>
                
                <p className="text-xl text-primary font-medium mb-4" data-testid="text-university-name">
                  University of Toronto, Toronto, ON
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2" data-testid="text-academic-performance">
                      <Award className="w-5 h-5 text-primary" />
                      Academic Performance
                    </h4>
                    <p className="text-lg mb-2" data-testid="text-gpa">
                      <span className="font-medium">3.70 cGPA</span>
                    </p>
                    
                    <div className="space-y-1" data-testid="list-awards">
                      {awards.map((award) => (
                        <div key={award} className="text-muted-foreground flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2" data-testid="text-relevant-courses">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Relevant Coursework
                    </h4>
                    
                    <div className="space-y-4" data-testid="list-course-categories">
                      {relevantCourses.map((category) => (
                        <div key={category.category}>
                          <h5 className="text-sm font-medium text-muted-foreground mb-2" data-testid={`text-category-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                            {category.category}
                          </h5>
                          <div className="flex flex-wrap gap-1" data-testid={`tags-courses-${category.category.toLowerCase().replace(/\s+/g, '-')}`}>
                            {category.courses.map((course) => (
                              <Badge 
                                key={course} 
                                variant="outline" 
                                className="text-xs"
                                data-testid={`tag-course-${course.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <p className="text-muted-foreground leading-relaxed" data-testid="text-education-description">
                    Currently pursuing a comprehensive Computer Science education with focus on 
                    software engineering principles, systems programming, and mathematical foundations. 
                    Consistently maintaining high academic standards while gaining practical experience 
                    through internships and research opportunities.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}