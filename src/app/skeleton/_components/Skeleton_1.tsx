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
  borderRadius = "md",
  className = "", // Default to empty string
}) => {
  return (
    <motion.div
      className={clsx(
        "bg-gray-200 animate-pulse", 
        borderRadius, 
        className // Apply custom className passed as prop
      )}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
