import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Section5 = ({ content }) => {
  const testimonials = content.testimonials;
  const [isMobile, setIsMobile] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

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
          animation: scrollUp 32s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 32s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-gray-200 overflow-hidden bg-[#E2F5D0] shadow-sm">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Column */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                  {content.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed max-w-md">
                  {content.description}
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3.5 rounded-2xl text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-fit mb-8"
                >
                  {content.CTA || "Know More"}
                </Link>

                <div className="mt-auto rounded-2xl overflow-hidden shadow-lg aspect-[16/10]">
                  <img
                    src={content.ImgUrl}
                    alt="Student success stories"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-1/2 p-5 sm:p-8 lg:p-10 flex items-center">
                {isMobile ? (
                  /* Mobile Carousel */
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-md animate-fade-in">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex mb-4 gap-0.5">
                          {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                            <span key={i} className="text-lg text-[#8dc540]">★</span>
                          ))}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
                          {testimonials[currentTestimonial].text}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#E2F5D0] flex items-center justify-center text-gray-700 font-bold">
                            {testimonials[currentTestimonial].name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {testimonials[currentTestimonial].name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonials[currentTestimonial].position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-6 gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                              ? "bg-[#8dc540] w-6"
                              : "bg-gray-300 w-2"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex justify-center mt-5 gap-4">
                      <button
                        onClick={() =>
                          setCurrentTestimonial(
                            (prev) => (prev - 1 + testimonials.length) % testimonials.length
                          )
                        }
                        className="p-2.5 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                        }
                        className="p-2.5 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Desktop dual scrolling columns */
                  <div className="w-full flex gap-5 h-[480px]">
                    {/* Column 1 - Up */}
                    <div className="flex-1 overflow-hidden">
                      <div className="flex flex-col gap-5 animate-scroll-up hover-pause">
                        {[...testimonials, ...testimonials].map((t, index) => (
                          <div
                            key={index}
                            className="bg-white p-5 rounded-2xl shadow-md border border-gray-100"
                          >
                            <div className="flex mb-3 gap-0.5">
                              {[...Array(t.stars)].map((_, i) => (
                                <span key={i} className="text-lg text-[#8dc540]">★</span>
                              ))}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {t.text}
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#E2F5D0] flex items-center justify-center text-gray-700 font-bold text-sm">
                                {t.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.position}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2 - Down */}
                    <div className="flex-1 overflow-hidden hidden sm:block">
                      <div className="flex flex-col gap-5 animate-scroll-down hover-pause">
                        {[...testimonials, ...testimonials].map((t, index) => (
                          <div
                            key={index}
                            className="bg-white p-5 rounded-2xl shadow-md border border-gray-100"
                          >
                            <div className="flex mb-3 gap-0.5">
                              {[...Array(t.stars)].map((_, i) => (
                                <span key={i} className="text-lg text-[#8dc540]">★</span>
                              ))}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {t.text}
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#E2F5D0] flex items-center justify-center text-gray-700 font-bold text-sm">
                                {t.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.position}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;