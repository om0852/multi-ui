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
  const numLeaves = 20;
  const leaves = Array.from({ length: numLeaves }).map((_, i) => ({
    angle: (i * 360) / numLeaves,
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.2,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Nature effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="forest-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e">
              <animate
                attributeName="stop-color"
                values="#22c55e;#16a34a;#22c55e"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#16a34a">
              <animate
                attributeName="stop-color"
                values="#16a34a;#15803d;#16a34a"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#15803d">
              <animate
                attributeName="stop-color"
                values="#15803d;#22c55e;#15803d"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="leaf-shadow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0
                      0 0.5 0 0 0
                      0 0 0 0 0
                      0 0 0 0.3 0"
            />
          </filter>
          <pattern id="leaf-texture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 5 Q25 0, 30 5 T40 10 L30 20 Q25 25, 20 20 T0 10 L10 5z"
              fill="rgba(34, 197, 94, 0.2)"
              transform="rotate(45, 20, 20)"
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
            width: 12,
            height: 12,
            left: "50%",
            top: "50%",
            marginLeft: -6,
            marginTop: -6,
            transform: `rotate(${leaf.angle}deg) translateY(-${radius * 0.8}px)`,
            opacity: percentage > (i / numLeaves) * 100 ? 1 : 0.2,
          }}
        >
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{
              filter: "url(#leaf-shadow)",
              transform: `rotate(${leaf.rotation}deg)`,
            }}
            animate={{
              rotate: percentage > (i / numLeaves) * 100 ? [leaf.rotation, leaf.rotation + 360] : leaf.rotation,
              scale: percentage > (i / numLeaves) * 100 ? [leaf.scale, leaf.scale * 1.2, leaf.scale] : leaf.scale,
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: leaf.delay,
                ease: "easeInOut",
              },
            }}
          >
            <path
              d="M6 1 Q7.5 0, 9 1 T12 3 L9 6 Q7.5 7.5, 6 6 T0 3 L3 1z"
              fill="#22c55e"
            />
          </motion.svg>
        </motion.div>
      ))}

      {/* Forest atmosphere */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#leaf-texture)",
          opacity: 0.2,
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
          stroke="#166534"
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
          stroke="url(#forest-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
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
        {/* Forest core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
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