"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type LoaderProps = {};

const Loader: React.FC<LoaderProps> = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-2">
        {/* Spinning Squares */}
        <motion.div
          className="w-8 h-8 bg-purple-400"
          animate={{
            rotate: [0, 90, 180, 270, 360], // Spinning animation
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-8 h-8 bg-green-400"
          animate={{
            rotate: [0, 90, 180, 270, 360], // Spinning animation
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.2, // Slight delay for staggered rotation
          }}
        />
        <motion.div
          className="w-8 h-8 bg-orange-400"
          animate={{
            rotate: [0, 90, 180, 270, 360], // Spinning animation
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.4, // Slight delay for staggered rotation
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
