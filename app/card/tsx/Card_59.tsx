'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InkEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ink drops */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                background: 'radial-gradient(circle, rgba(0, 0, 0, 0.1), transparent)',
                filter: 'blur(20px)',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Brush stroke */}
          <motion.div
            className="absolute inset-x-0 h-[2px] top-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)',
              filter: 'blur(2px)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_59: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9))',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Zen Space</h3>
          <p className="text-gray-600">Find your balance</p>
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
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9))',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <InkEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-4"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
              <svg className="w-full h-full text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 text-gray-900"
            style={{
              fontFamily: 'Noto Serif',
            }}
          >
            Zen Space
          </motion.h3>
          <motion.p className="text-gray-600">
            Find your balance
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Focus', value: 'Enhanced' },
            { label: 'Peace', value: 'Achieved' },
            { label: 'Balance', value: 'Centered' },
            { label: 'Flow', value: 'Natural' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gray-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(243, 244, 246, 0.8)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(243, 244, 246, 0.8)',
                scale: 1,
              }}
            >
              <div className="text-gray-600 text-sm">{stat.label}</div>
              <div className="text-gray-900 font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-gray-900 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#111827',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Begin
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-gray-900 text-gray-900 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_59; 