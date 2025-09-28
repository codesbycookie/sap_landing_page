import React, { useEffect, useState } from "react";

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

  const extendedStories = [...stories, ...stories]; // duplicate for smooth loop
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stories.length]);

  const CARD_WIDTH_MOBILE = 320;
  const CARD_WIDTH_TABLET = 400;
  const CARD_WIDTH_DESKTOP = 514;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F0FAE7] via-white to-[#E2F5D0] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          The Chapters We've{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FD118] to-[#4CAF50]">
            Reached So Far
          </span>
        </h2>
      </div>

      {/* Mobile & Tablet Vertical Layout */}
      <div className="flex lg:hidden flex-col items-center w-full max-w-2xl space-y-6 sm:space-y-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] sm:max-w-[450px] p-4 sm:p-6"
          >
            <div
              className="flex flex-col items-center justify-between w-full min-h-[300px] sm:min-h-[350px] p-6 sm:p-8 rounded-3xl transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #E2F5D0 0%, #F0FAE7 100%)",
                boxShadow: index === activeIndex
                  ? "0 15px 40px rgba(111, 209, 24, 0.4)"
                  : "0 6px 20px rgba(0, 0, 0, 0.1)",
                opacity: index === activeIndex ? 1 : 0.7,
                transform: index === activeIndex ? "scale(1.02)" : "scale(0.98)",
              }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-4 sm:mb-6 gap-4 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                  {story.title}
                </h3>
                <div className="bg-white border-2 border-[#6FD118] text-[#6FD118] px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-md">
                  {story.year}
                </div>
              </div>
              
              {/* Content */}
              <div className="bg-white w-full flex-1 p-4 sm:p-6 rounded-2xl">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                  {story.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden lg:flex relative w-full max-w-7xl h-[480px] overflow-hidden items-center justify-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${
              activeIndex * CARD_WIDTH_DESKTOP + CARD_WIDTH_DESKTOP / 2
            }px))`,
            width: `${CARD_WIDTH_DESKTOP * extendedStories.length}px`,
          }}
        >
          {extendedStories.map((story, index) => {
            const isActive = index % stories.length === activeIndex;

            return (
              <div
                key={index}
                className="w-[514px] flex-shrink-0 p-4 flex items-center justify-center transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive ? "none" : "blur(3px)",
                  transform: isActive ? "scale(1)" : "scale(0.9)",
                }}
              >
                <div
                  className="flex flex-col items-center justify-between w-full h-[484px] p-8 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, #E2F5D0 0%, #F0FAE7 100%)",
                    boxShadow: isActive
                      ? "0 15px 40px rgba(111, 209, 24, 0.4)"
                      : "0 6px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex justify-between items-center w-full mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {story.title}
                    </h3>
                    <div className="bg-white border-2 border-[#6FD118] text-[#6FD118] px-6 py-2 rounded-full text-sm font-bold shadow-md">
                      {story.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white w-full h-[338px] p-6 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-700 text-base leading-relaxed text-center">
                      {story.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator for Mobile/Tablet */}
      <div className="flex lg:hidden justify-center mt-6 sm:mt-8 space-x-2">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-[#6FD118] w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Dots Indicator for Desktop */}
      <div className="hidden lg:flex justify-center mt-8 space-x-2">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-[#6FD118] w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Section3;