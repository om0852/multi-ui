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
        "relative overflow-hidden bg-amber-900/30",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Desert background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #92400e, #b45309, #92400e)",
            "linear-gradient(45deg, #b45309, #92400e, #b45309)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sand dunes */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`dune-${i}`}
          className="absolute w-full"
          style={{
            height: "40%",
            bottom: `${i * 20}%`,
            background: "linear-gradient(180deg, transparent, rgba(251, 191, 36, 0.1))",
            filter: "blur(8px)",
          }}
          animate={{
            transform: ["translateX(0%) scaleY(1)", "translateX(-20%) scaleY(1.1)", "translateX(0%) scaleY(1)"],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Swirling sand particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 bg-amber-200/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wind streams */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`wind-${i}`}
          className="absolute w-full h-1"
          style={{
            top: `${20 + i * 15}%`,
            background: "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.15), transparent)",
            filter: "blur(2px)",
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Heat distortion */}
      <motion.div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
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