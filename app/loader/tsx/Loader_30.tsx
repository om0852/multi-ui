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
      <div className="space-y-3">
        <motion.div
          className="w-12 h-2 bg-blue-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            scaleX: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.7,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-12 h-2 bg-red-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            scaleX: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.7,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-12 h-2 bg-yellow-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            scaleX: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.7,
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
