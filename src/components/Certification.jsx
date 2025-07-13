import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'February 15, 2024',
      description: 'Advanced React concepts including hooks, context, and performance optimization.',
      badge: '🏆',
      verifyUrl: 'https://coursera.org/share/7808da01de7415130ffb6a35468b26cd'
    },
    {
      title: 'Responsive Design',
      issuer: 'freeCodeCamp',
      date: 'August 03, 2024',
      description: 'Complete frontend development course covering HTML, CSS, and JavaScript.',
      badge: '⭐',
      verifyUrl: 'https://www.freecodecamp.org/certification/DanyalShah/responsive-web-design'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'January 25, 2025',
      description: 'Comprehensive JavaScript fundamentals and problem-solving techniques.',
      badge: '🎯',
      verifyUrl: 'https://www.freecodecamp.org/certification/DanyalShah/javascript-algorithms-and-data-structures-v8'
    },
    {
      title: 'Foundations of User Experience Design',
      issuer: 'Coursera',
      date: 'December 01, 2022',
      description: 'Modern responsive design techniques and CSS frameworks.',
      badge: '⭐',
      verifyUrl: 'https://coursera.org/share/2830ef0613c6e34eaca0abeb4d380643'
    },
    {
      title: 'Version Control',
      issuer: 'Coursera',
      date: 'November 17, 2023',
      description: 'Version control, collaboration, and advanced Git workflows.',
      badge: '🔧',
      verifyUrl: 'https://coursera.org/share/243536929ae03e1a63b38cbe5c5699c8'
    }
  ];

  const totalSlides = certifications.length;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-stone-600 to-stone-600 bg-clip-text text-transparent">
            Certifications
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div
              className="overflow-hidden rounded-2xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {certifications.map((cert, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 mx-auto max-w-md sm:max-w-lg lg:max-w-xl">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-600 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1 leading-tight">
                              {cert.title}
                            </h3>
                            <p className="text-stone-900 dark:text-blue-400 font-medium text-sm sm:text-base">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <div className="text-2xl sm:text-3xl flex-shrink-0 ml-2">{cert.badge}</div>
                      </div>

                      {/* Content */}
                      <div className="mb-4 sm:mb-6">
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          <span>{cert.date}</span>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                          {cert.description}
                        </p>
                      </div>

                      {/* Verify Link */}
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm sm:text-base font-medium"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        Verify Certificate
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Visible on all screens */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 sm:-translate-x-4 lg:-translate-x-6 w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700 z-10"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 sm:translate-x-4 lg:translate-x-6 w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700 z-10"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-stone-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons - Removed since arrows are now always visible */}

          {/* Progress Bar */}
          <div className="mt-4 sm:mt-6 max-w-xs mx-auto">
            <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
              {currentSlide + 1} of {totalSlides}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div
                className="bg-stone-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-slide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;