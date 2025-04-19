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
      {/* Holographic background effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(98, 0, 255, 0.1), rgba(0, 255, 255, 0.1))",
          filter: "blur(8px)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer ring with segments */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={radius + 4}
            fill="none"
            stroke="rgba(147, 51, 234, 0.3)"
            strokeWidth={1}
            strokeDasharray={`${circumference / 24} ${circumference / 24}`}
            transform={`rotate(${i * 30} ${size / 2} ${size / 2})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </svg>

      {/* Background Circle */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(147, 51, 234, 0.1)"
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* Progress Circle with gradient */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>

      {/* Center display with futuristic elements */}
      <motion.div
        className="absolute flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500"
          animate={{
            textShadow: [
              "0 0 8px rgba(147, 51, 234, 0.5)",
              "0 0 16px rgba(147, 51, 234, 0.5)",
              "0 0 8px rgba(147, 51, 234, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(percentage)}
        </motion.div>
        <motion.div
          className="text-xs text-purple-400 mt-1 tracking-wider"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          PROGRESS
        </motion.div>
      </motion.div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            transformOrigin: "center",
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360],
            x: [0, (size / 2) * Math.cos((i * Math.PI) / 3)],
            y: [0, (size / 2) * Math.sin((i * Math.PI) / 3)],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CircularProgressBar; 