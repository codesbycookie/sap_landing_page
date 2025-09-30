const Section4 = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 md:px-8 bg-white"
      
    >
      {/* Solar Circle in background */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(111,209,24,0.15) 0%, rgba(111,209,24,0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "rotate 60s linear infinite",
          zIndex: 0,
        }}
      ></div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16 z-10">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in"
          style={{ animationDelay: "0.2s", textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          Our Core Values
        </h1>
      </div>

      {/* Grid */}
      <div className="relative max-w-4xl mx-auto z-10">
        <div className="grid grid-cols-2 gap-0 relative">

          {/* Center + lines */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#6FD118] to-white z-20 transform -translate-x-1/2"></div> {/* vertical */}
          <div className="absolute top-1/2 left-0 h-1 w-full bg-gradient-to-r from-[#6FD118] to-white z-20 transform -translate-y-1/2"></div> {/* horizontal */}

          {/* Solar System at center */}
          <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer circle */}
              <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center">
                {/* Center ball */}
                <div className="w-6 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 1 - Top-Left - Dedication */}
          <div className="text-center relative p-8 bg-white">
            <div className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-auto justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Dedication</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are dedicated to our students' academic success and personal growth.
            </p>
          </div>

          {/* Card 2 - Top-Right - Excellence */}
          <div className="text-center relative p-8 bg-white/90">
            <div className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-auto justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Excellence</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive for excellence in everything we do, from our teaching to our results.
            </p>
          </div>

          {/* Card 3 - Bottom-Left - Student-Centric */}
          <div className="text-center relative p-8 bg-white/90">
            <div className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-auto justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Student-Centric</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our approach is always centered around the needs and potential of each student.
            </p>
          </div>

          {/* Card 4 - Bottom-Right - Holistic Education */}
          <div className="text-center relative p-8 bg-white">
            <div className="w-12 h-12 bg-[#6FD118] rounded-full flex items-center mx-auto justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Holistic Education</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in providing a holistic education that prepares students for both excellence and life success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section4;