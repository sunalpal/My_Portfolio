import React from "react";

export default function CoreSkills() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-4xl font-bold mb-6">Core Technical Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="card-bg p-6 rounded-xl">
            <h3 className="text-xl font-semibold">SQL & Databases</h3>
            <p className="text-gray-400 mt-2">Strong in SQL, schema design, and query optimization.</p>
          </div>

          <div className="card-bg p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Full-Stack Development</h3>
            <p className="text-gray-400 mt-2">Building full-stack apps with React, Node, MongoDB.</p>
          </div>

          <div className="sm:col-span-2 card-bg p-6 rounded-xl">
            <h3 className="text-xl font-semibold">C Programming</h3>
            <p className="text-gray-400 mt-2">Good understanding of low-level logic & problem solving.</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center">
        <img src="/images/laptop.png" className="w-[420px] h-[420px] rounded-lg grayscale object-cover" />
      </div>
    </section>
  );
}
