import { motion } from "framer-motion";
import { highlightAmazon } from "../lib/highlightText";
import content from "../data/portfolio-content.json";

const { about } = content;

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -right-32 top-20 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-fluid-xl font-bold text-light tracking-tight">
            {about.componentTitle}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Left: paragraphs */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            {about.summaryParagraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-muted text-base leading-relaxed"
              >
                {highlightAmazon(p)}
              </motion.p>
            ))}
          </motion.div>

          {/* Right: info card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Current Role */}
            <div className="border border-white/10 rounded-lg p-5">
              <p className="text-xs uppercase tracking-widest text-muted mb-2">
                {about.currentRoleTitle}
              </p>
              <p className="text-light font-medium text-sm">
                {about.currentRoleValue}
              </p>
            </div>

            {/* Education */}
            <div className="border border-white/10 rounded-lg p-5">
              <p className="text-xs uppercase tracking-widest text-muted mb-2">
                {about.educationStatusTitle}
              </p>
              <p className="text-light font-medium text-sm">
                {about.educationStatusValue}
              </p>
              <p className="text-muted text-xs mt-1">{about.educationStatusMeta}</p>
            </div>

            {/* Focus Areas */}
            <div className="border border-white/10 rounded-lg p-5">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                {about.focusAreasTitle}
              </p>
              <div className="flex flex-wrap gap-2">
                {about.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 text-xs border border-white/15 text-light/80 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
