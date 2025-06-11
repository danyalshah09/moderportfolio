

import React from 'react';
import { Briefcase } from 'lucide-react';
// Experience Section Component
const Experience = () => {
  const experiences = [
   {
      title: 'Frontend Developer',
      company: 'Design Bytes International - Gilgit',
      period: '2023 - 2024',
      description: 'Developed responsive websites and web applications for various clients.'
    },
    {
      title: 'Frontend Developer',
      company: 'Uconnect Technologies - Gilgit',
      period: '2023 - 2023',
      description: 'Started career building user interfaces and learning modern web technologies.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-8">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg ml-8 md:ml-0">
                      <div className="flex items-center mb-2">
                        <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;