import content from "../data/portfolio-content.json";
import campusImage from "../assets/campus-architecture.png";
import Reveal from "./Reveal";

const { education } = content;

export default function Education() {
  const coursework = education.courseCategories.flatMap((category) => category.courses);

  return (
    <section id="education" className="content-section" aria-labelledby="education-title">
      <div className="page-frame">
        <Reveal className="section-heading">
          <h2 id="education-title">{education.title}</h2>
        </Reveal>

        <div className="education-grid">
          <div>
            <Reveal>
              <h3 className="degree-title">{education.degree}</h3>
            </Reveal>
            <Reveal className="campus-image" delay={0.06}>
              <img
                src={campusImage}
                alt="Contemporary university architecture in graphite tones"
                width="1672"
                height="941"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>

          <Reveal className="education-facts" delay={0.1}>
            <div>
              <h3>University</h3>
              <p>{education.university}</p>
            </div>
            <div>
              <h3>Dates</h3>
              <p>{education.period}</p>
            </div>
            <div>
              <h3>GPA</h3>
              <p>{education.gpa}</p>
            </div>
            <div>
              <h3>Awards</h3>
              <p>{education.awards.join(", ")}</p>
            </div>
            <div>
              <h3>Selected coursework</h3>
              <p>{coursework.join(", ")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
