import React, { useEffect } from "react";

const Section5 = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 1s ease-out forwards; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="w-full min-h-[500px] flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#E2F5D0" }}
    >
      {/* Title and Subtitle */}
      <div className="text-center mb-12 z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Meet Our Founders
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          The visionaries behind our educational excellence.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative max-w-5xl w-full flex flex-col md:flex-row justify-between items-start gap-8 z-10">
        {/* Left Card */}
        <div className="w-full md:w-1/2">
          <h3
            className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Founder
          </h3>
          <div
            className="border-2 border-black p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div
              className="w-full h-70 bg-gray-300 mb-4 rounded animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <img src="../../../../public/Gallery-2.jpg" alt="" />
            </div> {/* Image Placeholder */}
            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-15">John Doe</h4>
            <p className="text-gray-700 text-base py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/2">
          <h3
            className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Co - Founder
          </h3>
          <div
            className="border-2 border-black p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div
              className="w-full h-70 bg-gray-300 mb-4 rounded animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <img src="../../../../public/Gallery-2.jpg" alt="" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 mt-15">Jane Smith</h4>
            <p className="text-gray-700 text-base py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;