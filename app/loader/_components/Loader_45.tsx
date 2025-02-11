"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderNine: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-transparent border-2 border-yellow-400"
            style={{
              width: 50 + index * 30,
              height: 50 + index * 30,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              scale: [1, 1.5, 1], // Expand and contract
              opacity: [1, 0.5, 1], // Fade in and out
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.2, // Staggered effect
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderNine;
