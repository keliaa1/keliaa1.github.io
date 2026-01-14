import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  {
    name: "React",
    iconPath: "/svg/react.svg",
    description: "Declarative, component-based UI library. My primary tool for complex frontend architecture.",
    color: "#61dafb"
  },
  {
    name: "TypeScript",
    iconPath: "/svg/typescript (1).svg",
    description: "Typed JavaScript at scale. Ensuring robust and maintainable codebases.",
    color: "#3178c6"
  },
  {
    name: "Next.js",
    iconPath: "/svg/next-js.svg",
    description: "React framework for production. Building full-stack applications with ease.",
    color: "#000000"
  },
  {
    name: "Three.js",
    iconPath: "/svg/threejs.svg",
    description: "3D graphics library for the web. Creating immersive 3D experiences.",
    color: "#000000"
  },
  {
    name: "Java",
    iconPath: "/svg/java.svg",
    description: "Object-oriented programming language. Building robust enterprise applications.",
    color: "#ed8b00"
  },
  {
    name: "Blender",
    iconPath: "/svg/blender.svg",
    description: "3D creation suite. Modeling and animating 3D assets for web experiences.",
    color: "#f5792a"
  }
];

const RotatingSkills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSkills = skillsData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSkills);
    }, 4500); // Slightly slower for better readability
    return () => clearInterval(timer);
  }, [totalSkills]);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center overflow-visible">

      {/* Background Arc */}
      <div className="absolute top-[380px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border-t border-dashed border-white/10 rounded-full pointer-events-none" />

      {/* Skills Icons */}
      {skillsData.map((skill, index) => {
        // Calculate the relative index so that activeIndex is always 0
        // and other icons are distributed around it
        let relativeIndex = index - activeIndex;
        if (relativeIndex > totalSkills / 2) relativeIndex -= totalSkills;
        if (relativeIndex <= -totalSkills / 2) relativeIndex += totalSkills;

        // Active index should be at 90 degrees (top center)
        const spacing = 25; // Degrees between icons
        const angle = 90 - (relativeIndex * spacing);

        const radius = 400;
        const rad = (angle * Math.PI) / 180;

        // Calculate position relative to the circle center at y=400
        const x = Math.cos(rad) * radius;
        const y = -Math.sin(rad) * radius + 400;

        const isActive = index === activeIndex;
        const isDark = skill.color === '#000000' || skill.color.toLowerCase() === '#000';

        return (
          <motion.div
            key={skill.name}
            className={`absolute glass-morphism cursor-pointer flex items-center justify-center ${isActive ? 'z-20' : 'z-10'}`}
            initial={false}
            animate={{
              x,
              y,
              scale: isActive ? 1.4 : 0.7,
              opacity: isActive ? 1 : 0.6, // Increased base opacity
              boxShadow: isActive ? `0 20px 100px ${skill.color}77` : '0 10px 30px rgba(0,0,0,0.3)',
              borderColor: isActive ? skill.color : 'rgba(255,255,255,0.1)',
              filter: isActive ? 'brightness(1.8) saturate(1.4)' : 'brightness(1) contrast(1.1)' // Removed blur, boosted brightness
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            onClick={() => setActiveIndex(index)}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '32px',
              padding: '20px',
              background: isActive ? 'rgba(255,255,255,0.12)' : 'rgba(20, 20, 20, 0.6)', // More solid background for visibility
              backdropFilter: 'blur(20px)'
            }}
          >
            <img 
              src={skill.iconPath} 
              alt={skill.name}
              className="w-full h-full object-contain"
              style={{
                filter: isDark ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' : 'none'
              }}
            />

            {/* Active persistent glow */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-[32px] pointer-events-none"
                animate={{
                  boxShadow: [`0 0 20px ${skill.color}55`, `0 0 60px ${skill.color}aa`, `0 0 20px ${skill.color}55`],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Center Display - Redesigned as a Card ABOVE the active icon */}
      <AnimatePresence mode="wait">
        {skillsData.map((skill, index) => {
          if (index !== activeIndex) return null;
          
          // Calculate position for the active icon
          let relativeIndex = index - activeIndex;
          if (relativeIndex > totalSkills / 2) relativeIndex -= totalSkills;
          if (relativeIndex <= -totalSkills / 2) relativeIndex += totalSkills;
          
          const spacing = 25;
          const angle = 90 - (relativeIndex * spacing);
          const radius = 400;
          const rad = (angle * Math.PI) / 180;
          const iconX = Math.cos(rad) * radius;
          const iconY = -Math.sin(rad) * radius + 400;
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: iconY - 150, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                x: iconX - 200, // Center the card above icon (card width ~400px, so -200 centers it)
                y: iconY - 200, // Position above the icon
                scale: 1
              }}
              exit={{ opacity: 0, y: iconY - 150, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute z-30"
            >
              <div
                className="glass-morphism text-center max-w-sm relative overflow-visible border-2"
                style={{
                  borderRadius: '32px',
                  borderColor: `${skill.color}33`,
                  background: 'rgba(20, 20, 20, 0.7)',
                  backdropFilter: 'blur(30px)',
                  boxShadow: `0 30px 100px -20px ${skill.color}44`,
                  padding: '32px 28px'
                }}
              >
            {/* Top Badge */}
            <div className="mb-4">
            </div>

                {/* Skill Name */}
                <h3
                  className="text-6xl font-black mb-4 tracking-tighter"
                  style={{
                    color: 'white',
                    textShadow: `0 0 20px ${skill.color}66`
                  }}
                >
                  <span style={{ color: skill.color }}>{skill.name}</span>
                </h3>

                {/* Description Card */}
                <div className="relative px-4">
                  <p className="text-white/80 text-[15px] leading-relaxed font-semibold italic">
                    "{skill.description}"
                  </p>
                </div>

                {/* Pagination/Progress Dots inside card */}
                <div className="mt-8 flex justify-center gap-2.5">
                   {skillsData.map((_, i) => (
                     <motion.div
                      key={i}
                      animate={{
                        width: i === activeIndex ? 35 : 8,
                        backgroundColor: i === activeIndex ? skill.color : 'rgba(255,255,255,0.15)',
                        opacity: i === activeIndex ? 1 : 0.5
                      }}
                      className="h-1.5 rounded-full"
                     />
                   ))}
                </div>

                {/* Dynamic Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 rounded-tl-2xl border-t-2 border-l-2" style={{ borderColor: skill.color }} />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-br-2xl border-b-2 border-r-2" style={{ borderColor: skill.color }} />
              </div>

              {/* Connector Arrow pointing to the icon */}
              <div
                className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-8 h-8 rotate-45 border-r-2 border-b-2"
                style={{
                  borderRadius: '4px',
                  borderColor: `${skill.color}33`,
                  background: 'rgba(20, 20, 20, 0.7)'
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default RotatingSkills;
