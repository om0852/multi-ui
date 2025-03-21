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
              className="absolute"
              style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(${60 * i}deg, rgba(251, 191, 36, 0.1), rgba(251, 191, 36, 0))`,
                clipPath: `polygon(${50 + 50 * Math.cos(2 * Math.PI * i / 6)}% ${50 + 50 * Math.sin(2 * Math.PI * i / 6)}%, ${50 + 50 * Math.cos(2 * Math.PI * (i + 1) / 6)}% ${50 + 50 * Math.sin(2 * Math.PI * (i + 1) / 6)}%, 50% 50%)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
                rotate: [0, 360],
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
              background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.2), transparent 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
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

const Card_71: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(251, 191, 36, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Crystal Edge</h3>
          <p className="text-amber-600">Faceted perfection</p>
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
        boxShadow: '0 8px 32px rgba(251, 191, 36, 0.2)',
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
            <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-4"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
              fontFamily: 'Orbitron',
            }}
          >
            Crystal Edge
          </motion.h3>
          <motion.p className="text-amber-600">
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
            { label: 'Facets', value: '108' },
            { label: 'Symmetry', value: 'Perfect' },
            { label: 'Brilliance', value: 'Ideal' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-amber-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                scale: 1,
              }}
            >
              <div className="text-amber-600 text-sm">{stat.label}</div>
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
            className="px-6 py-2 rounded-lg bg-amber-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#D97706',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Refract
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-amber-600 text-amber-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
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

export default Card_71; 