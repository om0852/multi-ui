'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full origin-center"
            style={{
              transform: `rotate(${index * 60}deg)`,
            }}
          >
            <motion.div
              className="absolute w-1/2 h-full overflow-hidden"
              style={{
                transformOrigin: '100% 50%',
              }}
              animate={{
                rotate: [0, 60, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(${index * 60}deg, #60A5FA, #F472B6)`,
                  transform: 'translateX(-50%)',
                }}
              />
            </motion.div>
          </motion.div>
        ))}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(244,114,182,0.2) 100%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
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