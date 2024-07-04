"use client";

import Lottie from "lottie-react";
import { useRef, useState } from "react";
import Dragon from "@public/assets/lotties/Dragon.json";
import Fire from "@public/assets/lotties/Fire.json";
import GitHub from "@public/assets/lotties/GitHub.json";

export default function Home() {
  const firstFireRef = useRef<any>(null);
  firstFireRef.current?.setSpeed(0.7);
  const secondFireRef = useRef<any>(null);
  secondFireRef.current?.setSpeed(0.5);
  const thirdFireRef = useRef<any>(null);
  thirdFireRef.current?.setSpeed(0.6);

  const [nameHovered, setNameHovered] = useState(false);

  const handleNameHover = () => {
    setNameHovered(!nameHovered);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-24 bg-base-100 text-8xl">
      <Lottie
        animationData={Dragon}
        className="absolute -left-0 w-[700px] -top-40 z-10"
      />
      {/* LEFT FIRE */}
      <Lottie
        lottieRef={firstFireRef}
        animationData={Fire}
        className={`absolute w-[100px] center right-[30rem] top-[5.25rem] transform rotate-[-35deg] transition-all duration-200 ${
          nameHovered ? "scale-145" : "scale-0"
        }`}
      />
      {/* CENTER FIRE */}
      <Lottie
        lottieRef={secondFireRef}
        animationData={Fire}
        className={`absolute w-[100px] center right-[15rem] top-[4.5rem] transition-all duration-200 ${
          nameHovered ? "scale-150" : "scale-0"
        }`}
      />
      {/* RIGHT FIRE */}
      <Lottie
        lottieRef={thirdFireRef}
        animationData={Fire}
        className={`absolute w-[100px] center right-8 top-[5.5rem] transform rotate-[30deg] transition-all duration-200 ${
          nameHovered ? "scale-115" : "scale-0"
        }`}
      />
      <div className="relative w-full flex items-center justify-end">
        <div className="relative z-0 flex flex-col text-right text-3xl">
          <span className="mb-6">
            <span className="text-secondary">gm</span>! I'm
          </span>
          <span
            className={`text-8xl font-['Mioge'] transition-all duration-200 ${
              nameHovered ? "scale-110" : "scale-100"
            }`}
            onMouseOver={handleNameHover}
            onMouseOut={handleNameHover}
          >
            Matteo Casonato
          </span>
          {/* <div className="flex w-full justify-between"> */}
          {/* <Lottie animationData={GitHub} className="w-20" /> */}
          <span>
            the{" "}
            <span className="underline decoration-secondary underline-offset-4">
              <span className="text-accent">dapp</span> magician
            </span>{" "}
            🧙‍♂️
          </span>
          {/* </div> */}
        </div>
      </div>
    </main>
  );
}
