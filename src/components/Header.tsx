"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const activeSection = pathname.slice(1).toUpperCase() || "HOME";

  return (
    <header className="flex-shrink-0 bg-base-100 z-20 w-full fixed top-0 p-4 md:p-8">
      <div className="flex w-full justify-between">
        <FlipWords
          word={activeSection}
          className="text-white text-4xl md:text-6xl font-['Ribes_Regular']"
        />
        <h1 className="hidden md:block text-white text-6xl font-['Ribes_Regular']">
          MATTEO CASONATO
        </h1>
        <h1 className="block md:hidden text-white text-4xl md:text-6xl font-['Ribes_Regular']">
          MC
        </h1>
      </div>
    </header>
  );
};
