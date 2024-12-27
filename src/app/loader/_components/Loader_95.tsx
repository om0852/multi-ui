import React from "react";
import { motion } from "framer-motion";

const RotatingArcLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Outer Arc */}
        <motion.div
          className="absolute w-40 h-40 border-8 border-transparent border-t-pink-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Middle Arc */}
        <motion.div
          className="absolute w-32 h-32 border-8 border-transparent border-t-blue-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Arc */}
        <motion.div
          className="absolute w-24 h-24 border-8 border-transparent border-t-yellow-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Circle */}
        <motion.div
          className="absolute w-12 h-12 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default RotatingArcLoader;
