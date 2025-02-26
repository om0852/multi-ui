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
      <div className="flex space-x-4">
        <motion.div
          className="w-6 h-6 bg-blue-500"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-6 h-6 bg-red-500"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-6 h-6 bg-yellow-500"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
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
