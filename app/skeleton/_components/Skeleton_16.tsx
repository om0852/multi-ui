"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius = "rounded-md",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-slate-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base aurora layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(16,185,129,0.1) 0%, rgba(59,130,246,0.1) 100%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora waves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${120 * i}deg, transparent, rgba(16,185,129,0.2), rgba(59,130,246,0.2), transparent)`,
            filter: "blur(30px)",
          }}
          animate={{
            transform: [
              "translateX(-50%) skewY(-5deg)",
              "translateX(50%) skewY(5deg)",
              "translateX(-50%) skewY(-5deg)",
            ],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shimmering stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light beams */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute w-full h-32"
          style={{
            top: `${20 + i * 20}%`,
            background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.1), rgba(59,130,246,0.1), transparent)",
            transform: "skewY(-20deg)",
            filter: "blur(20px)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: Math.random() > 0.5 ? "#10b981" : "#3b82f6",
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Atmospheric glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.1), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 