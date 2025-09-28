import React from "react";
import "../../../index.css"

const Section1 = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4">
        {Array.from({ length: 36 }).map((_, idx) => (
          <div
            key={idx}
            className={`bg-gray-300 flex items-center justify-center rounded-md animate-scroll overflow-hidden ${
              idx % 2 === 0 ? "scroll-up" : "scroll-down"
            }`}
          >
            {/* Replace placeholder icon with your image */}
            <img
              src={`/images/grid-image-${(idx % 6) + 1}.jpg`}
              alt={`Academic excellence ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Translucent black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Foreground content */}
      <div className="relative text-center max-w-2xl px-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          35+ Years of Academic Excellence
        </h1>
        <p className="mt-4 text-gray-200 text-lg">
          Empowering students to achieve their highest potential through
          personalized learning and expert guidance. Join a legacy of academic
          success and transformative education.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-800 transition">
            Explore
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition">
            Admissions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
