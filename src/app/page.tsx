"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { experiences } from "./content/experiences";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";

export enum Section {
  HOME = "home",
  EXPERIENCE = "experience",
  HACKATHONS = "hackathons",
  PROJECTS = "projects",
}

export default function Home() {
  const sections = Object.values(Section);
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [transitioning, setTransitioning] = useState(false);
  const [visibleSection, setVisibleSection] = useState<Section>(Section.HOME);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setVisibleSection(activeSection);
        setTransitioning(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [transitioning, activeSection]);

  const handleSectionChange = (newSection: Section) => {
    if (newSection !== activeSection) {
      setTransitioning(true);
      setActiveSection(newSection);
    }
  };

  const sectionClass = (section: Section) =>
    cn("absolute inset-0 transition-opacity duration-300", {
      "opacity-100": section === visibleSection && !transitioning,
      "opacity-0": section !== visibleSection || transitioning,
    });

  return (
    <main className="flex flex-col h-screen bg-base-100 overflow-hidden">
      <header className="flex-shrink-0 bg-base-100 p-6 w-full z-10">
        <div className="flex w-full justify-between">
          <FlipWords
            word={activeSection.toUpperCase()} // Use FlipWords component with a single word
            className="text-white text-6xl font-['Ribes_Regular']"
          />
          <h1 className="text-white text-6xl font-['Ribes_Regular']">
            MATTEO CASONATO
          </h1>
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center px-4 py-8 z-10">
        <div className="relative w-full max-w-4xl h-[70vh] rounded-2xl bg-zinc-800 bg-opacity-50 overflow-hidden">
          <div
            className={cn(
              sectionClass(Section.HOME),
              "text-white p-8 flex flex-col items-center justify-center",
            )}
          >
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Matteo</h1>
            <p className="text-xl mb-6">
              A passionate software developer with a knack for creating
              innovative solutions.
            </p>
            <p className="text-lg">
              I specialize in building robust and scalable applications, always
              eager to tackle new challenges and learn cutting-edge
              technologies.
            </p>
          </div>

          <div
            className={cn(
              sectionClass(Section.EXPERIENCE),
              "p-8 space-y-8 min-h-full overflow-y-auto",
            )}
          >
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>

          {/* Add other sections here */}
        </div>
      </div>

      <Footer
        sections={sections}
        currentSection={activeSection}
        setSection={handleSectionChange}
      />
    </main>
  );
}
