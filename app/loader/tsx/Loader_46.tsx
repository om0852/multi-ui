"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTen: React.FC = () => {
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
            className="absolute bg-blue-500"
            style={{
              width: 10,
              height: 50,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", // Arrow shape
            }}
            animate={{
              rotate: [0, 120, 240, 360], // Rotate in steps
              scale: [1, 1.2, 1], // Pulse effect
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.2, // Staggered arrows
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderTen;
