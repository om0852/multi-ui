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
        "relative overflow-hidden bg-orange-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Volcanic background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #7c2d12, #431407, #270a04)",
            "radial-gradient(circle at 70% 50%, #431407, #7c2d12, #270a04)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lava streams */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`lava-${i}`}
          className="absolute"
          style={{
            height: "40%",
            width: "15%",
            background: "linear-gradient(to bottom, transparent, rgba(251, 146, 60, 0.6), transparent)",
            left: `${(i + 1) * 18 - 5}%`,
            top: "30%",
            filter: "blur(8px)",
          }}
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.8, 0.4],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Magma bubbles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full"
          style={{
            width: "20px",
            height: "20px",
            background: "radial-gradient(circle at center, rgba(251, 146, 60, 0.6), transparent)",
            left: `${Math.random() * 100}%`,
            top: `${50 + Math.random() * 50}%`,
            filter: "blur(2px)",
          }}
          animate={{
            y: [-50, -100],
            x: [0, (Math.random() - 0.5) * 30],
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Heat waves */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`heat-${i}`}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(251, 146, 60, 0.1), transparent)",
            filter: "blur(10px)",
          }}
          animate={{
            y: [-20, 0, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ember particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute rounded-full bg-orange-400"
          style={{
            width: "2px",
            height: "2px",
            left: `${Math.random() * 100}%`,
            top: "70%",
          }}
          animate={{
            y: [-100, -200],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeOut",
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