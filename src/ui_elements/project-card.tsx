import React from "react"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    image: string
    technologies: string[]
  }
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const imageRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    if (!imageRef.current || !titleRef.current) return;
    // Initial animation for image and title when the card mounts
    gsap.set([imageRef.current, titleRef.current], { opacity: 0, y: 20 });

    const imgTween = gsap.to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.1, // Slight delay for image
    });

    const titleTween = gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.2, // Slight delay for title after image
    });

    return () => {
      imgTween.kill();
      titleTween.kill();
    };
  }, []);

  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={onClick}
      className={
        [
          "relative group cursor-pointer rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-all duration-300",
          "bg-stone-800/60 border border-stone-700/50 hover:border-stone-600/80",
          "transform hover:scale-[1.02] hover:shadow-xl"
        ].join(" ")
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden">
        <img
          ref={imageRef}
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105 rounded-lg w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h3
          ref={titleRef}
          className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-base sm:text-lg lg:text-xl font-bold text-white z-10 pr-2"
        >
          {project.title}
        </h3>
      </div>

      {/* Tech Stack Overlay - slides up on hover */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isHovered ? "0%" : "100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm flex flex-col justify-end p-2 sm:p-4 z-20"
      >
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-stone-700 text-stone-200 text-xs sm:text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}