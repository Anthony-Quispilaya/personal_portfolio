import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony Quispilaya - Web Developer",
  description: "Personal portfolio website showcasing my web development projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none select-none noise-overlay"
        />
        {children}
      </body>
    </html>
  );
}
