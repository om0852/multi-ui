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
        {/* Bouncing Dots */}
        <motion.div
          className="w-6 h-6 bg-red-400 rounded-full"
          animate={{
            y: [0, -20, 0], // Bounce effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 0.6,
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.div
          className="w-6 h-6 bg-blue-400 rounded-full"
          animate={{
            y: [0, -20, 0], // Bounce effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2, // Slight delay for staggered bounce
          }}
        />
        <motion.div
          className="w-6 h-6 bg-yellow-400 rounded-full"
          animate={{
            y: [0, -20, 0], // Bounce effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4, // Slight delay for staggered bounce
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
