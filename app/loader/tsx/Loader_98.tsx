import React from "react";
import { motion } from "framer-motion";

const InterleavingSemiCircleSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Top Semi-Circle */}
        <motion.div
          className="absolute w-16 h-16 border-4 border-transparent border-t-pink-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Bottom Semi-Circle */}
        <motion.div
          className="absolute w-16 h-16 border-4 border-transparent border-b-blue-500 rounded-full"
          style={{
            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default InterleavingSemiCircleSpinner;
