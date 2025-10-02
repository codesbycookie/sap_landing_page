import React from "react";

const Section3 = () => {
  const features = [
    {
      title: "Explore Our Science Courses",
      description: [
        "Our 10th-grade foundation courses lay the groundwork for a successful",
        "Science education. Dive into Physics, Chemistry, Mathematics, and Biology",
        "to nurture your passion for learning.",
      ],
      bg: "#E2F5D0",
      accentColor: "#4CAF50",
    },
    {
      title: "Advanced Learning Opportunities",
      description: [
        "In 11th and 12th grades, students can specialize in their favorite subjects,",
        "enhancing their understanding and skills. Our expert faculty guide",
        "students through complex concepts to ensure mastery and confidence.",
      ],
      bg: "#E2F5D0",
      accentColor: "#4CAF50",
    },
    {
      title: "Tailored Support for Success",
      description: [
        "We offer personalized learning plans that cater to individual strengths and",
        "aspirations. Our commitment to student success is reflected in our high",
        "achievement rates and supportive environment.",
      ],
      bg: "#E2F5D0",
      accentColor: "#4CAF50",
    },
  ];

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen py-12 lg:py-20"
      style={{ backgroundColor: "#F8FDF4" }}
    >
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        {/* Left Image Section */}
        <div className="flex-shrink-0 relative w-full lg:max-w-[45%] h-[250px] sm:h-[450px] lg:h-[550px] order-2 lg:order-1">
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/Gallery-2.jpg"
              alt="Science Pathway"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(45deg, rgba(76, 175, 80, 0.08), rgba(33, 150, 243, 0.08))",
              }}
            ></div>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="flex flex-col gap-6 w-full lg:min-w-[50%] order-1 lg:order-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
              style={{
                backgroundColor: feature.bg,
                minHeight: "140px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                e.currentTarget.style.borderLeft = `4px solid ${feature.accentColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderLeft = "4px solid transparent";
              }}
            >
              {/* Accent Bar */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300"
                style={{ backgroundColor: feature.accentColor }}
              ></div>
              
              {/* Card Content */}
              <div className="pl-4">
                {/* Card Header */}
                <div className="mb-3">
                  <h3
                    className="text-xl font-bold text-gray-900 leading-tight urbanist-700"
                    style={{ 
                      lineHeight: "1.3",
                    }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  {feature.description.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 leading-relaxed urbanist-400"
                      style={{ 
                        fontSize: "0.95rem", 
                        lineHeight: "1.5",
                      }}
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