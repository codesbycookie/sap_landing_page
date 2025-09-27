import React, { useState, useRef, useEffect } from 'react'

export default function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const carouselRef = useRef(null)
  const modalRef = useRef(null)

  const blogs = [
    {
      id: 1,
      title: "We Got the Best Air Conditioned Class room",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente adipisci veniam facere iure, corporis expedita deleniti ex laboriosam quidem deserunt.",
      fullContent: `
        <p>We are thrilled to announce that our institution has recently upgraded all classrooms with state-of-the-art air conditioning systems. This significant investment ensures that our students can learn in optimal comfort throughout the year, regardless of external weather conditions.</p>
        
        <h3>Key Features of Our New AC Systems:</h3>
        <ul>
          <li>Energy-efficient inverter technology</li>
          <li>Silent operation for uninterrupted learning</li>
          <li>Air purification filters for better health</li>
          <li>Smart temperature control systems</li>
          <li>Remote monitoring and maintenance</li>
        </ul>

        <p>The new systems maintain a consistent temperature of 22-24°C, which research shows is ideal for concentration and learning. Our students have already reported improved focus and productivity during long study sessions.</p>

        <p>This upgrade is part of our ongoing commitment to providing the best learning environment for our students. We believe that physical comfort directly contributes to academic success, and we're dedicated to creating spaces where students can thrive.</p>

        <blockquote>
          "The new air conditioning has made a huge difference in our classroom environment. Students are more engaged and comfortable during lectures."
          <cite>- Dr. Sarah Johnson, Head of Science Department</cite>
        </blockquote>
      `,
      image: "/Gallery-1.jpg",
      category: "Campus Life",
      date: "March 15, 2024",
      author: "Admin Office",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "New Science Lab Equipment Arrived",
      description: "Our science department has been upgraded with state-of-the-art equipment for better practical learning experiences.",
      fullContent: `
        <p>Our science laboratories have received a major upgrade with the arrival of cutting-edge equipment that will revolutionize practical learning experiences for our students.</p>
        
        <h3>New Equipment Includes:</h3>
        <ul>
          <li>Advanced microscopes with digital imaging</li>
          <li>Modern chemistry analyzers</li>
          <li>Physics experiment kits</li>
          <li>Biology specimen collection</li>
          <li>Environmental science monitoring tools</li>
        </ul>

        <p>The new equipment allows students to conduct experiments that were previously only possible in university-level laboratories. This hands-on experience will better prepare them for higher education and scientific careers.</p>
      `,
      image: "/Gallery-2.jpg",
      category: "Facilities",
      date: "March 12, 2024",
      author: "Science Department",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Annual Sports Day Highlights",
      description: "Students showcased their athletic talents in our recent sports day event with record-breaking performances.",
      fullContent: `
        <p>Our annual sports day was a tremendous success, with students breaking several school records and demonstrating exceptional sportsmanship throughout the event.</p>
        
        <h3>Event Highlights:</h3>
        <ul>
          <li>100m dash record broken by John Smith</li>
          <li>Girls' basketball team championship</li>
          <li>Teacher vs student cricket match</li>
          <li>Special Olympics events</li>
        </ul>
      `,
      image: "/Gallery-3.jpg",
      category: "Events",
      date: "March 10, 2024",
      author: "Sports Committee",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "Scholarship Program Announcement",
      description: "New scholarship opportunities available for meritorious students applying for the next academic year.",
      fullContent: `
        <p>We are pleased to announce new scholarship opportunities for deserving students for the upcoming academic year.</p>
        
        <h3>Available Scholarships:</h3>
        <ul>
          <li>Merit-based scholarships</li>
          <li>Sports scholarships</li>
          <li>Arts and culture scholarships</li>
        </ul>
      `,
      image: "/Gallery-1.jpg",
      category: "Admissions",
      date: "March 8, 2024",
      author: "Admissions Office",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Teacher Training Workshop",
      description: "Our faculty participated in an intensive training workshop to enhance teaching methodologies.",
      fullContent: `
        <p>Our teaching staff recently completed an intensive professional development workshop focused on modern teaching methodologies.</p>
        
        <h3>Workshop Topics Covered:</h3>
        <ul>
          <li>Interactive teaching techniques</li>
          <li>Digital classroom management</li>
          <li>Student engagement strategies</li>
        </ul>
      `,
      image: "/Gallery-2.jpg",
      category: "Faculty",
      date: "March 5, 2024",
      author: "HR Department",
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "Library Digitalization Complete",
      description: "Our library is now fully digitalized with access to thousands of e-books and online resources.",
      fullContent: `
        <p>Our library transformation is complete, offering students digital access to thousands of resources.</p>
        
        <h3>New Digital Features:</h3>
        <ul>
          <li>Online book reservation system</li>
          <li>E-book access from home</li>
          <li>Digital research databases</li>
        </ul>
      `,
      image: "/Gallery-3.jpg",
      category: "Resources",
      date: "March 1, 2024",
      author: "Library Department",
      readTime: "4 min read"
    }
  ]

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < blogs.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  const openModal = (blog) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBlog(null)
    document.body.style.overflow = 'auto' // Re-enable scrolling
  }

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal()
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isModalOpen])

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch support
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Auto scroll to current index
  useEffect(() => {
    if (carouselRef.current && !isModalOpen) {
      const card = carouselRef.current.querySelector('.blog-card')
      if (card) {
        const cardWidth = card.offsetWidth + 16
        carouselRef.current.scrollTo({
          left: currentIndex * cardWidth,
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex, isModalOpen])

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col gap-3 h-full justify-center items-center mt-3 p-3 lg:mt-10 mb-6 lg:mb-8">
        <p className='text-base lg:text-lg text-gray-400 font-light tracking-wide text-center'>Follow our path</p>
        <h1 className='text-3xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent pb-2 text-center'>
          Our Blogs
        </h1>
        <p className='text-sm lg:text-lg text-gray-400 text-center max-w-2xl leading-relaxed px-4'>
          Expert insights, study tips, and educational content from our faculty
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Navigation Arrows - Hidden on mobile, visible on md+ */}
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`hidden md:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 lg:p-3 transition-all duration-200 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          disabled={currentIndex === blogs.length - 1}
          className={`hidden md:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 lg:p-3 transition-all duration-200 ${
            currentIndex === blogs.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center gap-4 mb-4 md:hidden">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`bg-green-500 text-white rounded-full p-2 transition-all duration-200 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === blogs.length - 1}
            className={`bg-green-500 text-white rounded-full p-2 transition-all duration-200 ${
              currentIndex === blogs.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="flex gap-4 lg:gap-6 w-max py-2 px-2 lg:py-4 lg:px-2">
            {blogs.map((blog, index) => (
              <div 
                key={blog.id}
                className="blog-card flex flex-col gap-3 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[280px] sm:max-w-[300px] md:max-w-sm bg-white rounded-xl lg:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="rounded-t-xl lg:rounded-t-2xl w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-300 hover:scale-105" 
                  />
                  <div className="absolute top-2 left-2 lg:top-4 lg:left-4">
                    <span className="bg-green-500 text-white px-2 py-1 text-xs lg:text-sm font-medium rounded">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs lg:text-sm">
                    {blog.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-6 flex flex-col gap-3 lg:gap-4 flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-2 lg:line-clamp-3 flex-grow">
                    {blog.description}
                  </p>
                  <button 
                    onClick={() => openModal(blog)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 lg:py-3 px-3 lg:px-4 rounded-lg lg:rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm lg:text-base shadow hover:shadow-lg"
                  >
                    Read More
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 inline-block ml-1 lg:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-4 lg:mt-8">
          {blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-green-500 w-6 lg:w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-3 lg:mt-4 max-w-md mx-auto">
          <div 
            className="bg-green-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / blogs.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Blog Detail Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-300">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl lg:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform scale-95 animate-scaleIn"
          >
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-48 lg:h-64 object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedBlog.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 lg:p-8 overflow-y-auto max-h-[60vh]">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>{selectedBlog.author}</span>
                <span>•</span>
                <span>{selectedBlog.readTime}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                {selectedBlog.title}
              </h2>

              <div 
                className="prose prose-lg max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
              />
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 lg:p-8 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedBlog.author}</p>
                    <p className="text-sm text-gray-500">Author</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .prose ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.5rem 0 1rem 0;
          color: #1f2937;
        }
        .prose blockquote {
          border-left: 4px solid #10b981;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #6b7280;
        }
        .prose blockquote cite {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.875rem;
          color: #9ca3af;
          font-style: normal;
        }
      `}</style>
    </>
  )
}