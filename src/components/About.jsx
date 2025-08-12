"use client"

import React, { useState, useEffect, useRef } from "react"
import { Download } from "lucide-react"

// Custom Cursor Component - Refactored for performance and smoothness
const CustomCursor = ({ isActive, size = 40, color = "rgba(255, 255, 255, 0.3)" }) => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${isActive ? 1 : 0})`
      }
    }

    document.addEventListener("mousemove", onMouseMove)
    return () => document.removeEventListener("mousemove", onMouseMove)
  }, [isActive]) // Re-run when isActive changes to update the scale in the transform

  useEffect(() => {
    document.body.style.cursor = isActive ? "none" : "auto"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [isActive])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50"
      style={{
        left: -size / 2,
        top: -size / 2,
        width: size,
        height: size,
        backgroundColor: "transparent",
        borderRadius: "50%",
        backdropFilter: "blur(2px)",
        border: `2px solid ${color}`,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        opacity: isActive ? 1 : 0,
        transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
      }}
    />
  )
}

const About = () => {
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false)

  // Refs for animations
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textContentRef = useRef(null)
  const imageContainerRef = useRef(null)
  const imageRef = useRef(null)
  const buttonRef = useRef(null)
  const mainContainerRef = useRef(null)

  useEffect(() => {
    // Simple CSS-based animation function
    const animateElements = () => {
      const elements = [
        { ref: titleRef, delay: 0 },
        { ref: textContentRef, delay: 200 },
        { ref: imageContainerRef, delay: 400 },
        { ref: imageRef, delay: 500 },
        { ref: buttonRef, delay: 600 }
      ]

      elements.forEach(({ ref, delay }) => {
        if (ref.current) {
          // Reset to initial state first - ALL elements start from bottom
          ref.current.style.opacity = '0'
          ref.current.style.transform = 'translateY(60px)'
          ref.current.style.transition = 'none' // Remove transition temporarily

          // Force reflow to ensure reset is applied
          ref.current.offsetHeight

          // Add transition back
          ref.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'

          // Animate after delay - all slide up from bottom
          setTimeout(() => {
            ref.current.style.opacity = '1'
            ref.current.style.transform = 'translateY(0)'
          }, delay)
        }
      })
    }

    // Intersection Observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElements()
            // Don't unobserve - this allows animation to trigger every time
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Button hover animation
  const handleButtonHover = (isHovering) => {
    if (buttonRef.current) {
      buttonRef.current.style.transition = 'transform 0.3s ease-out'
      buttonRef.current.style.transform = isHovering
        ? 'translateY(-2px) scale(1.05)'
        : 'translateY(0) scale(1)'
    }
  }

  const handleMouseEnterContainer = () => {
    setIsCustomCursorActive(true)
  }

  const handleMouseLeaveContainer = () => {
    setIsCustomCursorActive(false)
  }

  return (
    <>
      {/* Custom Cursor Component */}
      <CustomCursor
        isActive={isCustomCursorActive}
        size={45}
        color="rgba(255, 255, 255, 0.25)"
      />

      <section ref={sectionRef} id="about" className="py-6 sm:py-8 lg:py-10 dark:bg-black system:bg-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
          {/* Main content container with exact 3D styling cloned from the image */}
          <div className="max-w-6xl mx-auto relative">
            {/* Outer shadow container for the floating effect */}
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))",
              }}
            >
              {/* Main 3D container - responsive shadow overlays */}
              <div
                ref={mainContainerRef}
                className="relative p-4 sm:p-6 md:p-8 lg:p-12 transform transition-transform duration-300 ease-out"
                onMouseEnter={handleMouseEnterContainer}
                onMouseLeave={handleMouseLeaveContainer}
                style={{
                  background: `
                    radial-gradient(ellipse at top, #8b7f75 0%, #78716c 30%),
                    linear-gradient(135deg,
                      #a8a29e 0%,
                      #78716c 15%,
                      #6b6560 25%,
                      #57534e 40%,
                      #44403c 55%,
                      #57534e 70%,
                      #6b6560 85%,
                      #78716c 100%
                    )
                  `,
                  borderRadius: "1.5rem",
                  boxShadow: `
                    inset 0 1px 2px rgba(255, 255, 255, 0.2),
                    inset 0 -4px 8px rgba(0, 0, 0, 0.15),
                    inset 1px 0 2px rgba(255, 255, 255, 0.05),
                    inset -1px 0 2px rgba(0, 0, 0, 0.05)
                  `,
                  border: "1px solid rgba(168, 162, 158, 0.3)",
                }}
              >
                {/* Top glossy highlight - responsive */}
                <div
                  className="absolute inset-x-0 top-0 pointer-events-none"
                  style={{
                    height: "35%",
                    borderRadius: "1.5rem 1.5rem 0 0",
                  }}
                />

                {/* Side highlights for 3D effect - responsive */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
                    borderRadius: "1.5rem 0 0 1.5rem",
                  }}
                />

                <div
                  className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 pointer-events-none"
                  style={{
                    background: "linear-gradient(270deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%)",
                    borderRadius: "0 1.5rem 1.5rem 0",
                  }}
                />

                {/* Bottom shadow for depth - responsive */}
                <div
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{
                    height: "20%",
                    borderRadius: "0 0 1.5rem 1.5rem",
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10">
                  <h2 ref={titleRef} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-white">
                    About Me
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <div ref={textContentRef} className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-100">Frontend Developer</h3>
                      <p className="text-sm sm:text-base text-stone-200 leading-relaxed drop-shadow-sm">
                        With over 1+ years of experience in frontend development, I specialize in creating engaging user
                        interfaces and seamless user experiences. My journey started with a curiosity about how websites
                        work, and it has evolved into a passion for crafting digital solutions that make a difference.
                      </p>
                      <p className="text-sm sm:text-base text-stone-200 leading-relaxed drop-shadow-sm">
                        I believe in writing clean, maintainable code and staying up-to-date with the latest technologies
                        and best practices in web development. When I'm not coding, you can find me exploring new design
                        trends or contributing to open-source projects.
                      </p>
                      <div className="flex gap-4">
                        <button
                          ref={buttonRef}
                          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-stone-800/80 backdrop-blur-sm text-white rounded-lg hover:bg-stone-700/80 transition-colors cursor-pointer shadow-xl border border-stone-600/50 text-sm sm:text-base"
                          onMouseEnter={() => handleButtonHover(true)}
                          onMouseLeave={() => handleButtonHover(false)}
                        >
                          <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                          Download CV
                        </button>
                      </div>
                    </div>

                    <div ref={imageContainerRef} className="space-y-4 sm:space-y-8 order-1 lg:order-2">
                      <div className="p-2 sm:p-4 lg:p-6">
                        <div className="flex justify-center relative">
                          <div className="relative">
                            <img
                              ref={imageRef}
                              src="/linkedin4.jpg"
                              alt="Professional Developer"
                              className="object-cover relative z-10 transition-all duration-500 ease-in-out rounded-lg"
                              style={{
                                width: "280px",
                                height: "320px",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About