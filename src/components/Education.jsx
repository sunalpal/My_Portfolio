import React from "react";

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <h2 className="text-4xl font-bold mb-6">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-bg p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Tetrahedron Higher Secondary School</h3>
          <p className="text-gray-400">Intermediate (Science) — 2022–2023</p>
        </div>

        <div className="card-bg p-6 rounded-xl">
          <h3 className="text-xl font-semibold">DRIEMS University</h3>
          <p className="text-gray-400">B.Tech CSE — 2024–2026</p>
        </div>
      </div>
    </section>
  );
}
