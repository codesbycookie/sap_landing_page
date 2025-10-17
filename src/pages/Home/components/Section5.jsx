import React from 'react';
import { Link} from 'react-router-dom';

const Section5 = ({content}) => {
  const testimonials = content.testimonials;

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
        .animate-scroll-up {
          animation: scrollUp 30s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll-up, .animate-scroll-down {
            animation-duration: 40s;
          }
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section
        className="relative w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[600px] mx-auto overflow-hidden"
        style={{ backgroundColor: '#fff' }}
      >
        <div
          className="w-[92%] xs:w-[95%] sm:w-[90%] max-w-[1280px] mx-auto min-h-[350px] xs:min-h-[400px] sm:min-h-[450px] md:min-h-[500px] rounded-lg xs:rounded-xl sm:rounded-2xl border border-gray-300 flex flex-col lg:flex-row overflow-hidden"
          style={{ backgroundColor: '#E2F5D0' }}
        >
          {/* Left Column */}
          <div
            className="w-full lg:w-1/2 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col"
          >
            <h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-5 md:mb-6 urbanist-700"
            >
              {content.title}
            </h2>
            <p
              className="text-xs xs:text-sm sm:text-base text-gray-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 leading-relaxed urbanist-400"
            >
              {content.description}
            </p>
            <Link
              to="/about"
              className="bg-white text-gray-800 px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 xs:py-3 sm:py-4 rounded-lg text-xs xs:text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 urbanist-600 mb-4 xs:mb-5 sm:mb-6 md:mb-8 w-fit shadow-md hover:shadow-lg"
            >
              Know More
            </Link>

            {/* Image Section */}
            <div className="mt-auto">
              <div className="w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={content.ImgUrl} 
                  alt="Student success stories" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Two testimonial columns */}
          <div
            className="w-full lg:w-1/2 min-h-[350px] xs:min-h-[400px] flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-5 md:gap-6 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10"
          >
            {/* Column 1: Moving Up */}
            <div
              className="flex-1 overflow-hidden h-[280px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
            >
              <div
                className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-6 animate-scroll-up hover-pause"
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex mb-2 xs:mb-3">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-sm xs:text-base sm:text-lg md:text-xl text-black mr-1"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-xs xs:text-sm md:text-base text-gray-600 leading-relaxed mb-2 xs:mb-3 sm:mb-4 urbanist-400"
                    >
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div
                        className="w-7 xs:w-8 sm:w-9 md:w-10 h-7 xs:h-8 sm:h-9 md:h-10 rounded-full bg-gray-200 mr-2 xs:mr-3 flex items-center justify-center"
                      >
                        <span className="text-gray-500 text-xs xs:text-sm font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <strong className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 urbanist-600 block">
                          {testimonial.name}
                        </strong>
                        <p className="text-xs xs:text-sm text-gray-500 urbanist-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Moving Down */}
            <div
              className="flex-1 overflow-hidden h-[280px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] hidden sm:block"
            >
              <div
                className="flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-6 animate-scroll-down hover-pause"
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex mb-2 xs:mb-3">
                      {[...Array(testimonial.stars)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-sm xs:text-base sm:text-lg md:text-xl text-black mr-1"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-xs xs:text-sm md:text-base text-gray-600 leading-relaxed mb-2 xs:mb-3 sm:mb-4 urbanist-400"
                    >
                      {testimonial.text}
                    </p>
                    <div className="flex items-center">
                      <div
                        className="w-7 xs:w-8 sm:w-9 md:w-10 h-7 xs:h-8 sm:h-9 md:h-10 rounded-full bg-gray-200 mr-2 xs:mr-3 flex items-center justify-center"
                      >
                        <span className="text-gray-500 text-xs xs:text-sm font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <strong className="text-xs xs:text-sm sm:text-base font-semibold text-gray-900 urbanist-600 block">
                          {testimonial.name}
                        </strong>
                        <p className="text-xs xs:text-sm text-gray-500 urbanist-400">
                          {testimonial.position}
                        </p>
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