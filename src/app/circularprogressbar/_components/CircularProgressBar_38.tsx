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

  // Generate flame particles
  const numParticles = 12;
  const particles = Array.from({ length: numParticles }).map((_, i) => {
    const angle = (i * 360) / numParticles;
    return { angle, delay: i * 0.1 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Fire gradient definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <filter id="fireGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Flame particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 20,
            height: 20,
            transformOrigin: "center",
          }}
          animate={{
            x: [
              Math.cos((particle.angle * Math.PI) / 180) * (radius - 10),
              Math.cos((particle.angle * Math.PI) / 180) * (radius + 5),
              Math.cos((particle.angle * Math.PI) / 180) * (radius - 10),
            ],
            y: [
              Math.sin((particle.angle * Math.PI) / 180) * (radius - 10),
              Math.sin((particle.angle * Math.PI) / 180) * (radius + 5),
              Math.sin((particle.angle * Math.PI) / 180) * (radius - 10),
            ],
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-orange-500">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              style={{
                filter: "url(#fireGlow)",
                opacity: percentage > (i / numParticles) * 100 ? 1 : 0.3,
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#7f1d1d"
          strokeWidth={strokeWidth}
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
          stroke="url(#fireGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#fireGlow)" }}
        />
      </svg>

      {/* Center flame */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-b from-orange-500 via-red-500 to-red-700 flex items-center justify-center overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          boxShadow: "0 0 20px rgba(239,68,68,0.5)",
        }}
      >
        <motion.div
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        <motion.span
          className="text-xl font-bold text-white relative z-10"
          animate={{
            textShadow: [
              "0 0 4px rgba(239,68,68,0.5)",
              "0 0 8px rgba(239,68,68,0.8)",
              "0 0 4px rgba(239,68,68,0.5)",
            ],
          }}
          transition={{
            duration: 1,
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