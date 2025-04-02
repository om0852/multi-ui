'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {Array.from({ length: 8 }).map((_, index) => {
          const angle = (index / 8) * Math.PI * 2;
          const orbitRadius = 40;
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;

          return (
            <motion.div
              key={index}
              className="absolute w-4 h-4"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              animate={{
                x: [x, x + Math.random() * 20 - 10],
                y: [y, y + Math.random() * 20 - 10],
                scale: [1, Math.random() * 0.5 + 0.75, 1],
                opacity: [0.6, 1, 0.6],
                background: ['#3B82F6', '#8B5CF6', '#3B82F6'],
                borderRadius: ['30%', '50%', '30%'],
                boxShadow: [
                  '0 0 5px #3B82F6',
                  '0 0 15px #8B5CF6',
                  '0 0 5px #3B82F6'
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
            />
          );
        })}
        <motion.div
          className="absolute w-6 h-6 bg-white rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 0.4, 0.8],
            boxShadow: [
              '0 0 10px rgba(255, 255, 255, 0.8)',
              '0 0 20px rgba(255, 255, 255, 0.4)',
              '0 0 10px rgba(255, 255, 255, 0.8)',
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