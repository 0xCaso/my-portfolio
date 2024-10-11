"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  IconAward,
  IconBrandGithub,
  IconWorld,
  IconTrophy,
  IconChartDonut,
  IconLicense,
} from "@tabler/icons-react";
import { Hackathon, HackathonPricePlace } from "@/app/content/hackathons";

const Prize: React.FC<{ place: HackathonPricePlace; text: string }> = ({
  place,
  text,
}) => (
  <div className="flex gap-4 md:gap-2 items-center py-2 md:py-1">
    {place !== "pool" ? (
      <IconTrophy
        className={`h-8 w-8 p-1 bg-zinc-700 rounded-full ${place === "1" ? "text-amber-400" : place === "2" ? "text-zinc-300" : "text-orange-600"} stroke-1`}
      />
    ) : (
      <IconChartDonut
        className={`h-8 w-8 p-1 bg-zinc-700 rounded-full text-zinc-300 stroke-1`}
      />
    )}
    <span className="text-base md:text-lg max-w-64 md:max-w-none leading-[1.1] md:leading-6">
      {text}
    </span>
  </div>
);

interface HackathonCardProps {
  hackathon: Hackathon;
  screenHeight: number;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  hackathon,
  screenHeight,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-700 hover:border-opacity-0 hover:cursor-pointer overflow-visible">
          <div className="card rounded-xl flex flex-col gap-7 md:gap-8 h-full transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 outline outline-zinc-700 outline-offset-4">
                {hackathon.prizes?.length && (
                  <IconAward className="h-8 w-8 p-[2px] border-2 border-zinc-700 bg-amber-400 rounded-full text-zinc-700 stroke-1 absolute top-8 right-24 z-10" />
                )}
                <Image
                  src={"/assets/img" + hackathon.image}
                  alt={hackathon.project}
                  width={120}
                  height={120}
                  className="scale-[102%]"
                />
              </div>
            </div>
            <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
              <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
                {hackathon.project}
              </h3>
              <p className="text-lg text-zinc-300 font-bold">
                {hackathon.name}
              </p>
              <p>{hackathon.date}</p>
              <p>{hackathon.location}</p>
            </div>
            {hackathon.tags && (
              <div className="flex flex-wrap gap-2 justify-center max-w-52 m-auto">
                {hackathon.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex justify-center gap-4">
              {hackathon.github && (
                <Link
                  href={hackathon.github}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconBrandGithub className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
              {hackathon.website && (
                <Link
                  href={hackathon.website}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconWorld className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
              {hackathon.submission && (
                <Link
                  href={hackathon.submission}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconLicense className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-none text-zinc-200 max-w-sm md:max-w-2xl h-fit p-4 md:p-6 rounded-xl md:rounded-2xl">
        <DialogTitle className="text-2xl">{hackathon.project}</DialogTitle>
        <div
          className={`flex flex-col gap-4 overflow-auto max-h-[37rem] md:max-h-[${screenHeight < 1100 ? "38rem" : "50rem"}]`}
        >
          <DialogDescription className="text-zinc-400 text-base md:text-lg">
            {hackathon.description}
          </DialogDescription>
          {hackathon.videoDemoId && (
            <div
              className={`flex w-fit m-auto border-2 border-zinc-700 p-2 rounded-2xl`}
            >
              <iframe
                src={"https://www.youtube.com/embed/" + hackathon.videoDemoId}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl w-[300px] md:w-[560px] md:h-[315px]"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">My contribution</span>
            <span className="text-zinc-400 text-base md:text-lg">
              {hackathon.myPart}
            </span>
          </div>
          {hackathon.prizes?.length && (
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">Prizes</span>
              <ul className="list-none list-inside text-zinc-400">
                {hackathon.prizes.map((prize, index) => (
                  <li key={index}>
                    <Prize place={prize.place} text={prize.text} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HackathonCard;
