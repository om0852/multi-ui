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
      {/* Night sky background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #0f172a, #020617)",
            "radial-gradient(circle at 70% 50%, #0f172a, #020617)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient glow */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute"
          style={{
            width: "60%",
            height: "60%",
            background: `radial-gradient(circle at center, rgba(234, 179, 8, 0.1), transparent 70%)`,
            filter: "blur(30px)",
            left: `${(i % 2) * 40}%`,
            top: `${Math.floor(i / 2) * 40}%`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fireflies */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`firefly-${i}`}
          className="absolute"
          style={{
            width: "3px",
            height: "3px",
            background: "#fbbf24",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 5px #fbbf24, 0 0 10px #fbbf24, 0 0 15px #fbbf24",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light trails */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "30%",
            background: "linear-gradient(to bottom, transparent, rgba(251, 191, 36, 0.2), transparent)",
            left: `${(i + 1) * 12}%`,
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "center",
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating light orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: "8px",
            height: "8px",
            background: "rgba(251, 191, 36, 0.3)",
            filter: "blur(2px)",
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient light overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.05), transparent 70%)",
          mixBlendMode: "screen",
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
    </div>
  );
};

export default Skeleton; 