import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section-shell" id="about">
      <SectionHeading title="About Me" />

      <div className="about-card" data-reveal>
        <p>
          I am a software engineering graduate with practical experience across
          web applications, mobile development, AI/ML experimentation, and cloud
          deployment. My work combines product-minded thinking with strong
          engineering fundamentals, from REST APIs and microservices to
          infrastructure-aware implementation.
        </p>
        <p>
          I enjoy turning complex requirements into reliable systems,
          collaborating across teams, and delivering software that is fast,
          accessible, and easy to evolve.
        </p>
      </div>
    </section>
  );
}
