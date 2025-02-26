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

  // Generate pixel dots
  const numPixels = 16;
  const pixels = Array.from({ length: numPixels }).map((_, i) => {
    const angle = (i * 360) / numPixels;
    const x = size / 2 + radius * Math.cos((angle * Math.PI) / 180);
    const y = size / 2 + radius * Math.sin((angle * Math.PI) / 180);
    return { x, y, delay: i * 0.1 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Pixel dots */}
      <svg className="absolute" width={size} height={size}>
        {pixels.map((pixel, i) => (
          <motion.rect
            key={i}
            x={pixel.x - 2}
            y={pixel.y - 2}
            width={4}
            height={4}
            fill={percentage > (i / numPixels) * 100 ? "#fbbf24" : "#d1d5db"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: percentage > (i / numPixels) * 100 ? [0.5, 1, 0.5] : 0.3,
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: pixel.delay,
            }}
          />
        ))}
      </svg>

      {/* Background Circle with pixel effect */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#374151"
          strokeWidth={strokeWidth}
          strokeDasharray="4 4"
          className="opacity-30"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#fbbf24"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 32} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
          strokeLinecap="square"
          style={{ filter: "drop-shadow(0 0 2px #fbbf24)" }}
        />
      </svg>

      {/* Pixelated center */}
      <motion.div
        className="absolute bg-gray-900 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          clipPath: "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)",
        }}
        animate={{
          borderColor: ["#fbbf24", "#f59e0b", "#fbbf24"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "steps(4)",
        }}
      >
        <motion.div
          className="text-xl font-bold text-amber-400 font-mono"
          style={{
            textShadow: "2px 2px 0px #000",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "steps(2)",
          }}
        >
          {Math.round(percentage)}%
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 