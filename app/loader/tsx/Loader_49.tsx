"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderSixteen: React.FC = () => {
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
            className="absolute"
            style={{
              width: 50 + index * 30,
              height: 50 + index * 30,
              border: `2px solid transparent`,
              borderImage:
                "linear-gradient(45deg, red, orange, yellow, green, blue, purple) 1",
              borderRadius: "50%",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderSixteen;
