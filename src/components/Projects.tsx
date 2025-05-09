import React from "react";

export default function Projects() {
  return (
    <section className="w-full max-w-2xl mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="border rounded-lg p-4 bg-white shadow">
          <h3 className="text-xl font-bold">Project Title</h3>
          <p className="text-gray-600">Short project description goes here.</p>
        </li>
        {/* Add more projects here */}
      </ul>
    </section>
  );
}
