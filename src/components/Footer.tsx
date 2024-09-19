import React, { Dispatch, SetStateAction } from "react";
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
import { Section } from "@/app/page";

export function FloatingDockCustom({
  sections,
  currentSection,
  setSection,
}: {
  sections: string[];
  currentSection: string;
  setSection: (newSection: Section) => void;
}) {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-zinc-400" />,
      href: "#",
      section: Section.HOME,
    },
    {
      title: "Experience",
      icon: <IconBriefcase2 className="h-full w-full text-zinc-400" />,
      href: "#",
      section: Section.EXPERIENCE,
    },
    {
      title: "Hackathons",
      icon: <IconTrophy className="h-full w-full text-zinc-400" />,
      href: "#",
      section: Section.HACKATHONS,
    },
    {
      title: "Projects",
      icon: <IconPalette className="h-full w-full text-zinc-400" />,
      href: "#",
      section: Section.PROJECTS,
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
    <div className="flex items-center justify-center w-full p-8">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links.map((link) => ({
          ...link,
          onClick: link.section
            ? () => setSection(link.section as Section)
            : undefined,
          active: link.section === currentSection,
        }))}
      />
    </div>
  );
}

export const Footer = ({
  sections,
  currentSection,
  setSection,
}: {
  sections: string[];
  currentSection: string;
  setSection: (newSection: Section) => void;
}) => {
  return (
    <footer className="flex-shrink-0 bg-base-100 z-20 w-full fixed bottom-0">
      <FloatingDockCustom
        sections={sections}
        currentSection={currentSection}
        setSection={setSection}
      />
    </footer>
  );
};
