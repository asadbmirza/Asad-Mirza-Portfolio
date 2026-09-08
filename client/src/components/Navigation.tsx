import { useEffect, useState } from "react";
import content from "../data/portfolio-content.json";

const { profile, navigation } = content;
const navLinks = navigation.full;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers = navLinks.flatMap(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return [];

      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSection(id),
        { rootMargin: "-35% 0px -58% 0px" },
      );
      observer.observe(element);
      return [observer];
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-link" href="#home" onClick={() => setMobileOpen(false)}>
          {profile.name}
        </a>

        <div className="desktop-nav">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "nav-link is-active" : "nav-link"}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          className="menu-trigger"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={mobileOpen ? "mobile-menu is-open" : "mobile-menu"}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            tabIndex={mobileOpen ? 0 : -1}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
