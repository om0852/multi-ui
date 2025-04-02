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
      {/* Base smoke layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #1f2937, #111827)",
            "radial-gradient(circle at 70% 50%, #1f2937, #111827)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Smoke trails */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`smoke-${i}`}
          className="absolute"
          style={{
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)",
            filter: "blur(20px)",
            left: `${(i % 3) * 30}%`,
            top: `${Math.floor(i / 3) * 30}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Smoke particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: "rgba(255,255,255,0.1)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.4, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, -100],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Swirling patterns */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`swirl-${i}`}
          className="absolute w-full h-full"
          style={{
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            delay: i * 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Turbulence effect */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`turbulence-${i}`}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 50%)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30 * Math.cos(i * Math.PI / 2)],
            y: [0, 30 * Math.sin(i * Math.PI / 2)],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Smoke overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
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