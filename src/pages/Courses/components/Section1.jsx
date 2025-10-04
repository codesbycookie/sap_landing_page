const Section1 = ({ content }) => {
  const courses = content.courses;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-green-600 mb-2">
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
            <div key={index} className="flex flex-col">
              {/* Card */}
              <div
                className="rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex-1"
                style={{ backgroundColor: '#E2F5D0' }}
              >
                {/* Card with Image and Content */}
                <div className="p-6">
                  {/* Image Section */}
                  <div className="relative mb-6">
                    <div 
                      className="rounded-2xl overflow-hidden"
                      style={{
                        width: '492px',
                        height: '274px',
                        marginTop: '24px',
                        marginLeft: '24px'
                      }}
                    >
                      {/* Image Tag */}
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content Section */}
                  <div className="px-6 pb-6">
                    {/* Course Title - Bold Text */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {course.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-gray-700 mb-4 leading-relaxed text-base">
                      {course.subtitle}
                    </p>
                    
                    {/* Classes and Subjects */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-base font-semibold text-gray-900">
                        {course.classes} | {course.subjects}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore Button - Outside the card */}
              <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center text-lg">
                {content.CTA[0]}
                <svg
                  className="w-5 h-5 ml-3"
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