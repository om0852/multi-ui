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
          {/* Hologram lines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
                top: `${10 + i * 8}%`,
                transform: `rotate(${i % 2 ? 1 : -1}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Circuit pattern */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 10%),
                radial-gradient(circle at 70% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 10%),
                radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 10%),
                radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.1) 0%, transparent 10%)
              `,
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_50: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">Neural Interface</h3>
          <p className="text-cyan-300">Future of interaction</p>
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
        boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #67E8F9, #22D3EE)',
              fontFamily: 'Space Grotesk',
            }}
          >
            Neural Interface
          </motion.h3>
          <motion.p className="text-cyan-300">
            Future of interaction
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Neural Link', value: 'Active' },
            { label: 'Bandwidth', value: '1.2 TB/s' },
            { label: 'Latency', value: '0.1 ms' },
            { label: 'Sync Rate', value: '99.9%' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-cyan-900/30 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(8, 145, 178, 0.2)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(8, 145, 178, 0.2)',
                scale: 1,
              }}
            >
              <div className="text-cyan-300 text-sm">{stat.label}</div>
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
            className="px-6 py-2 rounded-lg bg-cyan-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#0891B2',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Initialize
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-cyan-600 text-cyan-400 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Diagnostics
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_50; 