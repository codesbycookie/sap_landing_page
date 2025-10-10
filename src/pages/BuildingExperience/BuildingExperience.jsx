import React from "react";
import { Link } from "react-router-dom";

const BuildingExperience = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative Header */}
        <div className="inline-flex items-center gap-2 text-[#8dc540] mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p className="text-sm md:text-base font-medium tracking-wide">
            Sampath Academy
          </p>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Illustration / Animation Concept */}
        <div className="relative flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-[#8dc540]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18m-9 5h9"
              />
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Building Your Learning Experience, <br className="hidden md:block" />
          Byte by Byte.
        </h1>

        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
          Our student portal and blog pages are being crafted with care and
          creativity. We’re making sure your digital classroom feels just like
          home — smart, fast, and seamless.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#8dc540] hover:bg-[#7cbf3a] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-[#8dc540] text-[#8dc540] hover:bg-[#8dc540] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Extra Line */}
        <p className="text-sm text-gray-500 mt-8">
          This feature will be available soon.
        </p>
      </div>
    </section>
  );
};

export default BuildingExperience;
