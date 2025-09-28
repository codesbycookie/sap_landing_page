import React from "react";

const Section4 = () => {
  return (
    <section className="relative w-full h-[426px] flex items-center justify-center bg-white">
      {/* Card */}
      <div
        className="absolute rounded-lg shadow-lg"
        style={{
          width: "90%", // Adjusted for responsiveness
          maxWidth: "1280px",
          height: "auto", // Adjusted to auto for flexibility
          top: "112px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#E2F5D0",
        }}
      >
        <div className="h-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 py-6">
          {/* Left Content: Heading + Subtext */}
          <div className="flex flex-col text-left mb-4 sm:mb-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Start Your Academic Journey Today
            </h3>
            <p className="text-sm sm:text-lg text-gray-700 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel urna at dui cursus ullamcorper.
            </p>
          </div>

          {/* Right Content: Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#6FD118] text-black font-medium rounded hover:brightness-90 transition-colors">
              Explore Courses
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gray-400 text-black font-medium rounded hover:brightness-90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;