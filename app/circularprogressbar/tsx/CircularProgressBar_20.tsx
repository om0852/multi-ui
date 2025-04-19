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
      {/* Rainbow spiral effect */}
      <svg className="absolute w-full h-full">
        <defs>
          <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000">
              <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="33%" stopColor="#00ff00">
              <animate attributeName="offset" values="0.33;1.33;0.33" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="66%" stopColor="#0000ff">
              <animate attributeName="offset" values="0.66;1.66;0.66" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#ff0000">
              <animate attributeName="offset" values="1;2;1" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      {/* Spiral segments */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: size,
            height: size,
            rotate: `${i * 45}deg`,
          }}
          animate={{
            rotate: [i * 45, (i * 45) + 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * -0.5,
          }}
        >
          <svg width={size} height={size} className="absolute">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius - (i * (strokeWidth / 2))}
              fill="none"
              stroke="url(#rainbow)"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference / 16} ${circumference / 16}`}
              opacity={0.2 + (i * 0.1)}
            />
          </svg>
        </motion.div>
      ))}

      {/* Progress circle */}
      <svg className="absolute w-full h-full -rotate-90">
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#rainbow)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
        style={{ width: size * 0.6, height: size * 0.6 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <motion.div
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(percentage)}%
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 