
import React from 'react';
// Skills Component
const Skills = () => {
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'Next.js', level: 88, color: 'bg-gray-800' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
            <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;