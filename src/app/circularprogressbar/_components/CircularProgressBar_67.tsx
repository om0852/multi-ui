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

  // Generate stars
  const numStars = 30;
  const stars = Array.from({ length: numStars }).map((_, i) => ({
    x: Math.random() * size,
    y: Math.random() * size,
    size: Math.random() * 3 + 1,
    delay: i * 0.1,
    duration: 1 + Math.random() * 2,
  }));

  // Generate orbital objects
  const numOrbits = 3;
  const orbits = Array.from({ length: numOrbits }).map((_, i) => ({
    radius: (radius * 0.6 * (i + 1)) / numOrbits,
    speed: 10 - i * 2,
    delay: i * 0.5,
    color: [
      "rgba(167, 139, 250, 0.6)", // violet
      "rgba(244, 114, 182, 0.6)", // pink
      "rgba(96, 165, 250, 0.6)", // blue
    ][i],
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Space effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="space-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed">
              <animate
                attributeName="stop-color"
                values="#7c3aed;#6d28d9;#7c3aed"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#db2777">
              <animate
                attributeName="stop-color"
                values="#db2777;#be185d;#db2777"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#1d4ed8">
              <animate
                attributeName="stop-color"
                values="#1d4ed8;#1e40af;#1d4ed8"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <filter id="star-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="nebula" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(167, 139, 250, 0.2)" />
            <stop offset="50%" stopColor="rgba(244, 114, 182, 0.1)" />
            <stop offset="100%" stopColor="rgba(96, 165, 250, 0)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: star.x,
            top: star.y,
            filter: "url(#star-glow)",
            opacity: percentage > (i / numStars) * 100 ? 1 : 0.2,
          }}
          animate={{
            scale: percentage > (i / numStars) * 100 ? [1, 1.5, 1] : 1,
            opacity: percentage > (i / numStars) * 100 ? [1, 0.5, 1] : 0.2,
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbital paths */}
      {orbits.map((orbit, i) => (
        <React.Fragment key={i}>
          {/* Orbit path */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              border: `1px solid ${orbit.color}`,
              left: "50%",
              top: "50%",
              marginLeft: -orbit.radius,
              marginTop: -orbit.radius,
              opacity: percentage > (i / numOrbits) * 100 ? 0.3 : 0.1,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: orbit.speed,
              repeat: Infinity,
              ease: "linear",
              delay: orbit.delay,
            }}
          />
          {/* Orbital object */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 8,
              height: 8,
              background: orbit.color,
              filter: "url(#star-glow)",
              left: "50%",
              top: "50%",
              marginLeft: -4,
              marginTop: -4,
              opacity: percentage > (i / numOrbits) * 100 ? 1 : 0.2,
              transformOrigin: `${orbit.radius}px center`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: orbit.speed,
              repeat: Infinity,
              ease: "linear",
              delay: orbit.delay,
            }}
          />
        </React.Fragment>
      ))}

      {/* Nebula effect */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "url(#nebula)",
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
          stroke="#312e81"
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
          stroke="url(#space-gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 16} ${circumference / 32}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "url(#star-glow)" }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute rounded-full bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm overflow-hidden"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "2px solid rgba(167, 139, 250, 0.3)",
          boxShadow: "0 0 20px rgba(167, 139, 250, 0.2)",
        }}
      >
        {/* Space core */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: "radial-gradient(circle at center, rgba(167, 139, 250, 0.2) 0%, transparent 70%)",
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
          className="text-xl font-bold text-violet-300"
          animate={{
            textShadow: [
              "0 0 5px rgba(167, 139, 250, 0.5)",
              "0 0 15px rgba(167, 139, 250, 0.8)",
              "0 0 5px rgba(167, 139, 250, 0.5)",
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
