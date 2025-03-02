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
        "relative overflow-hidden bg-red-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base magma layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #991b1b, #7f1d1d, #450a0a)",
            "radial-gradient(circle at 70% 50%, #7f1d1d, #991b1b, #450a0a)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lava flows */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`lava-${i}`}
          className="absolute h-full"
          style={{
            width: "20%",
            left: `${i * 20}%`,
            background: "linear-gradient(to bottom, transparent, rgba(220, 38, 38, 0.4), transparent)",
            filter: "blur(8px)",
          }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Heat distortion waves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`heat-${i}`}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.2), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            delay: i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ember particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute w-1 h-1 bg-orange-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Magma cracks */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`crack-${i}`}
          className="absolute"
          style={{
            height: "2px",
            width: "30%",
            background: "linear-gradient(90deg, transparent, #dc2626, transparent)",
            left: `${(i * 25) + 5}%`,
            top: `${50 + (i % 2) * 20}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            width: ["30%", "40%", "30%"],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Heat haze overlay */}
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