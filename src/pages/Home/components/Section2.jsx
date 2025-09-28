import React from "react";

const Section2 = () => {
  const stats = [
    { id: 1, value: "40+", label: "Academic excellence in Years" },
    { id: 2, value: "95%", label: "Years of Education" },
    { id: 3, value: "5000+", label: "Students success" },
  ];

  return (
    <div className="min-h-[40vh] bg-[#E2F5D0] flex flex-col justify-center items-center gap-8 px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
        The Legacy We Built Over Years
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col border-l-4 border-green-600 pl-4"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">{item.value}</h2>
            <p className="text-lg md:text-xl text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
