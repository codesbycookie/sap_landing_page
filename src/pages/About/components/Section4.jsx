import React from "react";

const Section4 = ({content}) => {
  // Core values data
  const coreValues = content.values;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 md:px-8 bg-[#E2F5D0]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(111,209,24,0.1) 0%, rgba(111,209,24,0) 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "rotate 60s linear infinite",
            zIndex: 0,
          }}
        ></div>

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#8dc540] rounded-full opacity-20"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animation: `float 8s ease-in-out ${i * 0.5}s infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 z-10">
        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            {content.title}
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] rounded-full"></div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8 animate-fade-in">
          {content.description}
        </p>
      </div>

      {/* Grid */}
      <div className="relative max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-2 gap-0 relative">
          {/* Center Solar System */}
          <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-28 h-28 border-2 border-[#8dc540] rounded-full animate-spin-slow opacity-60"></div>
              <div className="w-24 h-24 border-2 border-gray-900 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-xl">
                <div className="w-7 h-7 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full shadow-lg animate-pulse"></div>
              </div>
              <div
                className="absolute w-3 h-3 bg-[#8dc540] rounded-full animate-orbit"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="absolute w-2 h-2 bg-[#8dc540] rounded-full animate-orbit"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              ></div>
            </div>
          </div>

          {/* Cards Loop */}
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`relative group m-2 rounded-2xl p-8 backdrop-blur-md bg-white/70 border border-gray-100 
              transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(111,209,24,0.4)]`}
            >
              {/* Icon */}
              <div className="relative mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-[#8dc540] to-[#8dc540] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_rgba(111,209,24,0.6)] transition-all duration-500">
                <svg
                  className="w-9 h-9 text-white transition-transform duration-500 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={value.iconPath} />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#6FD118] transition-colors duration-500">
                {value.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                {value.description}
              </p>

              {/* Hover underline */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#8dc540] to-[#8dc540] rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
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
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .animate-orbit {
          animation: orbit 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Section4;
