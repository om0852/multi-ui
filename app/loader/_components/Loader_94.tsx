import React from "react";
import { motion } from "framer-motion";

const CenteredHalfCircleSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="relative flex items-center justify-center">
        {/* Outer Half Circle */}
        <motion.div
          className="absolute w-40 h-40 border-8 border-t-8 border-pink-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Middle Half Circle */}
        <motion.div
          className="absolute w-32 h-32 border-8 border-t-8 border-blue-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner Half Circle */}
        <motion.div
          className="absolute w-24 h-24 border-8 border-t-8 border-yellow-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Element */}
        <motion.div
          className="absolute w-10 h-10 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.6, 1],
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

export default CenteredHalfCircleSpinner;
