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

  // Generate leaf positions
  const numLeaves = 6;
  const leaves = Array.from({ length: numLeaves }).map((_, i) => {
    const angle = (i * 360) / numLeaves;
    return { angle, delay: i * 0.2 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Nature gradient definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated leaves */}
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 12,
            height: 12,
            transformOrigin: "center",
            transform: `rotate(${leaf.angle}deg) translateY(-${radius + 10}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [`${leaf.angle}deg`, `${leaf.angle + 10}deg`, `${leaf.angle}deg`],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-green-500"
            style={{
              transform: `rotate(${-leaf.angle}deg)`,
              opacity: percentage > (i / numLeaves) * 100 ? 1 : 0.3,
            }}
          >
            <path
              fill="currentColor"
              d="M12 2L8 6H16L12 2zM12 22L8 18H16L12 22z"
            />
          </svg>
        </motion.div>
      ))}

      {/* Background Circle with natural texture */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#dcfce7"
          strokeWidth={strokeWidth}
          strokeDasharray="4 2"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#leafGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
        />
      </svg>

      {/* Center circle with natural animation */}
      <motion.div
        className="absolute bg-green-50 rounded-full flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(34, 197, 94, 0.2)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="text-xl font-bold text-green-600"
          animate={{
            opacity: [0.7, 1, 0.7],
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