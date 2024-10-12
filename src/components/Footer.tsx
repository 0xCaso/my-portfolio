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
import Link from "next/link";

export const Footer = () => {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-zinc-300 stroke-1" />,
      href: "/",
    },
    {
      title: "Experience",
      icon: <IconBriefcase2 className="h-full w-full text-zinc-300 stroke-1" />,
      href: "/experience",
    },
    {
      title: "Hackathons",
      icon: <IconTrophy className="h-full w-full text-zinc-300 stroke-1" />,
      href: "/hackathons",
    },
    {
      title: "Projects",
      icon: <IconPalette className="h-full w-full text-zinc-300 stroke-1" />,
      href: "/projects",
    },
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full text-zinc-300 stroke-1" />,
      href: "mailto:matteocasonato@protonmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-zinc-300 stroke-1" />
      ),
      href: "https://github.com/0xCaso",
      target: "_blank",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-zinc-300 stroke-1" />
      ),
      href: "https://www.linkedin.com/in/matteo-casonato/",
      target: "_blank",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-zinc-400" />,
      href: "https://twitter.com/steven_basalari",
      target: "_blank",
    },
  ];

  return (
    <footer className="flex-shrink-0 bg-base-100 z-20 w-full fixed bottom-0">
      {/* DESKTOP */}
      <div className="items-center justify-center w-full p-8 hidden md:flex">
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
      {/* MOBILE */}
      <div className="flex md:hidden gap-4 p-3 w-full justify-center">
        {links.slice(0, 4).map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex flex-col w-full p-1"
          >
            {link.icon}
            <div
              className={`bg-zinc-400 h-[1px] mt-1 ${link.href === pathname ? "w-full" : "w-0"} transition-all duration-300 ease-in-out`}
            />
          </Link>
        ))}
        <div className="w-1 h-8 bg-zinc-500 self-center" />
        {links.slice(4).map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex flex-col w-full p-1"
          >
            {link.icon}
            <div
              className={`bg-zinc-400 h-[1px] mt-1 ${link.href === pathname ? "w-full" : "w-0"} transition-all duration-300 ease-in-out`}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
