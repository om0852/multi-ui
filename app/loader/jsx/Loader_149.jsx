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
            className="absolute w-full h-full origin-center"
            style={{
              rotate: `${index * 45}deg`,
            }}
          >
            <motion.div
              className="absolute w-20 h-4"
              style={{
                background: 'linear-gradient(90deg, #3B82F6, transparent)',
                left: '50%',
                top: '50%',
                transformOrigin: 'left center',
                transform: 'translate(0, -50%)',
              }}
              animate={{
                rotate: [0, 360],
                scaleX: [1, 0.5, 1],
                opacity: [0.8, 0.3, 0.8],
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
          className="absolute w-12 h-12 rounded-full"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, #3B82F6 100%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.4, 0.8],
            rotate: [0, 180, 360],
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