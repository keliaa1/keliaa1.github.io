import React from 'react';
import { motion } from 'framer-motion';
import almostImg from '../assets/Almost.png';
import roomImg from '../assets/final room frr.png';
import sushiImg from '../assets/sushi.png';

const Gallery = () => {
  const images = [
    { src: almostImg, title: "CYBERPUNK DREAM", size: "large" },
    { src: sushiImg, title: "NEON SUSHI", size: "small" },
    { src: roomImg, title: "ISOMETRIC ROOM", size: "small" }
  ];

  return (
    <section id="gallery" style={{ padding: '240px 0' }}>
      <div className="section-container">
        <div className="text-center" style={{ marginBottom: '120px' }}>
          <p style={{ color: 'var(--accent-blue)', fontWeight: '800', letterSpacing: '0.5em', fontSize: '10px', marginBottom: '40px' }}>VISUALS</p>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1' }}>3D DESIGN GALLERY.</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-morphism group"
              style={{ padding: '10px', borderRadius: '30px', overflow: 'hidden' }}
            >
              <div style={{ width: '100%', height: 'auto', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                <motion.img
                  src={img.src}
                  alt={img.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '30px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  opacity: 0
                }}
                className="image-overlay"
                >
                  <p style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '0.2em' }}>{img.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .group:hover .image-overlay {
          opacity: 1 !important;
          transition: opacity 0.5s ease;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
