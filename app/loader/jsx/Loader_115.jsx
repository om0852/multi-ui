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
            className="absolute inset-0 border-4 border-transparent"
            style={{
              borderTopColor: ['#60A5FA', '#F472B6', '#34D399'][index],
              borderRadius: '50%',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
          >
            <motion.div
              className="absolute w-4 h-4 rounded-full"
              style={{
                backgroundColor: ['#60A5FA', '#F472B6', '#34D399'][index],
                top: '0',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Loader; 