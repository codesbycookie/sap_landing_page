import React from 'react';

const Section1 = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-white overflow-hidden relative"
    >
      {/* Wavy Line Background */}
      <svg
        className="absolute top-1/4 left-0 w-full h-auto opacity-50 z-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#6FD118"
          strokeWidth="2"
          d="M0,160 C360,320 1080,0 1440,160"
        />
      </svg>

      <div
        className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 z-10"
      >
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <span
            className="inline-block px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full shadow-md mb-6"
          >
            About Us
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FD118] to-[#6FD118]">Discover Sampath</span>
            <br />
            <span className="text-gray-400">Academy</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black mb-8 max-w-md mx-auto md:mx-0">
            A Legacy of Educational Excellence Since 1985 - Nurturing Young Minds in Kolathur, Chennai
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              className="px-6 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              Learn more
            </button>
            <button
              className="px-6 py-3 bg-[#6FD118] text-white font-medium rounded-full hover:brightness-90 transition-colors shadow-md"
            >
              Get started
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-40 sm:w-80 sm:h-48 md:w-96 md:h-56 bg-white rounded-3xl shadow-lg p-4 flex items-center justify-center">
            <svg
              className="absolute bottom-0 right-0 w-32 h-32 opacity-50 transform translate-x-1/4 translate-y-1/4"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#6FD118"
                strokeWidth="2"
                d="M0,160 C360,0 1080,320 1440,160"
              />
            </svg>
            <img
              src="../../../../public/Gallery-1.jpg"
              alt="Placeholder"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;