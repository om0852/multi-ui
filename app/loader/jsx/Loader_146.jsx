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
            className="absolute w-full h-full"
            style={{
              transformOrigin: 'center',
              rotate: `${index * 60}deg`,
            }}
          >
            <motion.div
              className="absolute w-4 h-16"
              style={{
                background: 'linear-gradient(to bottom, #3B82F6, transparent)',
                left: '50%',
                transformOrigin: 'top',
                transform: 'translateX(-50%)',
              }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
        <motion.div
          className="absolute w-8 h-8 rounded-full"
          style={{
            background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(139, 92, 246, 0.5)',
              '0 0 20px rgba(59, 130, 246, 0.5)',
            ],
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