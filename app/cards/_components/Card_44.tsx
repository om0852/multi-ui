'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NeonEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Circuit lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
                width: '100%',
                top: `${20 + i * 15}%`,
                transform: `rotate(${i * 15}deg)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Neon glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_44: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.9))',
          boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">Cyber Interface</h3>
          <p className="text-violet-300">Next-gen technology</p>
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
        background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.9))',
        boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
      }}
    >
      <NeonEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 mb-4 mx-auto"
            animate={isHovered ? {
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            } : {
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-full h-full text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-xl font-bold text-center mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #8B5CF6, #C4B5FD)',
            }}
            animate={isHovered ? {
              backgroundImage: 'linear-gradient(135deg, #C4B5FD, #8B5CF6)',
            } : {
              backgroundImage: 'linear-gradient(135deg, #8B5CF6, #C4B5FD)',
            }}
          >
            Cyber Interface
          </motion.h3>
          <motion.p className="text-violet-300 text-center">
            Next-gen technology
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Processing', value: '99%' },
            { label: 'Memory', value: '32GB' },
            { label: 'Network', value: '1TB/s' },
            { label: 'Uptime', value: '99.9%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gray-800/50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                scale: 1,
              }}
            >
              <div className="text-violet-300 text-sm">{stat.label}</div>
              <div className="text-white font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-between items-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-violet-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#7C3AED',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Initialize
          </motion.button>

          <motion.div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-violet-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_44; 