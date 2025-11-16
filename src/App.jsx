import React from "react";
import Hero from "./components/Hero";
import CoreSkills from "./components/CoreSkills";
import Programming from "./components/Programming";
import Philosophy from "./components/Philosophy";
import Education from "./components/Education";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import Certificates from "./components/Certificates";
import WhatIBring from "./components/WhatIBring";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0c0c0d] text-gray-100 min-h-screen font-sans">
      <Hero />
      <CoreSkills />
      <Programming />
      <Philosophy />
      <Education />
      <Projects />
      <SkillsSection />
      <Certificates />
      <WhatIBring />
      <Contact />

      <footer className="text-center text-gray-500 py-8">
        © {new Date().getFullYear()} Sunal Pal — Web Developer
      </footer>
    </div>
  );
}
