import React from "react";

// Base images that will be repeated to fill the grid
const baseImages = [
  { src: "/Gallery-1.jpg", alt: "Students in classroom" },
  { src: "/Gallery-2.jpg", alt: "Science lab session" },
  { src: "/Gallery-3.jpg", alt: "Library study area" },
  { src: "/Gallery-1.jpg", alt: "Sports activity" },
  { src: "/Gallery-2.jpg", alt: "Award ceremony" },
  { src: "/Gallery-3.jpg", alt: "Campus view" },
    { src: "/Gallery-1.jpg", alt: "Campus view 2" },

];

// Generate more images by repeating the base set
const generateGalleryImages = () => {
  const galleryImages = [];
  const repetitions = 14; // Total number of images needed
  
  for (let i = 0; i < repetitions; i++) {
    const baseImage = baseImages[i % baseImages.length];
    // Alternate between different span configurations for visual interest
    const spanConfigs = [
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 1, rowSpan: 1 },
      { colSpan: 2, rowSpan: 1 },
      { colSpan: 1, rowSpan: 2 },
      { colSpan: 2, rowSpan: 2 },
      { colSpan: 1, rowSpan: 1 },
    ];
    
    galleryImages.push({
      ...baseImage,
      ...spanConfigs[i % spanConfigs.length],
      id: i,
    });
  }
  
  return galleryImages;
};

const galleryImages = generateGalleryImages();

const Gallery = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 md:px-8 lg:px-16 flex flex-col">
      {/* Enhanced Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 text-[#8dc540] mb-3">
          <div className="w-3 h-3 bg-[#8dc540] rounded-full"></div>
          <p className="text-sm md:text-base font-medium tracking-wide">Believe in your Potential</p>
          <div className="w-3 h-3 bg-[#8dc540] rounded-full"></div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Ambience of <span className="text-[#8dc540]">Sampath Academy</span>
        </h1>
        <div className="w-24 h-1 bg-[#8dc540] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Each result is more than a number — it's a story of hard work, growth, and dedication 
          that shapes our students' journey to success.
        </p>
      </div>

      {/* Dense Bento Grid - No White Space */}
      <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] gap-4 md:gap-5 max-w-7xl mx-auto w-full">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`relative rounded-xl overflow-hidden shadow-lg group 
              ${img.colSpan === 2 ? 'lg:col-span-2' : ''}
              ${img.rowSpan === 2 ? 'row-span-2' : ''}
              transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl
              border border-white/30`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl">
              <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1 truncate">{img.alt}</h3>
                <div className="w-6 h-0.5 bg-green-400 mb-1 rounded-full"></div>
                <p className="text-gray-200 text-xs">Sampath Academy</p>
              </div>
            </div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;