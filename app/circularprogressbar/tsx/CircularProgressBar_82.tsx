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
  const percentage = (value / max) * 100;
  const fillHeight = (percentage / 100) * size;

  // Generate branch points
  const numBranches = 5;
  const branches = Array.from({ length: numBranches }).map((_, i) => {
    const heightPercent = (i + 1) / numBranches;
    const angle = (Math.sin(i * 2.5) * 30);
    return { heightPercent, angle };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Plant effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="leaf-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.9">
              <animate
                attributeName="stop-color"
                values="#86efac;#4ade80;#86efac"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#22c55e" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#22c55e;#16a34a;#22c55e"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="leaf-shadow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
          <clipPath id="container-clip">
            <circle cx={size / 2} cy={size / 2} r={radius} />
          </clipPath>
        </defs>
      </svg>

      {/* Container */}
      <div 
        className="absolute rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          border: `${strokeWidth}px solid rgba(34, 197, 94, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(134, 239, 172, 0.1), rgba(34, 197, 94, 0.15))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Plant growth area */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Main stem */}
          <motion.div
            className="absolute left-1/2 bottom-0 w-1"
            style={{
              height: "100%",
              background: "linear-gradient(to top, #22c55e, #4ade80)",
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            {/* Branches with leaves */}
            {branches.map((branch, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-8"
                style={{
                  top: `${branch.heightPercent * -100}%`,
                  left: branch.angle > 0 ? "100%" : "-400%",
                  transformOrigin: branch.angle > 0 ? "left" : "right",
                  transform: `rotate(${branch.angle}deg)`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: branch.heightPercent * 2,
                  ease: "easeOut",
                }}
              >
                {/* Leaf */}
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "url(#leaf-gradient)",
                    clipPath: "polygon(0 50%, 50% 0, 100% 50%, 50% 100%)",
                    filter: "url(#leaf-shadow)",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, branch.angle > 0 ? 5 : -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random(),
                  }}
                />
              </motion.div>
            ))}

            {/* Small leaves on stem */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`leaf-${i}`}
                className="absolute w-2 h-2"
                style={{
                  top: `${(i + 1) * 10}%`,
                  left: i % 2 === 0 ? "100%" : "-100%",
                  background: "url(#leaf-gradient)",
                  borderRadius: "50% 0",
                  transform: `rotate(${i % 2 === 0 ? 45 : -45}deg)`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (i + 1) * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>

          {/* Particles (pollen/light) */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute"
              style={{
                width: 2,
                height: 2,
                borderRadius: "50%",
                background: "#fff",
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20],
                x: [0, (Math.random() - 0.5) * 30],
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
      </div>

      {/* Percentage display */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
        }}
      >
        <motion.span
          className="text-xl font-bold text-white"
          style={{
            textShadow: "0 2px 4px rgba(34, 197, 94, 0.5)",
          }}
          animate={{
            scale: [1, 1.05, 1],
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