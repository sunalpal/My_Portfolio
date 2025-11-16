import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-300 mb-6">I am open to collaborations and new opportunities.</p>

          <div className="flex gap-4">
            <a href="mailto:sunalpal2003@gmail.com" className="px-6 py-3 bg-white text-black rounded">Email</a>
            <a href="#" className="px-6 py-3 border border-gray-600 rounded">LinkedIn</a>
          </div>
        </div>

        <div className="bg-[#111111] p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-3">Contact Info</h4>
          <p className="text-gray-300">Phone: 8093525770</p>
          <p className="text-gray-300">Email: sunalpal2003@gmail.com</p>
          <p className="text-gray-300">Location: Odisha, India</p>
        </div>
      </div>
    </footer>
  );
}
