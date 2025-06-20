import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HeroText: React.FC = () => {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center pt-20 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-brand-off-white tracking-tight"
        variants={itemVariants}
      >
        Every Credit. Verified From the Ground Up.
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-brand-off-white/80 max-w-2xl"
        variants={itemVariants}
      >
        Explore immutable, data-backed carbon projects around the world.
      </motion.p>
      <motion.div variants={itemVariants}>
        <button
          className="mt-8 px-8 py-3 border border-brand-green rounded-full text-brand-off-white font-semibold hover:bg-brand-green hover:text-brand-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-50"
        >
          Start Exploring
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;