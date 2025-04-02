'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
          }}
          animate={{
            clipPath: [
              'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // Hexagon
              'circle(50% at 50% 50%)', // Circle
              'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Back to Diamond
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-full h-full bg-opacity-30 bg-white"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader; 