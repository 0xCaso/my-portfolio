import ExperienceCarousel from "@/components/ExperienceCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, slidesToScroll: 1 };

export default function Experience() {
  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto">
      <div className="relative w-full max-w-7xl rounded-2xl bg-zinc-800 bg-opacity-50 overflow-hidden z-10">
        <ExperienceCarousel options={OPTIONS} />
      </div>
    </div>
  );
}
