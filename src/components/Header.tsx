"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const activeSection = pathname.slice(1).toUpperCase() || "HOME";

  return (
    <header className="flex-shrink-0 bg-base-100 z-20 w-full fixed top-0 p-8">
      <div className="flex w-full justify-between">
        <FlipWords
          word={activeSection}
          className="text-white text-6xl font-['Ribes_Regular']"
        />
        <h1 className="text-white text-6xl font-['Ribes_Regular']">
          MATTEO CASONATO
        </h1>
      </div>
    </header>
  );
};
