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
  const facets = Array.from({ length: numFacets }).map((_, i) => ({
    angle: (i * 360) / numFacets,
    scale: 0.8 + Math.random() * 0.4,
    delay: i * 0.2,
    color: i % 2 === 0 ? "#0ea5e9" : "#06b6d4", // Alternate colors
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Crystal effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9">
              <animate
                attributeName="stop-color"
                values="#0ea5e9;#0284c7;#0ea5e9"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#06b6d4">
              <animate
                attributeName="stop-color"
                values="#06b6d4;#0891b2;#06b6d4"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0284c7">
              <animate
                attributeName="stop-color"
                values="#0284c7;#0ea5e9;#0284c7"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="crystal-shine">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feSpecularLighting
              in="blur"
              specularExponent="20"
              lightingColor="#fff"
              surfaceScale="4"
              result="specular"
            >
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite
              in="SourceGraphic"
              in2="specular"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="1"
              k4="0"
            />
          </filter>
          <pattern id="crystal-texture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 20 L20 0 L40 20 L20 40 Z"
              fill="none"
              stroke="rgba(14, 165, 233, 0.2)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
      </svg>

      {/* Crystal facets */}
      {facets.map((facet, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: 40,
            height: 40,
            background: `linear-gradient(${facet.angle}deg, ${facet.color}40, transparent)`,
            left: "50%",
            top: "50%",
            marginLeft: -20,
            marginTop: -20,
            transform: `rotate(${facet.angle}deg) translateY(-${radius * 0.6}px)`,
            opacity: percentage > (i / numFacets) * 100 ? 0.6 : 0.1,
            filter: "url(#crystal-shine)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          animate={{
            scale: percentage > (i / numFacets) * 100 ? [facet.scale, facet.scale * 1.1, facet.scale] : facet.scale,
            opacity: percentage > (i / numFacets) * 100 ? [0.6, 0.8, 0.6] : 0.1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: facet.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Crystal texture */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#crystal-texture)",
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
          stroke="#0c4a6e"
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
          strokeDasharray={`${circumference / 24} ${circumference / 48}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#crystal-shine)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-sky-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(14, 165, 233, 0.3)",
          boxShadow: "0 0 20px rgba(14, 165, 233, 0.2)",
        }}
      >
        {/* Crystal core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(14, 165, 233, 0.2) 0%, transparent 70%)",
            filter: "url(#crystal-shine)",
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
          className="text-xl font-bold text-sky-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(14, 165, 233, 0.5)",
              "0 0 15px rgba(14, 165, 233, 0.8)",
              "0 0 5px rgba(14, 165, 233, 0.5)",
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