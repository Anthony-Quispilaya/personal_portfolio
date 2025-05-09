import React from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="w-full flex justify-center gap-8 py-4 navbar-bg-color backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="uppercase font-semibold tracking-wider hover:text-red-500 transition-colors duration-200"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
