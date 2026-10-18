import React from "react";

const Section3 = ({ content }) => {
  const features = content.features;

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#F8FDF4]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Image */}
        <div className="w-full lg:w-[45%] flex-shrink-0 order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
            <img
              src={content.ImgUrl}
              alt="Science Pathway"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full lg:w-[55%] flex flex-col gap-5 order-1 lg:order-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Accent bar */}
              <div
                className="absolute left-0 top-5 bottom-5 w-1.5 rounded-full transition-all duration-300 group-hover:w-2"
                style={{ backgroundColor: feature.accentColor }}
              ></div>

              <div className="pl-5">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  {feature.title}
                </h3>
                <div className="space-y-1.5">
                  {feature.description.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-[0.95rem] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
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