'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 20 }).map((_, index) => {
          const randomX = Math.random() * 100;
          const randomDelay = Math.random() * 2;
          const randomDuration = 2 + Math.random();

          return (
            <motion.div
              key={index}
              className="absolute w-2 h-2"
              style={{
                left: `${randomX}%`,
                background: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.3})`,
                borderRadius: '50%',
              }}
              animate={{
                y: [-20, 160],
                x: [0, Math.sin(index) * 20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          );
        })}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
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