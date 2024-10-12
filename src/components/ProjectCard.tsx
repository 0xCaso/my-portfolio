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
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { Project } from "@/app/content/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-full w-full rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-400 hover:bg-opacity-10 border border-zinc-700 hover:border-opacity-0 hover:cursor-pointer">
          <div className="card rounded-xl flex flex-col gap-8 h-full transition-all duration-300">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 outline outline-zinc-700 outline-offset-4">
                <Image
                  src={"/assets/img" + project.image}
                  alt={"project"}
                  width={120}
                  height={120}
                  className="scale-[102%]"
                />
              </div>
            </div>
            <div className="text-center text-zinc-400 text-sm flex flex-col gap-1">
              <h3 className="text-2xl font-['Ribes_Regular'] text-zinc-100">
                {project.name}
              </h3>
              <p className="text-lg text-zinc-300 font-bold">{project.date}</p>
              <p>{project.description}</p>
            </div>
            {project.tags && (
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                {project.tags.map((tag, index) => (
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
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <IconBrandGithub className="h-full w-full text-zinc-400 stroke-1 hover:text-zinc-50 hover:scale-110 transition-all duration-300" />
                </Link>
              )}
              {project.website && (
                <Link
                  href={project.website}
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
            {project.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
