"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SkeletonScreenProps {
  width?: string;
  height?: string;
  className?: string;
}

const SkeletonScreen: React.FC<SkeletonScreenProps> = ({
  width = "w-[500px]",
  height = "h-[600px]",
  className = "",
}) => {
  return (
    <motion.div
      className={clsx(
        "relative overflow-hidden bg-gray-200",
        width,
        height,
        className
      )}
      initial={{ backgroundPositionX: "0%" }}
      animate={{ backgroundPositionX: ["-100%", "200%"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "ease-in" }}
      style={{
        backgroundImage: `
          radial-gradient(circle 50px at 50px 50px, lightgray 99%, transparent 0),
          linear-gradient(100deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%),
          linear-gradient(lightgray 20px, transparent 0),
          linear-gradient(lightgray 20px, transparent 0),
          linear-gradient(lightgray 20px, transparent 0),
          linear-gradient(lightgray 20px, transparent 0)
        `,
        backgroundRepeat: "repeat-y",
        backgroundSize: `
          100px 200px, 
          50px 200px, 
          150px 200px,
          350px 200px,
          300px 200px,
          250px 200px
        `,
        backgroundPosition: `
          0 0, 
          0 0, 
          120px 0,
          120px 40px,
          120px 80px,
          120px 120px
        `,
      }}
    />
  );
};

export default SkeletonScreen;
