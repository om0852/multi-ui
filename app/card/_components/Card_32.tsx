'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlitchEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Glitch lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-1"
              style={{
                background: 'rgba(239, 68, 68, 0.2)',
                top: `${20 + i * 15}%`,
                filter: 'blur(1px)',
                mixBlendMode: 'screen',
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Pixelated overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.1) 2px, transparent 2px)',
              backgroundSize: '4px 4px',
              mixBlendMode: 'multiply',
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
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

const Card_32: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(239, 68, 68, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">RETRO ARCADE</h3>
          <p className="text-gray-500">High Score: 1,000,000</p>
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
        boxShadow: '0 8px 32px rgba(239, 68, 68, 0.1)',
      }}
    >
      <GlitchEffect isHovered={isHovered} />

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
              rotate: [0, 360],
            } : {
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 1 }}
          >
            <svg className="w-full h-full text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-xl font-bold text-center mb-2"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: '1.25rem',
              letterSpacing: '0.1em',
            }}
            animate={isHovered ? {
              color: '#DC2626',
              textShadow: '2px 2px 0px rgba(239, 68, 68, 0.3)',
            } : {
              color: '#111827',
              textShadow: 'none',
            }}
          >
            RETRO ARCADE
          </motion.h3>
          <motion.div
            className="text-center text-gray-500"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.75rem' }}
          >
            High Score: 1,000,000
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['LEVEL 1', 'LEVEL 2', 'LEVEL 3', 'LEVEL 4'].map((level, i) => (
            <motion.div
              key={level}
              className="bg-red-50 rounded-lg p-3 text-center"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgb(254, 242, 242)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgb(254, 242, 242)',
                scale: 1,
              }}
            >
              <div className="text-sm font-bold text-red-500">{level}</div>
              <div className="text-xs text-gray-500">★★★</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-red-500 text-white font-bold"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.75rem' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#DC2626',
            }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY NOW
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-red-500 text-red-500 font-bold"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.75rem' }}
            whileHover={{
              scale: 1.05,
              borderColor: '#DC2626',
              color: '#DC2626',
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

export default Card_32; 