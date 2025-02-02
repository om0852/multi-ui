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

  // Generate particles
  const particles = Array.from({ length: 8 }).map((_, i) => {
    const angle = (i * 360) / 8;
    return { angle, delay: i * 0.2 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Glow effect filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-400 rounded-full"
          style={{
            filter: "blur(1px)",
          }}
          animate={{
            x: [
              Math.cos((particle.angle * Math.PI) / 180) * (radius - 10),
              Math.cos((particle.angle * Math.PI) / 180) * (radius + 10),
              Math.cos((particle.angle * Math.PI) / 180) * (radius - 10),
            ],
            y: [
              Math.sin((particle.angle * Math.PI) / 180) * (radius - 10),
              Math.sin((particle.angle * Math.PI) / 180) * (radius + 10),
              Math.sin((particle.angle * Math.PI) / 180) * (radius - 10),
            ],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* Progress Circle with glow */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#10b981"
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

      {/* Percentage Text */}
      <motion.div
        className="absolute"
        animate={{
          textShadow: [
            "0 0 4px rgba(16, 185, 129, 0.4)",
            "0 0 8px rgba(16, 185, 129, 0.6)",
            "0 0 4px rgba(16, 185, 129, 0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-xl font-bold text-emerald-500">
          {Math.round(percentage)}%
        </span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 