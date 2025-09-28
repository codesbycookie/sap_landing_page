import React from "react";
import "../../../index.css";

// Import your images
import image1 from "../../../../public/Gallery-1.jpg";
import image2 from "../../../../public/Gallery-2.jpg";
import image3 from "../../../../public/Gallery-3.jpg";

const Section1 = () => {
  const imagesData = [
    {
      src: image1,
      alt: "Campus building",
    },
    {
      src: image2,
      alt: "Students learning",
    },
    {
      src: image3,
      alt: "Academic library",
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500",
      alt: "Graduation ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500",
      alt: "Science lab",
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
      alt: "Classroom session",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 p-6">
        {imagesData.map((image, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl overflow-hidden shadow-xl scroll-float`}
            style={{ animationDelay: `${idx * 0.8}s` }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Translucent overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-xs"></div>

      {/* Foreground content */}
      <div className="relative text-center max-w-3xl px-6 z-10 animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          35+ Years of Academic Excellence
        </h1>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
          Empowering students to achieve their highest potential through
          personalized learning and expert guidance. Join a legacy of academic
          success and transformative education.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Explore Programs
          </button>
          <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-md">
            Admissions Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
