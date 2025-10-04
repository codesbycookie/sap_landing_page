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
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 opacity-30 z-0 px-4 md:px-6">
        {[...Array(6)].map((_, colIndex) => (
          <div
            key={colIndex}
            className="relative overflow-hidden rounded-xl"
          >
            <div
              className={`flex flex-col gap-4 md:gap-6 ${
                colIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"
              }`}
              style={{
                animationDuration: `${20 + colIndex * 5}s`
              }}
            >
              {/* Repeat images for seamless loop */}
              {images.concat(images).concat(images).map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt="carousel"
                    className="w-full h-60 md:h-72 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
      
      {/* Foreground Content with higher z-index */}
      <div className="relative text-center max-w-4xl px-4 md:px-6 z-50">
        <div className="p-6 sm:p-8 md:p-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6">
            <Link 
            to="/courses"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 rounded-xl shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 font-semibold text-base sm:text-lg">
             {content.CTA[0]}
            </Link>
            <Link 
            to="/admission" 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 font-semibold text-base sm:text-lg">
              {content.CTA[1]}
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
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