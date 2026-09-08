import content from "../data/portfolio-content.json";
import Reveal from "./Reveal";

const { contact } = content;

export default function Contact() {
  const email = contact.methods.find((method) => method.id === "email");
  const social = contact.methods.filter((method) => method.id !== "email");

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="page-frame">
        <Reveal>
          <h2 id="contact-title">{contact.title}</h2>
          <p className="contact-intro">{contact.description}</p>
          {email && (
            <a className="button button-primary contact-cta" href={email.href}>
              {contact.primaryButtonLabel}
            </a>
          )}
        </Reveal>

        <Reveal className="contact-links" delay={0.08}>
          {social.map((method) => (
            <a key={method.id} href={method.href} target="_blank" rel="noreferrer">
              <span>{method.label}</span>
              <strong>{method.value}</strong>
            </a>
          ))}
          <div className="contact-location">
            <span>{contact.locationTitle}</span>
            <strong>{contact.locationDescription}</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
