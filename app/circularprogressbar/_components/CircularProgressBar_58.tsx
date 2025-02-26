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

  // Generate lava blobs
  const numBlobs = 8;
  const blobs = Array.from({ length: numBlobs }).map((_, i) => ({
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.5,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Lava effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="lava-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316">
              <animate
                attributeName="stop-color"
                values="#f97316;#ea580c;#f97316"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#ea580c">
              <animate
                attributeName="stop-color"
                values="#ea580c;#c2410c;#ea580c"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#c2410c">
              <animate
                attributeName="stop-color"
                values="#c2410c;#f97316;#c2410c"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="lava-blur">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.3 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="lava-distort">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
              seed="1"
            >
              <animate
                attributeName="baseFrequency"
                dur="20s"
                values="0.01;0.015;0.01"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" />
          </filter>
        </defs>
      </svg>

      {/* Lava blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: radius,
            height: radius,
            background: "url(#lava-gradient)",
            filter: "url(#lava-blur)",
            opacity: percentage > (i / numBlobs) * 100 ? 0.6 : 0.1,
          }}
          animate={{
            scale: [blob.scale, blob.scale * 1.2, blob.scale],
            y: [0, -30, 0],
            x: [0, Math.sin(blob.delay) * 20, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Lava flow effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
          filter: "url(#lava-distort)",
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
            duration: 5,
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
          stroke="url(#lava-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#lava-blur)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-orange-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(249, 115, 22, 0.3)",
        }}
      >
        {/* Lava core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(249, 115, 22, 0.3) 0%, transparent 70%)",
            filter: "url(#lava-distort)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="text-xl font-bold text-orange-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(249, 115, 22, 0.5)",
              "0 0 15px rgba(249, 115, 22, 0.8)",
              "0 0 5px rgba(249, 115, 22, 0.5)",
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