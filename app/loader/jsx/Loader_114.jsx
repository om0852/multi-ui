'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-24 h-24">
        {Array.from({ length: 8 }).map((_, index) => (
          <React.Fragment key={index}>
            {/* Left strand */}
            <motion.div
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              animate={{
                x: [-20, 20, -20],
                y: [index * 6, (index * 6) + 12, index * 6],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
            {/* Right strand */}
            <motion.div
              className="absolute w-4 h-4 bg-pink-500 rounded-full"
              animate={{
                x: [20, -20, 20],
                y: [index * 6, (index * 6) + 12, index * 6],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Loader; 