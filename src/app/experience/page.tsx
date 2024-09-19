import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "../content/experiences";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto">
      <div className="relative w-full max-w-4xl h-[500px] rounded-2xl bg-zinc-800 bg-opacity-50 overflow-hidden z-10">
        <div className={cn("p-8 h-full overflow-y-auto space-y-8")}>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
