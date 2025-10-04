import React from "react";

// Founder data array


// Reusable card component

const Section5 = ({content}) => {
  const founders = content.founders;
  return (
    <section
      className="w-full min-h-[500px] flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F0FAE7 0%, #FFFFFF 50%, #E2F5D0 100%)",
      }}
    >
      {/* Decorative BG Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-6 h-6 bg-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-lime-400/15 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          {content.title[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">
            {content.title[1]}
          </span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl w-full flex flex-col lg:flex-row justify-center items-stretch gap-8 z-10">
        {founders.map((founder, index) => (
          <FounderCard key={index} founder={founder} />
        ))}
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 animate-pulse"></div>
    </section>
  );
};
const FounderCard = ({ founder }) => (
  <div className="w-full lg:w-1/2 flex flex-col group">
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 text-center lg:text-left flex items-center">
      <span className={`w-3 h-3 ${founder.badgeColor} rounded-full mr-3 animate-pulse`}></span>
      {founder.role}
    </h3>

    <div className="border-2 border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm flex-1 flex flex-col group-hover:scale-105 transform-gpu group-hover:border-green-400/50">
      <div className="relative">
        <div className="w-full h-56 lg:h-64 mb-4 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
          <img
            src={founder.img}
            alt={`${founder.name} - ${founder.role}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-lime-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {founder.role}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center group-hover:${founder.textColor} transition-colors duration-300`}>
          {founder.name}
        </h4>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-300">
          {founder.desc}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-green-400/30 transition-colors duration-300">
          <div className="flex items-center justify-center space-x-4">
            <div className={`w-2 h-2 ${founder.badgeColor} rounded-full animate-pulse`}></div>
            <span className="text-xs text-gray-500 font-mono">{founder.tagline}</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Section5;
