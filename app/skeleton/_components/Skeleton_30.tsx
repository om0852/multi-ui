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
        "relative overflow-hidden bg-blue-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Deep sea background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #172554, #1e3a8a, #172554)",
            "radial-gradient(circle at 70% 50%, #1e3a8a, #172554, #1e3a8a)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bioluminescent organisms */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`organism-${i}`}
          className="absolute"
          style={{
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
            background: "radial-gradient(circle at center, rgba(34, 211, 238, 0.8), transparent 70%)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light tendrils */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`tendril-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "40%",
            background: "linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.3), transparent)",
            left: `${(i * 20) + 10}%`,
            top: "30%",
            transformOrigin: "top",
          }}
          animate={{
            scaleY: [0.8, 1.2, 0.8],
            rotate: [i % 2 === 0 ? -5 : 5, i % 2 === 0 ? 5 : -5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating spores */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`spore-${i}`}
          className="absolute w-0.5 h-0.5 bg-cyan-200"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy pulses */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.1), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Underwater haze */}
      <motion.div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
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