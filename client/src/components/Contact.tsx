import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import content from "../data/portfolio-content.json";

const { contact, profile } = content;

const iconMap: Record<string, React.ReactNode> = {
  email: <FiMail size={22} />,
  github: <FiGithub size={22} />,
  linkedin: <FiLinkedin size={22} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 relative">
      {/* Subtle radial background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="font-heading text-fluid-xl font-bold text-light tracking-tight">
            {contact.title}
          </h2>
          <div className="mt-3 w-16 h-[2px] bg-accent rounded-full mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted text-base max-w-xl mx-auto mb-12"
        >
          {contact.description}
        </motion.p>

        {/* Contact methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {contact.methods.map((method) => (
            <motion.a
              key={method.id}
              href={method.href}
              target={method.id !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group border border-white/10 hover:border-accent/30 rounded-lg p-5 transition-all text-left"
            >
              <div className="text-muted group-hover:text-accent transition-colors mb-3">
                {iconMap[method.id]}
              </div>
              <h3 className="text-light font-medium text-sm mb-0.5">
                {method.label}
              </h3>
              <p className="text-accent text-xs font-medium mb-1">{method.value}</p>
              <p className="text-muted/60 text-xs">{method.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <p className="text-light text-sm font-medium">{contact.locationTitle}</p>
          <p className="text-muted/70 text-xs mt-1">{contact.locationDescription}</p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(167,139,250,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 bg-accent text-white font-semibold text-sm rounded-lg transition-all hover:bg-accent-dim"
          >
            {contact.primaryButtonLabel}
          </motion.a>
          <motion.a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 border border-white/20 text-light font-semibold text-sm rounded-lg transition-all hover:border-white/40"
          >
            {contact.secondaryButtonLabel}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
