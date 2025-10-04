import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex items-center justify-center py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative Elements */}
        <div className="inline-flex items-center gap-2 text-[#8dc540] mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p className="text-sm md:text-base font-medium tracking-wide">Sampath Academy</p>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* 404 Number with Creative Design */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-gray-800 opacity-10 absolute inset-0 -z-10">
            404
          </div>
          <div className="text-6xl md:text-8xl font-bold text-[#8dc540] mb-4 relative">
            4
            <span className="text-yellow-500 mx-2">0</span>
            4
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Page Not Found
        </h1>

        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>

        {/* Educational-themed Message */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
          Oops! It seems this page is still in the learning phase. 
          Let's get you back to your educational journey at Sampath Academy.
        </p>

        {/* Creative Visual Element - Books/Education themed */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex space-x-2">
            <div className="w-4 h-12 bg-green-500 rounded-t-lg transform -rotate-12"></div>
            <div className="w-4 h-16 bg-yellow-500 rounded-t-lg transform rotate-6"></div>
            <div className="w-4 h-14 bg-blue-500 rounded-t-lg transform -rotate-3"></div>
            <div className="w-4 h-10 bg-red-500 rounded-t-lg transform rotate-12"></div>
          </div>
        </div>

        {/* Action Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-[#8dc540] hover:bg-[#7cbf3a] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
            />
          </svg>
          Go Back to Home
        </Link>

        {/* Additional Help Text */}
        <p className="text-sm text-gray-500 mt-6">
          Can't find what you're looking for?{" "}
          <a 
            href="/contact" 
            className="text-[#8dc540] hover:text-[#7cbf3a] font-medium underline"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </section>
  );
};

export default Error;