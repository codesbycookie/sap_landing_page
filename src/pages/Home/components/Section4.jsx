import React from "react";
import { Link } from "react-router-dom";

const Section4 = ({ content }) => {
  return (
    <section className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center bg-white py-16 sm:py-20 md:py-24">
      {/* Card */}
      <div
        className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl mx-4 sm:mx-6 md:mx-8"
        style={{
          width: "100%",
          maxWidth: "1280px",
          backgroundColor: "#E2F5D0",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 gap-6 sm:gap-8">
          {/* Left Content: Heading + Subtext */}
          <div className="flex flex-col text-center lg:text-left w-full lg:w-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 urbanist-700">
              {content.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl urbanist-400 leading-relaxed">
              {content.description}
            </p>
          </div>

          {/* Right Content: Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
            to="/admission" 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#6FD118] text-black font-medium rounded-lg hover:bg-[#5EBF0F] transition-all duration-300 transform hover:scale-105 urbanist-600 text-sm sm:text-base">
              {content.CTA[0]}
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-300 text-black font-medium rounded-lg hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 urbanist-600 text-sm sm:text-base">
              {content.CTA[1]}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;