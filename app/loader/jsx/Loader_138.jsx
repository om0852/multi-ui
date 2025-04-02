'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 12 }).map((_, index) => {
          const radius = 10 + index * 5;
          const angle = index * 30;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `rgba(59, 130, 246, ${1 - index * 0.05})`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          );
        })}
        <motion.div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
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