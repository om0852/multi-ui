'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const dots = Array.from({ length: 12 });
  const radius = 30;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-20 h-20">
        {dots.map((_, index) => {
          const angle = (index / dots.length) * Math.PI * 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className="absolute w-3 h-3 bg-blue-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              animate={{
                scale: [1, 0.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: (index / dots.length) * 1.2,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Loader; 