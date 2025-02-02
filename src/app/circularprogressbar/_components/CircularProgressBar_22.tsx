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
      <svg className="absolute w-full h-full -rotate-90">
        <defs>
          <linearGradient id="nature-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(52,211,153,0.2)"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#nature-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 3px rgba(52,211,153,0.5))",
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