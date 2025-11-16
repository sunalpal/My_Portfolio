import React from "react";

const ProjectCard = ({ title, tech, bullets, demo, code }) => (
  <article className="bg-[#141414] p-6 rounded-xl border border-[#2a2a2b]">
    <div className="flex flex-col md:flex-row md:justify-between gap-4">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-400">{tech}</p>

        <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 items-start">
        <a
          className="px-4 py-2 bg-white text-black rounded"
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>

        <a
          className="px-4 py-2 border border-gray-600 rounded"
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </article>
);

export default function Projects() {
  const data = [
    {
      title: "GitHub User Finder",
      tech: "HTML | CSS | JavaScript | GitHub",
      bullets: [
        "Built a responsive web application using GitHub API.",
        "Dynamic real-time search with live rendering.",
        "Clean UI built with modern CSS techniques.",
      ],
      demo: "https://sunalpal.github.io/github-user-finder/", 
      code: "https://github.com/sunalpal/github-user-finder"
    },
    {
      title: "Vanilla JS OS",
      tech: "HTML | CSS | JavaScript | GitHub",
      bullets: [
        "Custom desktop-like OS interface with windows and taskbar.",
        "Live wallpaper and dynamic window management.",
        "Strong DOM manipulation and modular JavaScript usage.",
      ],
      demo: "https://sunalpal.github.io/vanilla-js-os/",
      code: "https://github.com/sunalpal/vanilla-js-os"
    },
    {
      title: "Invoicely — Invoice Generator",
      tech: "HTML | CSS | JavaScript | GitHub",
      bullets: [
        "Responsive invoice generator with live preview.",
        "Simple, clean UI optimized for all devices.",
        "Focused on DOM manipulation and client-side logic.",
      ],
      demo: "https://sunalpal.github.io/invoicely-app/",
      code: "https://github.com/sunalpal/invoicely-app"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
        {data.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
