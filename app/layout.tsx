import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import AnimatedBall from "@/components/ui/gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Cooper",
  description: "Portfolio of Evan Cooper",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      <body className={`${inter.className} absoulte`}><div className="absolute">{children}</div></body>
    </html>
  );
}
