import { useState } from "react";

export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="project-card" data-reveal>
      <div className="project-card__media">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{project.title.slice(0, 1)}</span>
            <p>Project image placeholder</p>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-card__tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.caseStudyUrl ? (
            <a href={project.caseStudyUrl}>View Project / Case Study</a>
          ) : null}
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
