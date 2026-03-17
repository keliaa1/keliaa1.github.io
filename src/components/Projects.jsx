import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    num: '01',
    title: 'Mento',
    category: 'Web App',
    description: 'A modern Notion-inspired app built with Next.js, Tailwind CSS & ShadCN UI. Create, organize, and manage notes, tasks, and pages with a sleek UI, plus AI-powered features like content suggestions, summarization, and smart search.',
    accent: '#00d2ff',
    rotate: '-2deg',
    link: 'https://mento-neon.vercel.app/',
  },
  {
    num: '02',
    title: 'PlanShift',
    category: '3D Platform',
    description: 'PlanShift is a web-based 3D visualization platform that transforms 2D architectural plans and real-world spaces into interactive 3D experiences.',
    accent: '#ff9d00',
    rotate: '2.5deg',
    link: 'https://planshift.vercel.app/',
  },
  {
    num: '03',
    title: 'E-Gate',
    category: 'Digital System',
    description: 'E-Gate is a digital visitor registration system designed to simplify school visitation. It allows visitors to register before arriving at the school and ensures that the administration is aware of the visit in advance.',
    accent: '#ff00c8',
    rotate: '-1.5deg',
    link: 'http://e-gate.rw/',
  },
];

// Thumbtack SVG pin
const Pin = ({ color }) => (
  <svg width="22" height="30" viewBox="0 0 22 30" fill="none" style={{ filter: `drop-shadow(0 4px 8px ${color}55)` }}>
    <ellipse cx="11" cy="9" rx="8" ry="8" fill={color} />
    <ellipse cx="11" cy="8" rx="4" ry="4" fill="rgba(255,255,255,0.35)" />
    <rect x="10" y="16" width="2" height="14" rx="1" fill={color} opacity="0.7" />
  </svg>
);

// Dashed SVG connector between alternating sides
const Connector = ({ fromRight, color }) => (
  <svg
    width="260"
    height="60"
    viewBox="0 0 260 60"
    fill="none"
    style={{
      position: 'absolute',
      bottom: '-60px',
      [fromRight ? 'right' : 'left']: '80px',
      zIndex: 0,
      pointerEvents: 'none',
    }}
  >
    <motion.path
      d={fromRight
        ? 'M 200 0 C 200 40 60 20 60 60'
        : 'M 60 0 C 60 40 200 20 200 60'}
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="6 6"
      fill="none"
      opacity="0.4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isRight = index % 2 !== 0; // odd cards go right
  const isLast = index === projects.length - 1;

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: isRight ? 'flex-end' : 'flex-start',
        width: '100%',
        marginBottom: isLast ? 0 : '24px',
        zIndex: 1,
      }}
    >
      {/* Connector to next card */}
      {!isLast && (
        <Connector fromRight={isRight} color={project.accent} />
      )}

      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40, rotate: project.rotate }}
        animate={inView ? { opacity: 1, y: 0, rotate: project.rotate } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 70 }}
        whileHover={{ scale: 1.03, rotate: '0deg', transition: { duration: 0.25 } }}
        style={{
          position: 'relative',
          width: '340px',
          background: 'rgba(14, 14, 14, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: `1px solid ${project.accent}30`,
          borderRadius: '18px',
          padding: '36px 28px 28px',
          boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${project.accent}18`,
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'block',
          zIndex: 2,
        }}
      >
        {/* Pin */}
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}>
          <Pin color={project.accent} />
        </div>

        {/* Accent top-bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '28px',
          right: '28px',
          height: '2px',
          borderRadius: '0 0 2px 2px',
          background: `linear-gradient(90deg, ${project.accent}00, ${project.accent}, ${project.accent}00)`,
          opacity: 0.6,
        }} />

        {/* Number */}
        <span style={{
          display: 'block',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.2em',
          color: project.accent,
          marginBottom: '10px',
          fontFamily: 'monospace',
        }}>
          {project.num}
        </span>

        {/* Title */}
        <h3 style={{
          fontSize: '22px',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          marginBottom: '8px',
          lineHeight: 1.15,
        }}>
          {project.title}
        </h3>

        {/* Category badge */}
        <span style={{
          display: 'inline-block',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: project.accent,
          background: `${project.accent}14`,
          border: `1px solid ${project.accent}30`,
          borderRadius: '999px',
          padding: '3px 11px',
          marginBottom: '14px',
        }}>
          {project.category}
        </span>

        {/* Description */}
        <p style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.7,
        }}>
          {project.description}
        </p>

        {/* Subtle corner decoration */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          right: '20px',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: `${project.accent}12`,
          border: `1px solid ${project.accent}25`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke={project.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          </svg>
        </div>
      </motion.a>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '120px 0 80px', width: '100%', background: '#000' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ marginBottom: '70px' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)',
              marginBottom: '14px',
            }}
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: '500px',
            }}
          >
            Let us show you how we drive your brand to{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00d2ff, #ff00c8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              new heights
            </span>
          </motion.h2>
        </div>

        {/* Zigzag cards */}
        <div style={{ position: 'relative' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}

          {/* Final label */}
          <motion.a
            href="https://github.com/keliaa1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: '48px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            <span style={{ fontSize: '18px' }}>✦</span>
            Not yet convinced? Visit my github to see more projects
            <span style={{ fontSize: '18px' }}>✦</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
