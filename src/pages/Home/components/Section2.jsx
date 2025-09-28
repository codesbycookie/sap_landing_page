import React from "react";

const Section2 = () => {
  const stats = [
    { id: 1, value: "40+", label: "Academic Excellence in Numbers" },
    { id: 2, value: "95%", label: "Years of Education" },
    { id: 3, value: "5000+", label: "Student Success Rate" },
  ];

  return (
    <section
      className="relative w-full flex justify-center items-start"
      style={{ backgroundColor: "#E2F5D0", height: "553px" }}
    >
      {/* Content Card */}
      <div
        className="absolute rounded-lg"
        style={{
          width: "90%", // Adjusted for mobile responsiveness
          maxWidth: "1280px",
          height: "auto", // Adjusted to auto for flexibility
          top: "112px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#E2F5D0",
          padding: "20px", // Reduced padding for smaller screens
        }}
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 mb-6 sm:mb-12">
          Long heading is what you see here in this feature section
        </h2>

        {/* Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left h-auto sm:h-[143px]"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col justify-center items-center sm:items-start px-2 sm:px-4 py-4">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900">{stat.value}</h3>
              <p className="mt-1 sm:mt-2 text-gray-700 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;