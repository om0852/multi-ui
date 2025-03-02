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

  // Generate crystal facets
  const numFacets = 12;
  const facets = Array.from({ length: numFacets }).map((_, i) => {
    const angle = (i * 360) / numFacets;
    return { angle, delay: i * 0.2 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Crystal effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
          </linearGradient>
          <filter id="crystal-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#e2e8f0" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="prism">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feColorMatrix
              in="blur"
              type="hueRotate"
              values="0">
              <animate
                attributeName="values"
                values="0;360;0"
                dur="8s"
                repeatCount="indefinite"
              />
            </feColorMatrix>
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 2 -0.5"
            />
          </filter>
        </defs>
      </svg>

      {/* Crystal facets */}
      {facets.map((facet, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 2,
            height: radius * 0.6,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.2))",
            left: "50%",
            top: "50%",
            transformOrigin: "top",
            transform: `rotate(${facet.angle}deg) translateY(-${radius}px)`,
            filter: "url(#prism)",
            opacity: percentage > (i / numFacets) * 100 ? 1 : 0.2,
          }}
          animate={{
            opacity: percentage > (i / numFacets) * 100 ? [0.4, 0.8, 0.4] : 0.2,
            height: [radius * 0.6, radius * 0.7, radius * 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: facet.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light refraction effect */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "url(#prism)",
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#475569"
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
          stroke="url(#crystal-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#crystal-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-slate-800/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(226, 232, 240, 0.3)",
          background: "linear-gradient(135deg, rgba(226, 232, 240, 0.1), rgba(148, 163, 184, 0.05))",
        }}
      >
        {/* Crystal core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            filter: "url(#prism)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-slate-200"
          animate={{
            textShadow: [
              "0 0 5px rgba(226, 232, 240, 0.5)",
              "0 0 15px rgba(226, 232, 240, 0.8)",
              "0 0 5px rgba(226, 232, 240, 0.5)",
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