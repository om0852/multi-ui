"use client";
import React from "react";
import { motion } from "framer-motion";

const BouncingDotsSeparator: React.FC = () => {
  return (
    <motion.div className="flex justify-center items-center space-x-4">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 h-4 rounded-full bg-blue-500"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 0.5,
            delay: index * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default BouncingDotsSeparator;
