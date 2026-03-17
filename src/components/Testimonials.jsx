import React from "react";
import { Marquee } from "./magicui/Marquee";
import ReviewCard from "./magicui/ReviewCard";
import { motion } from "framer-motion";

import imgLoic from "../assets/Loic.png";
import imgMelissa from "../assets/Melissa.png";
import imgLaurent from "../assets/Laurent.png";
import imgAaron from "../assets/Aaron.png";
import imgHappy from "../assets/Happy.png";

const reviews = [
  {
    name: "Ndahiro Loic",
    username: "@loic",
    body: "Kelia builds clean, responsive, and user-friendly interfaces with great attention to detail.",
    img: imgLoic,
  },
  {
    name: "Ndanyuzwe Melissa",
    username: "@melissa",
    body: "I’ve seen Kelia’s work in 3D design, and it’s clear she has both technical skill and artistic vision. She experiments confidently and produces visually engaging results.",
    img: imgMelissa,
  },
  {
    name: "Nyumbayire Laurent",
    username: "@laurent",
    body: "Kelia has a strong eye for UI/UX. She doesn’t just build interfaces—she crafts experiences. Her designs are user-friendly, accessible, and aesthetically pleasing.",
    img: imgLaurent,
  },
  {
    name: "Twarimitswe Aaron",
    username: "@aaron",
    body: "What makes Kelia stand out is her versatility. She’s not just a developer or a designer—she’s both, with a growing strength in cybersecurity. That combination makes her incredibly valuable in modern tech projects.",
    img: imgAaron,
  },
  {
    name: "Irakoze Murasira Berard",
    username: "@berard",
    body: "I was particularly impressed by Kelia’s ability to understand and exploit security flaws. She approaches problems methodically and documents her findings clearly, which is crucial in cybersecurity work.",
    img: "https://avatar.vercel.sh/berard",
  },
  {
    name: "Cyizere Happy",
    username: "@happy",
    body: "Kelia is a rare talent who blends frontend development, 3D design, and cybersecurity. She can design beautiful interfaces, enhance them with 3D elements, and still think critically about system security.",
    img: imgHappy,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-14"
      style={{ minHeight: '520px' }}
    >
      <div className="mb-20 text-center z-10">
        <h2 className="text-white" style={{ fontSize: '60px', fontWeight: '900', letterSpacing: '-2px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            WHAT THEY SAY
          </motion.span>
        </h2>
        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 tracking-[0.3em] font-bold text-sm mt-4"
            style={{ marginBottom: '40px', marginTop: '40px' }}
        >
            TESTIMONIALS
        </motion.p>
      </div>

      <Marquee pauseOnHover className="[--duration:40s]" style={{ '--gap': '1.2rem', '--duration': '90s' }}>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]" style={{ '--gap': '1.2rem', '--duration': '90s', marginTop: '1.2rem' }}>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradient Edges — deep fade like screenshot */}
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: '0 auto 0 0',
        width: '220px',
        background: 'linear-gradient(to right, #000000 40%, transparent)',
        zIndex: 10,
      }} />
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        inset: '0 0 0 auto',
        width: '220px',
        background: 'linear-gradient(to left, #000000 40%, transparent)',
        zIndex: 10,
      }} />
    </section>
  );
};

export default Testimonials;
