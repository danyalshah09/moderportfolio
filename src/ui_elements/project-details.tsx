"use client"

import React from "react";
import { motion } from "framer-motion"
import { ExternalLink, Github, X, Code, AlertTriangle, Target, Lightbulb } from "lucide-react"

interface ProjectDetailsProps {
  project: {
    id: number
    title: string
    image: string
    problem: string
    approach: string
    difficulties: string[]
    technologies: string[]
    features: string[]
    liveUrl: string
    githubUrl: string
  }
  onClose: () => void
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        layoutId={`project-card-${project.id}`}
        className="relative bg-stone-900 rounded-xl p-6 shadow-2xl border border-stone-700/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-stone-700/70 text-white rounded-full hover:bg-stone-600/70 transition-colors z-20"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white z-10">{project.title}</h3>
        </div>

        <div className="space-y-6">
          {/* Problem */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-stone-400" />
              <h4 className="text-lg font-semibold text-stone-100">Problem</h4>
            </div>
            <p className="text-stone-300 leading-relaxed">{project.problem}</p>
          </div>
          {/* Approach */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-stone-400" />
              <h4 className="text-lg font-semibold text-stone-100">My Approach</h4>
            </div>
            <p className="text-stone-300 leading-relaxed">{project.approach}</p>
          </div>
          {/* Difficulties */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-stone-400" />
              <h4 className="text-lg font-semibold text-stone-100">Challenges Faced</h4>
            </div>
            <ul className="space-y-2">
              {project.difficulties.map((difficulty, idx) => (
                <li key={idx} className="text-stone-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-stone-500 rounded-full mt-2 flex-shrink-0"></span>
                  {difficulty}
                </li>
              ))}
            </ul>
          </div>
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-5 h-5 text-stone-400" />
              <h4 className="text-lg font-semibold text-stone-100">Tech Stack</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-2 bg-stone-700 text-stone-200 rounded-lg font-medium text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Key Features */}
          <div>
            <h4 className="text-lg font-semibold text-stone-100 mb-3">Key Features</h4>
            <div className="grid grid-cols-1 gap-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-stone-300">
                  <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-stone-700">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors flex-1 justify-center"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-800 transition-colors flex-1 justify-center"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
