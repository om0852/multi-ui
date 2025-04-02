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

  // Generate vinyl grooves
  const numGrooves = 20;
  const grooves = Array.from({ length: numGrooves }).map((_, i) => ({
    radius: (radius * 0.8 * i) / numGrooves,
    delay: i * 0.1,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Vinyl effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="vinyl-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <filter id="vinyl-shine">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feSpecularLighting
              in="blur"
              specularExponent="20"
              lightingColor="#fff"
              surfaceScale="2"
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
          <pattern id="groove-pattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
      </svg>

      {/* Vinyl disc */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size - strokeWidth * 2,
          height: size - strokeWidth * 2,
          background: "url(#vinyl-gradient)",
          filter: "url(#vinyl-shine)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Vinyl grooves */}
        {grooves.map((groove, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: groove.radius * 2,
              height: groove.radius * 2,
              border: "1px solid rgba(255,255,255,0.1)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              opacity: percentage > (i / numGrooves) * 100 ? 1 : 0.2,
            }}
            animate={{
              scale: percentage > (i / numGrooves) * 100 ? [1, 1.02, 1] : 1,
              opacity: percentage > (i / numGrooves) * 100 ? [0.1, 0.3, 0.1] : 0.1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: groove.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Label */}
        <motion.div
          className="absolute rounded-full bg-slate-800"
          style={{
            width: radius * 0.6,
            height: radius * 0.6,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-slate-600"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              border: "2px solid rgba(255,255,255,0.2)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0f172a"
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
          stroke="url(#vinyl-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 32} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#vinyl-shine)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-slate-900/80 flex items-center justify-center backdrop-blur-sm"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* RPM indicator */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "url(#groove-pattern)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.span
          className="text-xl font-bold text-slate-300"
          style={{ fontFamily: "'Courier New', monospace" }}
          animate={{
            scale: [1, 1.1, 1],
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