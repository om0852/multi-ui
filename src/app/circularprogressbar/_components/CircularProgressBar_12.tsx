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

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Filter for neon glow effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {/* Background Circle with subtle glow */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1f2937"
          strokeWidth={strokeWidth}
          filter="url(#neon-glow)"
        />
      </svg>

      {/* Progress Circle with neon effect */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#22d3ee"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
          filter="url(#neon-glow)"
          style={{ filter: "drop-shadow(0 0 8px #22d3ee)" }}
        />
      </svg>

      {/* Percentage Display with neon text */}
      <motion.div
        className="absolute"
        animate={{
          textShadow: ["0 0 4px #22d3ee", "0 0 8px #22d3ee", "0 0 4px #22d3ee"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="text-2xl font-bold text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>

      {/* Outer glowing ring */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius + strokeWidth}
            fill="none"
            stroke="#22d3ee"
            strokeWidth={1}
            style={{ filter: "blur(4px)" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 