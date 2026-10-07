import SectionHeading from "./SectionHeading";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section className="section-shell" id="experience">
      <SectionHeading title="Experience" />

      <div className="timeline">
        {experiences.map((experience) => (
          <article
            className="timeline-card"
            key={`${experience.role}-${experience.company}`}
            data-reveal
          >
            <div className="timeline-card__header">
              <div>
                <h3>{experience.role}</h3>
                <p>{experience.company}</p>
              </div>
              <span>{experience.period}</span>
            </div>

            <ul>
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
