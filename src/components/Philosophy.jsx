import React from "react";

export default function Philosophy() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="card-bg p-10 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6">Development Philosophy</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h4 className="text-xl font-semibold mb-2">Understand</h4>
            <p>Study and analyze problems deeply.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Innovate</h4>
            <p>Design creative and modern solutions.</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Deliver</h4>
            <p>Build reliable and user-friendly software.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
