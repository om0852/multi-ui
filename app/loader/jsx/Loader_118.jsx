'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-2 border-blue-500"
            style={{
              width: `${(index + 1) * 40}px`,
              height: `${(index + 1) * 40}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
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