"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center gap-12 py-6 navbar-bg-color backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`uppercase font-semibold tracking-wider text-lg transition-colors duration-200 ${
              isActive ? "text-red-500" : "hover:text-red-500"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
