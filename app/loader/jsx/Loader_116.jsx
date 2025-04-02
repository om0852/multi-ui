'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-8 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader; 