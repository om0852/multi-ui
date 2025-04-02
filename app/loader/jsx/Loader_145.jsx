'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            style={{
              background: `linear-gradient(${120 * index}deg, #3B82F6, #8B5CF6)`,
              opacity: 0.6 - index * 0.1,
            }}
            animate={{
              clipPath: [
                'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
                'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', // Trapezoid
                'circle(50% at 50% 50%)', // Circle
                'polygon(50% 0%, 100% 100%, 0% 100%)', // Triangle
                'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Back to Diamond
              ],
              rotate: [0, 180, 360],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute w-16 h-16 bg-white rounded-full mix-blend-overlay"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader; 