import Carousel from "@/components/Carousel";
import { experiences } from "../content/experiences";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto animate-appear">
      <div className="relative w-full max-w-7xl rounded-2xl bg-zinc-900 bg-opacity-50 overflow-hidden z-10">
        <Carousel>
          {experiences.map((exp, index) => (
            <div className="embla__slide" key={index}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
