import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "3D Designer",
    company: "Orthoverse",
    color: "#1abc9c",
    position: "top",
    description: "Designed immersive 3D assets and environments for virtual spaces.",
  },
  {
    year: "2025",
    title: "Front-End Developer",
    company: "Blink-Tech",
    color: "#3498db",
    position: "bottom",
    description: "Developed responsive and interactive user interfaces ensuring high performance.",
  },
  {
    year: "2025-",
    title: "Freelance",
    company: "Freelance",
    color: "#2980b9",
    position: "top",
    description: "Delivering custom frontend solutions and 3D designs for diverse clients.",
  },
  {
    year: "2026",
    title: "CoFounder & Lead Dev",
    company: "4Ward",
    color: "#8e44ad",
    position: "bottom",
    description: "Leading technical vision and frontend architecture for a next-gen startup.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 40px",
        background: "black",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "28px", textAlign: "center", width: "100%", maxWidth: "900px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "900",
            lineHeight: "0.85",
            letterSpacing: "-3px",
            color: "#fff",
          }}
        >
          <motion.span initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            TIMELINE
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.05)" }}
          >
            Experience
          </motion.span>
        </h2>
        <div style={{ display: "flex", gap: "8px", marginTop: "10px", justifyContent: "center" }}>
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.04 }}
              style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          height: "380px",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {/* Horizontal dotted line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            height: 0,
            borderTop: "2px dashed rgba(255,255,255,0.1)",
            transform: "translateY(-50%)",
          }}
        />

        {/* Nodes */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
            zIndex: 10,
            padding: "0 20px",
          }}
        >
          {experiences.map((exp, idx) => {
            const isTop = exp.position === "top";
            const isEarlyYear = idx < 1;
            const isRightCurve = idx === 2;
            const isLeftCurve = idx === 1;

            // SVG curve dimensions — compact
            const svgW = 160;
            const svgH = 170;

            return (
              <div key={idx} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Year node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 150 }}
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#000",
                    border: `4px solid ${exp.color}`,
                    boxShadow: `0 0 20px ${exp.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 20,
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 900, color: "#fff" }}>{exp.year}</span>
                </motion.div>

                {/* SVG curve */}
                <svg
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    width: `${svgW}px`,
                    height: `${svgH}px`,
                    overflow: "visible",
                    pointerEvents: "none",
                    [isTop ? "bottom" : "top"]: "26px",
                    left: "50%",
                    transform:
                      isEarlyYear || isRightCurve
                        ? "translateX(0)"
                        : "translateX(-100%)",
                  }}
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                    d={
                      isEarlyYear || isRightCurve
                        ? isTop
                          ? `M 0 ${svgH} L 0 ${svgH * 0.6} C 0 ${svgH * 0.1} ${svgW} ${svgH * 0.1} ${svgW} ${svgH * 0.35}`
                          : `M 0 0 L 0 ${svgH * 0.4} C 0 ${svgH * 0.9} ${svgW} ${svgH * 0.9} ${svgW} ${svgH * 0.65}`
                        : isTop
                        ? `M ${svgW} ${svgH} L ${svgW} ${svgH * 0.6} C ${svgW} ${svgH * 0.1} 0 ${svgH * 0.1} 0 ${svgH * 0.35}`
                        : `M ${svgW} 0 L ${svgW} ${svgH * 0.4} C ${svgW} ${svgH * 0.9} 0 ${svgH * 0.9} 0 ${svgH * 0.65}`
                    }
                    fill="none"
                    stroke={exp.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 + idx * 0.1 }}
                    cx={isEarlyYear || isRightCurve ? svgW : 0}
                    cy={isTop ? svgH * 0.35 : svgH * 0.65}
                    r="6"
                    fill={exp.color}
                  />
                </svg>

                {/* Info card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: isEarlyYear || isRightCurve ? 30 : -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + idx * 0.1, type: "spring", stiffness: 80 }}
                  style={{
                    position: "absolute",
                    zIndex: 30,
                    [isTop ? "bottom" : "top"]: "110px",
                    [(isEarlyYear || isRightCurve) ? "left" : "right"]: "100px",
                    width: "210px",
                    borderRadius: "20px",
                    padding: "12px 14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(5,5,5,0.7)",
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 20px 60px -10px rgba(0,0,0,0.8), 0 0 30px ${exp.color}15`,
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(225deg, ${exp.color}55, ${exp.color}11)`,
                      border: `2px solid ${exp.color}77`,
                      fontSize: "18px",
                      fontWeight: 900,
                      color: exp.color,
                      textShadow: `0 0 20px ${exp.color}88`,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {exp.company.charAt(0)}
                    <div style={{ position: "absolute", inset: 0, background: exp.color, opacity: 0.12, filter: "blur(8px)" }} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <h4 style={{ fontSize: "14px", fontWeight: 800, color: "#fff", marginBottom: "2px", lineHeight: 1.2 }}>
                      {exp.title}
                    </h4>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: exp.color, opacity: 0.9 }}>
                      {exp.company} // {exp.year}
                    </span>
                    <p style={{ marginTop: "6px", color: "rgba(255,255,255,0.55)", fontSize: "11px", lineHeight: 1.5 }}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Glow */}
                  <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "60px", height: "60px", borderRadius: "50%", background: exp.color, opacity: 0.07, filter: "blur(30px)" }} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
