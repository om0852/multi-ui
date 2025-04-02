'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24"
        style={{
          background: 'linear-gradient(45deg, #60A5FA, #F472B6)',
        }}
        animate={{
          borderRadius: ['0%', '50%', '0%', '50%', '0%'],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
          }}
          animate={{
            clipPath: [
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader; 