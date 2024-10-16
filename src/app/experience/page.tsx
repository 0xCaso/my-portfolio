"use client";

import Carousel from "@/components/Carousel";
import { experiences } from "../content/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Experience() {
  const { width } = useWindowDimensions();

  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto animate-appear">
      <div className="relative w-full rounded-2xl bg-zinc-800 bg-opacity-70 overflow-hidden z-10 max-w-[21rem] md:max-w-7xl">
        <Carousel isMobile={width ? width < 768 : false}>
          {experiences.map((exp, index) => (
            <div className="embla__slide" key={index}>
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
