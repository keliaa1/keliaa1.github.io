import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, Calendar, Bookmark, Briefcase, MessageSquare, Image, Telescope, Hexagon } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState(0);

  const navItems = [
    { icon: <Home size={20} strokeWidth={2.5} />, href: "#home", id: "home" },
    { icon: <Compass size={20} strokeWidth={2.5} />, href: "#about", id: "about" },
    { icon: <Calendar size={20} strokeWidth={2.5} />, href: "#skills", id: "skills" },
    { icon: <Bookmark size={20} strokeWidth={2.5} />, href: "#projects", id: "projects" },
    { icon: <Briefcase size={20} strokeWidth={2.5} />, href: "#experience", id: "experience" },
    { icon: <MessageSquare size={20} strokeWidth={2.5} />, href: "#testimonials", id: "testimonials" },
    { icon: <Telescope size={20} strokeWidth={2.5} />, href: "#blog", id: "blog" },
    { icon: <Image size={20} strokeWidth={2.5} />, href: "#gallery", id: "gallery" },
    { icon: <Hexagon size={20} strokeWidth={2.5} />, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(item => item.id === entry.target.id);
          if (index !== -1) {
            setActive(index);
          }
        }
      });
    }, options);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="fixed z-50 w-full flex justify-center" style={{ top: '40px', left: 0 }}>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-morphism flex items-center rounded-full"
        style={{ padding: '6px', gap: '6px' }}
      >
        {navItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            onClick={() => setActive(idx)}
            className="relative flex items-center justify-center transition-all duration-300 rounded-full group"
            style={{
              padding: '14px',
              color: active === idx ? '#fff' : 'rgba(255,255,255,0.4)',
              textDecoration: 'none'
            }}
          >
            {active === idx && (
              <motion.div
                layoutId="nav-bg"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="relative z-10" style={{ display: 'flex' }}>
              {item.icon}
            </div>
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
