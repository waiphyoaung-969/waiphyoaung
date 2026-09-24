import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Wai Phyo Aung — Portfolio",
  description:
    "Third-year Computer Science student in Thailand, learning web development and blockchain.",
  authors: [{ name: "Wai Phyo Aung" }],
  icons: { icon: "/assets/favicon.svg" },
  openGraph: {
    title: "Wai Phyo Aung — Portfolio",
    description: "Computer Science student. Learning, building, and growing.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
