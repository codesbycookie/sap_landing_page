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
      className="w-full min-h-[500px] flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "#E2F5D0" }}
    >
      {/* Title and Subtitle */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 z-10">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Meet Our Founders
        </h2>
        <p
          className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          The visionaries behind our educational excellence.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative max-w-6xl w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8 lg:gap-12 z-10">
        {/* Founder Card */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 animate-fade-in text-center lg:text-left"
            style={{ animationDelay: "0.6s" }}
          >
            Founder
          </h3>
          <div
            className="border-2 border-black p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex-1 flex flex-col"
          >
            <div
              className="w-full h-48 sm:h-56 lg:h-64 mb-4 rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop" 
                alt="John Doe - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Sampath Kumar</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                Multi-layers offer enhanced depth and complexity by integrating various levels of functionality and protection in a seamless manner
              </p>
            </div>
          </div>
        </div>

        {/* Co-Founder Card */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 animate-fade-in text-center lg:text-left"
            style={{ animationDelay: "0.6s" }}
          >
            Co-Founder
          </h3>
          <div
            className="border-2 border-black p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white flex-1 flex flex-col"
          >
            <div
              className="w-full h-48 sm:h-56 lg:h-64 mb-4 rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop" 
                alt="Jane Smith - Co-Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Akilesh Sampath</h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                Encryption safeguards your sensitive information by converting it into a secure code, ensuring that only authorized parties can access it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;