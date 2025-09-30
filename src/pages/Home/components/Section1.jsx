import React, { useState, useEffect } from "react";
import "../../../index.css";

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Mathematical and scientific symbols/formulas in SVG format
  const symbols = [
    // Mathematics symbols
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="60" fontFamily="serif">π</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="60" fontFamily="serif">∞</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="50" fontFamily="serif">∫</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="50" fontFamily="serif">∑</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">Δ</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">θ</text>
    </svg>,
    
    // Science symbols
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontFamily="serif">H₂O</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontFamily="serif">E=mc²</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">α</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">β</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontFamily="serif">F=ma</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">λ</text>
    </svg>,
    
    // Additional math symbols
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="50" fontFamily="serif">√</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">∂</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontFamily="serif">a²+b²=c²</text>
    </svg>,
    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white/10">
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="45" fontFamily="serif">φ</text>
    </svg>
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Floating mathematical and scientific symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {symbols.map((symbol, index) => {
          // Random positions and animations
          const left = `${Math.random() * 100}%`;
          const animationDelay = `${Math.random() * 20}s`;
          const animationDuration = `${15 + Math.random() * 20}s`;
          const opacity = 0.03 + Math.random() * 0.07;
          const scale = 0.5 + Math.random() * 1;
          
          return (
            <div
              key={index}
              className="absolute animate-float-symbol"
              style={{
                left,
                top: `${Math.random() * 120 - 10}%`,
                animationDelay,
                animationDuration,
                opacity,
                transform: `scale(${scale})`,
              }}
            >
              {symbol}
            </div>
          );
        })}
        
        {/* Additional smaller floating dots for background texture */}
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={`dot-${index}`}
            className="absolute w-2 h-2 bg-white/5 rounded-full animate-float-symbol"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 120 - 10}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${20 + Math.random() * 25}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Enhanced foreground content */}
      <div className={`relative text-center max-w-4xl px-4 sm:px-6 z-20 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-300 urbanist-600 text-sm">Trusted Since 1989</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white urbanist-700 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            35+ Years
          </span>
          <br />
          <span className="text-transparent bg-gradient-to-r from-green-300 to-green-100 bg-clip-text">
            of Excellence
          </span>
        </h1>

        {/* Enhanced description */}
        <p className="text-lg sm:text-xl text-gray-300 urbanist-400 leading-relaxed mb-8 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
          Empowering students to achieve their highest potential through
          <span className="text-green-300 urbanist-600"> personalized learning </span>
          and expert guidance. Join a legacy of academic success and 
          <span className="text-green-300 urbanist-600"> transformative education</span>.
        </p>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 urbanist-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Explore Programs
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          
          <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:scale-105 urbanist-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Admissions Info
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats */}
       
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Section1;