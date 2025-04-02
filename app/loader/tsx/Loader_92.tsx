import React from "react";
import { motion } from "framer-motion";

const AdvancedHalfCircleSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-32 h-32">
        {/* First Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-red-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: 360,
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.3,
            ease: "linear",
          }}
        />
        
        {/* Second Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-blue-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: -360,
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 0.3,
            ease: "linear",
          }}
        />

        {/* Third Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-yellow-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: 360,
            opacity: [0, 1, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.3,
            ease: "linear",
          }}
        />

        {/* Fourth Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-green-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: -360,
            opacity: [0, 1, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.3,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default AdvancedHalfCircleSpinner;
