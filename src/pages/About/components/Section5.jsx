import React, { useEffect } from "react";

const Section5 = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-gradient { 
        background: linear-gradient(-45deg, #6FD118, #4CAF50, #8BC34A, #66BB6A);
        background-size: 400% 400%;
        animation: gradient-shift 8s ease infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="w-full min-h-[500px] flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        backgroundColor: "#fff",
        background: "linear-gradient(135deg, #F0FAE7 0%, #FFFFFF 50%, #E2F5D0 100%)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-6 h-6 bg-[#6FD118]/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-[#4CAF50]/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-[#6FD118]/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-10 right-10 w-5 h-5 bg-[#4CAF50]/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-[#6FD118]/10 to-[#4CAF50]/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-[#4CAF50]/10 to-[#6FD118]/5 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 z-10">
        <div className="relative inline-block">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FD118] to-[#4CAF50]">
              Founders
            </span>
          </h2>
          {/* Underline decoration */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] rounded-full animate-fade-in" style={{ animationDelay: "0.3s" }}></div>
        </div>
        <p
          className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in mt-6"
          style={{ animationDelay: "0.4s" }}
        >
          The visionaries behind our educational excellence and innovation.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative max-w-6xl w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8 lg:gap-12 z-10">
        {/* Founder Card */}
        <div className="w-full lg:w-1/2 flex flex-col group">
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 animate-fade-in text-center lg:text-left flex items-center"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="w-3 h-3 bg-[#6FD118] rounded-full mr-3 animate-pulse"></span>
            Founder
          </h3>
          <div
            className="border-2 border-gray-200 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm flex-1 flex flex-col group-hover:border-[#6FD118]/50 group-hover:scale-105 transform-gpu"
          >
            <div className="relative">
              <div
                className="w-full h-48 sm:h-56 lg:h-64 mb-4 rounded-xl overflow-hidden animate-fade-in group-hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: "0.8s" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop" 
                  alt="Sampath Kumar - Founder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Role badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#6FD118] to-[#4CAF50] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Founder
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-[#6FD118] transition-colors duration-300">
                Sampath Kumar
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-300">
                Multi-layers offer enhanced depth and complexity by integrating various levels of functionality and protection in a seamless manner. Our founder's vision combines innovative thinking with practical solutions.
              </p>
              {/* Signature style */}
              <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-[#6FD118]/30 transition-colors duration-300">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-2 h-2 bg-[#6FD118] rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-mono">Leading with Vision Since 1985</span>
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Founder Card */}
        <div className="w-full lg:w-1/2 flex flex-col group">
          <h3
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 animate-fade-in text-center lg:text-left flex items-center"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="w-3 h-3 bg-[#4CAF50] rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            Co-Founder
          </h3>
          <div
            className="border-2 border-gray-200 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm flex-1 flex flex-col group-hover:border-[#4CAF50]/50 group-hover:scale-105 transform-gpu"
          >
            <div className="relative">
              <div
                className="w-full h-48 sm:h-56 lg:h-64 mb-4 rounded-xl overflow-hidden animate-fade-in group-hover:shadow-lg transition-all duration-500"
                style={{ animationDelay: "0.8s" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop" 
                  alt="Akilesh Sampath - Co-Founder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Role badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#4CAF50] to-[#6FD118] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Co-Founder
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-[#4CAF50] transition-colors duration-300">
                Akilesh Sampath
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1 group-hover:text-gray-900 transition-colors duration-300">
                Encryption safeguards your sensitive information by converting it into a secure code, ensuring that only authorized parties can access it. Our co-founder brings modern security principles to education.
              </p>
              {/* Signature style */}
              <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-[#4CAF50]/30 transition-colors duration-300">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-mono">Innovating Education Technology</span>
                  <div className="w-2 h-2 bg-[#6FD118] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6FD118] to-transparent opacity-50 animate-pulse"></div>
    </section>
  );
};

export default Section5;