export interface Experience {
  title: string;
  company: string;
  type: string;
  date: string | JSX.Element;
  location: string;
  description: string;
  image: string;
  skills: string[];
  github?: string;
  twitter?: string;
  website?: string;
}

export const experiences: Experience[] = [
  {
    title: "Blockchain Developer",
    company: "Builders Garden",
    type: "Self-employed",
    date: (
      <div className="flex justify-center gap-1">
        <p>Sep 2024</p>
        <p>-</p>
        <p className="underline underline-offset-2 decoration-2 decoration-green-500">
          Present
        </p>
      </div>
    ),
    location: "Remote 🌍",
    description:
      "A Web3 MVP studio building and launching web3 products in a matter of weeks. Currently building MaitonUI and collaborating with XMTP.",
    image: "/experiences/bg_logo.png",
    skills: ["TypeScript", "React.js"],
    github: "https://github.com/builders-garden",
    twitter: "https://twitter.com/builders_garden",
    website: "https://www.builders.garden/",
  },
  {
    title: "Blockchain Developer",
    company: "1delta",
    type: "Self-employed",
    date: (
      <div className="flex justify-center gap-1">
        <p>Sep 2023</p>
        <p>-</p>
        <p className="underline underline-offset-2 decoration-2 decoration-green-500">
          Present
        </p>
      </div>
    ),
    location: "Remote 🌍",
    description:
      "Development of 1delta interface with React.js, integrating multiple EVM chains, and integrating with 1delta API.",
    image: "/experiences/1delta_logo.jpeg",
    skills: ["TypeScript", "React.js"],
    github: "https://github.com/1delta-DAO",
    twitter: "https://twitter.com/1deltaDAO",
    website: "https://app.1delta.io/",
  },
  {
    title: "Grants/Spec Intern",
    company: "Web3 Foundation",
    type: "Internship",
    date: "Nov 2022 - Aug 2023",
    location: "Zug, Switzerland 🇨🇭",
    image: "/experiences/web3foundation_logo.jpeg",
    description:
      "Part of the Grants Team (evaluation of the milestone deliveries of grantees projects) and the Spec Team. Completely reworked the specification (https://spec.polkadot.network) and research (https://research.web3.foundation) websites.",
    skills: ["Typescript"],
    github: "https://github.com/w3f",
    twitter: "https://twitter.com/Web3foundation",
    website: "https://web3.foundation/",
  },
  {
    title: "SSI Developer Intern",
    company: "Monokee",
    type: "Internship",
    date: "Jul 2022 - Sep 2022",
    location: "Padua, Italy 🇮🇹",
    image: "/experiences/monokee_logo.jpeg",
    description:
      "Deep dive into SSI primitives (DIDs, VCs, VPs, ZKPs...). Integration of blockchain and SSI technologies with IAM solutions.",
    skills: ["TypeScript"],
    github: "https://github.com/monokee-dev",
    website: "https://www.monokee.com/",
  },
];
