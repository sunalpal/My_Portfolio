import React from "react";

export default function Hero() {
  return (
    <header className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-3">Sunal Pal</h1>
        <p className="text-2xl text-gray-300 mb-4">Web Developer</p>
        <p className="text-gray-400 mb-4">8093525770 | sunalpal2003@gmail.com</p>

        <div className="flex flex-wrap gap-3 mb-6">
          <a href="#contact" className="px-4 py-2 bg-white text-black rounded">Get in Touch</a>
          <a className="px-4 py-2 border border-gray-600 rounded" href="https://www.linkedin.com/in/sunalpal/">LinkedIn</a>
          <a className="px-4 py-2 border border-gray-600 rounded" href="https://x.com/pal_sunal">X</a>
          <a className="px-4 py-2 border border-gray-600 rounded" href="https://github.com/sunalpal">GitHub</a>
          <a
  href="/resume.pdf"
  download="Sunal_Pal_Resume.pdf"
  className="px-4 py-2 border border-gray-400 rounded text-sm hover:bg-gray-800 transition"
>
  Download Resume
</a>

        </div>

        <p className="max-w-xl text-gray-300 leading-relaxed">
          Enthusiastic MERN Stack Developer experienced in MongoDB, Express, React and Node. Skilled at developing responsive UIs and building functional APIs.
        </p>
      </div>

    <div className="hidden lg:flex justify-center">
  <img 
    src="/images/manwithlaptop.png"
    className="w-full max-w-[520px] h-[520px] object-cover rounded-xl grayscale shadow-2xl"
  />
</div>

    </header>
  );
}
