import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        description="A curated set of builds showing full-stack delivery, cloud architecture, and applied machine learning."
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
