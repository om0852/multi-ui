import React from "react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size: number;
  strokeWidth: number;
  glowIntensity: number;
  neonColor: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size,
  strokeWidth,
  glowIntensity,
  neonColor
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), max);
  const percentage = (normalizedValue / max) * 100;
  
  // Calculate dimensions
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Generate unique filter ID
  const filterId = `neon-glow-${neonColor.replace('#', '')}`;

  // Generate leaf positions
  const leaves = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 360) / 12,
    scale: 0.8 + Math.random() * 0.4,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Nature gradient background */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, rgba(16,185,129,0.05) 100%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative leaves */}
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: size * 0.15,
            height: size * 0.15,
            transformOrigin: "center",
            rotate: `${leaf.angle}deg`,
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, leaf.scale, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-emerald-500/30">
            <path
              d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}

      {/* Progress ring */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Define the glow filter */}
        <defs>
          <filter id={filterId}>
            <feGaussianBlur
              stdDeviation={glowIntensity}
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle with glow effect */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={neonColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            filter: `url(#${filterId})`,
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
          className="animate-pulse"
        />

        {/* Inner glow circle */}
        <circle
          cx={center}
          cy={center}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={neonColor}
          strokeWidth="1"
          style={{
            filter: `url(#${filterId})`,
            opacity: 0.5,
          }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute flex flex-col items-center justify-center bg-white/10 rounded-full backdrop-blur-sm"
        style={{
          width: size * 0.65,
          height: size * 0.65,
          boxShadow: "inset 0 0 20px rgba(52,211,153,0.2)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <motion.div
          className="text-3xl font-semibold text-emerald-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.round(percentage)}%
        </motion.div>
        <motion.div
          className="text-xs text-emerald-300/80 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          growth
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 