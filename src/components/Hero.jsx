import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

// Hero Section Component
const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Frontend Developer', 'React Specialist',"Software Engineer", 'AI Enthusiast','Problem Solver'];

  // Refs for GSAP animations
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const chevronRef = useRef(null);
  const backgroundRef = useRef(null);

  // GSAP animations on component mount
  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current], {
      opacity: 0,
      y: 30
    });

    gsap.set(buttonsRef.current, {
      opacity: 0,
      y: 60 // Start further down for the slide-up effect
    });

    gsap.set(chevronRef.current, {
      opacity: 0,
      y: 20
    });

    gsap.set(backgroundRef.current, {
      opacity: 0,
      scale: 0.8
    });

    // Animate elements in sequence
    tl.to(backgroundRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2")
    .to(chevronRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

    // Add a subtle stagger animation to the buttons
    gsap.fromTo(buttonsRef.current.children,
      {
        opacity: 0,
        y: 40,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 1.8 // Start after the main button container animation
      }
    );

  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setText(currentRole.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br dark:bg-black">
      {/* Animated Background Elements */}
      <div ref={backgroundRef} className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 dark:bg-stone-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300/20 dark:bg-blue-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className=" text-5xl md:text-7xl cursor-pointer font-bold mb-6  bg-stone-600 dark:text-white bg-clip-text text-transparent font-special"
          >
            Hi, I'm Danyal
          </h1>

          <div
            ref={subtitleRef}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12"
          >
            <span className="border-r-2 border-blue-600 animate-pulse pr-2">
              {text}
            </span>
          </div>

          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies.
            Enthusiastic about clean code and innovative solutions.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 cursor-pointer py-4 bg-gradient-to-r from-stone-600  to-stone-400 text-white rounded-full hover:from-stone-700 dark:hover:bg-white hover:to-stone-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              See My Work
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 cursor-pointer py-4 border-2 border-stone-600 text-gray-600 dark:text-white rounded-full hover:bg-stone-300 hover:text-black dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 dark:border-white"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div
        ref={chevronRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;