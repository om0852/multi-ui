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
              className="absolute w-20 h-4"
              style={{
                background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                left: '50%',
                transformOrigin: 'left center',
              }}
              animate={{
                rotate: [0, 360],
                scaleX: [1, 0.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-white"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.4, 0.8],
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