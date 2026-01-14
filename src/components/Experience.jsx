import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2023",
    title: "Joined Rwanda Coding Academy",
    company: "Rwanda Coding Academy",
    color: "#2ecc71", // Green
    position: "bottom"
  },
  {
    year: "2024",
    title: "3d designer",
    company: "Orthoverse",
    color: "#1abc9c", // Teal/Cyan
    position: "top"
  },
  {
    year: "2025",
    title: "Front-End developer",
    company: "Blink-Tech",
    color: "#3498db", // Blue
    position: "bottom"
  },
  {
    year: "2025-",
    title: "Freelance Frontend developer and 3d designer",
    company: "Freelance",
    color: "#2980b9", // Dark Blue
    position: "top"
  },
  {
    year: "2026",
    title: "CoFounder and Lead frontend developer",
    company: "4Ward",
    color: "#8e44ad", // Purple
    position: "bottom"
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        minHeight: '150vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 0',
        background: 'black',
        overflow: 'hidden'
      }}
    >
      <div className="w-full px-10">
        <div className="text-left mb-48">
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

        <div className="relative w-full max-w-[900px] mx-auto min-h-[800px] flex items-center px-4">
          {/* Main Dotted Timeline */}
          <div className="absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-white/10 -translate-y-1/2" />

          <div className="flex justify-between w-full relative z-10">
            {experiences.map((exp, idx) => {
              const isEarlyYear = idx < 2; // 2023, 2024
              const cardSide = isEarlyYear ? 'left' : 'right'; // If isEarlyYear, anchor to left of node (meaning card is to the right)

              return (
              <div key={idx} className="relative flex flex-col items-center">

                {/* Year Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 150 }}
                  className="w-16 h-16 rounded-full bg-black border-[5px] flex items-center justify-center relative z-20"
                  style={{ borderColor: exp.color, boxShadow: `0 0 30px ${exp.color}44` }}
                >
                  <span className="text-[14px] font-black text-white">{exp.year}</span>
                </motion.div>

                {/* Curved Connector SVG - Hook Shape (Pointing Inward) */}
                <svg
                  className="absolute pointer-events-none overflow-visible"
                  style={{
                    width: '240px',
                    height: '400px',
                    [exp.position === 'top' ? 'bottom' : 'top']: '32px',
                    left: '50%',
                    transform: isEarlyYear ? 'translateX(0)' : 'translateX(-100%)'
                  }}
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 + idx * 0.1 }}
                    d={isEarlyYear
                      ? (exp.position === 'top'
                          ? "M 0 400 L 0 250 C 0 50 240 50 240 150"
                          : "M 0 0 L 0 150 C 0 350 240 350 240 250")
                      : (exp.position === 'top'
                          ? "M 240 400 L 240 250 C 240 50 0 50 0 150"
                          : "M 240 0 L 240 150 C 240 350 0 350 0 250")
                    }
                    fill="none"
                    stroke={exp.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* End Tip on path */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 + idx * 0.1 }}
                    cx={isEarlyYear ? 240 : 0}
                    cy={exp.position === 'top' ? 150 : 250}
                    r="8"
                    fill={exp.color}
                  />
                </svg>

                {/* Info Card - Spacious Right-Aligned Layout */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: isEarlyYear ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 + idx * 0.1, type: 'spring', stiffness: 80 }}
                  className="absolute p-20 rounded-[50px] w-[000px] z-30 flex flex-row-reverse items-center gap-16"
                  style={{
                    [exp.position === 'top' ? 'bottom' : 'top']: '240px',
                    [isEarlyYear ? 'left' : 'right']: '220px',
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                    background: 'rgba(5, 5, 5, 0.45)',
                    backdropFilter: 'blur(140px)',
                    boxShadow: `0 40px 120px rgba(0,0,0,0.9), 0 0 60px ${exp.color}15`
                  }}
                >
                  {/* Right Side (Avatar/Icon) due to flex-row-reverse */}
                  <div className="flex-shrink-0 w-36 h-36 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(225deg, ${exp.color}55, ${exp.color}11)`, border: `3px solid ${exp.color}77` }}
                  >
                    <div className="text-[48px] font-black" style={{ color: exp.color, textShadow: `0 0 30px ${exp.color}88` }}>
                      {exp.company.charAt(0)}
                    </div>
                    <div className="absolute inset-0 blur-3xl opacity-40" style={{ background: exp.color }} />
                  </div>

                  {/* Left Side (Content) due to flex-row-reverse - Aligned Right */}
                  <div className="flex flex-col flex-grow text-right items-end">
                    <div className="flex flex-col mb-8">
                      <h4 className="text-[32px] font-black text-white leading-tight mb-2 tracking-tight">
                        {exp.title}
                      </h4>
                      <span className="text-[16px] font-bold tracking-[0.4em] uppercase opacity-70" style={{ color: exp.color }}>
                        {exp.company} // {exp.year}
                      </span>
                    </div>

                    <p className="text-white/80 text-[19px] leading-[2] font-medium max-w-[90%] mb-10">
                      {exp.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="flex items-center gap-8 opacity-30 mt-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-xl border-2 border-white/20" />
                        <div className="w-8 h-8 rounded-xl border-2 border-white/20" />
                      </div>
                      <div className="h-px w-24 bg-gradient-to-l from-white/40 to-transparent" />
                    </div>
                  </div>

                  {/* Aesthetic Background Element */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[100px] opacity-20" style={{ background: exp.color }} />
                </motion.div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
