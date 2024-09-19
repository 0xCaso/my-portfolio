import type { Metadata } from "next";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matteo Casonato Portfolio",
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
            <Header />
            <main className="flex flex-grow">{children}</main>
            <Footer />
          </div>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
