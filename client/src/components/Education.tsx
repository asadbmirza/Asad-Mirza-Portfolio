import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import content from "../data/portfolio-content.json";

const { education } = content;

interface CourseCategory {
  category: string;
  courses: string[];
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tagVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section heading — scales in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          className="mb-16"
        >
          <h2 className="font-heading text-fluid-xl font-bold text-light tracking-tight">
            {education.title}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-accent rounded-full" />
        </motion.div>

        {/* Card — scales up from 0.95 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.1 }}
          className="border border-white/10 rounded-lg p-8"
        >
          {/* Degree & University */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <h3 className="font-heading text-light font-bold text-2xl">
              {education.degree}
            </h3>
            <span className="text-muted text-sm font-medium">{education.period}</span>
          </div>
          <p className="text-accent font-medium text-base mb-1">
            {education.university}
          </p>
          <p className="text-muted text-sm mb-6">{education.gpa}</p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-muted/80 text-sm leading-relaxed mb-8"
          >
            {education.description}
          </motion.p>

          {/* Awards — staggered pop-in */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h4 className="text-xs uppercase tracking-widest text-muted mb-3 flex items-center gap-2">
              <FiAward size={14} className="text-accent" />
              Awards & Recognition
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.awards.map((award) => (
                <motion.span
                  key={award}
                  variants={tagVariant}
                  className="px-3 py-1 text-xs border border-accent/20 text-accent/90 rounded-full bg-accent/5"
                >
                  {award}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Courses — staggered slide-up */}
          <div className="space-y-5">
            {(education.courseCategories as CourseCategory[]).map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + idx * 0.08, type: "spring", stiffness: 100, damping: 18 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-muted mb-2.5">
                  {cat.category}
                </h4>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {cat.courses.map((course) => (
                    <motion.span
                      key={course}
                      variants={tagVariant}
                      className="px-2.5 py-0.5 text-[11px] border border-white/10 text-muted rounded-full"
                    >
                      {course}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
