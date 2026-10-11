import SectionHeading from "./SectionHeading";
import { contactDetails } from "../data/site";

export default function Contact() {
  return (
    <section className="section-shell" id="contact">
      <SectionHeading
        eyebrow="Let's Talk"
        title="Contact"
        description="If you want to discuss a role, collaboration, or a product idea, here is the fastest way to reach me."
      />

      <div className="contact-card" data-reveal>
        <div className="contact-card__links">
          {contactDetails.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <span>{detail.label}</span>
              <strong>{detail.value}</strong>
            </a>
          ))}
        </div>

        <a
          className="button button--primary"
          href="mailto:dinithisanjana563@gmail.com"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
}
