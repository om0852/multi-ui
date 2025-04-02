'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const particles = Array.from({ length: 12 });
  
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {particles.map((_, index) => {
          const angle = (index / particles.length) * Math.PI * 2;
          const radius = 40;
          
          return (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: 'center',
              }}
              animate={{
                x: [
                  Math.cos(angle) * radius - 4,
                  Math.cos(angle + Math.PI) * radius - 4,
                  Math.cos(angle) * radius - 4,
                ],
                y: [
                  Math.sin(angle) * radius - 4,
                  Math.sin(angle + Math.PI) * radius - 4,
                  Math.sin(angle) * radius - 4,
                ],
                scale: [1, 0.8, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
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