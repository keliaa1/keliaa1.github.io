import React from 'react';
import { motion } from 'framer-motion';

const BlogCTA = () => {
  return (
    <section id="blog" style={{ padding: '240px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p style={{ color: 'rgba(255,255,255,0.3)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '40px' }}>THOUGHTS</p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1', marginBottom: '60px' }}>
            DEEP DIVES INTO <br/>THE 3D WEB.
          </h2>

          <div className="flex justify-center">
            <a
              href="#"
              className="glass-morphism"
              style={{
                padding: '24px 60px',
                borderRadius: '100px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: '900',
                letterSpacing: '0.4em'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(15, 15, 15, 0.5)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              }}
            >
              VISIT MY BLOG &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTA;
