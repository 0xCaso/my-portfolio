export interface Project {
  name: string;
  date: string;
  description: string;
  tags: string[];
  github?: string;
  website?: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "Maiton UI",
    date: "September 2024",
    description:
      "A simple UI library for the development of Farcasters Frames.",
    tags: ["React.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/builders-garden/maiton-ui",
    website: "https://www.maiton.xyz/",
    image: "/projects/maitonui.png",
  },
  {
    name: "Bachelor Thesis",
    date: "Summer 2022",
    description:
      "Owning your data through Self-Sovereign Identity: agents implementation for Verifiable Credentials interaction.",
    tags: ["DID", "Web3"],
    github: "https://github.com/0xCaso/bachelor-thesis",
    website: "https://github.com/0xCaso/bachelor-thesis/blob/main/thesis.pdf",
    image: "/projects/unipd.png",
  },
  {
    name: "Portfolio",
    date: "October 2024",
    description:
      "My personal portfolio, showcasing my projects, experience, and hackathons.",
    tags: ["shadcn", "TailwindCSS", "Next.js"],
    github: "https://github.com/0xCaso/my-portfolio",
    image: "/projects/portfolio.png",
  },
  {
    name: "FL Studio Course",
    date: "September 2020",
    description:
      "I love music, and I wanted to teach what I know to everybody. This is a complete course (in Italian) on FL Studio.",
    tags: ["Music", "FL Studio"],
    website:
      "https://www.udemy.com/course/fl-studio-dalla-a-alla-z-il-corso-completo-in-italiano/",
    image: "/projects/udemy.png",
  },
  {
    name: "OZ Contribution",
    date: "October 2022",
    description:
      "I contributed to the OpenZeppelin Contracts library, adding a new function 'equals' to the Strings utility.",
    tags: ["Solidity"],
    github: "https://github.com/OpenZeppelin/openzeppelin-contracts/pull/3774",
    image: "/projects/openzeppelin.png",
  },
  {
    name: "DefiLlama TG Bot",
    date: "July 2022",
    description:
      "(DISCONTINUED) A bot that you can use to interact with DefiLlama from Telegram. You can search protocols, compare, get charts, and more.",
    tags: ["JavaScript", "grammY"],
    github: "https://github.com/0xCaso/defillama-telegram-bot",
    image: "/projects/defillama.png",
  },
];
