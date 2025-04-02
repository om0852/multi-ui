'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, index) => {
          const row = Math.floor(index / 5);
          const col = index % 5;
          const isOffset = row % 2 === 1;
          
          return (
            <motion.div
              key={index}
              className="w-8 h-8"
              style={{
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                transform: isOffset ? 'translateX(16px)' : '',
              }}
              animate={{
                scale: [1, 0.8, 1],
                opacity: [0.8, 0.3, 0.8],
                rotate: [0, 60, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (row + col) * 0.1,
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