'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-4 border-blue-500"
            style={{
              width: `${100 + index * 30}%`,
              height: `${100 + index * 30}%`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8 - index * 0.2, 0.2, 0.8 - index * 0.2],
              borderColor: ['#3B82F6', '#8B5CF6', '#3B82F6'],
              borderWidth: ['4px', '2px', '4px'],
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
          className="absolute w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.8, 1, 0.8],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(139, 92, 246, 0.5)',
              '0 0 20px rgba(59, 130, 246, 0.5)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader; 