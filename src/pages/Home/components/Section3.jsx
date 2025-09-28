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
      borderLeft: "1px solid #000000",
    },
    {
      title: "Advanced Learning Opportunities",
      description: [
        "In 11th and 12th grades, students can specialize in their favorite subjects,",
        "enhancing their understanding and skills. Our expert faculty guide",
        "students through complex concepts to ensure mastery and confidence.",
      ],
      bg: "#F0FAE7",
    },
    {
      title: "Tailored Support for Success",
      description: [
        "We offer personalized learning plans that cater to individual strengths and",
        "aspirations. Our commitment to student success is reflected in our high",
        "achievement rates and supportive environment.",
      ],
      bg: "#F0FAE7",
    },
  ];

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-screen py-8"
      style={{ backgroundColor: "#F0FAE7" }}
    >
      {/* Main Content Container */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ width: "100%", maxWidth: "1280px" }}
      >
        {/* Left Image Section */}
        <div
          className="flex-shrink-0 relative w-full max-w-[600px] h-[600px]"
        >
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.SYlVJv85W6XyI1qvq54-BwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Science Pathway"
            className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
            style={{ filter: "brightness(1.05) contrast(1.1)" }}
          />
          {/* Image Overlay Effect */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(45deg, rgba(76, 175, 80, 0.1), rgba(33, 150, 243, 0.1))",
              pointerEvents: "none",
            }}
          ></div>
        </div>

        {/* Right Cards Section */}
        <div
          className="flex flex-col gap-6 w-full max-w-[600px]"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: feature.bg,
                borderLeft: feature.borderLeft,
                border: "1px solid rgba(0,0,0,0.05)",
                minHeight: "130px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
              }}
            >
              {/* Card Header */}
              <div className="mb-3">
                <h3
                  className="text-xl font-bold text-gray-900 leading-tight"
                  style={{ 
                    fontSize: "1.25rem", 
                    lineHeight: "1.4",
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 700
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
                    className="text-gray-700 leading-relaxed"
                    style={{ 
                      fontSize: "0.95rem", 
                      lineHeight: "1.5",
                      fontFamily: "'Urbanist', sans-serif",
                      fontWeight: 400
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