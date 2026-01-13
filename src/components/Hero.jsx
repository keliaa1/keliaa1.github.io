import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full w-full bg-black">
            <div className="text-white/20 font-black animate-pulse uppercase tracking-[0.5em] text-[10px]">
              INITIALIZING EXPERIENCE...
            </div>
          </div>
        }>
          <Spline scene="https://prod.spline.design/ycD82n8BEN6ZE47C/scene.splinecode" />
        </Suspense>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute z-10 text-center"
        style={{ bottom: '150px', left: '50%', transform: 'translateX(-50%)' }}
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute z-10 text-center"
        style={{ bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)', margin: '0 auto' }}></div>
        <p style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.3)', marginTop: '20px' }}>SCROLL</p>
      </motion.div>
    </section>
  );
};

export default Hero;
