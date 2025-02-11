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
  const numBubbles = 20;
  const bubbles = Array.from({ length: numBubbles }).map((_, i) => ({
    x: Math.random() * size,
    y: size + Math.random() * 20,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Chemical effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="chemical-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="50%" stopColor="#65a30d" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#84cc16" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="liquid">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="3"
              result="turbulence"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                dur="30s"
                values="0.01;0.015;0.01"
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
            background: "rgba(132, 204, 22, 0.4)",
            filter: "url(#glow)",
            opacity: percentage > (i / numBubbles) * 100 ? 1 : 0.2,
          }}
          initial={{ y: bubble.y }}
          animate={{
            y: -20,
            x: bubble.x + Math.sin(bubble.delay) * 10,
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

      {/* Chemical liquid effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(132, 204, 22, 0.1) 0%, transparent 70%)",
          filter: "url(#liquid)",
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
          stroke="#3f6212"
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
          stroke="url(#chemical-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-lime-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(132, 204, 22, 0.3)",
        }}
      >
        {/* Chemical reaction effect */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(circle at center, rgba(132, 204, 22, 0.2) 0%, transparent 70%),
              linear-gradient(0deg, rgba(132, 204, 22, 0.1) 0%, transparent 50%, rgba(132, 204, 22, 0.1) 100%)
            `,
            filter: "url(#liquid)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-lime-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(132, 204, 22, 0.5)",
              "0 0 15px rgba(132, 204, 22, 0.8)",
              "0 0 5px rgba(132, 204, 22, 0.5)",
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