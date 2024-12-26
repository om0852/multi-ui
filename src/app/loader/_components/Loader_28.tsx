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
      <motion.div className="relative flex items-center justify-center">
        <motion.div
          className="w-16 h-16 bg-blue-400 rounded-full absolute"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-12 h-12 bg-red-400 rounded-full absolute"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [-360, 0],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="w-8 h-8 bg-yellow-400 rounded-full absolute"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [360, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
