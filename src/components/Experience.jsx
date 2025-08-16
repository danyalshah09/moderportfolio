

// import React from 'react';
// import { Briefcase } from 'lucide-react';
// // Experience Section Component
// const Experience = () => {
//   const experiences = [
//    {
//       title: 'Frontend Developer',
//       company: 'Design Bytes International - Gilgit',
//       period: '2023 - 2024',
//       description: 'Developed responsive websites and web applications for various clients.'
//     },
//     {
//       title: 'Frontend Developer',
//       company: 'Uconnect Technologies - Gilgit',
//       period: '2023 - 2023',
//       description: 'Started career building user interfaces and learning modern web technologies.'
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Experience
//           </h2>

//           <div className="relative">
//             <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600"></div>

//             {experiences.map((exp, index) => (
//               <div key={index} className="relative mb-12 md:mb-8">
//                 <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                   <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
//                     <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg ml-8 md:ml-0">
//                       <div className="flex items-center mb-2">
//                         <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
//                         <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{exp.period}</span>
//                       </div>
//                       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
//                         {exp.title}
//                       </h3>
//                       <h4 className="text-blue-600 dark:text-blue-400 mb-3">{exp.company}</h4>
//                       <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                         {exp.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                     <div className="w-4 h-4 bg-white rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Experience;
import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Experience Section Component
const Experience = () => {
  const timelineRef = useRef(null);
  const experienceRef = useRef(null);
  const circlesRef = useRef([]);
  const cardsRef = useRef([]);

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

  useEffect(() => {
    const timeline = timelineRef.current;
    const circles = circlesRef.current;
    const cards = cardsRef.current;

    if (!timeline || circles.length === 0 || cards.length === 0) return;

    // Set initial states
    gsap.set(timeline, { scaleY: 0, transformOrigin: 'top' });
    gsap.set(circles, { scale: 0, opacity: 0 });
    gsap.set(cards, { opacity: 0, y: 50 });

    // Create master timeline that controls the sequential animation
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: 'top 70%',
        end: 'center center',
        scrub: 1, // This makes it follow scroll position
      }
    });

    // Calculate the height for each segment of the timeline
    const segmentHeight = 1 / experiences.length;

    // Animate each segment sequentially
    circles.forEach((circle, index) => {
      if (circle && cards[index]) {
        const startProgress = index * segmentHeight;
        const endProgress = (index + 1) * segmentHeight;

        // Add timeline segment animation
        masterTl.to(timeline, {
          scaleY: endProgress,
          duration: 1,
          ease: 'none'
        }, startProgress * 2) // Reduced from 4 to 2 for faster animation

        // Add circle pop animation when line reaches its position
        .to(circle, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'back.out(2)',
        }, startProgress * 2 + 0.4) // Adjusted timing for faster sequence

        // Add card slide animation
        .to(cards[index], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, startProgress * 2 + 0.5); // Card appears shortly after circle
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Helper function to add refs to arrays
  const addToCirclesRef = (el) => {
    if (el && !circlesRef.current.includes(el)) {
      circlesRef.current.push(el);
    }
  };

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="experience" className="py-20  dark:bg-black" ref={experienceRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-stone-600 to-stone-600 bg-clip-text text-transparent dark:text-white">
            Experiences
          </h2>
          <div className="relative">
            {/* Animated Timeline Line */}
            <div
              ref={timelineRef}
              className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-stone-500"
            ></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-8">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div
                      ref={addToCardsRef}
                      className="bg-white dark:bg-stone-600 p-6 rounded-xl shadow-lg ml-8 md:ml-0 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <Briefcase className="w-5 h-5 text-stone-900 mr-2" />
                        <span className="text-stone-600 dark:text-white text-sm font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-stone-900  italic dark:text-gray-200 mb-3">{exp.company}</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Circle */}
                  <div
                    ref={addToCirclesRef}
                    className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
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