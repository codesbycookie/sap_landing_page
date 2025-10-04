import React, { useEffect } from "react";

const Section2 = ({content}) => {
  const stats = content.stats;

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-slow {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      .animate-fade-in {
        animation: fade-in 0.8s ease-out forwards;
      }
      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#E2F5D0",
        minHeight: "401px",
        opacity: 1,
        position: "relative",
        padding: "36px 20px",
        gap: "10px",
        transform: "rotate(0deg)",
        margin: "0 auto",
      }}
    >
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'none\' stroke=\'%236FD118\' stroke-width=\'1\' opacity=\'0.1\' d=\'M0,160 C360,320 1080,0 1440,160\'/%3E%3C/svg%3E')] bg-no-repeat bg-bottom opacity-50 z-0"
      />

      <div
        className="relative z-10 w-full max-w-[1280px] backdrop-blur-sm px-4 sm:px-8 lg:px-20"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl max-w-[800px] font-extrabold text-gray-900 mb-6 sm:mb-10 lg:mb-12 text-center lg:text-left animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {content.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center lg:items-start p-4 sm:p-5 lg:p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2"
            >
              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3 animate-pulse-slow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-medium text-center lg:text-left leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;