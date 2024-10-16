"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { IconBrandGithub, IconBrandX, IconWorld } from "@tabler/icons-react";
import { Experience } from "@/app/content/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-700 hover:border-opacity-0 hover:cursor-pointer">
          <div className="card rounded-xl flex flex-col gap-8 h-full transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 outline outline-zinc-700 outline-offset-4">
                <Image
                  src={"/assets/img" + experience.image}
                  alt={experience.company}
                  width={120}
                  height={120}
                  className="scale-[102%]"
                />
              </div>
            </div>
            <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
              <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
                {experience.title}
              </h3>
              <p className="text-lg text-zinc-300 font-bold">
                {experience.company}
              </p>
              {typeof experience.date === "string" ? (
                <p>{experience.date}</p>
              ) : (
                experience.date
              )}
              <p>{experience.location}</p>
            </div>
            {experience.skills && (
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-zinc-700 text-zinc-300 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
            <div className="flex justify-center gap-4">
              {experience.github && (
                <Link
                  href={experience.github}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconBrandGithub className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
              {experience.twitter && (
                <Link
                  href={experience.twitter}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconBrandX className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
              {experience.website && (
                <Link
                  href={experience.website}
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
      <DialogContent className="bg-zinc-900 border-none text-zinc-200 max-w-sm md:max-w-2xl h-fit p-4 md:p-6 rounded-xl md:rounded-2xl">
        <DialogHeader className="gap-4">
          <DialogTitle className="text-2xl text-left">Description</DialogTitle>
          <DialogDescription className="text-zinc-400 text-lg text-left">
            {experience.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceCard;
