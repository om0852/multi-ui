'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HologramEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Hologram layers */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${120 * i}deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0))`,
                borderRadius: '1rem',
                border: '1px solid rgba(0, 255, 255, 0.1)',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
          
          {/* Scanning line */}
          <motion.div
            className="absolute inset-x-0 h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #0FF, transparent)',
              filter: 'blur(1px)',
            }}
            animate={{
              top: ['-10%', '110%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_76: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
          boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-cyan-500">Neural Interface</h3>
          <p className="text-blue-400">Future of interaction</p>
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
        background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
        boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
        border: '1px solid rgba(6, 182, 212, 0.2)',
      }}
    >
      <HologramEffect isHovered={isHovered} />

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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
              fontFamily: 'Space Grotesk',
            }}
          >
            Neural Interface
          </motion.h3>
          <motion.p className="text-blue-400">
            Future of interaction
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Connection', value: 'Active' },
            { label: 'Latency', value: '0.1ms' },
            { label: 'Bandwidth', value: '1TB/s' },
            { label: 'Security', value: 'Quantum' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-3 border border-cyan-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-cyan-400 text-sm">{stat.label}</div>
              <div className="text-white font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Connect
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border border-cyan-500 text-cyan-400 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Calibrate
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_76; 