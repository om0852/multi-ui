"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirtyNine: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="relative w-20 h-20"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <div className="absolute w-full h-full bg-pink-500"></div>
      </motion.div>
    </div>
  );
};

export default LoaderThirtyNine;
