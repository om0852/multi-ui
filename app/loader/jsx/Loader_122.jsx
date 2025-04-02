'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const hexSize = 20;
  const hexPoints = "14.43,25 0,12.5 14.43,0 43.3,0 57.73,12.5 43.3,25";

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-64 h-64">
        {Array.from({ length: 7 }).map((_, row) => (
          Array.from({ length: 7 }).map((_, col) => {
            const offset = row % 2 === 0 ? 0 : hexSize;
            return (
              <motion.div
                key={`${row}-${col}`}
                className="absolute"
                style={{
                  left: `${col * (hexSize * 2) + offset}px`,
                  top: `${row * (hexSize * 1.5)}px`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row + col) * 0.1,
                  ease: "easeInOut",
                }}
              >
                <svg width={hexSize * 3} height={hexSize * 2} viewBox="0 0 60 25">
                  <polygon
                    points={hexPoints}
                    fill="none"
                    stroke="#60A5FA"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            );
          })
        ))}
      </div>
    </div>
  );
};

export default Loader; 