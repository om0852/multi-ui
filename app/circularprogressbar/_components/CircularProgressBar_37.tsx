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

  // Generate stars
  const numStars = 20;
  const stars = Array.from({ length: numStars }).map((_, i) => ({
    x: Math.random() * size,
    y: Math.random() * size,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Space gradient and effects */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="spaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c1d95" />
            <stop offset="50%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background with stars */}
      <div className="absolute w-full h-full rounded-full bg-gray-900">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: star.x,
              top: star.y,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Orbit rings */}
      <motion.div
        className="absolute w-full h-full rounded-full border border-purple-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full border border-violet-500/20"
        style={{ width: size - 20, height: size - 20 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#spaceGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#glow)" }}
        />
      </svg>

      {/* Center planet */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-purple-900 via-violet-800 to-purple-900 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          boxShadow: "inset -4px -4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(124,58,237,0.5)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="text-xl font-bold text-white"
          animate={{
            textShadow: [
              "0 0 4px rgba(124,58,237,0.5)",
              "0 0 8px rgba(124,58,237,0.8)",
              "0 0 4px rgba(124,58,237,0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(percentage)}%
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 