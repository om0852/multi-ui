import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
}

interface Stone {
  id: number;
  x: number;
  size: number;
  rotation: number;
  color: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const percentage = (value / max) * 100;
  const [stones, setStones] = useState<Stone[]>([]);

  // Stone colors
  const stoneColors = [
    "rgb(120, 113, 108)", // Stone gray
    "rgb(168, 162, 158)", // Lighter gray
    "rgb(87, 83, 78)",    // Darker gray
    "rgb(145, 139, 135)", // Medium gray
    "rgb(133, 127, 123)", // Another gray tone
  ];

  useEffect(() => {
    const maxStones = Math.floor((percentage / 100) * 40); // Maximum stones based on percentage
    const newStones = Array.from({ length: maxStones }, (_, i) => ({
      id: i,
      x: Math.random() * (size - 20),
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
      color: stoneColors[Math.floor(Math.random() * stoneColors.length)],
    }));
    setStones(newStones);
  }, [percentage, size]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Container definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="container-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(245, 245, 244)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(228, 228, 226)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="stone-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feColorMatrix
              type="matrix"
              values="
                0.3 0 0 0 0
                0 0.3 0 0 0
                0 0 0.3 0 0
                0 0 0 1 0"
              in="noise"
              result="colorNoise"
            />
            <feComposite operator="in" in="colorNoise" in2="SourceGraphic" />
          </filter>
          <clipPath id="container-clip">
            <circle cx={size / 2} cy={size / 2} r={radius} />
          </clipPath>
        </defs>
      </svg>

      {/* Container */}
      <div 
        className="absolute rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          border: `${strokeWidth}px solid rgba(120, 113, 108, 0.3)`,
          clipPath: "url(#container-clip)",
          background: "url(#container-gradient)",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {/* Stones container */}
        <div
          className="absolute bottom-0 w-full transition-all duration-300"
          style={{
            height: `${percentage}%`,
            background: "linear-gradient(to bottom, rgba(120, 113, 108, 0.1), rgba(87, 83, 78, 0.2))",
          }}
        >
          {/* Falling stones */}
          <AnimatePresence>
            {stones.map((stone, index) => (
              <motion.div
                key={stone.id}
                className="absolute"
                initial={{
                  y: -50,
                  x: stone.x,
                  rotate: stone.rotation,
                  scale: 0,
                }}
                animate={{
                  y: size - (Math.floor(index / 4) * stone.size) - stone.size,
                  x: stone.x + Math.sin(index) * 5,
                  rotate: stone.rotation,
                  scale: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  delay: index * 0.05,
                }}
                style={{
                  width: stone.size,
                  height: stone.size,
                  background: stone.color,
                  borderRadius: "50%",
                  filter: "url(#stone-texture)",
                  boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.2), inset 2px 2px 4px rgba(255,255,255,0.2)",
                }}
              >
                {/* Stone texture details */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent)",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Dust particles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute"
              style={{
                width: 2,
                height: 2,
                background: "rgba(228, 228, 226, 0.6)",
                borderRadius: "50%",
                left: `${Math.random() * 100}%`,
                bottom: "0%",
              }}
              animate={{
                y: [-20, 0],
                x: [0, (Math.random() - 0.5) * 20],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Percentage display */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
        }}
      >
        <motion.span
          className="text-xl font-bold text-gray-700"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 