"use client";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
// import ProjectsSection from "./ProjectsSection"; // We will restore this later.
import ContactSection from "./ContactSection";

export default function HomePage({ data }) {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="glow-overlay top-0 -left-20"></div>
      <div
        className="glow-overlay bottom-0 -right-20"
        style={{
          background:
            "radial-gradient(circle, rgba(83, 221, 252, 0.05) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      ></div>

      <main className="pt-20">
        <HeroSection
          data={data}
          onViewProjects={() => handleScroll("experience")}
        />
        <AboutSection data={data} />
        <SkillsSection data={data} />
        <ExperienceSection data={data} />
        {/* Projects section — we will restore this later.
        <ProjectsSection data={data} />
        */}
        <ContactSection data={data} />
      </main>
    </div>
  );
}
