import React, { useState } from "react";
import { ExternalLink, Github, X, Code, AlertTriangle, Target, Lightbulb } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
   {
  id: 1,
  title: 'Passu Tourist Lodge',
  shortDescription: 'A comprehensive hotel booking platform for remote mountain tourism',
  image: './ptl.PNG', // Actual project screenshot
  technologies: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'Express.js'],
  liveUrl: 'https://passutouristlodge.vercel.app',
  githubUrl: '#',
  problem: 'Lodges in remote mountainous regions like Passu often lack online visibility and efficient booking systems. Traditional approaches rely heavily on local PR and physical connections, limiting access to global tourists.',
  approach: 'Designed and developed a fully responsive booking platform featuring real-time availability, mailing integration, and live support. The system follows the MVC architecture and is optimized for environments with unstable internet connectivity.',
  difficulties: [
    'Maintaining usability during intermittent internet connectivity',
    'Implementing a chatbot for real-time tourist inquiries',
    'Delivering a seamless booking flow under limited system resources',
    'Designing a responsive interface compatible across various device types'
  ],
  features: [
    'Email-based Booking Requests',
    'Fully Responsive Design',
    'Integrated Chatbot for Inquiries',
    'Built-in Contact Support System'
  ]
},
  {
  id: 2,
  title: 'Hunza Haus',
  shortDescription: 'A modern e-commerce platform showcasing authentic Hunza Valley products',
  image: './hunzahaus.PNG', // Actual project screenshot
  technologies: ['React', 'Material-UI', 'Socket.io'],
  liveUrl: 'https://hunza-haus.vercel.app',
  githubUrl: '#',
  problem: 'Local artisans and businesses in the Hunza Valley lacked an effective digital marketplace to promote and sell their products globally. Traditional sales methods limited reach and scalability.',
  approach: 'Developed a feature-rich e-commerce platform focused on user experience, with advanced product filtering, real-time chat between buyers and sellers, and responsive layouts optimized for various devices.',
  difficulties: [
    'Implementing secure authentication for user login and registration',
    'Creating responsive and visually appealing product galleries',
    'Building efficient search functionality with multiple filter parameters',
    'Handling and optimizing large volumes of media content'
  ],
  features: [
    'Advanced product filtering',
    'Real-time buyer-seller messaging',
    'Responsive product showcase',
    'Seller dashboard for inventory management',
    'Secure user authentication'
  ]
},
    {
      id: 3,
      title: 'Learning Management System',
      shortDescription: 'Complete educational platform with course management',
      image: '/lms1.PNG',
      technologies: ['React.js', 'Tailwind CSS', 'Ant Design', 'Node.js','Express', 'MySQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      problem: 'Educational institutions needed a comprehensive platform to manage online courses, track student progress, and facilitate remote learning during the digital transformation.',
      approach: 'Developed a full-featured LMS with course creation tools, progress tracking, assignment submission, and interactive learning modules with gamification elements.',
      difficulties: [
        'Creating a flexible course builder interface',
        'Implementing secure assignment submission and grading',
        'Building real-time progress tracking system',
        'Ensuring scalability for multiple concurrent users'
      ],
      features: ['Course builder', 'Progress analytics', 'Assignment system', 'Discussion forums', 'Mobile responsive']
    },
    {
      id: 4,
      title: 'iNotecloud',
      shortDescription: 'Cloud-based note-taking application with collaboration features',
      image: './inotecloud.PNG', // Your actual project screenshot
      technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://inotecloud1.vercel.app/',
      githubUrl: '#',
      problem: 'Users needed a reliable, cross-platform note-taking solution that could sync across devices and support collaborative editing for team projects.',
      approach: 'Created a cloud-based note application with real-time synchronization, rich text editing, and collaborative features using modern web technologies.',
      difficulties: [
        'Implementing real-time collaborative editing without conflicts',
        'Creating a rich text editor with formatting options',
        'Managing offline/online synchronization',
        'Optimizing performance for large documents'
      ],
      features: ['Real-time collaboration', 'Rich text editor', 'Cloud sync', 'Offline support', 'Team workspaces']
    },
    {
  id: 5,
  title: 'Writewise',
  shortDescription: 'A full-featured blog management system with admin moderation and social sharing',
  image: './blog1.PNG', // Your actual project screenshot
  technologies: ['HTML', 'CSS','JavaScript', 'PHP', 'MySQL' ],
  liveUrl: '#', // Add the actual URL if available
  githubUrl: '#', // Add the actual GitHub repo if available
  problem: 'There was a need for a structured blogging platform where users could write, manage, and share content, while admins could moderate and control what gets published.',
  approach: 'Developed a complete blog management system where users can create, edit, and delete blog posts with tags and keywords. Integrated a workflow where submitted blogs are sent to the admin for review and approval. Added interactive features like likes, comments, social media sharing, and real-time notifications.',
  difficulties: [
    'Implementing role-based functionality for users and admins',
    'Handling blog status workflow (pending, approved, rejected)',
    'Building a full-featured rich text editor with tagging and keyword support',
    'Creating efficient search functionality for tags and keywords',
    'Managing real-time notifications and updates'
  ],
  features: [
    'User blog creation, editing, and deletion',
    'Admin approval and moderation system',
    'Likes, comments, and social media sharing',
    'Search by tags and keywords',
    'Notification system',
    'Admin can post blogs as a user'
  ]
},   {
  id: 6,
  title: 'SlamIbex',
  shortDescription: 'A conservation-focused website to promote ethical ibex hunting and support local wildlife efforts.',
  image: './ibex2.PNG', // Make sure to update with the correct image path
  technologies: ['Next.js', 'Tailwind CSS', 'React.js', 'Node.js', 'Express.js'],
  liveUrl: '#',
  githubUrl: '#',
  problem: 'The local conservancy committee needed a platform to educate hunters, promote ethical hunting practices, and raise awareness for ibex conservation efforts in the region.',
  approach: 'Designed and developed a responsive web application that showcases conservation goals, hunting regulations, ibex tracking data, and hunter registration to support community-based conservation.',
  difficulties: [
    'Presenting hunting data in a conservation-friendly manner',
    'Integrating interactive maps to visualize ibex distribution',
    'Communicating both ethical hunting and conservation messaging effectively',
    'Creating a content structure that appeals to both local communities and international hunters'
  ],
  features: [
    'Conservation mission & story',
    'Interactive ibex population maps',
    'Hunter education & registration',
    'Success stories & photo galleries',
    'Mobile-friendly design'
  ]
}


  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Projects Grid */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedProject?.id === project.id ? 'ring-2 ring-blue-500 scale-[1.02]' : ''
                  }`}
                >
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Details Panel */}
            <div className="lg:sticky lg:top-20 h-fit">
              {selectedProject ? (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-in slide-in-from-right duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors lg:hidden"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-red-500" />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Problem</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">My Approach</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedProject.approach}
                      </p>
                    </div>

                    {/* Difficulties */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500" />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Challenges Faced</h4>
                      </div>
                      <ul className="space-y-2">
                        {selectedProject.difficulties.map((difficulty, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                            {difficulty}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-5 h-5 text-blue-500" />
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={selectedProject.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex-1 justify-center"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                  <div className="text-gray-400 dark:text-gray-500 mb-4">
                    <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Select a Project
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    Click on any project to view detailed information about the problem, approach, and challenges.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;