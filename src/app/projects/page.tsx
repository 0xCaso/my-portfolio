"use client";

import Carousel from "@/components/Carousel";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Project, projects } from "../content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const { width } = useWindowDimensions();

  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto animate-appear">
      <div className="relative w-full rounded-2xl bg-zinc-800 bg-opacity-70 overflow-hidden z-10 max-w-[21rem] md:max-w-7xl">
        <Carousel isMobile={width ? width < 768 : false}>
          {projects.map((project: Project, index) => (
            <div className="embla__slide" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
