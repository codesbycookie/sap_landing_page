import React from "react";
import "../../../index.css";

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Section1 = () => {
  const images = [
    "/Gallery-1.jpg",
    "/Gallery-2.jpg",
    "/Gallery-3.jpg",
    "/Gallery-4.jpg",
    "/Gallery-5.jpg",
    "/Gallery-6.jpg",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid (columns) */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4">
        {Array.from({ length: 6 }).map((_, colIdx) => {
          const shuffledImages = shuffleArray(images);

          return (
            <div
              key={colIdx}
              className={`flex flex-col gap-2 md:gap-4 animate-scroll ${
                colIdx % 2 === 0 ? "scroll-up" : "scroll-down"
              }`}
            >
              {/* Duplicate twice for infinite effect */}
              {[...shuffledImages, ...shuffledImages].map((src, imgIdx) => (
                <div
                  key={imgIdx}
                  className="bg-gray-300 flex items-center justify-center rounded-md overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Academic excellence ${imgIdx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add("bg-gray-400");
                    }}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Black translucent overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Foreground content */}
      <div className="relative text-center max-w-2xl px-4 sm:px-6 z-10 animate-fadeInUp">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white urbanist-700 mb-4 sm:mb-6">
          35+ Years of Academic Excellence
        </h1>
        <p className="text-base sm:text-lg text-gray-200 urbanist-400 leading-relaxed mb-6 sm:mb-8">
          Empowering students to achieve their highest potential through
          personalized learning and expert guidance. Join a legacy of academic
          success and transformative education.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 urbanist-600">
            Explore Programs
          </button>
          <button className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 urbanist-600">
            Admissions Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
