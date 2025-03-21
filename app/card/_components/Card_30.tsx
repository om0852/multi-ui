'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TicketEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Perforated edge */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{
                left: `${(i + 1) * 6.25}%`,
                top: '60%',
                transform: 'translateX(-50%)',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Decorative lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.2), transparent)',
                top: `${30 + i * 10}%`,
              }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_30: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="relative w-[380px] rounded-2xl backdrop-blur-sm overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
          boxShadow: '0 8px 32px rgba(236, 72, 153, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Summer Music Festival</h3>
          <p className="text-gray-500">August 15, 2024 • 7:00 PM</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
        boxShadow: '0 8px 32px rgba(236, 72, 153, 0.1)',
      }}
    >
      <TicketEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-8"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-xs font-semibold text-pink-500 mb-2"
            animate={isHovered ? {
              color: '#DB2777',
            } : {
              color: '#EC4899',
            }}
          >
            FEATURED EVENT
          </motion.div>
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-1"
            animate={isHovered ? { y: -2 } : { y: 0 }}
          >
            Summer Music Festival
          </motion.h3>
          <motion.p
            className="text-gray-500"
            animate={isHovered ? { y: -2 } : { y: 0 }}
          >
            August 15, 2024 • 7:00 PM
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                initial={false}
                animate={isHovered ? {
                  scale: 1.1,
                  transition: { delay: i * 0.1 },
                } : {
                  scale: 1,
                }}
              >
                <div className={`w-full h-full bg-gradient-to-br from-pink-${400 + i * 100} to-rose-${500 + i * 100}`} />
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-gray-500">+42 attending</span>
        </motion.div>

        <motion.div
          className="flex items-center justify-between mb-6 pb-6 border-b border-dashed border-gray-200"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <div className="text-sm text-gray-500">Location</div>
            <div className="font-medium text-gray-900">Central Park Arena</div>
          </div>
          <motion.button
            className="text-pink-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <div className="text-2xl font-bold text-gray-900">$49.99</div>
            <div className="text-sm text-gray-500">per ticket</div>
          </div>
          <motion.button
            className="px-6 py-2 rounded-lg bg-pink-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#DB2777',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Buy Ticket
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_30; 