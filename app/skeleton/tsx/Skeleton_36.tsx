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
        "relative overflow-hidden bg-gray-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base neon background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #0f172a, #020617)",
            "radial-gradient(circle at 70% 50%, #0f172a, #020617)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neon grid lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`grid-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)",
            top: `${(i + 1) * 12}%`,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertical neon lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`vertical-${i}`}
          className="absolute h-full"
          style={{
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(236, 72, 153, 0.5), transparent)",
            left: `${(i + 1) * 16}%`,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: [0, 0.7, 0],
            height: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neon pulses */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-full h-full rounded-full"
          style={{
            border: "1px solid rgba(14, 165, 233, 0.2)",
            filter: "blur(8px)",
          }}
          animate={{
            scale: [0.2, 2],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Neon particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: "2px",
            height: "2px",
            background: i % 2 === 0 ? "#0ea5e9" : "#ec4899",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neon glow overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15), transparent 70%)",
          mixBlendMode: "screen",
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