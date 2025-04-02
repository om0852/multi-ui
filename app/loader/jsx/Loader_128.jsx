'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-16 h-32">
        {Array.from({ length: 8 }).map((_, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="absolute w-4 h-4 bg-purple-500 rounded-full"
              animate={{
                x: [0, 16, 0],
                y: index * 4,
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              animate={{
                x: [16, 0, 16],
                y: index * 4,
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.25,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-4 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
              style={{
                top: index * 4 + 8,
                left: 8,
                transformOrigin: "center",
              }}
              animate={{
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.25,
                ease: "linear",
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Loader; 