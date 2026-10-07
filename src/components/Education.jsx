import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <section className="section-shell" id="education">
      <SectionHeading title="Education" />

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.degree} data-reveal>
            <div className="education-card__summary">
              <div>
                <h3>{item.degree}</h3>
                <p className="education-card__specialization">{item.specialization}</p>
                <p className="education-card__institution">
                  {item.institution} · {item.location}
                </p>
              </div>
              <span className="education-card__period">{item.period}</span>
            </div>

            <dl className="education-card__meta">
              <div>
                <dt>Division</dt>
                <dd>{item.grade}</dd>
              </div>
              <div>
                <dt>CGPA</dt>
                <dd>{item.cgpa}</dd>
              </div>
            </dl>

            <ul className="education-card__achievements">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>

            <a
              className="text-link"
              href={item.publicationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Research Publication
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
