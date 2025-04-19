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
      {/* Art deco background pattern */}
      <div className="absolute w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-amber-200/20 via-amber-200/0 to-amber-200/20"
              style={{ transform: "translateX(-50%)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative corners */}
      {[0, 90, 180, 270].map((angle) => (
        <motion.div
          key={angle}
          className="absolute"
          style={{
            width: size * 0.2,
            height: size * 0.2,
            transform: `rotate(${angle}deg) translate(${size * 0.4}px, 0)`,
            transformOrigin: "center",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            delay: angle / 360,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-amber-200/30">
            <path
              d="M12 2L2 12l10 10 10-10L12 2zm0 18.17L3.83 12 12 3.83 20.17 12 12 20.17z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}

      {/* Main progress ring */}
      <svg className="absolute w-full h-full -rotate-90">
        <defs>
          <linearGradient id="art-deco-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#78350f"
          strokeWidth={strokeWidth / 2}
          opacity={0.2}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#art-deco-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          background: "radial-gradient(circle, rgba(251,191,36,0.1) 0%, rgba(251,191,36,0.05) 100%)",
          borderRadius: "50%",
          border: "1px solid rgba(251,191,36,0.2)",
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <div className="relative">
          <motion.div
            className="text-3xl font-light text-amber-500"
            style={{ fontFamily: "Playfair Display, serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(percentage)}
          </motion.div>
          <motion.div
            className="absolute -right-4 -top-2 text-lg text-amber-400/80"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            %
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-300/50 rounded-full"
          style={{
            transform: `rotate(${i * 30}deg) translateY(-${size * 0.45}px)`,
            transformOrigin: "center",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default CircularProgressBar; 