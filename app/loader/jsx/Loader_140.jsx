'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute border-4 rounded-full"
            style={{
              width: `${100 + index * 40}%`,
              height: `${100 + index * 40}%`,
              borderColor: `rgba(59, 130, 246, ${0.8 - index * 0.2})`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 360],
              borderWidth: ['4px', '2px', '4px'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              style={{
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
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