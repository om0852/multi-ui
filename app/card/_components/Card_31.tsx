'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HologramEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Hologram layers */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${45 + i * 30}deg, transparent, rgba(56, 189, 248, 0.1), transparent)`,
                borderRadius: '1rem',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Scanning line */}
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"
            animate={{
              top: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_31: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(56, 189, 248, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Holographic Interface</h3>
          <p className="text-gray-500">Next-gen visualization</p>
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
        boxShadow: '0 8px 32px rgba(56, 189, 248, 0.1)',
      }}
    >
      <HologramEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-12 h-12 mb-4 rounded-lg bg-sky-100 flex items-center justify-center"
            animate={isHovered ? {
              scale: 1.1,
              backgroundColor: 'rgb(224, 242, 254)',
            } : {
              scale: 1,
              backgroundColor: 'rgb(224, 242, 254)',
            }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-2"
            animate={isHovered ? { color: '#0284C7' } : { color: '#111827' }}
          >
            Holographic Interface
          </motion.h3>
          <motion.p className="text-gray-500">
            Next-gen visualization with real-time data processing
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-3 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['3D Rendering', 'Motion Tracking', 'Gesture Control'].map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-center space-x-2"
              initial={false}
              animate={isHovered ? {
                x: 10,
                transition: { delay: i * 0.1 },
              } : {
                x: 0,
              }}
            >
              <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center justify-between"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-sky-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#0284C7',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Demo
          </motion.button>

          <motion.button
            className="p-2 rounded-lg hover:bg-sky-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_31; 