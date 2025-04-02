'use client'

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const points = [
    { x: 20, y: 20 },
    { x: 60, y: 30 },
    { x: 80, y: 70 },
    { x: 40, y: 80 },
    { x: 20, y: 50 },
  ];

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-96 h-96">
        <svg className="w-full h-full">
          {/* Lines connecting points */}
          {points.map((start, i) => {
            const next = points[(i + 1) % points.length];
            return (
              <motion.line
                key={`line-${i}`}
                x1={start.x}
                y1={start.y}
                x2={next.x}
                y2={next.y}
                stroke="#60A5FA"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          
          {/* Points */}
          {points.map((point, i) => (
            <motion.circle
              key={`point-${i}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#60A5FA"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Loader; 