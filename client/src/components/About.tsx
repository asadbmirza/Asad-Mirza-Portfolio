import content from "../data/portfolio-content.json";
import Reveal from "./Reveal";

const { about, profile } = content;

export default function About() {
  return (
    <section id="about" className="content-section" aria-labelledby="about-title">
      <div className="page-frame">
        <Reveal className="section-heading">
          <h2 id="about-title">{about.componentTitle}</h2>
        </Reveal>

        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <p className="about-statement">
                I build full-stack systems where product clarity and engineering depth meet.
              </p>
            </Reveal>
            <div className="about-paragraphs">
              <Reveal delay={0.06}>
                <p>{profile.heroDescription}</p>
              </Reveal>
              {about.summaryParagraphs.slice(1).map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.1 + index * 0.04}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="facts-rail" delay={0.12}>
            <div className="fact-block">
              <h3>{about.currentRoleTitle}</h3>
              <p>{about.currentRoleValue}</p>
            </div>
            <div className="fact-block">
              <h3>{about.educationStatusTitle}</h3>
              <p>{about.educationStatusValue}</p>
              <span>{about.educationStatusMeta}</span>
            </div>
            <div className="fact-block">
              <h3>{about.focusAreasTitle}</h3>
              <p>{about.focusAreas.join(", ")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
