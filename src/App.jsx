import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navigationLinks, socialLinks } from "./data/navigation";
import { useActiveSection } from "./hooks/useActiveSection";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useRevealOnScroll();

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <Navbar
        navigationLinks={navigationLinks}
        socialLinks={socialLinks}
        activeSection={activeSection}
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((current) => !current)}
        onNavigate={handleNavigate}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
