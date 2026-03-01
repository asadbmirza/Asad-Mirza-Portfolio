import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import content from "../data/portfolio-content.json";

const { experience } = content;

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  team: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export default function Experience() {
  // First item expanded by default
  const [expandedId, setExpandedId] = useState<string | null>(
    (experience.items as ExperienceItem[])[0]?.id ?? null
  );

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="mb-16"
        >
          <h2 className="font-heading text-fluid-xl font-bold text-light tracking-tight">
            {experience.title}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-accent rounded-full" />
        </motion.div>

        {/* Accordion timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-[19px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />

          <div className="space-y-3">
            {(experience.items as ExperienceItem[]).map((item, i) => {
              const isExpanded = expandedId === item.id;
              const isFirst = i === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: i * 0.06,
                  }}
                  className="relative pl-8 md:pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-4 top-5 w-3.5 h-3.5 rounded-full -translate-x-1/2 border-2 transition-all duration-300 ${
                      isExpanded
                        ? "bg-accent border-accent shadow-[0_0_12px_rgba(167,139,250,0.5)]"
                        : isFirst
                        ? "bg-accent/60 border-accent/60"
                        : "bg-transparent border-white/25"
                    }`}
                  />

                  {/* Accordion card */}
                  <div
                    className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "border-accent/25 bg-accent/[0.03]"
                        : "border-white/8 hover:border-accent/25 hover:bg-accent/[0.02]"
                    }`}
                  >
                    {/* Header — always visible, clickable */}
                    <button
                      onClick={() => toggle(item.id)}
                      className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-0.5">
                          <h3 className="font-heading text-light font-semibold text-lg truncate">
                            {item.company}
                          </h3>
                          <span className="text-muted text-xs font-medium shrink-0">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-accent text-sm font-medium">{item.role}</p>
                      </div>

                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted group-hover:text-light transition-colors mt-1 shrink-0"
                      >
                        <FiChevronDown size={18} />
                      </motion.span>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                            {/* Meta */}
                            {item.team && (
                              <p className="text-muted text-xs mb-0.5">{item.team}</p>
                            )}
                            <p className="text-muted text-xs mb-4">{item.location}</p>

                            {/* Bullets */}
                            <ul className="space-y-2.5 mb-5">
                              {item.bullets.map((bullet, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.05 }}
                                  className="text-muted text-sm leading-relaxed flex gap-2.5"
                                >
                                  <span className="text-accent mt-1 shrink-0 text-[8px]">&#9656;</span>
                                  <span>{bullet}</span>
                                </motion.li>
                              ))}
                            </ul>

                            {/* Tech stack */}
                            {item.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-0.5 text-[11px] border border-white/10 text-muted rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
