import React from "react";

export default function Programming() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <h2 className="text-4xl font-bold mb-6">Programming Languages</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div className="text-center">
          <div className="text-4xl mb-4">☕</div>
          <h4 className="text-xl font-semibold">Java</h4>
          <p className="text-gray-400 mt-2">Strong foundation in OOP and Java fundamentals.</p>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-4">¢</div>
          <h4 className="text-xl font-semibold">C & C++</h4>
          <p className="text-gray-400 mt-2">Systems programming and memory-level problem solving.</p>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-4">🔬</div>
          <h4 className="text-xl font-semibold">Web Technologies</h4>
          <p className="text-gray-400 mt-2">HTML, CSS, JS for responsive UI development.</p>
        </div>
      </div>
    </section>
  );
}
