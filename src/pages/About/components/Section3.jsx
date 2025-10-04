import React, { useEffect, useState } from "react";

const Section3 = ({content}) => {
  const stories = content.Story;

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

  // Mobile and tablet card width based on screen size
  const getMobileCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 640) return CARD_WIDTH_TABLET;
      return CARD_WIDTH_MOBILE;
    }
    return CARD_WIDTH_MOBILE;
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {content.title[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8dc540] to-[#8dc540]">
            {content.title[1]}
          </span>
        </h2>
      </div>

      {/* Mobile & Tablet Carousel */}
      <div className="flex lg:hidden relative w-full max-w-2xl h-[400px] sm:h-[450px] overflow-hidden items-center justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${
              activeIndex * getMobileCardWidth() + getMobileCardWidth() / 2
            }px))`,
            width: `${getMobileCardWidth() * extendedStories.length}px`,
          }}
        >
          {extendedStories.map((story, index) => {
            const isActive = index % stories.length === activeIndex;

            return (
              <div
                key={index}
                className="flex-shrink-0 p-4 flex items-center justify-center transition-all duration-500"
                style={{
                  width: `${getMobileCardWidth()}px`,
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive ? "none" : "blur(2px)",
                  transform: isActive ? "scale(1)" : "scale(0.9)",
                }}
              >
                <div
                  className="flex flex-col items-center justify-between w-full h-[350px] sm:h-[380px] p-6 sm:p-8 rounded-3xl transition-all duration-500"
                  style={{
                    background: "linear-gradient(135deg, #E2F5D0 0%, #F0FAE7 100%)",
                    boxShadow: isActive
                      ? "0 15px 40px rgba(111, 209, 24, 0.4)"
                      : "0 6px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-4 sm:mb-6 gap-4 sm:gap-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                      {story.title}
                    </h3>
                    <div className="bg-white border-2 border-[#8dc540] text-[#8dc540] px-4 sm:px-6 py-2 rounded-full text-sm font-bold shadow-md">
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
            );
          })}
        </div>
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
                    <div className="bg-white border-2 border-[#8dc540] text-[#8dc540] px-6 py-2 rounded-full text-sm font-bold shadow-md">
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
              activeIndex === index ? 'bg-[#8dc540] w-4' : 'bg-gray-300'
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
              activeIndex === index ? 'bg-[#8dc540] w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Section3;