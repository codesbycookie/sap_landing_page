import { useEffect, useState } from 'react';

const Section2 = ({content}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = content.achievements;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [achievements.length]);

  // Calculate visible cards and transform for automatic scrolling
  const visibleCards = 3; // Number of cards to show at once
  const cardWidth = 320; // Card width including margin
  const gap = 24; // gap-6 = 24px

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#E2F5D0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-center text-green-600 font-semibold mb-2">
          {content.para}
        </p>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <p className="text-base text-gray-600">
            {content.description}
          </p>
        </div>

        {/* Cards Container - Auto scrolling carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="bg-white rounded-lg shadow-md p-4 flex-shrink-0"
                style={{
                  width: '320px'
                }}
              >
                {/* Student Image - Using proper img tag */}
                <div 
                  className="w-full rounded-md overflow-hidden mb-4 mx-auto"
                  style={{
                    width: '280px',
                    height: '320px'
                  }}
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Student Details - Below image */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {achievement.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {achievement.class}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-300 mb-4"></div>

                {/* Subjects and Scores */}
                <div className="space-y-3">
                  {achievement.subjects.map((subject, subjectIndex) => (
                    <div key={subjectIndex} className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-900">
                        {subject.name}
                      </p>
                      <p className="text-base font-bold text-gray-900">
                        {subject.score}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Divider */}
                <div className="w-full h-px bg-gray-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-green-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;