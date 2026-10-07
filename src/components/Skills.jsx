import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading title="Skilled Stack" />

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.title} data-reveal>
            <h3>{category.title}</h3>
            <ul className="skill-tags">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
