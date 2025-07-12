"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Download } from "lucide-react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Orb from "../ui_elements/Orb" // Make sure to import your Orb component

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isImageHovered, setIsImageHovered] = useState(false)

  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textContentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const orbRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Kill any existing ScrollTriggers first
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial states - elements start from below and invisible
    gsap.set([titleRef.current, textContentRef.current, imageContainerRef.current], {
      opacity: 0,
      y: 60
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.9
    });

    gsap.set(orbRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 30
    });

    gsap.set(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 20
    });

    // Create main timeline for coordinated animations
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start when section is 80% in viewport
        end: "top 20%",   // End when section is 20% in viewport
        scrub: false,     // Don't scrub, just trigger once
        once: false,      // Allow re-triggering
        toggleActions: "play none none reset" // play on enter, reset on leave back
      }
    });

    // Add animations to timeline with staggered delays
    mainTimeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .to(textContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .to(imageContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(orbRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.6")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.8")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");

    // Continuous floating animation for orb (starts after main animation)
    let floatingTween = gsap.to(orbRef.current, {
      y: -8,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2.5
    });

    // Continuous rotation animation for orb
    let rotationTween = gsap.to(orbRef.current, {
      rotation: "+=360",
      duration: 25,
      ease: "none",
      repeat: -1,
      delay: 2.5
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (floatingTween) floatingTween.kill();
      if (rotationTween) rotationTween.kill();
    };
  }, []);

  // Enhanced image hover animations
  const handleImageHover = (isHovering) => {
    setIsImageHovered(isHovering);

    if (isHovering) {
      gsap.to(imageRef.current, {
        scale: 1.67, // 320px / 192px ratio
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(orbRef.current, {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(orbRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  // Button hover animation
  const handleButtonHover = (isHovering) => {
    if (isHovering) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(buttonRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-center mb-16 bg-stone-600 bg-clip-text text-transparent"
          >
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={textContentRef} className="space-y-6">
              <h3 className="text-2xl font-semibold text-stone-600 dark:text-white">
                Passionate Frontend Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 1+ years of experience in frontend development, I specialize in creating engaging user
                interfaces and seamless user experiences. My journey started with a curiosity about how websites work,
                and it has evolved into a passion for crafting digital solutions that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and
                best practices in web development. When I'm not coding, you can find me exploring new design trends or
                contributing to open-source projects.
              </p>
              <div className="flex gap-4">
                <button
                  ref={buttonRef}
                  className="flex items-center gap-2 px-6 py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                  onMouseEnter={() => handleButtonHover(true)}
                  onMouseLeave={() => handleButtonHover(false)}
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>

            <div ref={imageContainerRef} className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white"></h4>
                <div className="flex justify-center relative">
                  {/* Orb Background Container */}
                  <div className="relative w-80 h-80">
                    {/* Orb Component as Background */}
                    <div ref={orbRef} className="absolute inset-0 w-full h-full">
                      <Orb
                        hoverIntensity={0}
                        rotateOnHover={false}
                        hue={220} // Blue hue to match your theme
                        forceHoverState={false}
                      />
                    </div>
                    {/* Image Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        ref={imageRef}
                        src="/linkedin4.jpg"
                        alt="Danyal Shah - Frontend Developer"
                        className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700 relative z-10 transition-all duration-500 ease-in-out cursor-pointer"
                        style={{
                          width: "192px",
                          height: "192px",
                        }}
                        onMouseEnter={() => handleImageHover(true)}
                        onMouseLeave={() => handleImageHover(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About