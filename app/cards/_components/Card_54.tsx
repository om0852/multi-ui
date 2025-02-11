'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrismEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Crystal facets */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                background: `linear-gradient(${60 * i}deg, rgba(249, 168, 212, 0.1), rgba(147, 197, 253, 0.1))`,
                clipPath: `polygon(${50 + 50 * Math.cos(i * Math.PI / 3)}% ${50 + 50 * Math.sin(i * Math.PI / 3)}%, 
                             ${50 + 50 * Math.cos((i + 1) * Math.PI / 3)}% ${50 + 50 * Math.sin((i + 1) * Math.PI / 3)}%, 
                             50% 50%)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Prismatic glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.2), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
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

const Card_54: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(147, 197, 253, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-blue-900">Crystal Edge</h3>
          <p className="text-blue-600">Faceted perfection</p>
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
        boxShadow: '0 8px 32px rgba(147, 197, 253, 0.2)',
      }}
    >
      <PrismEffect isHovered={isHovered} />

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
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center p-4 transform rotate-45">
              <svg className="w-full h-full text-white transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #60A5FA, #93C5FD)',
              fontFamily: 'Orbitron',
            }}
          >
            Crystal Edge
          </motion.h3>
          <motion.p className="text-blue-600">
            Faceted perfection
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Clarity', value: '100%' },
            { label: 'Facets', value: '128' },
            { label: 'Symmetry', value: 'Perfect' },
            { label: 'Brilliance', value: 'Maximal' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-blue-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(239, 246, 255, 0.8)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(239, 246, 255, 0.8)',
                scale: 1,
              }}
            >
              <div className="text-blue-600 text-sm">{stat.label}</div>
              <div className="text-blue-900 font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#2563EB',
              boxShadow: '0 0 20px rgba(147, 197, 253, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Refract
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-blue-600 text-blue-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(147, 197, 253, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Analyze
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_54; 