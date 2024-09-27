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

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string | JSX.Element;
  location: string;
  description: string;
  image: string;
  skills?: string[];
  github?: string;
  twitter?: string;
  website?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  location,
  description,
  image,
  skills,
  github,
  twitter,
  website,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-800 hover:border-opacity-0 hover:scale-[101%] hover:cursor-pointer">
          <div className="card rounded-xl flex flex-col gap-8 h-full transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 outline outline-zinc-800 outline-offset-4">
                <Image
                  src={"/assets/img" + image}
                  alt={company}
                  width={120}
                  height={120}
                  className="scale-[102%]"
                />
              </div>
            </div>
            <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
              <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
                {title}
              </h3>
              <p className="text-lg text-zinc-300 font-bold">{company}</p>
              {typeof date === "string" ? <p>{date}</p> : date}
              <p>{location}</p>
            </div>
            {skills && (
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {skills.map((skill, index) => (
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
              {twitter && (
                <Link
                  href={twitter}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconBrandX className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
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
      <DialogContent className="bg-zinc-900 border-none text-zinc-200">
        <DialogHeader className="gap-4">
          <DialogTitle>Description</DialogTitle>
          <DialogDescription className="text-zinc-400">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceCard;
