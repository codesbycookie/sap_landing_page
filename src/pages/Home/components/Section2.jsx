import React from "react";

const Section2 = () => {
  const stats = [
    { id: 1, value: "40+", label: "Academic excellence in Years" },
    { id: 2, value: "95%", label: "Years of Education" },
    { id: 3, value: "5000+", label: "Students success" },
  ];

  return (
    <div className="min-h-[40vh] bg-[#E2F5D0] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-14 py-12 sm:py-16 lg:py-18">
      {/* Main Content Container */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center lg:text-left mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 lg:mb-6 urbanist-700">
            The Legacy We Built Over Years
          </h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border-l-4 border-green-600 pl-4 sm:pl-6 py-4 sm:py-6"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 urbanist-700 mb-2">
                  {item.value}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 urbanist-500 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;