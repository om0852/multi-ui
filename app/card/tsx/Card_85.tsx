'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Star field */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Orbital rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-indigo-500/30"
              style={{
                width: `${150 + i * 100}px`,
                height: `${150 + i * 100}px`,
                left: '50%',
                top: '50%',
                marginLeft: `-${(150 + i * 100) / 2}px`,
                marginTop: `-${(150 + i * 100) / 2}px`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_85: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.9))',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
      }}
    >
      <SpaceEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-4 relative"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeWidth="1.5" d="M12 2a15 15 0 000 20M2 12h20" />
              </svg>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #6366F1, #A5B4FC)',
              fontFamily: 'Space Mono',
              letterSpacing: '0.1em',
            }}
          >
            DEEP SPACE
          </motion.h3>
          <motion.p className="text-indigo-400">
            Exploring the Cosmos
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Distance', value: '12.4 LY' },
            { label: 'Velocity', value: '30 km/s' },
            { label: 'Objects', value: '2.3M' },
            { label: 'Status', value: 'Active' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-indigo-900/10 rounded-lg p-3 border border-indigo-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-indigo-300 text-sm" style={{ fontFamily: 'Space Mono' }}>{stat.label}</div>
              <div className="text-indigo-100 font-bold" style={{ fontFamily: 'Space Mono' }}>{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-indigo-500 text-white font-medium"
            style={{ fontFamily: 'Space Mono' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg text-indigo-400 font-medium"
            style={{ 
              fontFamily: 'Space Mono',
              border: '1px solid rgba(99, 102, 241, 0.5)',
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            SCAN
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_85; 