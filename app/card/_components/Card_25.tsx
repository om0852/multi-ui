'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PulseEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute right-4 top-4 w-3 h-3"
      initial={{ scale: 1 }}
      animate={isHovered ? {
        scale: [1, 1.5, 1],
        opacity: [1, 0, 1],
      } : {
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-emerald-500" />
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-500"
        animate={{
          scale: [1, 2],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

const Card_25: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isRead, setIsRead] = React.useState(false);

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsRead(true)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
        boxShadow: '0 8px 32px rgba(16, 185, 129, 0.1)',
      }}
    >
      {!isRead && <PulseEffect isHovered={isHovered} />}

      <div className="relative p-6">
        <div className="flex items-start space-x-4">
          <motion.div
            className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden"
            animate={isHovered ? {
              scale: 1.1,
              rotate: [0, -10, 10, 0],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/avatar.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"
              animate={isHovered ? {
                scale: [1, 1.2, 1],
              } : {}}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between items-start">
              <motion.h3
                className="font-medium text-gray-900"
                animate={isHovered ? { y: -2 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Alex Thompson
              </motion.h3>
              <motion.span
                className="text-sm text-gray-500"
                animate={isHovered ? { y: -2 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                2 min ago
              </motion.span>
            </div>

            <motion.p
              className="text-sm text-gray-600"
              animate={isHovered ? { y: -2 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Hey! I just finished reviewing the latest design updates. The new animations look fantastic! 🎉
            </motion.p>

            <div className="flex items-center space-x-4">
              <motion.button
                className="text-sm font-medium text-emerald-600 flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                <span>Reply</span>
              </motion.button>

              <motion.button
                className="text-sm font-medium text-gray-500 flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <span>More</span>
              </motion.button>
            </div>

            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white overflow-hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br from-emerald-${400 + i * 100} to-emerald-${500 + i * 100}`} />
                  </motion.div>
                ))}
              </div>
              <span className="text-xs text-gray-500">+2 others are typing...</span>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05), transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </motion.div>
  );
};

export default Card_25; 