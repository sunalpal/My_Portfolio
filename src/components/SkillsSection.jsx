import React from "react";

export default function SkillsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 bg-[#0f0f10] rounded-t-2xl">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h4 className="text-xl font-semibold mb-2">Frontend Technologies</h4>
          <p>React, HTML, CSS, JavaScript</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Backend Technologies</h4>
          <p>Node.js, Express.js</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Database</h4>
          <p>MongoDB</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
        <div>
          <h4 className="text-xl font-semibold mb-2">Version Control</h4>
          <p>Git, GitHub</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Tools</h4>
          <p>VS Code, Copilot, IntelliJ, Postman</p>
        </div>
      </div>
    </section>
  );
}
