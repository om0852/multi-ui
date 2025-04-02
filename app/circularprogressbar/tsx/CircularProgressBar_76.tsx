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
  const waveHeight = size * 0.1;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Liquid effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8">
              <animate
                attributeName="stop-opacity"
                values="0.8;0.6;0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1">
              <animate
                attributeName="stop-color"
                values="#0ea5e9;#0284c7;#0ea5e9"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="liquid-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
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
          border: `${strokeWidth}px solid rgba(148, 163, 184, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(241, 245, 249, 0.1), rgba(241, 245, 249, 0.05))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Liquid fill */}
        <motion.div
          className="absolute bottom-0 w-full"
          initial={{ height: 0 }}
          animate={{ height: fillHeight }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            background: "url(#liquid-gradient)",
            filter: "url(#liquid-blur)",
          }}
        >
          {/* Wave 1 */}
          <motion.div
            className="absolute w-[200%] h-full"
            style={{
              background: "url(#liquid-gradient)",
              opacity: 0.6,
            }}
            animate={{
              x: ["-50%", "0%", "-50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="100%"
              height={waveHeight}
              style={{ position: "absolute", top: -waveHeight / 2 }}
            >
              <path
                d={`M 0 ${waveHeight} 
                   Q ${size / 2} 0, ${size} ${waveHeight} 
                   T ${size * 2} ${waveHeight} 
                   V ${size} 
                   H 0 
                   Z`}
                fill="url(#liquid-gradient)"
              >
                <animate
                  attributeName="d"
                  values={`
                    M 0 ${waveHeight} Q ${size / 2} 0, ${size} ${waveHeight} T ${size * 2} ${waveHeight} V ${size} H 0 Z;
                    M 0 ${waveHeight} Q ${size / 2} ${waveHeight}, ${size} 0 T ${size * 2} ${waveHeight} V ${size} H 0 Z;
                    M 0 ${waveHeight} Q ${size / 2} 0, ${size} ${waveHeight} T ${size * 2} ${waveHeight} V ${size} H 0 Z
                  `}
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </motion.div>

          {/* Wave 2 */}
          <motion.div
            className="absolute w-[200%] h-full"
            style={{
              background: "url(#liquid-gradient)",
              opacity: 0.4,
            }}
            animate={{
              x: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="100%"
              height={waveHeight}
              style={{ position: "absolute", top: -waveHeight / 2 }}
            >
              <path
                d={`M 0 ${waveHeight} 
                   Q ${size / 2} 0, ${size} ${waveHeight} 
                   T ${size * 2} ${waveHeight} 
                   V ${size} 
                   H 0 
                   Z`}
                fill="url(#liquid-gradient)"
              >
                <animate
                  attributeName="d"
                  values={`
                    M 0 ${waveHeight} Q ${size / 2} ${waveHeight}, ${size} 0 T ${size * 2} ${waveHeight} V ${size} H 0 Z;
                    M 0 ${waveHeight} Q ${size / 2} 0, ${size} ${waveHeight} T ${size * 2} ${waveHeight} V ${size} H 0 Z;
                    M 0 ${waveHeight} Q ${size / 2} ${waveHeight}, ${size} 0 T ${size * 2} ${waveHeight} V ${size} H 0 Z
                  `}
                  dur="5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </motion.div>

          {/* Bubbles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-sky-200/30"
              style={{
                width: 4 + Math.random() * 6,
                height: 4 + Math.random() * 6,
                left: `${Math.random() * 100}%`,
                bottom: "0%",
              }}
              animate={{
                y: [0, -size * 0.8],
                x: [0, (Math.random() - 0.5) * 20],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        {/* Glass reflection */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%)",
          }}
        />
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
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          animate={{
            opacity: [1, 0.8, 1],
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