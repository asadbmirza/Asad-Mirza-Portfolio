import content from "../data/portfolio-content.json";
import skillsArtwork from "../assets/skills-lattice.png";
import Reveal from "./Reveal";

const { skills } = content;

export default function Skills() {
  return (
    <section id="skills" className="content-section" aria-labelledby="skills-title">
      <div className="page-frame">
        <Reveal className="section-heading section-heading-with-copy">
          <h2 id="skills-title">{skills.title}</h2>
          <p>{skills.description}</p>
        </Reveal>

        <div className="skills-layout">
          <Reveal className="skills-art">
            <img
              src={skillsArtwork}
              alt="Abstract graphite lattice representing connected software systems"
              width="1254"
              height="1254"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <div className="skills-matrix">
            {skills.categories.map((category, index) => (
              <Reveal key={category.id} className="skill-group" delay={index * 0.04}>
                <h3>{category.title}</h3>
                <p>{category.skills.join(", ")}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="learning-note" delay={0.08}>
          <strong>{skills.learningTitle}</strong>
          <span>{skills.learningDescription}</span>
        </Reveal>
      </div>
    </section>
  );
}
