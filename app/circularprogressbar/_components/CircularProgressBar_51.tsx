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
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Generate bubbles
  const numBubbles = 15;
  const bubbles = Array.from({ length: numBubbles }).map(() => ({
    x: Math.random() * size,
    y: size + Math.random() * 20,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Underwater effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </linearGradient>
          <filter id="water-blur">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 2 0 0
                      0 0 0 3 -1"
            />
          </filter>
          <filter id="ripple">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="3"
              result="turbulence"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                dur="30s"
                values="0.02;0.015;0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" />
          </filter>
        </defs>
      </svg>

      {/* Bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            background: "rgba(255, 255, 255, 0.4)",
            boxShadow: "inset -1px -1px 1px rgba(0, 0, 0, 0.1)",
            opacity: percentage > (i / numBubbles) * 100 ? 1 : 0.2,
          }}
          initial={{ y: bubble.y }}
          animate={{
            y: -20,
            x: bubble.x + Math.sin(bubble.delay) * 20,
            opacity: percentage > (i / numBubbles) * 100 ? [0.4, 0.8, 0] : 0.2,
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Water ripples */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(14, 165, 233, 0.1) 0%, transparent 70%)",
          filter: "url(#ripple)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0c4a6e"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#water-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#water-blur)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-sky-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(14, 165, 233, 0.3)",
        }}
      >
        {/* Water effect */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: `
              linear-gradient(
                0deg,
                rgba(14, 165, 233, 0.1) 0%,
                transparent 50%,
                rgba(14, 165, 233, 0.1) 100%
              )
            `,
          }}
          animate={{
            y: [-size / 2, 0, -size / 2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-sky-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(14, 165, 233, 0.5)",
              "0 0 15px rgba(14, 165, 233, 0.8)",
              "0 0 5px rgba(14, 165, 233, 0.5)",
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