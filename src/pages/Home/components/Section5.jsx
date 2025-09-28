import React from 'react';

const Section5 = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      position: 'State Topper, Science Stream',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."',
      stars: 5,
    },
    {
      name: 'Priya Patel',
      position: 'National Merit Scholar',
      text: '"Our expert faculty helped me and secure top ranks in board exams."',
      stars: 5,
    },
    {
      name: 'Name Surname',
      position: 'Company position',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."',
      stars: 5,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
      <section
        className="relative w-full py-2 h-auto min-h-[600px] mx-auto overflow-hidden"
        style={{ backgroundColor: '#F0FAE7' }}
      >
        <div
          className="absolute w-[90%] max-w-[1280px] h-auto min-h-[500px] top-5 left-1/2 transform -translate-x-1/2 rounded-2xl border border-gray-300 flex flex-col sm:flex-row"
          style={{ backgroundColor: '#E2F5D0' }}
        >
          {/* Left Column */}
          <div
            className="w-full max-w-[560px] h-auto p-5 sm:p-10 flex-shrink-0"
          >
            <h2
              className="text-2xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-6"
            >
              Student Success Stories
            </h2>
            <p
              className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-8 leading-5 sm:leading-6"
            >
              Lorem ipsum sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <button
              className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-gray-300 transition-colors"
            >
              Know More
            </button>

            <div className="image border-amber-200 w-130" >
              <img src="../../../../public/Gallery-2.jpg" alt="" />
            </div>
          </div>

          {/* Right Column: Two testimonial columns */}
          <div
            className="w-full max-w-[720px] h-auto min-h-[400px] flex flex-col sm:flex-row gap-2 sm:gap-5 p-5 sm:p-10 sm:pr-0"
          >
            {/* Column 1: Moving Up */}
            <div
              className="flex-1 overflow-hidden h-auto min-h-[300px]"
            >
              <div
                className="flex flex-col gap-2 sm:gap-5 animate-scrollUp"
                style={{ animation: 'scrollUp 30s linear infinite' }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 sm:p-5 rounded-lg shadow-md"
                  >
                    <div className="flex mb-1 sm:mb-2.5">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-lg sm:text-2xl text-yellow-500 mr-0.5 sm:mr-1"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-xs sm:text-base text-gray-500 leading-4 sm:leading-6 mb-2.5 sm:mb-5"
                    >
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div
                        className="w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-gray-300 mr-2 sm:mr-2.5"
                      />
                      <div>
                        <strong className="text-sm sm:text-lg text-gray-700">{testimonial.name}</strong>
                        <p className="text-xs sm:text-base text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Moving Down */}
            <div
              className="flex-1 overflow-hidden h-auto min-h-[300px]"
            >
              <div
                className="flex flex-col gap-2 sm:gap-5 animate-scrollDown"
                style={{ animation: 'scrollDown 30s linear infinite' }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 sm:p-5 rounded-lg shadow-md"
                  >
                    <div className="flex mb-1 sm:mb-2.5">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-lg sm:text-2xl text-yellow-500 mr-0.5 sm:mr-1"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-xs sm:text-base text-gray-500 leading-4 sm:leading-6 mb-2.5 sm:mb-5"
                    >
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div
                        className="w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-gray-300 mr-2 sm:mr-2.5"
                      />
                      <div>
                        <strong className="text-sm sm:text-lg text-gray-700">{testimonial.name}</strong>
                        <p className="text-xs sm:text-base text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;