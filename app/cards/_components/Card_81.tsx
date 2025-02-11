'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CyberEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          <div className="absolute inset-0" style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
          
          {/* Scanning line */}
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_81: React.FC = () => {
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
        background: 'linear-gradient(145deg, rgba(8, 145, 178, 0.1), rgba(14, 116, 144, 0.2))',
        boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)',
        border: '1px solid rgba(6, 182, 212, 0.2)',
      }}
    >
      <CyberEffect isHovered={isHovered} />

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
            } : {
              rotate: 0,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
              fontFamily: 'Orbitron',
            }}
          >
            CYBER CORE
          </motion.h3>
          <motion.p className="text-cyan-400">
            System initialized
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Status', value: 'Online' },
            { label: 'Power', value: '100%' },
            { label: 'Signal', value: 'Strong' },
            { label: 'Mode', value: 'Active' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-cyan-900/10 rounded-lg p-3 border border-cyan-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-cyan-400 text-sm font-mono">{stat.label}</div>
              <div className="text-cyan-100 font-bold font-mono">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-medium font-mono"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            INITIALIZE
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg text-cyan-400 font-medium font-mono"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              border: '1px solid rgba(6, 182, 212, 0.5)',
            }}
          >
            CONFIGURE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_81; 