"use client"

import React,{ useState } from "react"
import { AnimatePresence } from "framer-motion"
import ProjectCard from "../ui_elements/project-card"
import ProjectDetails from "../ui_elements/project-details"

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Passu Tourist Lodge",
      shortDescription: "A comprehensive hotel booking platform for remote mountain tourism",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      technologies: ["React.js", "TailwindCSS", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://passutouristlodge.vercel.app",
      githubUrl: "#",
      problem:
        "Lodges in remote mountainous regions like Passu often lack online visibility and efficient booking systems. Traditional approaches rely heavily on local PR and physical connections, limiting access to global tourists.",
      approach:
        "Designed and developed a fully responsive booking platform featuring real-time availability, mailing integration, and live support. The system follows the MVC architecture and is optimized for environments with unstable internet connectivity.",
      difficulties: [
        "Maintaining usability during intermittent internet connectivity",
        "Implementing a chatbot for real-time tourist inquiries",
        "Delivering a seamless booking flow under limited system resources",
        "Designing a responsive interface compatible across various device types",
      ],
      features: [
        "Email-based Booking Requests",
        "Fully Responsive Design",
        "Integrated Chatbot for Inquiries",
        "Built-in Contact Support System",
      ],
    },
    {
      id: 2,
      title: "Hunza Haus",
      shortDescription: "A modern e-commerce platform showcasing authentic Hunza Valley products",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      technologies: ["React", "Material-UI", "Socket.io"],
      liveUrl: "https://hunza-haus.vercel.app",
      githubUrl: "#",
      problem:
        "Local artisans and businesses in the Hunza Valley lacked an effective digital marketplace to promote and sell their products globally. Traditional sales methods limited reach and scalability.",
      approach:
        "Developed a feature-rich e-commerce platform focused on user experience, with advanced product filtering, real-time chat between buyers and sellers, and responsive layouts optimized for various devices.",
      difficulties: [
        "Implementing secure authentication for user login and registration",
        "Creating responsive and visually appealing product galleries",
        "Building efficient search functionality with multiple filter parameters",
        "Handling and optimizing large volumes of media content",
      ],
      features: [
        "Advanced product filtering",
        "Real-time buyer-seller messaging",
        "Responsive product showcase",
        "Seller dashboard for inventory management",
        "Secure user authentication",
      ],
    },
    {
      id: 3,
      title: "Learning Management System",
      shortDescription: "Complete educational platform with course management",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      technologies: ["React.js", "Tailwind CSS", "Ant Design", "Node.js", "Express", "MySQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      problem:
        "Educational institutions needed a comprehensive platform to manage online courses, track student progress, and facilitate remote learning during the digital transformation.",
      approach:
        "Developed a full-featured LMS with course creation tools, progress tracking, assignment submission, and interactive learning modules with gamification elements.",
      difficulties: [
        "Creating a flexible course builder interface",
        "Implementing secure assignment submission and grading",
        "Building real-time progress tracking system",
        "Ensuring scalability for multiple concurrent users",
      ],
      features: ["Course builder", "Progress analytics", "Assignment system", "Discussion forums", "Mobile responsive"],
    },
    {
      id: 4,
      title: "iNotecloud",
      shortDescription: "Cloud-based note-taking application with collaboration features",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://inotecloud1.vercel.app/",
      githubUrl: "#",
      problem:
        "Users needed a reliable, cross-platform note-taking solution that could sync across devices and support collaborative editing for team projects.",
      approach:
        "Created a cloud-based note application with real-time synchronization, rich text editing, and collaborative features using modern web technologies.",
      difficulties: [
        "Implementing real-time collaborative editing without conflicts",
        "Creating a rich text editor with formatting options",
        "Managing offline/online synchronization",
        "Optimizing performance for large documents",
      ],
      features: ["Real-time collaboration", "Rich text editor", "Cloud sync", "Offline support", "Team workspaces"],
    },
    {
      id: 5,
      title: "Writewise",
      shortDescription: "A full-featured blog management system with admin moderation and social sharing",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      problem:
        "There was a need for a structured blogging platform where users could write, manage, and share content, while admins could moderate and control what gets published.",
      approach:
        "Developed a complete blog management system where users can create, edit, and delete blog posts with tags and keywords. Integrated a workflow where submitted blogs are sent to the admin for review and approval. Added interactive features like likes, comments, social media sharing, and real-time notifications.",
      difficulties: [
        "Implementing role-based functionality for users and admins",
        "Handling blog status workflow (pending, approved, rejected)",
        "Building a full-featured rich text editor with tagging and keyword support",
        "Creating efficient search functionality for tags and keywords",
        "Managing real-time notifications and updates",
      ],
      features: [
        "User blog creation, editing, and deletion",
        "Admin approval and moderation system",
        "Likes, comments, and social media sharing",
        "Search by tags and keywords",
        "Notification system",
        "Admin can post blogs as a user",
      ],
    },
    {
      id: 6,
      title: "SlamIbex",
      shortDescription:
        "A conservation-focused website to promote ethical ibex hunting and support local wildlife efforts.",
      image: "/placeholder.svg?height=400&width=600", // Placeholder image
      technologies: ["Next.js", "Tailwind CSS", "React.js", "Node.js", "Express.js"],
      liveUrl: "#",
      githubUrl: "#",
      problem:
        "The local conservancy committee needed a platform to educate hunters, promote ethical hunting practices, and raise awareness for ibex conservation efforts in the region.",
      approach:
        "Designed and developed a responsive web application that showcases conservation goals, hunting regulations, ibex tracking data, and hunter registration to support community-based conservation.",
      difficulties: [
        "Presenting hunting data in a conservation-friendly manner",
        "Integrating interactive maps to visualize ibex distribution",
        "Communicating both ethical hunting and conservation messaging effectively",
        "Creating a content structure that appeals to both local communities and international hunters",
      ],
      features: [
        "Conservation mission & story",
        "Interactive ibex population maps",
        "Hunter education & registration",
        "Success stories & photo galleries",
        "Mobile-friendly design",
      ],
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-stone-600 drop-shadow-lg">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>

          <AnimatePresence>
            {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
export default Portfolio
