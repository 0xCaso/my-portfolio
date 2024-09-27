import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center z-10 overflow-auto h-[calc(100vh-16rem)] m-auto animate-appear">
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-800 bg-opacity-70 overflow-hidden">
        <div className="flex flex-col gap-8 text-white p-8 h-full text-center">
          <h1 className="text-6xl font-bold font-['Ribes_Regular']">
            Hi, I'm Matteo 🧙🏼
          </h1>
          <p className="text-xl">
            Blockchain Developer and Web3 enthusiast, focused on building
            frontends with a cool UX ✨
          </p>
          <p className="text-xl">
            I also love music 🎧 (specially electronic) and traveling ⛰️
          </p>
          <div className="flex justify-center items-center gap-8">
            <Image
              src="/assets/img/tech/nextjs.png"
              alt="Next.js"
              width={2048 / 22}
              height={1234 / 22}
            />
            <Image
              src="/assets/img/tech/tailwind.png"
              alt="Next.js"
              width={900 / 5}
              height={116 / 5}
            />
            <Image
              src="/assets/img/tech/chakraui.png"
              alt="Chakra UI"
              width={1400 / 10}
              height={361 / 10}
            />
            <Image
              src="/assets/img/tech/shadcn.png"
              alt="shadcn"
              width={736 / 5}
              height={140 / 5}
            />
            <Image
              src="/assets/img/tech/wagmi.svg"
              alt="Next.js"
              width={561 / 5}
              height={132 / 5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
