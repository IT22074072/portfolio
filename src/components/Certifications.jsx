import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="section-shell" id="certifications">
      <SectionHeading title="Certifications" />

      <ul className="certifications-grid" data-reveal>
        {certifications.map((certification) => (
          <li key={certification} className="certification-pill">
            {certification}
          </li>
        ))}
      </ul>
    </section>
  );
}
