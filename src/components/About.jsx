import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '240px 0' }}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p style={{ color: 'var(--accent-blue)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '40px' }}>THE VISION</p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', marginBottom: '60px' }}>
            I DESIGN SPACES THAT SPEAK THROUGH MOTION.
          </h2>
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem', fontWeight: '300', lineHeight: '1.8' }}>
              Based at the intersection of design and technology, I craft high-performance
              digital experiences that push the boundaries of what's possible on the web.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="flex justify-center"
          style={{ marginTop: '120px', gap: '80px' }}
        >
          {[
            { label: "EXPERIENCE", val: "1+ YEARS" },
            { label: "PROJECTS", val: "5+ BUILT" },
            { label: "FOCUS", val: "Web and Cybersecurity" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span style={{ fontSize: '10px', fontWeight: '800', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.3em', marginBottom: '16px' }}>{stat.label}</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '900' }}>{stat.val}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
