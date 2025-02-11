import React from "react";
import { motion } from "framer-motion";

const ExpandingArcsSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Outer Arc */}
        <motion.div
          className="absolute w-20 h-20 border-4 border-transparent border-t-green-500 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle Arc */}
        <motion.div
          className="absolute w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner Arc */}
        <motion.div
          className="absolute w-12 h-12 border-4 border-transparent border-t-pink-500 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default ExpandingArcsSpinner;
