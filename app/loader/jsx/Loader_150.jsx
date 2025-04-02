'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 16 }).map((_, index) => {
          const angle = (index / 16) * Math.PI * 4;
          const radius = 5 + (index * 2);
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

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
                boxShadow: [
                  '0 0 5px rgba(59, 130, 246, 0.5)',
                  '0 0 10px rgba(139, 92, 246, 0.5)',
                  '0 0 5px rgba(59, 130, 246, 0.5)',
                ],
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
          className="absolute w-6 h-6 rounded-full"
          style={{
            background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.4, 0.8],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader; 