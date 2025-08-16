import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Code2,
  Zap,
  Layers,
  Server,
  Database,
  Cloud,
  Palette,
  Workflow,
  Globe,
  Terminal,
  Cpu,
  Shield
} from 'lucide-react';

const TechStack = () => {
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const [sectionScrollY, setSectionScrollY] = useState(0);
  const [time, setTime] = useState(0);

  // Tech stack organized by orbital rings
  const techStack = [
    // Inner orbit
    {
      radius: 120,
      speed: 0.8,
      scrollThreshold: 100,
      icons: [
        { icon: Code2, name: 'React', color: 'text-blue-500 dark:text-blue-400' },
        { icon: Globe, name: 'Next.js', color: 'text-gray-800 dark:text-gray-200' },
        { icon: Palette, name: 'Tailwind', color: 'text-cyan-500 dark:text-cyan-400' },
        { icon: Server, name: 'Node.js', color: 'text-green-500 dark:text-green-400' }
      ]
    },
    // Middle orbit
    {
      radius: 200,
      speed: 0.6,
      scrollThreshold: 400,
      icons: [
        { icon: Database, name: 'MongoDB', color: 'text-green-600 dark:text-green-400' },
        { icon: Zap, name: 'TypeScript', color: 'text-blue-600 dark:text-blue-400' },
        { icon: Workflow, name: 'Express', color: 'text-gray-600 dark:text-gray-300' },
        { icon: Cloud, name: 'AWS', color: 'text-orange-500 dark:text-orange-400' },
        { icon: Terminal, name: 'Git', color: 'text-red-500 dark:text-red-400' },
        { icon: Layers, name: 'Docker', color: 'text-blue-500 dark:text-blue-400' }
      ]
    },
    // Outer orbit
    {
      radius: 280,
      speed: 0.4,
      scrollThreshold: 800,
      icons: [
        { icon: Cpu, name: 'Redis', color: 'text-red-600 dark:text-red-400' },
        { icon: Shield, name: 'JWT', color: 'text-purple-500 dark:text-purple-400' },
        { icon: Database, name: 'PostgreSQL', color: 'text-blue-700 dark:text-blue-300' },
        { icon: Code2, name: 'GraphQL', color: 'text-pink-500 dark:text-pink-400' },
        { icon: Globe, name: 'Vercel', color: 'text-gray-800 dark:text-gray-200' },
        { icon: Workflow, name: 'Prisma', color: 'text-indigo-600 dark:text-indigo-400' },
        { icon: Zap, name: 'Socket.io', color: 'text-emerald-500 dark:text-emerald-400' },
        { icon: Server, name: 'REST API', color: 'text-amber-600 dark:text-amber-400' }
      ]
    }
  ];

  // Check if it's desktop/large screen (>=1024px)
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

  // Smooth animation loop for continuous rotation
  useEffect(() => {
    let lastTime = 0;
    const animate = (timestamp) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      setTime(prevTime => prevTime + deltaTime * 0.001);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Scroll listener to track section scroll position (desktop only)
  useEffect(() => {
    if (!isDesktop) return; // 🔕 no scroll effects on small screens
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        const scrollIntoSection = Math.max(0, windowHeight - sectionTop);
        setSectionScrollY(scrollIntoSection);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  // Calculate orbital system position offset - only for desktop
  const getOrbitalSystemTransform = useCallback(() => {
    if (!isDesktop) return { x: 0, scale: 1 }; // 🔕 no transform on smaller screens
    const textStartThreshold = 1200;
    const maxOffset = 300;
    if (sectionScrollY < textStartThreshold) return { x: 0, scale: 1 };
    const scrollPastText = sectionScrollY - textStartThreshold;
    const progress = Math.min(scrollPastText / 400, 1);
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const smoothProgress = easeInOut(progress);
    return { x: -maxOffset * smoothProgress, scale: 1 - 0.15 * smoothProgress };
  }, [sectionScrollY, isDesktop]);

  const getIconPosition = useCallback((radius, index, totalIcons, orbitSpeed, orbitIndex) => {
    const baseAngle = (index / totalIcons) * Math.PI * 2;
    const rotationDirection = orbitIndex % 2 === 0 ? 1 : -1;
    const rotationSpeed = (orbitSpeed * rotationDirection * Math.PI * 2) / 30;
    const angle = baseAngle + time * rotationSpeed;

    // Responsive radius scaling
    const scaleFactor =
      window.innerWidth < 640 ? 0.6 :
      window.innerWidth < 768 ? 0.7 :
      window.innerWidth < 1024 ? 0.8 : 1;

    const scaledRadius = radius * scaleFactor;
    return { x: Math.cos(angle) * scaledRadius, y: Math.sin(angle) * scaledRadius };
  }, [time]);

  const getTextTransform = useCallback(() => {
    if (!isDesktop) return { opacity: 0, y: 50 }; // Hide text on smaller screens
    const textStartThreshold = 1200;
    if (sectionScrollY < textStartThreshold) return { opacity: 0, y: 50 };
    const scrollPastText = sectionScrollY - textStartThreshold;
    const progress = Math.min(scrollPastText / 300, 1);
    return { opacity: progress, y: 50 * (1 - progress) };
  }, [sectionScrollY, isDesktop]);

  // 🔕 On small screens: show orbits/icons at full opacity & scale immediately
  const getOrbitOpacity = useCallback((threshold) => {
    if (!isDesktop) return 1;
    if (sectionScrollY < threshold) return 0;
    const scrollPastThreshold = sectionScrollY - threshold;
    return Math.min(scrollPastThreshold / 150, 1);
  }, [sectionScrollY, isDesktop]);

  const getIconOpacity = useCallback((iconIndex, threshold) => {
    if (!isDesktop) return 1;
    const orbitVisibleThreshold = threshold + 150;
    if (sectionScrollY < orbitVisibleThreshold) return 0;
    const delayPerIcon = 120;
    const animationDelay = iconIndex * delayPerIcon;
    const scrollPastThreshold = sectionScrollY - orbitVisibleThreshold;
    const timeBasedDelay = scrollPastThreshold * 2;
    if (timeBasedDelay < animationDelay) return 0;
    return 1;
  }, [sectionScrollY, isDesktop]);

  const getIconScale = useCallback((iconIndex, threshold) => {
    if (!isDesktop) return 1;
    const orbitVisibleThreshold = threshold + 150;
    if (sectionScrollY < orbitVisibleThreshold) return 0;
    const delayPerIcon = 120;
    const animationDelay = iconIndex * delayPerIcon;
    const scrollPastThreshold = sectionScrollY - orbitVisibleThreshold;
    const timeBasedDelay = scrollPastThreshold * 2;
    if (timeBasedDelay < animationDelay) return 0;
    return 1;
  }, [sectionScrollY, isDesktop]);

  const TechIcon = React.memo(({ icon: Icon, name, color, position, iconIndex, threshold }) => {
    const opacity = getIconOpacity(iconIndex, threshold);
    const scale = getIconScale(iconIndex, threshold);
    return (
      <div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
          opacity: opacity,
          willChange: 'transform, opacity'
        }}
      >
        <div className="flex flex-col items-center">
          <div className="relative">
            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${color} drop-shadow-lg`} />
            <div className={`absolute inset-0 ${color} opacity-20 blur-xl`} />
          </div>
          <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-1 md:mt-2 opacity-90">
            {name}
          </span>
        </div>
      </div>
    );
  });

  const BackgroundElements = React.memo(() => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-200 dark:bg-blue-400 rounded-full opacity-40 dark:opacity-60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + i * 12}%`,
            animation: `pulse ${3 + i * 0.8}s infinite ${i * 0.5}s`
          }}
        />
      ))}
    </div>
  ));

  return (
    <section
      ref={sectionRef}
      className={`relative ${isDesktop ? 'min-h-[200vh]' : 'min-h-screen'} bg-white dark:bg-black`}
    >
      {/* Section Heading */}
      <div className="relative z-20 pt-8 pb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-stone-600 drop-shadow-lg dark:text-white">
          Services
        </h2>
      </div>

      {/* Main Container */}
      <div className={`${isDesktop ? 'sticky top-0' : 'relative'} h-screen flex items-center justify-center overflow-hidden`}>
        {/* Orbital System Container */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out"
          style={{
            transform: `translateX(${getOrbitalSystemTransform().x}px) scale(${getOrbitalSystemTransform().scale})`,
            marginTop: isDesktop ? '-2rem' : '-4rem'
          }}
        >
          {/* Orbital Rings */}
          {techStack.map((orbit, orbitIndex) => (
            <div key={orbitIndex} className="absolute">
              <div
                className="border border-gray-300 dark:border-gray-600 rounded-full transition-all duration-700 ease-out"
                style={{
                  width:
                    (orbit.radius * 2) *
                    (window.innerWidth < 640
                      ? 0.6
                      : window.innerWidth < 768
                      ? 0.7
                      : window.innerWidth < 1024
                      ? 0.8
                      : 1),
                  height:
                    (orbit.radius * 2) *
                    (window.innerWidth < 640
                      ? 0.6
                      : window.innerWidth < 768
                      ? 0.7
                      : window.innerWidth < 1024
                      ? 0.8
                      : 1),
                  opacity: getOrbitOpacity(orbit.scrollThreshold),
                  borderColor: window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? `rgba(156, 163, 175, ${getOrbitOpacity(orbit.scrollThreshold) * 0.8})`
                    : `rgba(107, 114, 128, ${getOrbitOpacity(orbit.scrollThreshold) * 0.8})`,
                  boxShadow: `0 0 ${20 * getOrbitOpacity(orbit.scrollThreshold)}px rgba(59, 130, 246, 0.1)`
                }}
              />
            </div>
          ))}

          {/* Central Core */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 flex items-center justify-center shadow-2xl z-10">
            <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-inner">
              <Code2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-gray-700 dark:text-gray-200" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 dark:opacity-50 blur-xl" />
          </div>

          {/* Animated Tech Icons */}
          {techStack.map((orbit, orbitIndex) => (
            <div key={orbitIndex}>
              {orbit.icons.map((tech, iconIndex) => {
                const position = getIconPosition(
                  orbit.radius,
                  iconIndex,
                  orbit.icons.length,
                  orbit.speed,
                  orbitIndex
                );
                return (
                  <TechIcon
                    key={`${orbitIndex}-${iconIndex}`}
                    {...tech}
                    position={position}
                    iconIndex={iconIndex}
                    threshold={orbit.scrollThreshold}
                  />
                );
              })}
            </div>
          ))}

          <BackgroundElements />
        </div>

        {/* Text Content - Only visible on desktop (1024px and up) */}
        {isDesktop && (
          <div
            className="absolute right-0 top-0 h-full items-center justify-center w-1/2 px-6 md:px-12 flex"
            style={{
              opacity: getTextTransform().opacity,
              transform: `translateY(${getTextTransform().y}px)`
            }}
          >
            <div className="text-left max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-600 dark:text-white mb-6">
                Tech Stack I Prefer
              </h2>
              <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-light">
                Every technology in my orbit represents countless hours of learning, building, and
                pushing boundaries. From frontend frameworks to backend infrastructure,
                each tool serves a purpose in creating exceptional digital experiences.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom spacer - Only for desktop */}
      {isDesktop && <div className="h-screen" />}
    </section>
  );
};

export default TechStack;
