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
      {/* Space background effect */}
      <motion.div
        className="absolute w-full h-full rounded-full overflow-hidden"
        style={{
          background: "linear-gradient(45deg, #000428, #004e92)",
        }}
      >
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Orbital rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full rounded-full border border-blue-400/20"
          style={{
            transform: `scale(${0.8 + i * 0.1})`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Progress ring */}
      <svg className="absolute w-full h-full -rotate-90">
        <defs>
          <linearGradient id="cosmic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa">
              <animate attributeName="stop-color" values="#60a5fa;#818cf8;#60a5fa" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#818cf8">
              <animate attributeName="stop-color" values="#818cf8;#60a5fa;#818cf8" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#cosmic-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: "drop-shadow(0 0 8px rgba(96,165,250,0.5))",
          }}
        />
      </svg>

      {/* Planets */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-blue-400/50"
          animate={{
            rotate: 360,
            x: [0, (radius * Math.cos(i * Math.PI / 2))],
            y: [0, (radius * Math.sin(i * Math.PI / 2))],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-blue-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Center display */}
      <motion.div
        className="absolute flex flex-col items-center justify-center"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          background: "radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(96,165,250,0.1) 100%)",
          borderRadius: "50%",
          backdropFilter: "blur(4px)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <motion.div
          className="text-3xl font-bold text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {Math.round(percentage)}%
        </motion.div>
        <motion.div
          className="text-xs text-blue-200/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          cosmic energy
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 