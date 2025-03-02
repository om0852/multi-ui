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
      <div className="relative flex justify-between items-center w-40">
        <motion.div
          className="w-12 h-6 bg-blue-500 rounded-lg"
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-12 h-6 bg-red-500 rounded-lg"
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-12 h-6 bg-yellow-500 rounded-lg"
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
