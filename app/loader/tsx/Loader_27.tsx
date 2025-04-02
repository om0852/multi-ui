"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div className="relative flex space-x-6">
        <motion.div
          className="w-12 h-12 bg-teal-400 rounded-full"
          animate={{
            y: ["0%", "-30%", "0%"],
            scale: [1, 1.2, 1],
            backgroundColor: ["#4FD1C5", "#38B2AC", "#4FD1C5"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-12 h-12 bg-orange-400 rounded-full"
          animate={{
            y: ["0%", "30%", "0%"],
            scale: [1, 1.3, 1],
            backgroundColor: ["#FF9F45", "#FF6A13", "#FF9F45"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.div
          className="w-12 h-12 bg-pink-400 rounded-full"
          animate={{
            y: ["0%", "-40%", "0%"],
            scale: [1, 1.1, 1],
            backgroundColor: ["#F56565", "#E53E3E", "#F56565"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.div
          className="w-12 h-12 bg-indigo-400 rounded-full"
          animate={{
            y: ["0%", "40%", "0%"],
            scale: [1, 1.4, 1],
            backgroundColor: ["#667EEA", "#5A67D8", "#667EEA"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
