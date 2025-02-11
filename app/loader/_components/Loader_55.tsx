"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTwentyEight: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LoaderTwentyEight;
