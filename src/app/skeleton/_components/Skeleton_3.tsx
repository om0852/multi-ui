"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface Skeleton_4Props {
  className?: string;
}

const Skeleton_4: React.FC<Skeleton_4Props> = ({ className = "" }) => {
  return (
    <motion.div
      className={clsx(
        "bg-indigo-300 rounded-lg shadow-md", // Unique color and effects
        className
      )}
      style={{
        height: "80px", // Adjust the height
        width: "100%", // Full width
        position: "relative", // To apply the shimmer effect
        overflow: "hidden", // Prevent shimmer overflow
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
        animate={{
          x: ["-100%", "100%"], // Animate shimmer across the element
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5, // Shimmer duration
          ease: "ease-in-out", // Smooth animation
        }}
      />
    </motion.div>
  );
};

export default Skeleton_4;
