"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  IconAward,
  IconBrandGithub,
  IconWorld,
  IconTrophy,
} from "@tabler/icons-react";

const Prize: React.FC<{ place: string; text: string }> = ({ place, text }) => (
  <div className="flex gap-2 items-center py-1">
    <IconTrophy
      className={`h-8 w-8 p-1 bg-zinc-700 rounded-full ${place === "1" ? "text-amber-400" : place === "2" ? "text-zinc-300" : "text-orange-600"} stroke-1`}
    />
    <span className="text-lg">{text}</span>
  </div>
);

interface HackathonCardProps {
  project: string;
  hackathon: string;
  date: string;
  location: string;
  description: string;
  tags?: string[];
  github?: string;
  website?: string;
  image?: string;
  prizes?: { place: string; text: string }[];
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  project,
  hackathon,
  date,
  location,
  description,
  tags,
  github,
  website,
  image,
  prizes,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-700 hover:border-opacity-0 hover:cursor-pointer overflow-visible">
          <div className="card rounded-xl flex flex-col gap-8 h-full transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 outline outline-zinc-700 outline-offset-4">
                {prizes?.length && (
                  <IconAward className="h-8 w-8 p-1 bg-zinc-700 rounded-full text-amber-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300 absolute top-8 right-24 z-10" />
                )}
                <Image
                  src={"/assets/img" + image}
                  alt={project}
                  width={120}
                  height={120}
                  className="scale-[102%]"
                />
              </div>
            </div>
            <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
              <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
                {project}
              </h3>
              <p className="text-lg text-zinc-300 font-bold">{hackathon}</p>
              <p>{date}</p>
              <p>{location}</p>
            </div>
            {tags && (
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {tags.map((tag, index) => (
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
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconBrandGithub className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
              {website && (
                <Link
                  href={website}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconWorld className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-none text-zinc-200 max-w-2xl">
        <DialogHeader className="gap-4">
          <DialogTitle className="text-2xl">{project}</DialogTitle>
          <DialogDescription className="text-zinc-400 text-lg">
            {description}
          </DialogDescription>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Prizes</span>
            <ul className="list-none list-inside text-zinc-400">
              {prizes?.map((prize, index) => (
                <li key={index}>
                  <Prize {...prize} />
                </li>
              ))}
            </ul>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HackathonCard;
