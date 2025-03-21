'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeafEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Floating leaves */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 360],
                y: [0, 100],
                x: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <svg className="w-full h-full text-emerald-500/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3L3 21M21 3L15 3M21 3L21 9" />
              </svg>
            </motion.div>
          ))}

          {/* Wave effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
              `,
              filter: 'blur(40px)',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_60: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Natural Growth</h3>
          <p className="text-emerald-600">Embrace nature</p>
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
        boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
      }}
    >
      <LeafEffect isHovered={isHovered} />

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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #10B981, #34D399)',
              fontFamily: 'Playfair Display',
            }}
          >
            Natural Growth
          </motion.h3>
          <motion.p className="text-emerald-600">
            Embrace nature
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Growth', value: 'Organic' },
            { label: 'Harmony', value: 'Perfect' },
            { label: 'Balance', value: 'Stable' },
            { label: 'Energy', value: 'Flowing' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-emerald-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                scale: 1,
              }}
            >
              <div className="text-emerald-600 text-sm">{stat.label}</div>
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
            className="px-6 py-2 rounded-lg bg-emerald-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#059669',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Nurture
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-emerald-600 text-emerald-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
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

export default Card_60; 