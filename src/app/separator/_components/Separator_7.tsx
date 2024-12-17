"use client";
import React from "react";
import { motion } from "framer-motion";

const SlidingLineSeparator: React.FC = () => {
  return (
    <motion.div
      className="w-full h-1 bg-blue-500"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default SlidingLineSeparator;
