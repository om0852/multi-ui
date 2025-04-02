'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GridEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Grid lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, transparent 0%, rgba(236, 72, 153, 0.1) 100%),
                linear-gradient(to right, transparent 0%, rgba(236, 72, 153, 0.1) 100%)
              `,
              backgroundSize: '40px 40px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '0px 40px'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Neon glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2), transparent)',
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

const Card_47: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(236, 72, 153, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">RETRO WAVE</h3>
          <p className="text-pink-300">Back to the future</p>
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
        boxShadow: '0 8px 32px rgba(236, 72, 153, 0.2)',
      }}
    >
      <GridEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-4"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F472B6, #FB7185)',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
            }}
          >
            RETRO WAVE
          </motion.h3>
          <motion.p className="text-pink-300">
            Back to the future
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'SCORE', value: '1,000,000' },
            { label: 'LEVEL', value: '99' },
            { label: 'POWER', value: 'MAX' },
            { label: 'TIME', value: '88:88' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-pink-900/30 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(157, 23, 77, 0.3)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(157, 23, 77, 0.3)',
                scale: 1,
              }}
            >
              <div className="text-pink-300 text-sm" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.6rem' }}>{stat.label}</div>
              <div className="text-white font-bold" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.8rem' }}>{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-pink-600 text-white font-medium"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#DB2777',
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY NOW
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-pink-600 text-pink-400 font-medium"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            HIGH SCORE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_47; 