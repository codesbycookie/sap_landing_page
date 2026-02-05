const Section1 = ({ content }) => {
  const courses = content.courses;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#8dc540] mb-2">
            Choose your Path
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600">
            {content.description}
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col group">
              {/* Card */}
              <div
                className="rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex-1 border border-gray-100"
                style={{ backgroundColor: '#E2F5D0' }}
              >
                {/* Card with Image and Content */}
                <div className="p-4 sm:p-6">
                  {/* Image Section - Fixed to fit container */}
                  <div className="relative mb-6">
                    <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video w-full">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text Content Section */}
                  <div className="px-2 sm:px-4 pb-4 sm:pb-6">
                    {/* Course Title - Bold Text */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {course.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base line-clamp-2">
                      {course.subtitle}
                    </p>
                    
                    {/* Classes and Subjects */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">
                        {course.classes} | {course.subjects}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore Button - Outside the card */}
              <button className="mt-4 w-full bg-[#8dc540] hover:bg-[#7bb532] text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center text-base sm:text-lg hover:shadow-lg hover:scale-[1.02] active:scale-95">
                {content.CTA[0]}
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;