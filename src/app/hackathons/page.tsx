"use client";

import Carousel from "@/components/Carousel";
import { Hackathon, hackathons } from "../content/hackathons";
import HackathonCard from "@/components/HackathonCard";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Hackathons() {
  const { height } = useWindowDimensions();

  return (
    <div className="flex items-center justify-center flex-grow z-10 m-auto animate-appear">
      <div className="relative w-full max-w-7xl rounded-2xl bg-zinc-800 bg-opacity-70 overflow-hidden z-10">
        <Carousel>
          {hackathons.map((hackathon: Hackathon, index) => (
            <div className="embla__slide" key={index}>
              <HackathonCard
                hackathon={hackathon}
                screenHeight={height || 1000}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
