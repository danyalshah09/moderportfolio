"use client"

import React,{ useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SpotlightCard from "../ui_elements/spotlight-card"
import { Code, Database, Brain, Globe } from "lucide-react"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef([])

  const skills = [
    {
      icon: <Code className="w-8 h-8 text-stone-300" />,
      title: "Frontend Development",
      description: "Building modern, responsive web applications with cutting-edge technologies.",
      features: ["React & Next.js", "JavaScript ES6+", "TypeScript", "Tailwind CSS"],
      spotlightColor: "rgba(120, 113, 108, 0.3)", // Stone-500 based
      hoverColor: "stone",
    },
    {
      icon: <Database className="w-8 h-8 text-stone-300" />,
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs with modern frameworks.",
      features: ["Node.js & Express", "Python & Django", "PostgreSQL & MongoDB", "REST & GraphQL"],
      spotlightColor: "rgba(120, 113, 108, 0.3)", // Stone-500 based
      hoverColor: "stone",
    },
    {
      icon: <Brain className="w-8 h-8 text-stone-300" />,
      title: "AI & Machine Learning",
      description: "Implementing intelligent solutions using machine learning and AI technologies.",
      features: ["Python & TensorFlow", "Model Training", "NLP & Computer Vision", "AI Integration"],
      spotlightColor: "rgba(120, 113, 108, 0.3)", // Stone-500 based
      hoverColor: "stone",
    },
    {
      icon: <Globe className="w-8 h-8 text-stone-300" />,
      title: "Web Optimization",
      description: "Optimizing web applications for performance, SEO, and accessibility.",
      features: ["Core Web Vitals", "SEO Best Practices", "Accessibility Standards", "Performance Tuning"],
      spotlightColor: "rgba(120, 113, 108, 0.3)", // Stone-500 based
      hoverColor: "stone",
    },
  ]

  useEffect(() => {
    // Kill any existing ScrollTriggers first
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // Set initial states - elements start from below and invisible
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 60,
    })
    gsap.set(cardsRef.current, {
      opacity: 0,
      y: 80,
      scale: 0.9,
    })

    // Create main timeline for coordinated animations
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Start when section is 80% in viewport
        end: "top 20%", // End when section is 20% in viewport
        scrub: false, // Don't scrub, just trigger once
        once: false, // Allow re-triggering
        toggleActions: "play none none reset", // play on enter, reset on leave back
      },
    })

    // Add animations to timeline with staggered delays
    mainTimeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .to(
        cardsRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
        },
        "-=0.4",
      )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Card hover animation
  const handleCardHover = (cardRef, isHovering) => {
    if (isHovering) {
      gsap.to(cardRef, {
        scale: 1.02,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(cardRef, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Main content container with unique and catchy background */}
        <div className="max-w-6xl mx-auto relative">
          {/* Outer shadow container for the floating effect */}
          <div
            className="relative"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15))",
            }}
          >
            {/* Unique background styling */}
            <div
              className="relative p-8 lg:p-12 transform transition-transform duration-300 ease-out"

            >
              {/* Content wrapper */}
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <h2 ref={titleRef} className="text-4xl font-bold text-center mb-4 text-stone-600 drop-shadow-lg">
                    Services
                  </h2>
                  <p
                    ref={subtitleRef}
                    className="text-lg text-stone-800 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
                  >
                    A comprehensive overview of my technical capabilities and the tools I master to build impactful
                    digital solutions.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      ref={(el) => (cardsRef.current[index] = el)}
                      onMouseEnter={() => handleCardHover(cardsRef.current[index], true)}
                      onMouseLeave={() => handleCardHover(cardsRef.current[index], false)}
                    >
                      <SpotlightCard className="group cursor-pointer h-full" spotlightColor={skill.spotlightColor}>
                        <div className="p-8 h-full flex flex-col bg-stone-800/60 backdrop-blur-sm rounded-lg transition-all duration-500 relative overflow-hidden border border-stone-700/50">
                          {/* Expanding background circle on hover */}
                          <div
                            className={`absolute inset-0 rounded-lg transition-all duration-700 ease-out scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-10`}
                            style={{
                              background:
                                skill.hoverColor === "stone"
                                  ? "rgba(120, 113, 108, 0.5)" // Stone-500 with opacity
                                  : "transparent", // Fallback, though all should be stone now
                            }}
                          />
                          <div className="flex items-center mb-6 relative z-10">
                            <div className="icon-container p-3 rounded-lg bg-stone-700/50 border border-stone-600/50 mr-4 relative transition-all duration-300 overflow-hidden backdrop-blur-sm">
                              {/* Light colored circle behind icon */}
                              <div
                                className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-[20] group-hover:opacity-20"
                                style={{
                                  background: "rgba(255, 255, 255, 0.2)", // White for a subtle glow
                                }}
                              />
                              <div className="relative z-10">{skill.icon}</div>
                            </div>
                            <h3 className="text-2xl font-semibold text-stone-100 relative z-10 drop-shadow-sm">
                              {skill.title}
                            </h3>
                          </div>
                          <p className="text-stone-300 mb-6 leading-relaxed relative z-10 drop-shadow-sm">
                            {skill.description}
                          </p>
                          <ul className="space-y-3 flex-grow relative z-10">
                            {skill.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-stone-300">
                                <span
                                  className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 transition-colors duration-300 bg-stone-400 group-hover:bg-stone-300`}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SpotlightCard>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
