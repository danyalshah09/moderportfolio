import SpotlightCard from '../ui_elements/SpotlightCard.jsx';
import React from 'react';
import { Code, Palette, Database, Smartphone, Brain, Globe, Zap, Settings } from 'lucide-react';

// Skills Section Component
const Skills = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with cutting-edge technologies.',
      features: ['React & Next.js', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS'],
      spotlightColor: 'rgba(59, 130, 246, 0.3)' // Blue
    },

    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs with modern frameworks.',
      features: ['Node.js & Express', 'Python & Django', 'PostgreSQL & MongoDB', 'REST & GraphQL'],
      spotlightColor: 'rgba(16, 185, 129, 0.3)' // Green
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      title: 'AI & Machine Learning',
      description: 'Implementing intelligent solutions using machine learning and AI technologies.',
      features: ['Python & TensorFlow', 'Model Training', 'NLP & Computer Vision', 'AI Integration'],
      spotlightColor: 'rgba(245, 158, 11, 0.3)' // Orange
    },

    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Web Optimization',
      description: 'Optimizing web applications for performance, SEO, and accessibility.',
      features: ['Core Web Vitals', 'SEO Best Practices', 'Accessibility Standards', 'Performance Tuning'],
      spotlightColor: 'rgba(6, 182, 212, 0.3)' // Cyan
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SpotlightCard
              key={index}
              className="group cursor-pointer"
              spotlightColor={skill.spotlightColor}
            >
              <div className="p-8 h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className={`icon-container p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 mr-4 relative transition-all duration-300
                    ${index === 0 ? 'group-hover:bg-blue-500/10 group-hover:border-blue-400' : ''}
                    ${index === 1 ? 'group-hover:bg-purple-500/10 group-hover:border-purple-400' : ''}
                    ${index === 2 ? 'group-hover:bg-green-500/10 group-hover:border-green-400' : ''}
                    ${index === 3 ? 'group-hover:bg-orange-500/10 group-hover:border-orange-400' : ''}
                    ${index === 4 ? 'group-hover:bg-pink-500/10 group-hover:border-pink-400' : ''}
                    ${index === 5 ? 'group-hover:bg-cyan-500/10 group-hover:border-cyan-400' : ''}
                    ${index === 6 ? 'group-hover:bg-yellow-500/10 group-hover:border-yellow-400' : ''}
                    ${index === 7 ? 'group-hover:bg-indigo-500/10 group-hover:border-indigo-400' : ''}
                    dark:group-hover:bg-gray-600`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                <ul className="space-y-3 flex-grow">
                  {skill.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;