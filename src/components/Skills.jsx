import React from 'react';
import { motion } from 'framer-motion';
import RotatingSkills from './RotatingSkills';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '150px 0', overflow: 'hidden' }}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p style={{ color: 'var(--accent-orange)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '30px' }}>THE ARSENAL</p>
          <h2 className="text-gradient mb-20" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', marginBottom: '300px' }}>
            MY STACK.
          </h2>
        </motion.div>

        <div className="relative">
          <RotatingSkills />
        </div>
      </div>
    </section>
  );
};

export default Skills;
