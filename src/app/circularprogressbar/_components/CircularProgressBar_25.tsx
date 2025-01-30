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

  // Generate triangle positions
  const triangles = Array.from({ length: 6 }, (_, i) => ({
    angle: (i * 60),
    scale: 0.8 + Math.random() * 0.4,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Geometric background */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)",
          boxShadow: "inset 0 0 30px rgba(167,139,250,0.3)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Rotating geometric shapes */}
      {triangles.map((triangle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: size * 0.15,
            height: size * 0.15,
            transformOrigin: "center",
          }}
          initial={{ scale: 0, rotate: triangle.angle }}
          animate={{
            scale: [0, triangle.scale, 0],
            rotate: [triangle.angle, triangle.angle + 360],
            x: [0, (size / 3) * Math.cos((i * Math.PI) / 3)],
            y: [0, (size / 3) * Math.sin((i * Math.PI) / 3)],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-violet-400/30">
            <path
              d="M12 2L2 22h20L12 2z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}

      {/* Segmented progress ring */}
      <svg className="absolute w-full h-full -rotate-90">
        <defs>
          <linearGradient id="geometric-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa">
              <animate attributeName="stop-color" values="#a78bfa;#8b5cf6;#a78bfa" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#a78bfa;#8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#geometric-gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference / 24} ${circumference / 24}`}
            strokeDashoffset={strokeDashoffset + (i * circumference / 12)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            style={{
              filter: "drop-shadow(0 0 2px rgba(167,139,250,0.5))",
            }}
          />
        ))}
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute flex flex-col items-center justify-center"
        style={{
          width: size * 0.6,
          height: size * 0.6,
          background: "linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.1))",
          borderRadius: "16px",
          transform: "rotate(45deg)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <motion.div
          style={{ transform: "rotate(-45deg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            className="text-3xl font-bold text-violet-300"
            animate={{
              textShadow: [
                "0 0 4px rgba(167,139,250,0.5)",
                "0 0 8px rgba(167,139,250,0.5)",
                "0 0 4px rgba(167,139,250,0.5)",
              ],
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
      </motion.div>

      {/* Corner accents */}
      {[45, 135, 225, 315].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-2 h-2 bg-violet-400/50"
          style={{
            transform: `rotate(${angle}deg) translate(${size * 0.4}px) rotate(-${angle}deg)`,
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default CircularProgressBar; 