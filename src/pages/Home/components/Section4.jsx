import React from "react";
import { Link } from "react-router-dom";

const Section4 = ({ content }) => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-[#E2F5D0] shadow-xl">
          {/* Soft decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#8dc540]/15"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#8dc540]/10"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-8 sm:px-12 lg:px-16 py-12 sm:py-14">
            <div className="text-center lg:text-left max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {content.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                to="/contact"
                className="px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                {content.CTA[1]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;