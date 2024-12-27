import React from "react";
import { motion } from "framer-motion";

const HalfCircleSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-32 h-32">
        {/* First Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-l-8 border-gray-500 rounded-full"
          style={{ clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Second Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-l-8 border-blue-500 rounded-full"
          style={{ clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Third Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-red-500 rounded-full"
          style={{ clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Fourth Half Circle */}
        <motion.div
          className="absolute w-16 h-16 border-8 border-t-8 border-green-500 rounded-full"
          style={{ clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default HalfCircleSpinner;
