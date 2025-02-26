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
      {/* 3D effect layers */}
      <div className="absolute w-full h-full rounded-full shadow-lg"
        style={{
          background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
          transform: "perspective(500px) rotateX(20deg)",
        }}
      />
      
      {/* Progress ring container */}
      <div className="absolute w-full h-full"
        style={{
          transform: "perspective(500px) rotateX(20deg)",
        }}
      >
        <svg className="w-full h-full -rotate-90">
          {/* Background ring with metallic effect */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#metallic-bg)"
            strokeWidth={strokeWidth}
          />

          {/* Progress ring with glow */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 8px #60a5fa)" }}
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="metallic-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="50%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#2a2a2a" />
            </linearGradient>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Center display with 3D effect */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
          boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.3)",
          transform: "perspective(500px) rotateX(20deg)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-2xl font-bold text-blue-400">
            {Math.round(percentage)}%
          </span>
          <span className="text-xs text-blue-300">complete</span>
        </motion.div>
      </motion.div>

      {/* Highlight effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%)",
          transform: "perspective(500px) rotateX(20deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default CircularProgressBar; 