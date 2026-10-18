import React from "react";
import { Link } from "react-router-dom";

const Section1 = ({ content }) => {
  const images = [
    "/Gallery-1.jpg",
    "/Gallery-2.jpg",
    "/Gallery-3.jpg",
    "/Gallery-1.jpg",
    "/Gallery-2.jpg",
    "/Gallery-3.jpg",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Grid with responsive vertical carousels */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 opacity-25 z-0 px-3 md:px-5">
        {[...Array(6)].map((_, colIndex) => (
          <div
            key={colIndex}
            className="relative overflow-hidden rounded-2xl"
          >
            <div
              className={`flex flex-col gap-3 md:gap-5 ${
                colIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"
              }`}
              style={{
                animationDuration: `${22 + colIndex * 4}s`,
              }}
            >
              {images.concat(images).concat(images).map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={img}
                    alt="carousel"
                    className="w-full h-56 md:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10"></div>

      {/* Foreground Content */}
      <div className="relative text-center max-w-4xl px-5 md:px-8 z-20">
        <div className="p-6 sm:p-10 md:p-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 sm:mb-7 leading-[1.15] tracking-tight">
            {content.title}
            <span className="animate-pulse text-[#fac116]">.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-light">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <Link
              to="/courses"
              className="px-8 py-3.5 sm:py-4 bg-white text-black rounded-2xl shadow-xl hover:bg-[#fac116] hover:text-black transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl font-semibold text-base sm:text-lg"
            >
              {content.CTA[0]}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white/80 text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1.5 font-semibold text-base sm:text-lg"
            >
              {content.CTA[1]}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Section1;