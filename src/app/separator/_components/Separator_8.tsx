"use client";
import React from "react";
import { motion } from "framer-motion";

const FadingGradientSeparator: React.FC = () => {
  return (
    <motion.div
      className="w-full h-1"
      initial={{ backgroundPosition: "100% 0" }}
      animate={{ backgroundPosition: "0 0" }}
      transition={{ duration: 2, ease: "easeInOut", loop: Infinity }}
      style={{
        backgroundImage: "linear-gradient(90deg, #4ade80, #f97316)",
        backgroundSize: "200% 100%",
      }}
    />
  );
};

export default FadingGradientSeparator;
