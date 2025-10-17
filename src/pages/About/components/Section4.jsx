import React from "react";

const Section4 = ({ content }) => {
  const coreValues = content.values;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#E2F5D0]">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient orb */}
        <div
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: "min(500px, 90vw)",
            height: "min(500px, 90vw)",
            background: "radial-gradient(circle, rgba(111,209,24,0.1) 0%, rgba(111,209,24,0) 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "rotate 60s linear infinite",
          }}
        ></div>

        {/* Floating dots - reduced count for mobile */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8dc540] rounded-full opacity-20"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${15 + Math.random() * 70}%`,
              animation: `float 8s ease-in-out ${i * 0.5}s infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 z-10 px-2">
        <div className="relative inline-block mb-6">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            {content.title}
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed sm:leading-loose">
          {content.description}
        </p>
      </div>

      {/* Enhanced Grid System */}
      <div className="relative max-w-6xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 relative">
          
          {/* Enhanced Center Solar System - Hidden on mobile, visible on tablet+ */}
          <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center hidden md:flex">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-[#8dc540] rounded-full animate-spin-slow opacity-60"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-gray-900 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-xl">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full shadow-lg animate-pulse"></div>
              </div>
              <div
                className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8dc540] rounded-full animate-orbit"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute w-2 h-2 bg-[#8dc540] rounded-full animate-orbit"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              ></div>
            </div>
          </div>

          {/* Enhanced Cards */}
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`relative group rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md bg-white/70 border border-gray-100 
                transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg sm:hover:shadow-[0_0_25px_rgba(111,209,24,0.4)]
                flex flex-col h-full min-h-[280px] sm:min-h-[320px]`}
            >
              {/* Icon Container */}
              <div className="relative mx-auto mb-4 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#8dc540] to-[#6ea82a] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(111,209,24,0.6)] transition-all duration-500">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white transition-transform duration-500 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={value.iconPath} />
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col text-center">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#6FD118] transition-colors duration-500 leading-tight">
                  {value.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed sm:leading-loose group-hover:text-gray-900 transition-colors duration-500 flex-1">
                  {value.description}
                </p>
              </div>

              {/* Hover underline */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#8dc540] to-[#6ea82a] rounded-full group-hover:w-12 sm:group-hover:w-16 md:group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(8px);
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(35px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(35px) rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-orbit {
          animation: orbit 6s linear infinite;
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 640px) {
          .animate-orbit {
            animation-duration: 4s;
          }
        }
        
        /* Extra small devices */
        @media (min-width: 375px) and (max-width: 639px) {
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Section4;