import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const percentage = (value / max) * 100;
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 2 + Math.random() * 6,
      delay: Math.random() * 2,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Water effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="water-fill-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8">
              <animate
                attributeName="stop-opacity"
                values="0.8;0.6;0.8"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#2563eb;#1d4ed8;#2563eb"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="water-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
          <filter id="water-reflection">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0"
            />
          </filter>
          <clipPath id="container-clip">
            <circle cx={size / 2} cy={size / 2} r={radius} />
          </clipPath>
        </defs>
      </svg>

      {/* Glass container */}
      <div 
        className="absolute rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          border: `${strokeWidth}px solid rgba(37, 99, 235, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(219, 234, 254, 0.1), rgba(37, 99, 235, 0.1))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Water fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: `${percentage}%` }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            background: "url(#water-fill-gradient)",
            filter: "url(#water-texture)",
          }}
        >
          {/* Water surface waves */}
          <motion.div
            className="absolute w-full h-8 -top-4"
            style={{
              background: "url(#water-fill-gradient)",
              filter: "url(#water-reflection)",
            }}
            animate={{
              y: [-2, 2, -2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Wave details */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[200%] h-2"
                style={{
                  left: "-50%",
                  top: i * 2,
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                  transform: "rotate(0.5deg)",
                }}
                animate={{
                  x: ["-25%", "0%", "-25%"],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Bubbles */}
          <AnimatePresence>
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                className="absolute rounded-full"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  left: `${bubble.x}%`,
                  bottom: "0%",
                  background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))",
                  boxShadow: "0 0 2px rgba(255, 255, 255, 0.4)",
                }}
                animate={{
                  y: [0, -size],
                  x: [0, Math.sin(bubble.x) * 20],
                  opacity: [0, 0.8, 0],
                  scale: [1, 1.2, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: bubble.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </AnimatePresence>

          {/* Water reflections */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`reflection-${i}`}
              className="absolute"
              style={{
                width: size * 0.3,
                height: 2,
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                left: `${20 + i * 25}%`,
                top: `${20 + i * 30}%`,
                transform: "rotate(-20deg)",
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                width: [size * 0.3, size * 0.4, size * 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Glass reflection */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%)",
          }}
        />
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
          className="text-xl font-bold text-white"
          style={{
            textShadow: "0 2px 4px rgba(37, 99, 235, 0.5)",
          }}
          animate={{
            opacity: [1, 0.8, 1],
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