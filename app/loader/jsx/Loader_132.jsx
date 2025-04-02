'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const dots = Array.from({ length: 8 });
  const radius = 40;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-24 h-24">
        {dots.map((_, index) => {
          const angle = (index / dots.length) * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: (index / dots.length) * 1.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader; 