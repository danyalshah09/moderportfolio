import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const totalSlides = Math.ceil(certifications.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-600 to-stone-600 bg-clip-text text-transparent">
            Certifications
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {certifications.slice(slideIndex * 2, slideIndex * 2 + 2).map((cert, certIndex) => (
                      <div key={certIndex} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-stone-600 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                {cert.title}
                              </h3>
                              <p className="text-stone-900 dark:text-blue-400 font-medium text-sm">
                                {cert.issuer}
                              </p>
                            </div>
                          </div>
                          <div className="text-2xl">{cert.badge}</div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{cert.date}</span>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-4">
                            {cert.description}
                          </p>
                        </div>

                        <a
                          href={cert.verifyUrl}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Verify Certificate
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-stone-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;