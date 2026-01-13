import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2023",
    title: "Joined Rwanda Coding Academy",
    company: "Rwanda Coding Academy",
    description: "Launch of first full-stack application, focusing on core accessibility and clean UI patterns.",
    color: "#2ecc71", // Green
    position: "bottom"
  },
  {
    year: "2024",
    title: "3d designer",
    company: "Orthoverse",
    description: "Spearheaded frontend architecture for high-traffic agency clients using React and Motion.",
    color: "#1abc9c", // Teal/Cyan
    position: "top"
  },
  {
    year: "2025",
    title: "Front-End developer",
    company: "Blink-Tech",
    description: "Pivoted to user-centric design engineering, bridging the gap between Figma and production code.",
    color: "#3498db", // Blue
    position: "bottom"
  },
  {
    year: "2025-",
    title: "Freelance Frontend developer and 3d designer",
    company: "TECH GIANT",
    description: "Optimized enterprise-scale systems and implemented robust CI/CD pipelines.",
    color: "#2980b9", // Dark Blue
    position: "top"
  },
  {
    year: "2026",
    title: "CoFounder and Lead frontend developer",
    company: "4Ward",
    description: "Directing product strategy and full-stack execution for next-gen AI platforms.",
    color: "#8e44ad", // Purple
    position: "bottom"
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 0',
        background: 'black',
        overflow: 'hidden'
      }}
    >
      <div className="section-container">
        <div className="text-left mb-48 pl-10">
          <h2 className="text-white" style={{ fontSize: '80px', fontWeight: '900', lineHeight: '0.8', letterSpacing: '-4px' }}>
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>TIMELINE</motion.span><br />
            <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ color: 'rgba(255,255,255,0.05)' }}>INFOGRAPHIC</motion.span>
          </h2>
          <div className="flex gap-3 mt-8">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="w-2 h-2 rounded-full bg-white/10"
              />
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[1600px] mx-auto min-h-[800px] flex items-center px-20">
          {/* Main Dotted Timeline */}
          <div className="absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-white/10 -translate-y-1/2" />

          <div className="flex justify-between w-full relative z-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col items-center">

                {/* Year Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 150 }}
                  className="w-24 h-24 rounded-full bg-black border-[8px] flex items-center justify-center relative z-20"
                  style={{ borderColor: exp.color, boxShadow: `0 0 50px ${exp.color}33` }}
                >
                  <span className="text-[18px] font-black text-white">{exp.year}</span>
                </motion.div>

                {/* Curved Connector SVG - Hook Shape (Wider for the longer graph) */}
                <svg
                  className="absolute pointer-events-none overflow-visible"
                  style={{
                    width: '400px',
                    height: '400px',
                    [exp.position === 'top' ? 'bottom' : 'top']: '48px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.6 + idx * 0.1 }}
                    d={exp.position === 'top'
                      ? "M 200 400 L 200 250 C 200 50 400 50 400 150"
                      : "M 200 0 L 200 150 C 200 350 0 350 0 250"
                    }
                    fill="none"
                    stroke={exp.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* End Tip on path */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2 + idx * 0.1 }}
                    cx={exp.position === 'top' ? 400 : 0}
                    cy={exp.position === 'top' ? 150 : 250}
                    r="10"
                    fill={exp.color}
                  />
                </svg>

                {/* Info Card - Positioned where the curve begins (Wider) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 + idx * 0.1, type: 'spring', stiffness: 100 }}
                  className="absolute glass-morphism p-10 rounded-[50px] w-[600px] z-30"
                  style={{
                    [exp.position === 'top' ? 'bottom' : 'top']: '280px',
                    [exp.position === 'top' ? 'left' : 'right']: '220px',
                    textAlign: exp.position === 'top' ? 'left' : 'right',
                    border: `1px solid ${exp.color}44`,
                    background: 'rgba(15, 15, 15, 0.7)',
                    backdropFilter: 'blur(50px)',
                    boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 30px ${exp.color}15`
                  }}
                >
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 bottom-0 w-2"
                    style={{
                      [exp.position === 'top' ? 'left' : 'right']: 0,
                      backgroundColor: exp.color,
                      borderRadius: '50px',
                      boxShadow: `0 0 20px ${exp.color}`
                    }}
                  />

                  <h4 className="mb-5 font-black" style={{ color: exp.color, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px' }}>
                    {exp.title}
                  </h4>
                  <p className="font-semibold text-white/95 text-[17px] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-col gap-1" style={{ alignItems: exp.position === 'top' ? 'flex-start' : 'flex-end' }}>
                     <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">{exp.company}</span>
                     <div className="w-16 h-1" style={{ backgroundColor: exp.color + '66' }} />
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
