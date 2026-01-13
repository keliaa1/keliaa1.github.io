import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  {
    name: "JavaScript",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M3 3h18v18H3V3zm13.125 10.992c-.03-.495-.315-.99-.81-1.32-.435-.3-.975-.48-1.545-.585-.51-.09-1.005-.15-1.485-.225-.48-.075-.93-.135-1.335-.225-.375-.075-.705-.18-.945-.3-.21-.105-.375-.255-.45-.435-.075-.15-.12-.345-.12-.555 0-.27.06-.51.18-.72.12-.21.3-.39.54-.525a2.536 2.536 0 01.765-.3c.27-.06.57-.09.855-.09.39 0 .765.045 1.11.135.345.09.645.24.9.45.255.195.42.42.51.69l1.845-.78c-.165-.48-.435-.9-.81-1.245a3.945 3.945 0 00-1.29-.81c-.525-.195-1.125-.3-1.8-.3-1.05 0-1.95.225-2.685.675-.735.45-1.29 1.05-1.65 1.83-.36.765-.54 1.575-.54 2.43 0 .825.135 1.545.405 2.16.27.6.66 1.095 1.17 1.485.51.375 1.11.66 1.785.855.675.195 1.395.315 2.16.36.75.045 1.425.12 2.01.21.585.09 1.05.21 1.395.36.345.15.585.345.72.615.135.255.21.57.21.945 0 .345-.075.66-.225.93-.15.27-.375.495-.675.675-.3.18-.675.315-1.11.405-.435.09-.93.135-1.455.135-.6 0-1.155-.06-1.68-.195-.51-.135-.975-.33-1.38-.585-.39-.255-.705-.585-.945-.96-.24-.375-.405-.81-.495-1.305l-1.935.54c.15.75.45 1.395.9 1.95.45.54 1.005.975 1.68 1.29.675.3 1.455.51 2.34.615.87.105 1.815.15 2.82.15 1.14 0 2.115-.195 2.925-.585.81-.39 1.425-.945 1.83-1.68s.615-1.575.615-2.55c0-.99-.21-1.8-.63-2.43s-1.02-1.11-1.785-1.44a11.13 11.13 0 00-2.415-.81c-.9-.195-1.665-.315-2.31-.36a3.868 3.868 0 01-.645-.075c-.195-.03-.39-.09-.54-.18a.631.631 0 01-.225-.225.592.592 0 01-.075-.24c0-.135.045-.255.12-.345s.21-.165.375-.21.39-.075.66-.075c.27 0 .54.03.795.075.255.045.48.135.675.255.195.12.33.285.39.495.075.195.12.435.12.72l1.935-.15z"/>
      </svg>
    ),
    description: "The backbone of modern web interaction. I build scalable apps with core JS logic.",
    color: "#f7df1e"
  },
  {
    name: "React",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 7c3.31 0 6 2.24 6 5s-2.69 5-6 5-6-2.24-6-5 2.69-5 6-5z" />
        <path d="M12 7c-3.31 0-6 2.24-6 5s2.69 5 6 5 6-2.24 6-5-2.69-5-6-5z" transform="rotate(60 12 12)"/>
        <path d="M12 7c-3.31 0-6 2.24-6 5s2.69 5 6 5 6-2.24 6-5-2.69-5-6-5z" transform="rotate(120 12 12)"/>
      </svg>
    ),
    description: "Declarative, component-based UI library. My primary tool for complex frontend architecture.",
    color: "#61dafb"
  },
  {
    name: "Node.js",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M12 2L4.5 6.3v11.4L12 22l7.5-4.3V6.3L12 2zm5.5 14.8l-5.5 3.2-5.5-3.2V7.2l5.5-3.2 5.5 3.2v9.6z"/>
        <path d="M12 8.5v7l6-3.5-6-3.5z" opacity="0.3"/>
      </svg>
    ),
    description: "Asynchronous event-driven JavaScript runtime. Powering my high-performance backends.",
    color: "#339933"
  },
  {
    name: "MongoDB",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M12 2C7 2 4 6 4 11c0 5 3 9 8 11 5-2 8-6 8-11 0-5-3-9-8-11zm0 18c-3.5-1.5-6-4.5-6-9 0-4 2-8 6-8s6 4 6 8c0 4.5-2.5 7.5-6 9z"/>
        <path d="M12 15c-1.5 0-3-1-3-3s1.5-3 3-3 3 1 3 3-1.5 3-3 3z"/>
      </svg>
    ),
    description: "NoSQL database for modern applications. Flexible and scalable data storage.",
    color: "#47a248"
  },
  {
    name: "TypeScript",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M3 3h18v18H3V3zm15.12 15.12V8.16H10.8v2.16H15v1.2h-4.2v5.76h2.16v-2.16h2.16v2.16h2.2z"/>
      </svg>
    ),
    description: "Typed JavaScript at scale. Ensuring robust and maintainable codebases.",
    color: "#3178c6"
  },
  {
    name: "Tailwind",
    icon: (color) => (
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M12 6c-3.1 0-4.7 1.6-4.7 4.7 0 .5.1 1 .2 1.5.5-1.5 1.5-2.5 3-2.5 2.1 0 3.1 1 3.1 3.1 0 .5-.1 1-.2 1.5-.5 2.1-1.6 3.1-3.1 3.1-1 0-1.6-.3-2.1-.8-.5.5-1.1.8-2.1.8-2.1 0-3.1-1-3.1-3.1 0-.5.1-1 .2-1.5.5-2.1 1.6-3.1 3.1-3.1.5 0 1 .1 1.5.2-.5-.5-.8-1.1-.8-2.1 0-2.1 1-3.1 3.1-3.1s3.1 1 3.1 3.1c0 .5-.1 1-.2 1.5z"/>
      </svg>
    ),
    description: "Utility-first CSS framework. Rapidly building beautiful, custom designs.",
    color: "#06b6d4"
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
    <div className="relative w-full max-w-6xl mx-auto h-[650px] flex items-center justify-center overflow-visible">

      {/* Background Arc */}
      <div className="absolute top-[480px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] border-t border-dashed border-white/10 rounded-full pointer-events-none" />

      {/* Skills Icons */}
      {skillsData.map((skill, index) => {
        const offset = (index - activeIndex + totalSkills) % totalSkills;

        // Distribute icons along the top arc of the large circle
        // We want them centered, so we use angles around 90 degrees (top)
        // But since the circle is pushed down, 90 deg is the highest point
        // Let's spread from 45 to 135 degrees
        const spread = 140;
        const startAngle = 90 - spread / 2;
        const angle = startAngle + (offset * (spread / (totalSkills - 1)));

        const radius = 550;
        const rad = (angle * Math.PI) / 180;

        // Calculate position relative to the circle center at y=450
        const x = Math.cos(rad) * radius;
        const y = -Math.sin(rad) * radius + 550;

        const isActive = index === activeIndex;

        return (
          <motion.div
            key={skill.name}
            className={`absolute glass-morphism cursor-pointer flex items-center justify-center ${isActive ? 'z-20' : 'z-10'}`}
            initial={false}
            animate={{
              x,
              y,
              scale: isActive ? 1.7 : 0.85,
              opacity: isActive ? 1 : 0.6, // Increased base opacity
              boxShadow: isActive ? `0 20px 100px ${skill.color}77` : '0 10px 30px rgba(0,0,0,0.3)',
              borderColor: isActive ? skill.color : 'rgba(255,255,255,0.1)',
              filter: isActive ? 'brightness(1.8) saturate(1.4)' : 'brightness(1) contrast(1.1)' // Removed blur, boosted brightness
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            onClick={() => setActiveIndex(index)}
            style={{
              width: '120px', // Slightly larger
              height: '120px',
              borderRadius: '32px',
              padding: '24px',
              background: isActive ? 'rgba(255,255,255,0.12)' : 'rgba(20, 20, 20, 0.6)', // More solid background for visibility
              backdropFilter: 'blur(20px)'
            }}
          >
            {skill.icon(skill.color)}

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

      {/* Center Display - Floating above with delayed text appearance */}
      <AnimatePresence mode="wait">
        <motion.div
          key={skillsData[activeIndex].name}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }} // Wait for the wheel to move
          className="absolute top-[80px] text-center max-w-xl z-30"
        >
          <motion.div
            className="mb-8 inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-[11px] font-black tracking-[0.5em] text-white/50 uppercase">Featured Expertise</span>
          </motion.div>

          <h3 className="text-8xl font-black mb-8 tracking-tighter" style={{ color: skillsData[activeIndex].color, textShadow: `0 0 50px ${skillsData[activeIndex].color}66` }}>
            {skillsData[activeIndex].name}
          </h3>

          <p className="text-white/60 text-xl leading-relaxed font-medium px-12 italic">
            "{skillsData[activeIndex].description}"
          </p>

          <div className="mt-16 flex justify-center gap-4">
             {skillsData.map((_, i) => (
               <motion.div
                key={i}
                animate={{
                  width: i === activeIndex ? 60 : 12,
                  backgroundColor: i === activeIndex ? skillsData[activeIndex].color : 'rgba(255,255,255,0.1)'
                }}
                className="h-2 rounded-full"
               />
             ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingSkills;
