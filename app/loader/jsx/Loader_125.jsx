'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const rows = 8;
  const cols = 8;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: rows * cols }).map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 flex items-center justify-center text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              color: ['#60A5FA', '#34D399', '#60A5FA'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader; 