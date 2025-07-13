"use client"

import React from "react";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils" // Uncomment if this file exists

interface ProjectCardProps {
  project: {
    id: number
    title: string
    shortDescription: string
    image: string
    technologies: string[]
  }
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={onClick}
      className={
        "relative group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-stone-800/60 border border-stone-700/50 hover:border-stone-600/80 transform hover:scale-[1.02] hover:shadow-xl"
      }
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10">{project.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-stone-300 text-sm mb-3 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-stone-700 text-stone-200 text-xs rounded-full font-medium">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-stone-700 text-stone-200 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
