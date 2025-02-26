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
        "relative overflow-hidden bg-slate-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Quantum field background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #1e293b, #0f172a, #020617)",
            "radial-gradient(circle at 70% 50%, #0f172a, #1e293b, #020617)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Energy waves */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + (i - 1) * 30}% ${50 + (i - 1) * 20}%, rgba(56, 189, 248, 0.2), transparent 60%)`,
            filter: "blur(15px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180],
          }}
          transition={{
            duration: 8,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Quantum particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-sky-400/60"
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
            duration: 2 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Quantum fluctuations */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`fluctuation-${i}`}
          className="absolute w-full h-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.1), transparent)",
            transform: `rotate(${i * 60}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy field */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1), transparent)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 