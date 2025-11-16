import React from "react";

export default function WhatIBring() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 bg-[#121212] rounded-b-2xl">
      <h2 className="text-4xl font-bold mb-8">What I Bring to Your Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
        <div className="bg-[#151515] p-6 rounded-lg min-h-[200px]">
          <h4 className="text-xl font-semibold mb-2">Growth Mindset</h4>
          <p>Always learning and improving.</p>
        </div>

        <div className="bg-[#151515] p-6 rounded-lg min-h-[200px]">
          <h4 className="text-xl font-semibold mb-2">Innovation Focus</h4>
          <p>Creative problem solving and new ideas.</p>
        </div>

        <div className="bg-[#151515] p-6 rounded-lg min-h-[200px]">
          <h4 className="text-xl font-semibold mb-2">Impact Driven</h4>
          <p>Building meaningful digital experiences.</p>
        </div>
      </div>
    </section>
  );
}
