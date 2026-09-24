import content from "../data/portfolio-content.json";
import Reveal from "./Reveal";
import imgThumbmarks from "../assets/thumbmarks.png";
import imgPapertrail from "../assets/papertrail.png";
import imgPlanetze from "../assets/planetze.jpg";
import imgQuiztime from "../assets/quiztime.png";
import imgTetris from "../assets/tetris.png";
import imgPokemon from "../assets/pbs.png";
import imgProblemForge from "../assets/problemforge.png";

const { projects } = content;
type Project = (typeof projects.items)[number];

const projectImages: Record<string, string> = {
  problemforge: imgProblemForge,
  thumbmarks: imgThumbmarks,
  papertrail: imgPapertrail,
  planetze: imgPlanetze,
  quiztime: imgQuiztime,
  tetris: imgTetris,
  pokemon: imgPokemon,
};

const projectImageSizes: Record<string, { width: number; height: number }> = {
  problemforge: { width: 1393, height: 727 },
  thumbmarks: { width: 2004, height: 1276 },
  papertrail: { width: 806, height: 510 },
  planetze: { width: 1080, height: 1425 },
  quiztime: { width: 1901, height: 936 },
  tetris: { width: 695, height: 264 },
  pokemon: { width: 1191, height: 665 },
};

const featured = projects.items.filter((project) => project.featured);
const other = projects.items.filter((project) => !project.featured);

export default function Projects() {
  const leadProject = featured[0];
  const supportingProjects = featured.slice(1);

  return (
    <section id="projects" className="content-section" aria-labelledby="projects-title">
      <div className="page-frame">
        <Reveal className="section-heading section-heading-with-copy">
          <h2 id="projects-title">Selected projects</h2>
          <p>{projects.featuredDescription}</p>
        </Reveal>

        <div className="project-gallery">
          {leadProject && <ProjectCard project={leadProject} featured />}
          {supportingProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} slot={index} />
          ))}
        </div>

        <Reveal className="project-index" delay={0.08}>
          <h3>{projects.otherTitle}</h3>
          <div>
            {other.map((project) => (
              <a key={project.id} href={project.repo} target="_blank" rel="noreferrer">
                <span>{project.title}</span>
                <span>{project.summary}</span>
                <strong>View on GitHub</strong>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured: isFeatured = false,
  slot = 0,
}: {
  project: Project;
  featured?: boolean;
  slot?: number;
}) {
  const image = projectImages[project.id];
  const imageSize = projectImageSizes[project.id];
  const caseStudyPath = "caseStudyPath" in project ? project.caseStudyPath : null;
  const className = isFeatured
    ? "project-card project-card-featured"
    : `project-card project-card-secondary project-slot-${slot}`;

  if (caseStudyPath) {
    return (
      <Reveal className={className} delay={isFeatured ? 0 : 0.04 + slot * 0.04}>
        <a className="project-card-link" href={caseStudyPath}>
          <article>
            <div className="project-media">
              <img
                src={image}
                alt={`${project.title} coding practice platform`}
                width={imageSize.width}
                height={imageSize.height}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-copy">
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <strong className="project-card-cta">View Case Study</strong>
            </div>
            <p className="project-stack">{project.stack.join(", ")}</p>
          </article>
        </a>
      </Reveal>
    );
  }

  return (
    <Reveal className={className} delay={isFeatured ? 0 : 0.04 + slot * 0.04}>
      <article>
        {image ? (
          <a className="project-media" href={project.repo} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt={`${project.title} project screenshot`}
              width={imageSize.width}
              height={imageSize.height}
              loading="lazy"
              decoding="async"
            />
          </a>
        ) : (
          <div className="project-type-visual" aria-hidden="true">
            <span>Concurrent systems</span>
            <strong>C / epoll</strong>
          </div>
        )}
        <div className="project-copy">
          <div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
          <a href={project.repo} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
        <p className="project-stack">{project.stack.join(", ")}</p>
      </article>
    </Reveal>
  );
}
