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

  // Generate glitch segments
  const numSegments = 12;
  const segments = Array.from({ length: numSegments }).map((_, i) => ({
    angle: (i * 360) / numSegments,
    length: 10 + Math.random() * 20,
    delay: i * 0.1,
    glitchDelay: Math.random() * 5,
    color: [
      "#ec4899", // pink-500
      "#14b8a6", // teal-500
      "#f43f5e", // rose-500
    ][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Neon effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899">
              <animate
                attributeName="stop-color"
                values="#ec4899;#14b8a6;#ec4899"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#14b8a6">
              <animate
                attributeName="stop-color"
                values="#14b8a6;#f43f5e;#14b8a6"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f43f5e">
              <animate
                attributeName="stop-color"
                values="#f43f5e;#ec4899;#f43f5e"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glitch">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.15"
              numOctaves="1"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.15;0.3;0.15"
                dur="8s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
          <pattern id="cyber-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="#14b8a6" strokeWidth="0.5" opacity="0.2" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="#ec4899" strokeWidth="0.5" opacity="0.2" />
            <line x1="10" y1="0" x2="10" y2="20" stroke="#f43f5e" strokeWidth="0.5" opacity="0.2" />
          </pattern>
        </defs>
      </svg>

      {/* Glitch segments */}
      {segments.map((segment, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 2,
            height: segment.length,
            background: segment.color,
            left: "50%",
            top: "50%",
            marginLeft: -1,
            marginTop: -segment.length / 2,
            transform: `rotate(${segment.angle}deg) translateY(-${radius * 0.8}px)`,
            filter: "url(#neon-glow)",
            opacity: percentage > (i / numSegments) * 100 ? 1 : 0.2,
          }}
          animate={{
            height: percentage > (i / numSegments) * 100 
              ? [segment.length, segment.length * 1.5, segment.length]
              : segment.length,
            opacity: percentage > (i / numSegments) * 100 
              ? [1, 0.5, 1]
              : 0.2,
            x: percentage > (i / numSegments) * 100
              ? [0, 2, -2, 0]
              : 0,
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            delay: segment.glitchDelay,
            ease: "linear",
          }}
        />
      ))}

      {/* Cyber pattern */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#cyber-pattern)",
          opacity: 0.3,
          filter: "url(#glitch)",
        }}
        animate={{
          scale: [1, 1.05, 0.95, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#18181b"
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
          stroke="url(#neon-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 20} ${circumference / 40}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#neon-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-zinc-900/50 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(236, 72, 153, 0.3)",
          boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)",
        }}
      >
        {/* Digital core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
            filter: "url(#glitch)",
          }}
          animate={{
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold"
          style={{
            fontFamily: "'Courier New', monospace",
            color: "#ec4899",
            textShadow: "0 0 10px rgba(236, 72, 153, 0.8)",
          }}
          animate={{
            opacity: [1, 0.8, 1],
            scale: [1, 1.1, 1],
            color: ["#ec4899", "#14b8a6", "#f43f5e", "#ec4899"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 