import { useState } from "react";
import { heroStats } from "../data/site";

export default function Hero() {
  const [hasPortraitError, setHasPortraitError] = useState(false);

  return (
    <section className="hero section-shell" id="home">
      <div className="hero__content" data-reveal>
        <p className="hero__eyebrow">
          Graduate Software Engineer | AI & Cloud Enthusiast
        </p>
        <h1>Dinithi Sanjana</h1>
        <p className="hero__title">Graduate Software Engineer</p>
        <p className="hero__subtitle">Software Engineering | AI/ML | Cloud</p>
        <p className="hero__description">
          Building scalable full-stack, AI-powered and cloud-native applications
          with a focus on clean architecture, practical delivery, and
          production-ready engineering.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a
            className="button button--secondary"
            href="/cv/dinithi-sanjana-cv.pdf"
            download
          >
            Download CV
          </a>
          <a
            className="button button--ghost"
            href="https://github.com/IT22074072"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="button button--ghost"
            href="https://www.linkedin.com/in/dinithi-sanjana-aa97ab26b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <aside className="hero__panel" data-reveal>
        <figure className="hero__portrait-card">
          {!hasPortraitError ? (
            <img
              src="/profile-photo.jpg"
              alt="Dinithi Sanjana"
              className="hero__portrait"
              onError={() => setHasPortraitError(true)}
            />
          ) : (
            <div className="hero__portrait-fallback" aria-hidden="true">
              <span>DS</span>
              <p>Place your photo at public/profile-photo.jpg</p>
            </div>
          )}
          <figcaption>
            <strong>Dinithi Sanjana</strong>
            <span>Graduate Software Engineer</span>
          </figcaption>
        </figure>

        <div className="hero__panel-card">
          <p className="hero__panel-label">Focus Areas</p>
          <ul className="hero__stats">
            {heroStats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="hero__panel-card hero__panel-card--accent">
          <p className="hero__panel-label">Profile</p>
          <p>
            Graduate Software Engineer with hands-on experience in MERN, Spring
            Boot, AWS, and AI/ML workflows.
          </p>
        </div>
      </aside>
    </section>
  );
}
