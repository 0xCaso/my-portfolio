"use client";

import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBriefcase2,
  IconHome,
  IconMail,
  IconPalette,
  IconTrophy,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-zinc-400" />,
      href: "/",
    },
    {
      title: "Experience",
      icon: <IconBriefcase2 className="h-full w-full text-zinc-400" />,
      href: "/experience",
    },
    {
      title: "Hackathons",
      icon: <IconTrophy className="h-full w-full text-zinc-400" />,
      href: "/hackathons",
    },
    {
      title: "Projects",
      icon: <IconPalette className="h-full w-full text-zinc-400" />,
      href: "/projects",
    },
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full text-zinc-400" />,
      href: "mailto:your.email@example.com",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-zinc-400" />,
      href: "https://github.com/yourusername",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-zinc-400" />,
      href: "https://www.linkedin.com/in/yourusername",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-zinc-400" />,
      href: "https://twitter.com/yourusername",
    },
  ];

  return (
    <footer className="flex-shrink-0 bg-base-100 z-20 w-full fixed bottom-0">
      <div className="flex items-center justify-center w-full p-8">
        <FloatingDock
          items={links.map((link) => ({
            ...link,
            active: link.href === pathname,
            onClick:
              link.href.startsWith("http") || link.href.startsWith("mailto")
                ? undefined
                : () => {},
          }))}
        />
      </div>
    </footer>
  );
};
