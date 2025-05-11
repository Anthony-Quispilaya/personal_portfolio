import React from "react";

export default function Resume() {
  return (
    <section className="w-full max-w-2xl mx-auto py-16">
      <h2 className="text-3xl font-semibold mb-4">Resume</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">Download my resume:</p>
      <a href="resume.pdf" className="mt-6 inline-block px-8 py-3 rounded-full bg-red-600 text-white text-lg font-bold shadow-lg hover:bg-red-700 transition-all duration-200 animate-bounce focus:outline-none focus:ring-4 focus:ring-red-400">Download Resume</a>
    </section>
  );
}
