import React from "react";
import "../../../index.css";

// Import your images
import image1 from "../../../../public/Gallery-1.jpg";
import image2 from "../../../../public/Gallery-2.jpg";
import image3 from "../../../../public/Gallery-3.jpg";

const Section1 = () => {
  // JSON object for images
  const imagesData = {
    image1: {
      src: image1,
      alt: "Campus building",
      category: "campus"
    },
    image2: {
      src: image2,
      alt: "Students learning",
      category: "students"
    },
    image3: {
      src: image3,
      alt: "Academic library",
      category: "facilities"
    },
    image4: {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500",
      alt: "Graduation ceremony",
      category: "achievements"
    },
    image5: {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500",
      alt: "Science lab",
      category: "labs"
    },
    image6: {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
      alt: "Classroom session",
      category: "classrooms"
    }
  };

  // Convert object to array for mapping
  const backgroundImages = Object.values(imagesData);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images grid */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 p-4">
        {backgroundImages.map((image, idx) => (
          <div
            key={idx}
            className={`relative rounded-lg overflow-hidden shadow-lg animate-scroll ${
              idx % 2 === 0 ? "scroll-up" : "scroll-down"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Optional: Add overlay on images for better text readability */}
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Enhanced translucent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Foreground content */}
      <div className="relative text-center max-w-2xl px-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          35+ Years of Academic Excellence
        </h1>
        <p className="text-gray-200 text-lg leading-relaxed">
          Empowering students to achieve their highest potential through
          personalized learning and expert guidance. Join a legacy of academic
          success and transformative education.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Explore Programs
          </button>
          <button className="px-8 py-3 bg-white/10 text-white rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Admissions Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;