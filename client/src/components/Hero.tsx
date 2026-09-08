import { motion, useReducedMotion } from "framer-motion";
import content from "../data/portfolio-content.json";
import heroArtwork from "../assets/systems-sculpture.png";

const { profile } = content;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) => ({
    initial: false as const,
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.45,
      delay: reduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="page-frame hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...enter(0.06)}>
            {profile.heroCallout}
          </motion.p>
          <motion.h1 id="hero-title" {...enter(0.14)}>
            {profile.name}
          </motion.h1>
          <motion.p className="hero-summary" {...enter(0.22)}>
            {profile.heroSummary}
          </motion.p>
          <motion.div className="hero-actions" {...enter(0.3)}>
            <a className="button button-primary" href="#experience">
              View Work
            </a>
            <a
              className="button button-secondary"
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="hero-art"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.2 }}
        >
          <img
            src={heroArtwork}
            alt="Abstract graphite architectural sculpture with a signal-green plane"
            width="1448"
            height="1086"
            decoding="async"
            fetchPriority="high"
          />
        </motion.figure>
      </div>
    </section>
  );
}
