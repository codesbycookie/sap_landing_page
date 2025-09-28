import React, { useEffect } from "react";

const Section4 = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes pulse-slow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes orbit {
        0% { transform: translate(80px, 0) rotate(0deg); }
        100% { transform: translate(80px, 0) rotate(360deg); }
      }
      .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      .animate-pulse { animation: pulse 2s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      .animate-rotate { animation: rotate 20s linear infinite; }
      .animate-orbit { animation: orbit 8s linear infinite; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F5F7F2 100%)" }}
    >
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 1440 320\\'%3E%3Cpath fill=\\'none\\' stroke=\\'%236FD118\\' stroke-width=\\'0.5\\' opacity=\\'0.05\\' d=\\'M0,160 C360,320 1080,0 1440,160\\'/%3E%3C/svg%3E')] bg-no-repeat bg-bottom z-0" />

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in"
          style={{ animationDelay: "0.2s", textShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}
        >
          Our Core Values
        </h1>
      </div>

      {/* Values Grid Container - No gaps */}
      <div className="relative max-w-4xl mx-auto z-10">
        {/* Solar System Container - Centered between all 4 cards */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 flex items-center justify-center animate-pulse-slow z-20"
          style={{ animationDuration: "4s" }}
        >
          {/* Outer Circle */}
          <div
            className="absolute w-48 h-48 border-2 border-black rounded-full opacity-50 animate-rotate"
            style={{ animationDuration: "20s", animationTimingFunction: "linear", animationIterationCount: "infinite" }}
          ></div>

          {/* Center Ball with Glow */}
          <div
            className="absolute w-12 h-12 bg-black rounded-full shadow-lg animate-pulse"
            style={{ boxShadow: "0 0 15px rgba(111, 209, 24, 0.3)" }}
          ></div>
        </div>

        {/* Values Grid - No gaps */}
        <div className="grid grid-cols-2 gap-0 relative">
          {/* Card 1 - Top-Left: Bottom and Right border */}
          <div className="text-center relative p-8 bg-white/90 border-r border-b border-gray-100 hover:bg-white transition-all duration-300">
            <div
              className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-[#6FD118] bg-[length:100%_1px,1px_100%] bg-[position:0_100%,100%_0] bg-no-repeat"
            >
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#6FD118]/30 via-[#6FD118]/50 to-transparent"></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#6FD118]/50 to-[#6FD118]/30"></div>
            </div>
            <div
              className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-40 justify-center mb-6"
              style={{ backgroundColor: "#6FD118" }}
            >
              <div className="w-6 h-6 bg-black rounded"></div> {/* Placeholder for icon */}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">
              Dedication
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed relative z-10">
              We are dedicated to our students' academic success and personal growth.
            </p>
          </div>

          {/* Card 2 - Top-Right: Bottom and Left border */}
          <div className="text-center relative p-8 bg-white/90 border-b border-gray-100 hover:bg-white transition-all duration-300">
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#6FD118] via-transparent to-transparent bg-[length:100%_1px,1px_100%] bg-[position:0_100%,0_0] bg-no-repeat"
            >
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6FD118]/50 to-[#6FD118]/30"></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[#6FD118]/50 to-[#6FD118]/30"></div>
            </div>
            <div
              className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-40 justify-center mb-6"
              style={{ backgroundColor: "#6FD118" }}
            >
              <div className="w-6 h-6 bg-black rounded"></div> {/* Placeholder for icon */}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">
              Excellence
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed relative z-10">
              We strive for excellence in everything we do, from our teaching to our results.
            </p>
          </div>

          {/* Card 3 - Bottom-Left: Top and Right border */}
          <div className="text-center relative p-8 bg-white/90 border-r border-gray-100 hover:bg-white transition-all duration-300">
            <div
              className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-[#6FD118] bg-[length:100%_1px,1px_100%] bg-[position:0_0,100%_0] bg-no-repeat"
            >
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-[#6FD118]/30 via-[#6FD118]/50 to-transparent"></div>
              <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-[#6FD118]/30 via-[#6FD118]/50 to-transparent"></div>
            </div>
            <div
              className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-40 justify-center mb-6"
              style={{ backgroundColor: "#6FD118" }}
            >
              <div className="w-6 h-6 bg-black rounded"></div> {/* Placeholder for icon */}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">
              Student-Centric
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed relative z-10">
              Our approach is always centered around the needs and potential of each student.
            </p>
          </div>

          {/* Card 4 - Bottom-Right: Top and Left border */}
          <div className="text-center relative p-8 bg-white/90 hover:bg-white transition-all duration-300">
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#6FD118] via-transparent to-transparent bg-[length:100%_1px,1px_100%] bg-[position:0_0,0_0] bg-no-repeat"
            >
              <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6FD118]/50 to-[#6FD118]/30"></div>
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#6FD118]/30 via-[#6FD118]/50 to-transparent"></div>
            </div>
            <div
              className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-40 justify-center mb-6"
              style={{ backgroundColor: "#6FD118" }}
            >
              <div className="w-6 h-6 bg-black rounded"></div> {/* Placeholder for icon */}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">
              Holistic Education
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed relative z-10">
              We believe in providing a holistic education that prepares students for both excellence and life success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;