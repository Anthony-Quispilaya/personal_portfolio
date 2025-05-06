import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 text-sm text-gray-500 dark:text-gray-400 mt-12">
      &copy; {new Date().getFullYear()} Anthony Quispilaya. All rights reserved.
    </footer>
  );
}
