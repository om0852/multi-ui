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
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      <div className="flex space-x-4">
        <motion.div
          className="w-2 h-16 bg-indigo-500 rounded-md"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
            repeatType: "loop",
          }}
        />
        <motion.div
          className="w-2 h-16 bg-orange-500 rounded-md"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
            repeatType: "loop",
            delay: 0.2,
          }}
        />
        <motion.div
          className="w-2 h-16 bg-green-500 rounded-md"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
            repeatType: "loop",
            delay: 0.4,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
