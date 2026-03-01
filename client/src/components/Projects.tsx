import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiChevronDown } from "react-icons/fi";
import content from "../data/portfolio-content.json";

/* Project screenshots */
import imgThumbmarks from "../assets/thumbmarks.png";
import imgPapertrail from "../assets/papertrail.png";
import imgPlanetze from "../assets/planetze.jpg";
import imgQuiztime from "../assets/quiztime.png";
import imgTetris from "../assets/tetris.png";
import imgPBS from "../assets/pbs.png";

const { projects } = content;

interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  repo: string;
  stack: string[];
  featured: boolean;
  imageKey?: string;
}

const allProjects = projects.items as ProjectItem[];
const featured = allProjects.filter((p) => p.featured);
const other = allProjects.filter((p) => !p.featured);

/* Map project IDs to imported images */
const projectImages: Record<string, string> = {
  thumbmarks: imgThumbmarks,
  papertrail: imgPapertrail,
  planetze: imgPlanetze,
  quiztime: imgQuiztime,
  tetris: imgTetris,
  pokemon: imgPBS,
};

/* Unique gradient colour pairs per project (fallback) */
const projectGradients: Record<string, [string, string]> = {
  thumbmarks: ["#A78BFA", "#06B6D4"],
  papertrail: ["#34D399", "#FBBF24"],
  battleship: ["#F87171", "#FB923C"],
  planetze: ["#4ADE80", "#2DD4BF"],
  quiztime: ["#60A5FA", "#C084FC"],
  tetris: ["#F472B6", "#FB7185"],
  pokemon: ["#FBBF24", "#FB923C"],
};

function hexToRgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function getGradient(id: string, alpha = 0.08): string {
  const [a, b] = projectGradients[id] ?? ["#A78BFA", "#8B5CF6"];
  return `linear-gradient(135deg, ${hexToRgba(a, alpha)} 0%, ${hexToRgba(b, alpha)} 100%)`;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export default function Projects() {
  const [showOther, setShowOther] = useState(true);
  const heroProject = featured[0];
  const gridProjects = featured.slice(1);

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="mb-6"
        >
          <h2 className="font-heading text-fluid-xl font-bold text-light tracking-tight">
            {projects.featuredTitle}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-accent rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-base max-w-2xl mb-14"
        >
          {projects.featuredDescription}
        </motion.p>

        {/* Hero project — full width with screenshot */}
        {heroProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group border border-white/10 hover:border-accent/30 rounded-lg overflow-hidden transition-all duration-300 mb-5 hover:shadow-lg hover:shadow-accent/5"
          >
            {/* Gradient strip */}
            <div
              className="h-1.5 w-full"
              style={{ background: getGradient(heroProject.id, 0.5) }}
            />

            <div className="p-6 md:p-8 grid md:grid-cols-5 gap-6">
              {/* Screenshot / gradient visual */}
              <ProjectVisual project={heroProject} className="md:col-span-2 h-40 md:h-full min-h-[140px]" />

              {/* Content */}
              <div className="md:col-span-3">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-light font-semibold text-xl group-hover:text-accent transition-colors">
                    {heroProject.title}
                  </h3>
                  <a
                    href={heroProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors shrink-0 ml-3"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-2">
                  {heroProject.summary}
                </p>
                <p className="text-muted/60 text-xs leading-relaxed mb-4">
                  {heroProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {heroProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] border border-white/10 text-muted rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Remaining featured — 2x2 grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Other projects */}
        {other.length > 0 && (
          <div className="mt-16">
            <button
              onClick={() => setShowOther(!showOther)}
              className="flex items-center gap-2 text-muted hover:text-light transition-colors text-sm font-medium group"
            >
              <span>{projects.otherTitle}</span>
              <motion.span
                animate={{ rotate: showOther ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {showOther && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-5 mt-6">
                    {other.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

/* Shared image/gradient visual block */
function ProjectVisual({
  project,
  className = "",
}: {
  project: ProjectItem;
  className?: string;
}) {
  const img = projectImages[project.id];

  return (
    <div
      className={`rounded-lg relative overflow-hidden ${className}`}
      style={{ background: getGradient(project.id, 0.12) }}
    >
      {img ? (
        <img
          src={img}
          alt={`${project.title} screenshot`}
          className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      ) : (
        /* Dot grid fallback for projects without images */
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const [hovered, setHovered] = useState(false);
  const hasImage = !!projectImages[project.id];

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group border border-white/10 hover:border-accent/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Screenshot thumbnail or gradient strip */}
      {hasImage ? (
        <div
          className="h-36 w-full relative overflow-hidden"
          style={{ background: getGradient(project.id, 0.12) }}
        >
          <img
            src={projectImages[project.id]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      ) : (
        <div
          className="h-1 w-full"
          style={{ background: getGradient(project.id, 0.5) }}
        />
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-light font-semibold text-lg group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors shrink-0 ml-3"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FiGithub size={18} />
          </a>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Description revealed on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="text-muted/60 text-xs leading-relaxed mb-4 overflow-hidden"
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] border border-white/10 text-muted rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
