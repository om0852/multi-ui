'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-16 h-16 border-4 border-blue-500"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${index * 45}deg)`,
            }}
            animate={{
              rotate: [index * 45, index * 45 + 360],
              scale: [1, 0.8, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute w-8 h-8 bg-blue-500"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
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