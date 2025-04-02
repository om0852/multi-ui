import React from "react";
import { motion } from "framer-motion";

const ExpandingArcLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {/* Outer Expanding Arc */}
        <motion.div
          className="absolute w-40 h-40 border-4 border-t-transparent border-pink-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
            opacity: [1, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Middle Expanding Arc */}
        <motion.div
          className="absolute w-32 h-32 border-4 border-t-transparent border-blue-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, -360],
            opacity: [1, 0],
            scale: [1, 1.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Expanding Arc */}
        <motion.div
          className="absolute w-24 h-24 border-4 border-t-transparent border-yellow-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
            opacity: [1, 0],
            scale: [1, 2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Static Center Circle */}
        <div className="absolute w-8 h-8 bg-green-500 rounded-full" />
      </div>
    </div>
  );
};

export default ExpandingArcLoader;
