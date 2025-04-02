'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RetroEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Grid lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to right, rgba(236, 72, 153, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '0px 20px'],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Neon lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${30 + i * 20}%`,
                background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.8), transparent)',
                filter: 'blur(2px)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_84: React.FC = () => {
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
        boxShadow: '0 8px 32px rgba(236, 72, 153, 0.3)',
      }}
    >
      <RetroEffect isHovered={isHovered} />

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
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="absolute inset-0 rounded-lg bg-pink-500/20 animate-pulse" />
            <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #EC4899, #F472B6)',
              fontFamily: 'Press Start 2P',
              letterSpacing: '0.1em',
            }}
          >
            RETRO WAVE
          </motion.h3>
          <motion.p className="text-pink-400">
            Back to the 80s
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Style', value: 'Synth' },
            { label: 'Era', value: '1980s' },
            { label: 'Vibe', value: 'Neon' },
            { label: 'Mode', value: 'Wave' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-pink-900/10 rounded-lg p-3 border border-pink-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-pink-300 text-sm" style={{ fontFamily: 'Press Start 2P', fontSize: '0.6rem' }}>{stat.label}</div>
              <div className="text-pink-100 font-bold" style={{ fontFamily: 'Press Start 2P', fontSize: '0.7rem' }}>{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-pink-500 text-white font-medium"
            style={{ fontFamily: 'Press Start 2P', fontSize: '0.7rem' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg text-pink-400 font-medium"
            style={{ 
              fontFamily: 'Press Start 2P',
              fontSize: '0.7rem',
              border: '1px solid rgba(236, 72, 153, 0.5)',
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            PAUSE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_84; 