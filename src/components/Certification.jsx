import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Layout, GitBranch, Palette } from "lucide-react";

const certifications = [
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "February 15, 2024",
    icon: <Code2 className="w-6 h-6 text-gray-300" />,
    verifyUrl:
      "https://coursera.org/share/7808da01de7415130ffb6a35468b26cd",
  },
  {
    title: "Responsive Design",
    issuer: "freeCodeCamp",
    date: "August 03, 2024",
    icon: <Layout className="w-6 h-6 text-gray-300" />,
    verifyUrl:
      "https://www.freecodecamp.org/certification/DanyalShah/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "January 25, 2025",
    icon: <Award className="w-6 h-6 text-gray-300" />,
    verifyUrl:
      "https://www.freecodecamp.org/certification/DanyalShah/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Foundations of User Experience Design",
    issuer: "Coursera",
    date: "December 01, 2022",
    icon: <Palette className="w-6 h-6 text-gray-300" />,
    verifyUrl:
      "https://coursera.org/share/2830ef0613c6e34eaca0abeb4d380643",
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    date: "November 17, 2023",
    icon: <GitBranch className="w-6 h-6 text-gray-300" />,
    verifyUrl:
      "https://coursera.org/share/243536929ae03e1a63b38cbe5c5699c8",
  },
  {
    title: "Nextjs Dashboard",
    issuer: "Vercel",
    date: "August 16, 2025",
    icon: <GitBranch className="w-6 h-6 text-gray-300" />,
    verifyUrl:
      "https://nextjs.org/learn/certificate?course=dashboard-app&user=85211&certId=dashboard-app-85211-1755319569644",
  }
];

export default function Certification() {
  return (
    <div className=" dark:bg-neutral-950 px-8">
      <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
        My Certifications
      </h2>

      {/* 3 Column Grid for medium+ screens */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-neutral-900 border text-white border-neutral-800
                       hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                       transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {cert.icon}
              <h3 className="text-lg font-semibold">{cert.title}</h3>
            </div>
            <p className="text-sm text-gray-200">
              {cert.issuer} • {cert.date}
            </p>
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-500"
            >
              Verify →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Mobile: only titles as clickable links */}
      <div className="sm:hidden flex flex-col gap-4 max-w-md mx-auto">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-400 hover:text-blue-500 underline"
          >
            {cert.title}
          </a>
        ))}
      </div>
    </div>
  );
}
