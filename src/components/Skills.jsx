import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skilled Stack"
        description="Tools and platforms I use across product builds, cloud deployments, and applied AI work."
      />

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
