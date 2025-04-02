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
            className="absolute border-2 border-blue-500 rounded-full"
            style={{
              width: 60 + index * 20,
              height: 60 + index * 20,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 2],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeOut",
            }}
          />
        ))}
        <motion.div
          className="relative w-12 h-12 bg-blue-500 rounded-full"
          animate={{
            scale: [0.8, 1.1, 0.8],
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