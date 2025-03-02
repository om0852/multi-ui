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
      {/* Quantum field background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(147,51,234,0.2), transparent)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wave interference patterns */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0"
          style={{
            background: `repeating-radial-gradient(
              circle at ${50 + (i - 1) * 20}% ${50 + (i - 1) * 20}%,
              rgba(147,51,234,0.1) 0%,
              transparent 10%,
              rgba(147,51,234,0.1) 20%
            )`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Quantum particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-purple-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            x: [0, (Math.random() - 0.5) * 50],
            y: [0, (Math.random() - 0.5) * 50],
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy ripples */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute rounded-full border border-purple-500/30"
          style={{
            left: "50%",
            top: "50%",
            width: "20px",
            height: "20px",
            filter: "blur(2px)",
          }}
          animate={{
            scale: [0, 4],
            opacity: [0.8, 0],
            x: "-50%",
            y: "-50%",
          }}
          transition={{
            duration: 3,
            delay: i * 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Quantum entanglement lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px w-full"
          style={{
            top: `${20 * (i + 1)}%`,
            background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5), transparent)",
            filter: "blur(1px)",
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Probability cloud */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent, rgba(0,0,0,0.5))",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 