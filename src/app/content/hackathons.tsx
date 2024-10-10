export type HackathonPricePlace = "1" | "2" | "3" | "pool";

export interface Hackathon {
  project: string;
  name: string;
  location: string;
  date: string;
  description: string;
  tags?: string[];
  github?: string;
  website?: string;
  submission?: string;
  videoDemoId?: string;
  myPart: string;
  image?: string;
  prizes?: { place: HackathonPricePlace; text: string }[];
}

export const hackathons: Hackathon[] = [
  {
    project: "NaaamoFit",
    name: "ETHRome 2024",
    location: "Rome 🇮🇹",
    date: "October 2024",
    description:
      "NaaamoFit is a platform that allows gyms to accept cryptocurrency payments easily through Account Abstraction, offering a Web2-like experience. Users earn cashback rewards based on the time spent at the gym, incentivizing consistent attendance and engagement.",
    tags: ["DeFi", "Superfluid", "Privy", "Pimlico"],
    github: "https://github.com/builders-garden/naaamofit",
    website: "https://naaamofit.vercel.app/",
    submission:
      "https://taikai.network/en/ethrome/hackathons/ethrome-24/projects/cm1wjvopx03vq148wx0ykw1xq",
    myPart:
      "I worked on the design, frontend (style + wagmi) and Superfluid integration.",
    videoDemoId: "0k-nQ5Lj7SE",
    image: "/hackathons/naaamofit.png",
    prizes: [
      {
        place: "2",
        text: "Account Abstraction Track - 2nd Prize",
      },
      {
        place: "1",
        text: "Superfluid - 1st Prize - Best Project Built on top of Superfluid",
      },
      {
        place: "1",
        text: "Privy - 1st Prize - Most engaging onchain consumer apps",
      },
      {
        place: "1",
        text: "Pimlico - 1st Prize - Bild an amazing user experience with smart accounts",
      },
    ],
  },
  {
    project: "Milionario",
    name: "ETHOnline 2024",
    location: "Online 🌍",
    date: "September 2024",
    description:
      "We developed the 1-in-1 Million (rock, paper, scissors) game as an XMTP bot with Farcaster OpenFrames, Chainlink VRF for randomness and Web3auth for authentication on the webapp.",
    tags: ["Farcaster", "XMTP", "Chainlink", "Web3auth"],
    github: "https://github.com/builders-garden/xmtp-1in1million",
    website: "https://a-milly.vercel.app/",
    submission: "https://ethglobal.com/showcase/milionario-eq7of",
    myPart:
      "I (unofficially) helped my friends with the smart contract development, and with the frontend style.",
    videoDemoId: "GNFNrhv3T9k",
    image: "/hackathons/milionario.png",
    prizes: [
      { place: "pool", text: "XMTP - Pool Prize - Messaging Mini apps" },
    ],
  },
  {
    project: "SnappyAI",
    name: "ETHGlobal Brussels 2024",
    location: "Brussels 🇧🇪",
    date: "July 2024",
    description:
      "SnappyAI is a Metamask Snap which users can use as an AI assistant and ask for help on every transaction and ask for basic web3 information.",
    tags: ["DeFi", "Metamask", "Brian", "PancakeSwap"],
    github: "https://github.com/Che-Scoppiati/SnappyAI",
    website: "https://snappyai.vercel.app/",
    submission: "https://ethglobal.com/showcase/snappyai-n2igg",
    myPart: "I worked on the frontend and BrianAI txs integration/handling.",
    videoDemoId: "R5lmc-e30LE",
    image: "/hackathons/snappy_ai.png",
    prizes: [
      {
        place: "1",
        text: "MetaMask & Linea - 1st place - Best use of Linea and MetaMask",
      },
      {
        place: "1",
        text: "BrianAI - 1st place - Best BrianAI integration (external bounty)",
      },
      {
        place: "pool",
        text: "Blockscout - Pool Prize - Best use of Blockscout Block Explorer",
      },
    ],
  },
  {
    project: "Shopycast",
    name: "Base Onchain Summer",
    location: "Online 🌍",
    date: "June 2024",
    description:
      "Shopycast is a new way to show and sell products directly into a frame. You have your Shopify shop with your products, and Shopycast helps you to create showcases that you can share directly on Farcaster.",
    tags: ["Farcaster", "DeFi", "Shopify", "Base"],
    github: "https://github.com/Che-Scoppiati/shopycast",
    website: "https://shopycast.xyz/",
    submission: "https://devfolio.co/projects/shopycast-d64d",
    myPart:
      "I worked on the frontend and did minor improvements to the Farcaster frame UI.",
    videoDemoId: "-JCK2aUkFBc",
    image: "/hackathons/shopycast.png",
  },
  {
    project: "JPEG Station",
    name: "ETHDam 2024",
    location: "Amsterdam 🇳🇱",
    date: "April 2024",
    description:
      "JPEG station enables cross-chain swaps between Ethereum NFTs and Bitcoin Ordinals leveraging NEAR Chain Abstraction. The protocol core relies in the NEAR smart contract, which serves as an escrow between the two parties involved in a trade.",
    tags: ["DeFi", "Near", "Ordinals", "NFT"],
    github: "https://github.com/0xCaso/jpeg-station",
    website: "https://jpeg-station.vercel.app/",
    submission:
      "https://taikai.network/cryptocanal/hackathons/ethdam2024/projects/cluye5z5m00yzvq016zshu5ix",
    myPart: "I worked on the frontend and the NEAR smart contract.",
    videoDemoId: "ja9H6q82f4c",
    image: "/hackathons/jpeg_station.png",
    prizes: [
      {
        place: "1",
        text: "Top 10 projects of ETHDam 2024",
      },
      {
        place: "pool",
        text: "Near - Pool Prize - Build with NEAR Chain Signatures",
      },
    ],
  },
  {
    project: "eulSynths",
    name: "ETHDenver 2024",
    location: "Denver 🇺🇸",
    date: "February 2024",
    description:
      "eulSynths is a universal DeFi yield product platform built on Euler and Balancer. The protocol allows users to leverage DEX liquidity to increase their yield and mint synthetic tokens like our eulUSD.",
    tags: ["DeFi", "DEX", "Euler", "Balancer"],
    github: "https://github.com/1delta-DAO/eth-denver-eul-synths",
    website: "https://eth-denver-eul-synths.vercel.app/",
    submission: "https://devfolio.co/projects/test-b433",
    myPart: "I worked 100% on the frontend part.",
    videoDemoId: "ksUb9serJME",
    image: "/hackathons/eulsynths.png",
    prizes: [
      {
        place: "1",
        text: "Euler - 1st Prize - Build an EVC-compliant ERC-721 vault",
      },
    ],
  },
  {
    project: "FairPetuals",
    name: "CTRL+Hack+ZK",
    location: "Online 🌍",
    date: "January 2024",
    description:
      "FairPetual is the first perpetuals platform that allows for fair liquidations where anyone can earn a share of fee income by spotting positions that can be liquidated early and execute the liquidations themselves.",
    tags: ["DeFi", "DEX", "Aleph Zero"],
    github: "https://github.com/1delta-DAO/ctrl-plus-fairpetual",
    website: "https://ctrl-plus-fairpetual-frontend.vercel.app/",
    submission:
      "https://taikai.network/alephzero/hackathons/CTRL-Hack-ZK/projects/clr9dmva200oxvn01018uhosz/idea",
    image: "/hackathons/fairpetuals.png",
    myPart: "I worked 100% on the frontend part.",
    prizes: [
      {
        place: "2",
        text: "Aleph Zero - 2nd Prize - DeFi Track",
      },
    ],
  },
  {
    project: "BountyArena",
    name: "ETHRome 2023",
    location: "Rome 🇮🇹",
    date: "October 2023",
    description:
      "BountyArena is a platform to manage bounties (but everything similar like grants, requests for help or others can work). An entity (user or company) can publish a bounty and devs can apply and try to win the prize.",
    tags: ["Governance", "TalentLayer", "The Graph", "ENS"],
    github: "https://github.com/bianc8/BountyArena",
    website: "https://bountyarena.vercel.app/",
    submission:
      "https://taikai.network/en/ethrome/hackathons/ethrome-23/projects/clng4a64l00lvye01zyht9i8z/idea",
    videoDemoId: "X1dYK14eliI",
    image: "/hackathons/bountyarena.png",
    myPart: "I worked on the frontend and the Snapshot integration.",
    prizes: [
      {
        place: "2",
        text: "TalentLayer - 2nd Prize - Best app built on TalentLayer",
      },
      {
        place: "2",
        text: "The Graph - 2nd Prize - Best use of existing subgraph",
      },
      {
        place: "pool",
        text: "ENS - Pool Prize - Best use of ENS",
      },
    ],
  },
  {
    project: "Sismord 2.0",
    name: "ETHDam 2023",
    location: "Amsterdam 🇳🇱",
    date: "May 2023",
    description:
      "New version of Sismord bot that makes it Sybil-resistant releasing discord roles and credentials only to those who have a Gitcoin Passport with a value higher than the one specified.",
    tags: ["Privacy", "Sismo", "Gitcoin Passport"],
    github: "https://github.com/0xCaso/sismord-discord-bot",
    website: "https://devfolio.co/projects/sismord-af06",
    image: "/hackathons/sismord.png",
    myPart: "I worked on the integration with Gitcoin Passport.",
    prizes: [
      {
        place: "1",
        text: "Sismo - 1st Prize - Best Data Aggregation project that uses Sismo",
      },
    ],
  },
  {
    project: "FantaCrypto",
    name: "Ethereum Zurich 2023",
    location: "Zurich 🇨🇭",
    date: "April 2023",
    description:
      "Fantacrypto is a project which allows paper trading competitions on-chain leveraging API3 oracles data feed.",
    tags: ["DeFi", "API3"],
    github: "https://github.com/0xCaso/FantaCrypto/tree/main",
    website: "https://devfolio.co/projects/fantacrypto-f046",
    submission: "https://devfolio.co/projects/fantacrypto-f046",
    image: "/hackathons/fantacrypto.png",
    myPart: "I worked on the smart contract.",
    prizes: [
      {
        place: "1",
        text: "API3 - 1st Prize - Use of first-party oracles",
      },
    ],
  },
  {
    project: "Sismord",
    name: "ZKHack 2023",
    location: "Lisbon 🇵🇹",
    date: "March 2023",
    description:
      "A Discord bot that uses Sismo zkConnect functionalities to gain access to private Discord membership and automated role management based on zkBadge.",
    tags: ["Privacy", "Sismo", "Discord"],
    github: "https://github.com/0xCaso/sismord-discord-bot",
    website: "https://devfolio.co/projects/sismord-af06",
    submission: "https://devfolio.co/projects/sismord-af06",
    myPart: "I worked on the integration with discord.js.",
    image: "/hackathons/sismord.png",
    prizes: [
      {
        place: "1",
        text: "Sismo - 1st Prize - Best off-chain app using Sismo zkConnect",
      },
    ],
  },
];
