'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            style={{
              border: '2px solid',
              borderColor: ['#3B82F6', '#8B5CF6', '#EC4899'][index],
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 0.8, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899'][index],
                top: '0',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader; 