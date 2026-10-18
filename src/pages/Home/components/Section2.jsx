import React from "react";

const Section2 = ({ content }) => {
  const stats = content.stats;

  return (
    <section className="bg-[#E2F5D0] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center lg:text-left mb-12 sm:mb-16 tracking-tight">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {stats.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-7 sm:p-8 border border-white/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1.5 rounded-full bg-[#8dc540] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                {item.value}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;