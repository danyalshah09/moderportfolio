import React from 'react';
import { Code, Palette, Smartphone,Brain, Globe } from 'lucide-react';
// Services Section Component
const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using modern frameworks and libraries.',
      features: ['React Development', 'Next.js Applications', 'JavaScript ES6+', 'TypeScript Integration']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with focus on user experience.',
      features: ['Responsive Design', 'User Interface', 'Prototyping', 'Design Systems']
    },
   {
  icon: <Brain className="w-8 h-8" />, // Make sure you have a suitable Brain or AI-related icon
  title: 'AI Services',
  description: 'Providing end-to-end AI solutions including model training, fine-tuning, and deployment.',
  features: ['Model Training', 'Model Fine-tuning', 'ML Model Deployment', 'Custom AI Solutions']
},
{
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Optimization',
      description: 'Optimizing websites for performance, SEO, and better user experience.',
      features: ['Performance Optimization', 'SEO Implementation', 'Accessibility', 'Core Web Vitals']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;