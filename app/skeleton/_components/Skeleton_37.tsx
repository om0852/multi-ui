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
        "relative overflow-hidden bg-amber-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base metallic layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #92400e, #f59e0b, #92400e)",
            "linear-gradient(45deg, #f59e0b, #92400e, #f59e0b)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Liquid flow effect */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.3), transparent)",
            transform: `rotate(${i * 30}deg)`,
          }}
          animate={{
            x: ["-200%", "200%"],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
      ))}

      {/* Gold particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: "rgba(251, 191, 36, 0.6)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Metallic highlights */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`highlight-${i}`}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + (i - 1) * 30}% ${50 + (i - 1) * 20}%, rgba(251, 191, 36, 0.4), transparent 60%)`,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Surface ripples */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute w-full h-full rounded-full"
          style={{
            border: "1px solid rgba(251, 191, 36, 0.3)",
            filter: "blur(2px)",
          }}
          animate={{
            scale: [0.2, 2],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Gold sheen */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.3), transparent)",
          mixBlendMode: "overlay",
        }}
        animate={{
          backgroundPosition: ["200% 200%", "-100% -100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Skeleton; 