import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import { highlightAmazon } from "../lib/highlightText";
import content from "../data/portfolio-content.json";

const { profile } = content;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 960
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 540
  );

  const gradientX = useTransform(
    mouseX,
    [0, typeof window !== "undefined" ? window.innerWidth : 1920],
    [20, 80]
  );
  const gradientY = useTransform(
    mouseY,
    [0, typeof window !== "undefined" ? window.innerHeight : 1080],
    [20, 80]
  );

  /* useMotionTemplate subscribes reactively — gradient now actually follows the mouse */
  const gradientBg = useMotionTemplate`radial-gradient(ellipse at ${gradientX}% ${gradientY}%, rgba(167,139,250,0.08) 0%, transparent 60%)`;

  // Cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.heroRoles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Track mouse for gradient
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mouse-tracking gradient — now reactive via useMotionTemplate */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: gradientBg }}
      />

      {/* Breathing ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,100vh)] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Drifting dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] animate-drift"
        style={{
          backgroundImage:
            "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-heading font-bold text-fluid-3xl text-light leading-[0.95] tracking-tight mb-6"
        >
          {profile.name}
        </motion.h1>

        {/* Animated Role — wrapped in AnimatePresence mode="wait" for proper enter/exit */}
        <motion.div variants={itemVariants} className="h-10 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl text-accent font-medium"
            >
              {profile.heroRoles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Callout Badge — differentiated: smaller, uppercase, wider tracking */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-widest border border-accent/25 text-accent rounded-full bg-accent/[0.06]">
            {highlightAmazon(profile.heroCallout)}
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-light/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-3"
        >
          {profile.heroSummary}
        </motion.p>

        {/* Hero Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.heroDescription}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(167,139,250,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("experience")}
            className="px-7 py-3 bg-accent text-white font-semibold text-sm rounded-lg transition-all hover:bg-accent-dim"
          >
            View Work
          </motion.button>
          <motion.a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 border border-accent/30 text-accent font-semibold text-sm rounded-lg transition-all hover:bg-accent/10"
          >
            Resume
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className="px-7 py-3 border border-white/20 text-light font-semibold text-sm rounded-lg transition-all hover:border-white/40"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
