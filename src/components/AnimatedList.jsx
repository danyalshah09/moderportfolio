import React from "react";
import { motion } from "framer-motion";

export default function AnimatedList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ backgroundColor: "gray" }}
          className="p-4 border border-neutral-700 rounded-xl bg-neutral-900 shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{cert.badge}</span>
            <h3 className="text-lg font-semibold">{cert.title}</h3>
          </div>
          <p className="text-sm text-gray-400">
            {cert.issuer} • {cert.date}
          </p>
          <p className="text-sm mt-2 text-gray-300">{cert.description}</p>
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm mt-2 inline-block hover:underline"
          >
            Verify →
          </a>
        </motion.div>
      ))}
    </div>
  );
}
