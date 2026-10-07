import SectionHeading from "./SectionHeading";
import { contactDetails } from "../data/site";

export default function Contact() {
  return (
    <section className="section-shell" id="contact">
      <SectionHeading title="Contact" />

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
