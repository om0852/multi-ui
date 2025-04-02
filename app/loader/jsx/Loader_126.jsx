'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-blue-500"
            style={{
              width: '100%',
              height: '100%',
              transformOrigin: 'center',
              transform: `rotate(${index * 45}deg)`,
            }}
            animate={{
              rotate: [index * 45, (index * 45) + 360],
              scale: [1, 0.8, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute w-3 h-3 bg-blue-500"
              style={{
                top: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader; 