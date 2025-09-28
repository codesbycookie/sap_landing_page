import React, { useEffect } from "react";

const Section2 = () => {
  const stats = [
    { id: 1, value: "40+", label: "Years of Academic Excellence" },
    { id: 2, value: "95%", label: "Student Success Rate" },
    { id: 3, value: "5000+", label: "Graduates Empowered" },
  ];

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
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="relative w-full min-h-[401px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#E2F5D0",
        height: "401px",
        opacity: 1,
        position: "relative",
        padding: "36px 80px",
        gap: "10px",
        transform: "rotate(0deg)",
        margin: "0 auto",
      }}
    >
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'none\' stroke=\'%236FD118\' stroke-width=\'1\' opacity=\'0.1\' d=\'M0,160 C360,320 1080,0 1440,160\'/%3E%3C/svg%3E')] bg-no-repeat bg-bottom opacity-50 z-0"
        style={{ height: "401px" }}
      />

      <div
        className="relative z-10 w-full max-w-[1280px] backdrop-blur-sm"
        style={{ padding: "0" }}
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 sm:mb-12 text-center md:text-left animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Long heading is what you see here in this feature section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="flex flex-col items-center sm:items-start p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6FD118] mb-2 sm:mb-3 animate-pulse-slow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {stat.value}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-medium text-center sm:text-left">
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