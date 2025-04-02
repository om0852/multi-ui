'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8"
            style={{
              background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.8, 0.3, 0.8],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (index % 5 + Math.floor(index / 5)) * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader; 