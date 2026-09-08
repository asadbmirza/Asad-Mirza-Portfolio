import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import content from "../data/portfolio-content.json";
import Reveal from "./Reveal";

const { experience } = content;
type ExperienceItem = (typeof experience.items)[number];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experience.items[0]?.id ?? null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="content-section" aria-labelledby="experience-title">
      <div className="page-frame">
        <Reveal className="section-heading">
          <h2 id="experience-title">{experience.title}</h2>
        </Reveal>

        <div className="experience-list">
          {experience.items.map((item, index) => (
            <ExperienceRow
              key={item.id}
              item={item}
              index={index}
              expanded={expandedId === item.id}
              reduceMotion={Boolean(reduceMotion)}
              onToggle={() => setExpandedId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({
  item,
  index,
  expanded,
  reduceMotion,
  onToggle,
}: {
  item: ExperienceItem;
  index: number;
  expanded: boolean;
  reduceMotion: boolean;
  onToggle: () => void;
}) {
  const panelId = `experience-panel-${item.id}`;

  return (
    <Reveal delay={Math.min(index * 0.04, 0.2)}>
      <article className={expanded ? "experience-row is-expanded" : "experience-row"}>
        <button
          type="button"
          className="experience-trigger"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="experience-company">{item.company}</span>
          <span className="experience-role">{item.role}</span>
          <span className="experience-period">{item.period}</span>
          <span className="experience-symbol" aria-hidden="true">
            {expanded ? "−" : "+"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              className="experience-panel"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="experience-panel-inner">
                <div className="experience-meta">
                  {item.team && <p>{item.team}</p>}
                  <p>{item.location}</p>
                  <p>{item.technologies.join(", ")}</p>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}
