import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wai Phyo Aung | Portfolio",
  description:
    "CS student & blockchain enthusiast portfolio — exploring Web3, smart contracts, and decentralized tech. Anime-inspired design.",
  keywords: ["developer", "portfolio", "blockchain", "web3", "react", "next.js", "solidity", "anime theme"],
  authors: [{ name: "Wai Phyo Aung" }],
  openGraph: {
    title: "Wai Phyo Aung | Portfolio",
    description:
      "CS student & blockchain enthusiast portfolio — exploring Web3, smart contracts, and decentralized tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-dark text-text min-h-screen">{children}</body>
    </html>
  );
}
