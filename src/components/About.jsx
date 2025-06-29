// "use client";

// import React from 'react';
// import { Download } from 'lucide-react';
// import Orb from './Orb'; // Make sure this path is correct based on your folder structure

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             About Me
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
//                 Passionate Frontend Developer
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                 With over 1+ years of experience in frontend development, I specialize in creating
//                 engaging user interfaces and seamless user experiences. My journey started with a
//                 curiosity about how websites work, and it has evolved into a passion for crafting
//                 digital solutions that make a difference.
//               </p>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                 I believe in writing clean, maintainable code and staying up-to-date with the latest
//                 technologies and best practices in web development. When I'm not coding, you can find
//                 me exploring new design trends or contributing to open-source projects.
//               </p>
//               <div className="flex gap-4">
//                 <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                   <Download className="w-4 h-4" />
//                   Download CV
//                 </button>
//               </div>
//             </div>

//             {/* Right Section with Orb and Image */}
//             <div className="space-y-8">
//               <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
//                 <div className="flex justify-center">
//                   <div className="relative w-64 h-64 rounded-full overflow-hidden">
//                     {/* Orb Background */}
//                     <div className="absolute inset-0 z-0">
//                       <Orb
//                         hoverIntensity={0.5}
//                         rotateOnHover={true}
//                         hue={0}
//                         forceHoverState={false}
//                       />
//                     </div>

//                     {/* Profile Image */}
//                     <img
//                       src="/linkedin4.jpg"
//                       alt="Danyal Shah - Frontend Developer"
//                       className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* End of Right Section */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client"

import React from 'react';
import { useState } from "react"
import { Download } from "lucide-react"
import Orb from "./Orb" // Make sure to import your Orb component

const About = () => {
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Passionate Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 1+ years of experience in frontend development, I specialize in creating engaging user
                interfaces and seamless user experiences. My journey started with a curiosity about how websites work,
                and it has evolved into a passion for crafting digital solutions that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and
                best practices in web development. When I'm not coding, you can find me exploring new design trends or
                contributing to open-source projects.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white"></h4>
                <div className="flex justify-center relative">
                  {/* Orb Background Container */}
                  <div className="relative w-80 h-80">
                    {/* Orb Component as Background */}
                    <div className="absolute inset-0 w-full h-full">
                      <Orb
                        hoverIntensity={0}
                        rotateOnHover={false}
                        hue={220} // Blue hue to match your theme
                        forceHoverState={false}
                      />
                    </div>
                    {/* Image Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/linkedin4.jpg"
                        alt="Danyal Shah - Frontend Developer"
                        className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700 relative z-10 transition-all duration-500 ease-in-out cursor-pointer"
                        style={{
                          width: isImageHovered ? "320px" : "192px",
                          height: isImageHovered ? "320px" : "192px",
                        }}
                        onMouseEnter={() => setIsImageHovered(true)}
                        onMouseLeave={() => setIsImageHovered(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About