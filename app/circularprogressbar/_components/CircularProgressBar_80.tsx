import React from "react";
import { motion } from "framer-motion";

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
  const fillHeight = (percentage / 100) * size;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Neon effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#f0abfc;#e879f9;#f0abfc"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#c026d3" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#c026d3;#a21caf;#c026d3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="neon-glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="
                1.5 0 0 0 0
                0 1.5 0 0 0
                0 0 1.5 0 0
                0 0 0 2 0"
            />
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
          border: `${strokeWidth}px solid rgba(192, 38, 211, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(192, 38, 211, 0.1), rgba(147, 51, 234, 0.15))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Neon liquid fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            background: "url(#neon-gradient)",
            filter: "url(#neon-glow)",
          }}
        >
          {/* Neon waves */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-4"
              style={{
                bottom: `${i * 30}%`,
                background: "url(#neon-gradient)",
                filter: "url(#neon-glow)",
                opacity: 0.6,
              }}
              animate={{
                y: [0, -10, 0],
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Floating particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 3,
                height: 3,
                background: "#fff",
                borderRadius: "50%",
                left: `${Math.random() * 100}%`,
                bottom: "0%",
                filter: "url(#neon-glow)",
              }}
              animate={{
                y: [-size * (Math.random() * 0.8), 0],
                x: [
                  0,
                  Math.sin(Math.random() * Math.PI * 2) * 20,
                  0
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Surface glow */}
        <motion.div
          className="absolute w-full"
          style={{
            height: 4,
            bottom: `${percentage}%`,
            background: "linear-gradient(90deg, transparent, #f0abfc, transparent)",
            filter: "url(#neon-glow)",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
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
            textShadow: "0 0 10px #f0abfc",
          }}
          animate={{
            textShadow: [
              "0 0 10px #f0abfc",
              "0 0 20px #f0abfc",
              "0 0 10px #f0abfc",
            ],
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