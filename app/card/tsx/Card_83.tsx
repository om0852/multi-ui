'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NatureEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Floating leaves */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                top: ['0%', '120%'],
                left: `${Math.random() * 100}%`,
                rotate: [0, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              <svg viewBox="0 0 24 24" className="w-full h-full text-emerald-500/30" fill="currentColor">
                <path d="M21.88 2.15L20.68 2.55L18.2 3.33C18.2 3.33 16.36 3.91 15.87 3.9C15.38 3.89 14.31 3.28 13.99 3.12C13.67 2.96 10.8 2.36 9.36 2.41C7.92 2.46 6.5 2.88 6.5 2.88L4.75 3.5L2.13 4.35L2 4.44L2.06 4.75L2.15 4.71C2.15 4.71 3.87 4.97 4.41 5.12C4.94 5.27 5.23 5.56 5.23 5.56C5.23 5.56 4.57 5.9 4.17 6.19C3.77 6.47 3.5 6.88 3.5 6.88L3.76 7.15C3.76 7.15 4.77 6.86 5.14 6.81C5.51 6.76 6.11 6.81 6.11 6.81C6.11 6.81 5.83 7.05 5.67 7.37C5.5 7.68 5.5 8.15 5.5 8.15L5.85 8.23C5.85 8.23 6.93 7.63 7.32 7.46C7.71 7.29 8.34 7.11 8.34 7.11C8.34 7.11 8.39 7.46 8.4 7.69C8.4 7.92 8.4 8.15 8.4 8.15C8.4 8.15 9.13 7.81 9.5 7.63C9.87 7.46 10.39 7.11 10.39 7.11L10.63 7.34C10.63 7.34 10.07 7.92 9.88 8.27C9.69 8.62 9.68 8.89 9.68 8.89L10.03 8.96L11.44 8.37C11.44 8.37 11.73 8.71 11.87 8.93C12 9.15 12.2 9.74 12.2 9.74L12.43 9.62C12.43 9.62 12.33 8.9 12.33 8.71C12.33 8.52 12.36 8.13 12.36 8.13C12.36 8.13 13.45 7.93 13.87 7.83C14.29 7.73 14.87 7.56 14.87 7.56L14.87 7.92C14.87 7.92 14.47 8.55 14.34 8.86C14.21 9.17 14.11 9.63 14.11 9.63L14.44 9.71C14.44 9.71 15.56 8.89 16.17 8.5C16.77 8.11 17.3 7.8 17.3 7.8C17.3 7.8 17.49 8.45 17.51 8.73C17.53 9.01 17.53 9.33 17.53 9.33L17.84 9.41C17.84 9.41 18.68 8.77 19.06 8.41C19.44 8.04 19.87 7.45 19.87 7.45L20.1 7.57C20.1 7.57 19.85 8.3 19.75 8.58C19.65 8.86 19.51 9.21 19.51 9.21L19.87 9.29C19.87 9.29 21.11 8.25 21.37 8.03C21.63 7.81 22 7.34 22 7.34L22 6.87C22 6.87 21.03 7.21 20.6 7.32C20.17 7.43 19.3 7.56 19.3 7.56C19.3 7.56 20.5 6.88 21.07 6.53C21.63 6.19 22 5.87 22 5.87L22 5.39C22 5.39 20.14 5.88 19.65 6.01C19.16 6.14 18.16 6.38 18.16 6.38L21.05 5.15L22 4.71V4.23L21.88 2.15Z" />
              </svg>
            </motion.div>
          ))}
          
          {/* Nature aura */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_83: React.FC = () => {
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
        background: 'linear-gradient(145deg, rgba(209, 250, 229, 0.2), rgba(16, 185, 129, 0.1))',
        boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
      }}
    >
      <NatureEffect isHovered={isHovered} />

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
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center p-4">
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
            Natural Flow
          </motion.h3>
          <motion.p className="text-emerald-600">
            Embrace growth
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
            { label: 'Balance', value: 'Natural' },
            { label: 'Energy', value: 'Flowing' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-emerald-900/10 rounded-lg p-3 border border-emerald-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-emerald-300 text-sm" style={{ fontFamily: 'Playfair Display' }}>{stat.label}</div>
              <div className="text-emerald-100 font-bold" style={{ fontFamily: 'Playfair Display' }}>{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-emerald-500 text-white font-medium"
            style={{ fontFamily: 'Playfair Display' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Nurture
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg text-emerald-500 font-medium"
            style={{ 
              fontFamily: 'Playfair Display',
              border: '1px solid rgba(16, 185, 129, 0.5)',
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Grow
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_83; 