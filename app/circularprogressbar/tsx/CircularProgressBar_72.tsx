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

  // Generate leaves
  const numLeaves = 12;
  const leaves = Array.from({ length: numLeaves }).map((_, i) => ({
    angle: (i * 360) / numLeaves,
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.2,
    rotation: Math.random() * 360,
    color: [
      "#22c55e", // green-500
      "#16a34a", // green-600
      "#15803d", // green-700
    ][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Nature effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="leaf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e">
              <animate
                attributeName="stop-color"
                values="#22c55e;#16a34a;#22c55e"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#16a34a">
              <animate
                attributeName="stop-color"
                values="#16a34a;#15803d;#16a34a"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#15803d">
              <animate
                attributeName="stop-color"
                values="#15803d;#22c55e;#15803d"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="leaf-shadow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.133
                      0 0 0 0 0.694
                      0 0 0 0 0.298
                      0 0 0 0.3 0"
            />
          </filter>
          <pattern id="vine-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 20 Q20 0, 40 20 Q20 40, 0 20"
              fill="none"
              stroke="#15803d"
              strokeWidth="1"
              opacity="0.2"
            />
          </pattern>
        </defs>
      </svg>

      {/* Leaves */}
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 20,
            height: 20,
            left: "50%",
            top: "50%",
            marginLeft: -10,
            marginTop: -10,
            transform: `rotate(${leaf.angle}deg) translateY(-${radius * 0.7}px)`,
            opacity: percentage > (i / numLeaves) * 100 ? 1 : 0.2,
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              background: leaf.color,
              clipPath: "path('M10 0 C15 5, 20 10, 10 20 C0 10, 5 5, 10 0')",
              filter: "url(#leaf-shadow)",
            }}
            animate={{
              rotate: percentage > (i / numLeaves) * 100 
                ? [leaf.rotation, leaf.rotation + 360]
                : leaf.rotation,
              scale: percentage > (i / numLeaves) * 100 
                ? [leaf.scale, leaf.scale * 1.2, leaf.scale]
                : leaf.scale,
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: leaf.delay,
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: leaf.delay,
              },
            }}
          />
        </motion.div>
      ))}

      {/* Vine pattern */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#vine-pattern)",
          opacity: 0.3,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 10,
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
          stroke="#14532d"
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
          stroke="url(#leaf-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#leaf-shadow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-green-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(34, 197, 94, 0.3)",
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)",
        }}
      >
        {/* Nature core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.span
          className="text-xl font-bold text-green-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(34, 197, 94, 0.5)",
              "0 0 15px rgba(34, 197, 94, 0.8)",
              "0 0 5px rgba(34, 197, 94, 0.5)",
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