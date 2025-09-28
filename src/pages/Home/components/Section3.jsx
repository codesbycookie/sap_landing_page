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
      borderLeft: "2px solid #000000", 
    },
    {
      title: "Advanced Learning Opportunities",
      description: [
        "In 11th and 12th grades, students can specialize in their favorite subjects,",
        "enhancing their understanding and skills. Our expert faculty guide",
        "students through complex concepts to ensure mastery and confidence.",
      ],
      bg: "#F0FAE7",
      borderLeft: "0px solid #000000",
    },
    {
      title: "Tailored Support for Success",
      description: [
        "We offer personalized learning plans that cater to individual strengths and",
        "aspirations. Our commitment to student success is reflected in our high",
        "achievement rates and supportive environment.",
      ],
      bg: "#F0FAE7",
      borderLeft: "0px solid #000000",
    },
  ];

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen py-8 sm:py-12 lg:py-16"
      style={{ backgroundColor: "#F0FAE7" }}
    >
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Left Image Section */}
        <div className="flex-shrink-0 relative w-full lg:max-w-[500px] xl:max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.SYlVJv85W6XyI1qvq54-BwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Science Pathway"
            className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl transition-transform duration-300 hover:scale-105"
            style={{ filter: "brightness(1.05) contrast(1.1)" }}
          />
          {/* Image Overlay Effect */}
          <div
            className="absolute inset-0 rounded-xl sm:rounded-2xl"
            style={{
              background: "linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1))",
              pointerEvents: "none",
            }}
          ></div>
        </div>

        {/* Right Cards Section */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:max-w-[500px] xl:max-w-[600px] order-1 lg:order-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: feature.bg,
                borderLeft: feature.borderLeft || "4px solid #000000", // Added fallback
                border: "1px solid rgba(0,0,0,0.05)",
                minHeight: "auto sm:min-h-[130px]",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
              }}
            >
              {/* Card Header */}
              <div className="mb-2 sm:mb-3">
                <h3
                  className="text-lg sm:text-xl font-bold text-gray-900 leading-tight urbanist-700"
                  style={{ 
                    lineHeight: "1.4",
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
                    className="text-gray-700 leading-relaxed urbanist-400"
                    style={{ 
                      fontSize: "0.875rem sm:0.95rem", 
                      lineHeight: "1.5",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;