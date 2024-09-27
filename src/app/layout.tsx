import type { Metadata } from "next";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Matteo Casonato",
  description: "Portfolio website of Matteo Casonato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[Urbanist] bg-[#121212]">
        <BackgroundGradientAnimation>
          <div className="flex flex-col min-h-screen">
            <Image
              src="/assets/img/me.png"
              alt="Matteo Casonato"
              width={1000}
              height={1000}
              className="opacity-15 rounded-full absolute bottom-16 -right-24 z-0"
            />
            <Header />
            <main className="flex flex-grow">{children}</main>
            <Footer />
          </div>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
