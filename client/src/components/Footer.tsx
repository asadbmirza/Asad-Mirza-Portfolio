import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import content from "../data/portfolio-content.json";

const { profile } = content;

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted text-sm">
          <span className="font-heading font-semibold text-light">
            {profile.brand}
          </span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
