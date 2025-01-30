import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [drops, setDrops] = useState<{ id: number; x: number; size: number }[]>([]);
  const maxDrops = Math.floor((percentage / 100) * 30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (drops.length < maxDrops) {
        setDrops(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * (size - 10),
            size: 4 + Math.random() * 4,
          }
        ]);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [drops.length, maxDrops, size]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Rain effect definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="water-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
          </linearGradient>
          <filter id="water-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
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
          border: `${strokeWidth}px solid rgba(56, 189, 248, 0.2)`,
          clipPath: "url(#container-clip)",
          background: "linear-gradient(to bottom, rgba(56, 189, 248, 0.1), rgba(2, 132, 199, 0.15))",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Rain drops */}
        <AnimatePresence>
          {drops.map(drop => (
            <motion.div
              key={drop.id}
              className="absolute"
              initial={{ y: -20, x: drop.x }}
              animate={{
                y: size,
                scaleY: [1, 1.5, 1],
              }}
              exit={{ opacity: 0 }}
              transition={{
                y: { duration: 0.8, ease: "easeIn" },
                scaleY: { duration: 0.8, ease: "linear" },
              }}
              onAnimationComplete={() => {
                setDrops(prev => prev.filter(d => d.id !== drop.id));
              }}
              style={{
                width: drop.size,
                height: drop.size * 1.5,
                background: "url(#water-gradient)",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                filter: "url(#water-blur)",
                boxShadow: "0 0 5px rgba(56, 189, 248, 0.5)",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Water accumulation */}
        <div
          className="absolute bottom-0 w-full transition-all duration-300"
          style={{
            height: `${percentage}%`,
            background: "url(#water-gradient)",
            borderTop: "2px solid rgba(56, 189, 248, 0.4)",
          }}
        >
          {/* Water ripples */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full"
              style={{
                height: 2,
                bottom: `${i * 20}%`,
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                x: {
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                },
                opacity: {
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                },
              }}
            />
          ))}
        </div>
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
            textShadow: "0 2px 4px rgba(2, 132, 199, 0.5)",
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