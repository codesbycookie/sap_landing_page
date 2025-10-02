import React from "react";

const Section4 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 md:px-8 bg-[#E2F5D0]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Solar Circle in background */}
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
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#6FD118] rounded-full opacity-20"
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
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Our Core Values
          </h1>
          {/* Underline decoration */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] rounded-full"></div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Guiding principles that shape our educational philosophy and drive our commitment to excellence
        </p>
      </div>

      {/* Grid */}
      <div className="relative max-w-4xl mx-auto z-10">
        <div className="grid grid-cols-2 gap-0 relative">

          {/* Animated Center Lines */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#6FD118] to-transparent z-20 transform -translate-x-1/2 animate-pulse"></div>
          <div className="absolute top-1/2 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#6FD118] to-transparent z-20 transform -translate-y-1/2 animate-pulse"></div>

          {/* Enhanced Solar System at center */}
          <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer animated circle */}
              <div className="absolute w-24 h-24 border-2 border-[#6FD118] rounded-full animate-spin-slow opacity-60"></div>
              <div className="w-20 h-20 border-2 border-gray-900 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-lg">
                {/* Center ball with glow */}
                <div className="w-6 h-6 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full shadow-lg animate-pulse"></div>
              </div>
              {/* Orbiting dots */}
              <div className="absolute w-3 h-3 bg-[#6FD118] rounded-full animate-orbit" style={{ animationDelay: '0s' }}></div>
              <div className="absolute w-2 h-2 bg-[#4CAF50] rounded-full animate-orbit" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
            </div>
          </div>

          {/* Card 1 - Top-Left - Dedication */}
          <div className="text-center relative p-8 bg-white/80 backdrop-blur-sm group hover:bg-white transition-all duration-500 border-r border-b border-gray-100 hover:border-[#6FD118]/30 hover:shadow-2xl hover:scale-105 transform-gpu">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FD118] to-[#4CAF50] rounded-full flex items-center mx-auto justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <svg className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] group-hover:w-16 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#6FD118] transition-colors duration-300">Dedication</h2>
            <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              We are dedicated to our students' academic success and personal growth.
            </p>
          </div>

          {/* Card 2 - Top-Right - Excellence */}
          <div className="text-center relative p-8 bg-white/80 backdrop-blur-sm group hover:bg-white transition-all duration-500 border-l border-b border-gray-100 hover:border-[#6FD118]/30 hover:shadow-2xl hover:scale-105 transform-gpu">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FD118] to-[#4CAF50] rounded-full flex items-center mx-auto justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <svg className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] group-hover:w-16 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#6FD118] transition-colors duration-300">Excellence</h2>
            <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              We strive for excellence in everything we do, from our teaching to our results.
            </p>
          </div>

          {/* Card 3 - Bottom-Left - Student-Centric */}
          <div className="text-center relative p-8 bg-white/80 backdrop-blur-sm group hover:bg-white transition-all duration-500 border-r border-t border-gray-100 hover:border-[#6FD118]/30 hover:shadow-2xl hover:scale-105 transform-gpu">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FD118] to-[#4CAF50] rounded-full flex items-center mx-auto justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <svg className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] group-hover:w-16 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#6FD118] transition-colors duration-300">Student-Centric</h2>
            <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Our approach is always centered around the needs and potential of each student.
            </p>
          </div>

          {/* Card 4 - Bottom-Right - Holistic Education */}
          <div className="text-center relative p-8 bg-white/80 backdrop-blur-sm group hover:bg-white transition-all duration-500 border-l border-t border-gray-100 hover:border-[#6FD118]/30 hover:shadow-2xl hover:scale-105 transform-gpu">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FD118] to-[#4CAF50] rounded-full flex items-center mx-auto justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <svg className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] group-hover:w-16 transition-all duration-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#6FD118] transition-colors duration-300">Holistic Education</h2>
            <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              We believe in providing a holistic education that prepares students for both excellence and life success.
            </p>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default Section4;