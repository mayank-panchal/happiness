import React from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

function Home() {
  // Get the window's dimensions to make confetti responsive
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <section className="home-section">
      {/* Confetti Effect */}
      <Confetti width={width} height={height} numberOfPieces={300} />

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-title"
      >
        🎉 Happy Birthday, Love! 🎂
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="home-subtitle"
      >
        Welcome to your special day, where every moment is about **YOU**! ❤️
      </motion.p>

      {/* Floating Balloons */}
      <div className="balloon-container">
        <div className="balloon balloon1"></div>
        <div className="balloon balloon2"></div>
        <div className="balloon balloon3"></div>
      </div>
    </section>
  );
}

export default Home;
