import Carousel from "@/components/Carousel";
import { hackathons } from "../content/hackathons";
import HackathonCard from "@/components/HackathonCard";

export default function Hackathons() {
  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto animate-appear">
      <div className="relative w-full max-w-7xl rounded-2xl bg-zinc-900 bg-opacity-50 overflow-hidden z-10">
        <Carousel>
          {hackathons.map((hackathon, index) => (
            <div className="embla__slide" key={index}>
              <HackathonCard {...hackathon} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
