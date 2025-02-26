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
        "relative overflow-hidden bg-violet-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Plasma background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #581c87, #4c1d95, #2e1065)",
            "radial-gradient(circle at 70% 50%, #4c1d95, #581c87, #2e1065)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Electric arcs */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`arc-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "40%",
            background: "linear-gradient(to bottom, transparent, rgba(167, 139, 250, 0.8), transparent)",
            left: `${(i + 1) * 15}%`,
            top: "30%",
            filter: "blur(1px)",
          }}
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0, 0.8, 0],
            rotate: [-20 + i * 10, 20 + i * 10],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Plasma balls */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`ball-${i}`}
          className="absolute rounded-full"
          style={{
            width: "30%",
            height: "30%",
            background: "radial-gradient(circle at center, rgba(167, 139, 250, 0.3), transparent)",
            filter: "blur(10px)",
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 20}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Energy discharges */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`discharge-${i}`}
          className="absolute"
          style={{
            width: "3px",
            height: "3px",
            background: "#a78bfa",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 5px #a78bfa, 0 0 10px #a78bfa",
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 40],
            y: [0, (Math.random() - 0.5) * 40],
          }}
          transition={{
            duration: 1 + Math.random(),
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Plasma glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15), transparent)",
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