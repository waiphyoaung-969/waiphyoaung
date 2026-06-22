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
  title: "Aroni | Portfolio",
  description:
    "Full-stack developer portfolio with anime-inspired design. Crafting digital experiences with clean code and creative design.",
  keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "anime theme"],
  authors: [{ name: "Aroni" }],
  openGraph: {
    title: "Aroni | Portfolio",
    description:
      "Full-stack developer portfolio with anime-inspired design.",
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
