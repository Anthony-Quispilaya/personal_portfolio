import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full py-32 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">ABOUT ME</h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <p className="text-gray-300 leading-relaxed">
            I am a passionate web developer with a strong foundation in modern web technologies. 
            My journey in web development started with a curiosity about how websites work, 
            which led me to dive deep into HTML, CSS, and JavaScript. I enjoy creating 
            responsive and user-friendly web applications that solve real-world problems.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or learning new programming languages. I believe in continuous 
            learning and staying up-to-date with the latest web development trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
