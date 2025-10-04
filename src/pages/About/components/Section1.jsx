import React from 'react';
import { Link } from 'react-router-dom';

const Section1 = ({content}) => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-white overflow-hidden relative"
    >
      {/* Wavy Line Background */}
      <svg
        className="absolute top-1/4 left-0 w-full h-auto opacity-30 sm:opacity-50 z-0"
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
        className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 z-10"
      >
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-1">
          <span
            className="inline-block px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full shadow-md mb-4 sm:mb-6"
          >
            About Us
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc540] to-[#4CAF50]">{content.title[0]}</span>
            <br />
            <span className="text-[#fac116]">{content.title[1]}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to="/courses"
              className="px-6 sm:px-8 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              {content.CTA[0]}
            </Link>
            <Link
              to="/careers"
              className="px-6 sm:px-8 py-3 bg-[#8dc540] text-white font-medium rounded-md hover:bg-[#5EBF0F] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              {content.CTA[1]}
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mb-8 lg:mb-0 order-1 lg:order-2">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-3 sm:p-4 md:p-6 flex items-center justify-center">
            {/* Decorative Wavy Element */}
            <svg
              className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-30 sm:opacity-50 transform translate-x-1/4 translate-y-1/4"
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
            
            {/* Main Image - Bigger */}
            <div className="w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={content.ImgUrl}
                alt="Sampath Academy Campus"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    'https://tse3.mm.bing.net/th/id/OIP.kCh29QDlNfXXBXafT-i_ZAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3';
                }}
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-3 -left-3 bg-[#6FD118] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium">
              Since 1985
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
