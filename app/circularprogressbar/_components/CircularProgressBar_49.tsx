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
  const numParticles = 20;
  const particles = Array.from({ length: numParticles }).map((_, i) => ({
    x: Math.random() * size,
    y: Math.random() * size,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Fire effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <radialGradient id="flame-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#7c2d12" />
          </radialGradient>
          <filter id="flame-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.3 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="heat-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence">
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.05;0.07;0.05"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" />
          </filter>
        </defs>
      </svg>

      {/* Flame particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size * 1.5,
            background: "url(#flame-gradient)",
            filter: "url(#flame-glow)",
            opacity: percentage > (i / numParticles) * 100 ? 1 : 0.2,
          }}
          animate={{
            x: [particle.x - 10, particle.x + 10],
            y: [particle.y, particle.y - 20],
            opacity: percentage > (i / numParticles) * 100 ? [0.4, 0] : 0.2,
            scale: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Heat haze effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(234, 88, 12, 0.1) 0%, transparent 70%)",
          filter: "url(#heat-distortion)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#7c2d12"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#flame-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#flame-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-orange-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(234, 88, 12, 0.3)",
        }}
      >
        {/* Flame core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-orange-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(234, 88, 12, 0.5)",
              "0 0 15px rgba(234, 88, 12, 0.8)",
              "0 0 5px rgba(234, 88, 12, 0.5)",
            ],
          }}
          transition={{
            duration: 1.5,
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