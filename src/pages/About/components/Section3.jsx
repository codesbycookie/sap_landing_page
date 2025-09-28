import React, { useEffect } from "react";

const Section3 = () => {
  const stories = [
    {
      title: "The Foundation",
      year: 1985,
      desc: "The story of Sampath Academy began in 1985, founded by E. Sampathkumar with a vision for academic excellence. This phase laid a strong foundation with quality education.",
    },
    {
      title: "Expansion Phase",
      year: 1990,
      desc: "Sampath Academy expanded its offerings, introducing new courses and facilities, scaling impact while upholding high educational standards.",
    },
    {
      title: "Innovation Era",
      year: 2000,
      desc: "We embraced technology and innovative teaching methods, integrating digital tools to enhance learning experiences for students.",
    },
    {
      title: "Global Recognition",
      year: 2015,
      desc: "Our excellence earned global recognition through partnerships with international institutions and notable alumni success.",
    },
  ];

  const extendedStories = [...stories, ...stories]; // Duplicate for seamless loop

  useEffect(() => {
    // Inject keyframes via <style> tag
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slide-right {
        0% { transform: translateX(calc(-514px * 4 / 3)); }
        100% { transform: translateX(0); }
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-highlight {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: 200px 0; }
      }
      .animate-slide-right {
        animation: slide-right 40s linear infinite;
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      .animate-pulse-highlight {
        animation: pulse-highlight 3s ease-in-out infinite;
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      .animate-shimmer {
        animation: shimmer 2s linear infinite;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 200px 100%;
      }
      .timeline-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .timeline-card:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 25px 50px -12px rgba(111, 209, 24, 0.3);
      }
      .glow-effect {
        position: relative;
      }
      .glow-effect::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: radial-gradient(circle, rgba(111, 209, 24, 0.15) 0%, transparent 70%);
        border-radius: 43px;
        z-index: -1;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .glow-effect:hover::before {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F0FAE7] via-white to-[#E2F5D0] py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 1440 320\\'%3E%3Cpath fill=\\'none\\' stroke=\\'%236FD118\\' stroke-width=\\'2\\' opacity=\\'0.3\\' d=\\'M0,160 C360,320 1080,0 1440,160\\'/%3E%3C/svg%3E')] bg-no-repeat bg-bottom opacity-60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#E2F5D0]/40 to-transparent z-10" />
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-[#6FD118] rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 right-16 w-8 h-8 bg-[#8BC34A] rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-4 h-4 bg-[#4CAF50] rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }} />

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative z-20">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center relative z-20 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          The Chapters We've
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6FD118] to-[#4CAF50] mt-2">
            Reached So Far
          </span>
        </h2>
        
        <p 
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          From humble beginnings to global recognition, discover the milestones that shaped our institution's legacy.
        </p>
      </div>

      {/* Enhanced Timeline Carousel */}
      <div
        className="relative w-full max-w-7xl h-[484px] overflow-hidden rounded-3xl shadow-2xl bg-white/60 backdrop-blur-md border border-[#6FD118]/20 glow-effect"
        style={{ 
          boxShadow: "0 25px 50px -12px rgba(111, 209, 24, 0.25)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(226,245,208,0.4) 100%)"
        }}
      >
        <div
          className="flex animate-slide-right"
          style={{ width: "calc(514px * 8 / 3)" }}
        >
          {extendedStories.map((story, index) => (
            <div
              key={index}
              className="w-[514px] flex-shrink-0 p-4 flex items-center justify-center timeline-card group"
              style={{
                height: "484px",
                opacity: index % 3 === 1 ? 1 : 0.5,
                filter: index % 3 === 1 ? "none" : "blur(2px)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div
                className="flex flex-col items-center justify-between w-full h-full p-8 gap-8 relative"
                style={{
                  backgroundColor: "#E2F5D0",
                  borderRadius: "32px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(135deg, #E2F5D0 0%, #F0FAE7 100%)"
                }}
              >
                {/* Year Badge with Enhanced Design */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-white border-2 border-[#6FD118] text-[#6FD118] px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-highlight backdrop-blur-sm">
                    {story.year}
                  </div>
                </div>

                {/* Main Content Card */}
                <div
                  className="w-full bg-white p-8 rounded-2xl shadow-inner flex flex-col items-center justify-between h-full transition-all duration-300 group-hover:shadow-xl relative overflow-hidden"
                  style={{ 
                    minHeight: "300px",
                    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FDF5 100%)"
                  }}
                >
                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="text-center w-full">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-[#6FD118]"
                      style={{ lineHeight: "1.3" }}
                    >
                      {story.title}
                    </h3>
                  </div>
                  
                  <p
                    className="text-gray-700 text-base md:text-lg leading-relaxed text-center mt-4 overflow-auto max-h-[160px] px-4 transition-colors duration-300 group-hover:text-gray-800"
                    style={{ 
                      scrollbarWidth: "thin", 
                      scrollbarColor: "#6FD118 #E2F5D0",
                    }}
                  >
                    {story.desc}
                  </p>

                  {/* Progress Indicator */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {stories.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex === index % stories.length 
                            ? 'bg-[#6FD118] w-6' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Section3;