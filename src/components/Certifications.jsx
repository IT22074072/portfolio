import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="section-shell" id="certifications">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Selected certifications and structured learning that keep my skill set current."
      />

      <ul className="certifications-grid" data-reveal>
        {certifications.map((certification) => (
          <li key={certification.name} className="certification-pill">
            <strong>{certification.name}</strong>
            <span>
              {certification.issuer} · {certification.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
