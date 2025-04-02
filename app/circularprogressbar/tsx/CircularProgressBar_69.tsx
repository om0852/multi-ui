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
    angle: (i * 360) / numParticles,
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.1,
    duration: 1 + Math.random(),
    color: [
      "#ef4444", // red
      "#f97316", // orange
      "#eab308", // yellow
    ][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Fire effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="fire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444">
              <animate
                attributeName="stop-color"
                values="#ef4444;#dc2626;#ef4444"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#f97316">
              <animate
                attributeName="stop-color"
                values="#f97316;#ea580c;#f97316"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#eab308">
              <animate
                attributeName="stop-color"
                values="#eab308;#ca8a04;#eab308"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="fire-blur">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0.5 0.5 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="heat-distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              result="noise"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                values="0.05;0.07;0.05"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
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
            height: 30,
            background: particle.color,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            filter: "url(#fire-blur)",
            left: "50%",
            top: "50%",
            marginLeft: -10,
            marginTop: -15,
            transform: `rotate(${particle.angle}deg) translateY(-${radius * 0.8}px)`,
            opacity: percentage > (i / numParticles) * 100 ? 0.6 : 0.1,
          }}
          animate={{
            scale: percentage > (i / numParticles) * 100 ? [particle.scale, particle.scale * 1.3, particle.scale] : particle.scale,
            opacity: percentage > (i / numParticles) * 100 ? [0.6, 0.8, 0.6] : 0.1,
            height: percentage > (i / numParticles) * 100 ? [30, 40, 30] : 30,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Heat haze effect */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
          filter: "url(#heat-distortion)",
        }}
        animate={{
          scale: [1, 1.1, 1],
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
          stroke="url(#fire-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#fire-blur)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-red-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(239, 68, 68, 0.3)",
          boxShadow: "0 0 20px rgba(239, 68, 68, 0.2)",
        }}
      >
        {/* Fire core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(239, 68, 68, 0.3) 0%, transparent 70%)",
            filter: "url(#heat-distortion)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-red-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(239, 68, 68, 0.5)",
              "0 0 15px rgba(239, 68, 68, 0.8)",
              "0 0 5px rgba(239, 68, 68, 0.5)",
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
    </div>
  );
};

export default CircularProgressBar; 