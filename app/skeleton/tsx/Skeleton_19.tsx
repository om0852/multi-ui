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
        "relative overflow-hidden bg-gray-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base fractal pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `repeating-conic-gradient(
            from 0deg,
            rgba(59, 130, 246, 0.1) 0deg 90deg,
            rgba(99, 102, 241, 0.1) 90deg 180deg,
            rgba(139, 92, 246, 0.1) 180deg 270deg,
            rgba(168, 85, 247, 0.1) 270deg 360deg
          )`,
          backgroundSize: "40px 40px",
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

      {/* Maze patterns */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`maze-${i}`}
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              ${i * 60}deg,
              transparent,
              transparent 20px,
              rgba(99, 102, 241, 0.1) 20px,
              rgba(99, 102, 241, 0.1) 40px
            )`,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Recursive squares */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute"
          style={{
            border: "1px solid rgba(99, 102, 241, 0.2)",
            width: `${100 - i * 20}%`,
            height: `${100 - i * 20}%`,
            left: `${i * 10}%`,
            top: `${i * 10}%`,
          }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            delay: i * 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Moving geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-8 h-8"
          style={{
            border: "1px solid rgba(99, 102, 241, 0.2)",
            transform: `rotate(${45 * i}deg)`,
            left: `${Math.sin(i) * 40 + 50}%`,
            top: `${Math.cos(i) * 40 + 50}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fractal lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(99, 102, 241, 0.2)",
            top: `${(100 / 6) * i}%`,
            transform: `rotate(${30 * i}deg)`,
          }}
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full bg-indigo-500"
          style={{
            left: `${Math.sin((i / 12) * Math.PI * 2) * 40 + 50}%`,
            top: `${Math.cos((i / 12) * Math.PI * 2) * 40 + 50}%`,
            boxShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Overlay gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent, rgba(17, 24, 39, 0.7))",
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
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