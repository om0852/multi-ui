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
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      <div className="relative">
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-blue-500 opacity-50"
          animate={{
            scale: [1, 1.5, 2, 1], // Expanding and contracting effect
            opacity: [0.5, 0.2, 0.5], // Fade effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-purple-500 opacity-50"
          animate={{
            scale: [1, 1.5, 2, 1], // Expanding and contracting effect
            opacity: [0.5, 0.2, 0.5], // Fade effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-green-500 opacity-50"
          animate={{
            scale: [1, 1.5, 2, 1], // Expanding and contracting effect
            opacity: [0.5, 0.2, 0.5], // Fade effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
