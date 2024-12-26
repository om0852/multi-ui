"use client";

import React from "react";
import { motion } from "framer-motion";

const ExpandingRippleLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative w-40 h-40">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 rounded-full border-2 border-blue-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.6, 0],
              scale: [1, 2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandingRippleLoader;
