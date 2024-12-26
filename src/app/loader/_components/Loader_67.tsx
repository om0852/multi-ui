"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderFortyFour: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        style={{
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative w-16 h-16 bg-green-400"
      />
    </div>
  );
};

export default LoaderFortyFour;
