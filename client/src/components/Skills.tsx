import { motion } from "framer-motion";
import content from "../data/portfolio-content.json";

const { skills } = content;

interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

/* Deterministic pseudo-random based on string hash */
function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

/* Each pill gets a unique scatter origin based on its name */
function scatterVariant(skill: string) {
  const h = hashCode(skill);
  const xOff = ((h % 60) - 30); // -30 to +30
  const yOff = (((h >> 4) % 40) - 20); // -20 to +20
  const rot = ((h >> 8) % 20) - 10; // -10 to +10 deg
  return {
    hidden: { opacity: 0, scale: 0.5, x: xOff, y: yOff, rotate: rot },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section heading — fades up from left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="mb-6"
        >
          <h2 className="font-heading text-fluid-xl font-bold text-light tracking-tight">
            {skills.title}
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
          {skills.description}
        </motion.p>

        {/* Categories with scatter-in pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {(skills.categories as SkillCategory[]).map((category) => (
            <motion.div key={category.id} variants={categoryVariants}>
              <h3 className="font-heading text-light font-semibold text-base mb-4 relative inline-block">
                {category.title}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent/40" />
              </h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={scatterVariant(skill)}
                    whileHover={{ scale: 1.08, borderColor: "rgba(59,130,246,0.4)" }}
                    className="px-3 py-1.5 text-sm border border-white/15 text-muted rounded-full hover:text-light transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Always Learning */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 border-t border-white/5 pt-8"
        >
          <h4 className="font-heading text-light font-medium text-sm mb-2">
            {skills.learningTitle}
          </h4>
          <p className="text-muted/70 text-sm italic">{skills.learningDescription}</p>
        </motion.div>
      </div>
    </section>
  );
}
