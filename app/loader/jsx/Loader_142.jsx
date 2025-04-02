'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-20 h-40">
        {Array.from({ length: 10 }).map((_, index) => {
          const yOffset = index * 8;
          const delay = index * 0.1;

          return (
            <React.Fragment key={index}>
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-blue-500"
                style={{
                  top: yOffset,
                }}
                animate={{
                  x: ['-10px', '10px', '-10px'],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-purple-500"
                style={{
                  top: yOffset,
                }}
                animate={{
                  x: ['10px', '-10px', '10px'],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                style={{
                  top: yOffset + 1.5,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                animate={{
                  rotate: [45, -45, 45],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                }}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Loader; 