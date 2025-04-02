'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="relative"
          >
            <motion.div
              className="w-6 h-6 bg-blue-500 rounded-full"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-full blur-sm"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader; 