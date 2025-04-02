'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 64 }).map((_, index) => {
          const row = Math.floor(index / 8);
          const col = index % 8;
          
          return (
            <motion.div
              key={index}
              className="w-4 h-4 bg-blue-500 rounded-sm"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: (Math.sin(row) + Math.cos(col)) * 0.2,
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