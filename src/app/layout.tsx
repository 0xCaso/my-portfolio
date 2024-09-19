import type { Metadata } from "next";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[Urbanist]">
        <BackgroundGradientAnimation>{children}</BackgroundGradientAnimation>
      </body>
    </html>
  );
}
