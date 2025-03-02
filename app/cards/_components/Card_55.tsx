'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlitchEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Neon lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
                top: `${20 + i * 15}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), transparent 40%)',
              mixBlendMode: 'overlay',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              x: [-5, 5, -5],
              y: [-2, 2, -2],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_55: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(34, 211, 238, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">CYBER PULSE</h3>
          <p className="text-cyan-400">System online</p>
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
        boxShadow: '0 8px 32px rgba(34, 211, 238, 0.2)',
      }}
    >
      <GlitchEffect isHovered={isHovered} />

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
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #22D3EE, #67E8F9)',
              fontFamily: 'Orbitron',
              letterSpacing: '0.1em',
            }}
          >
            CYBER PULSE
          </motion.h3>
          <motion.p className="text-cyan-400">
            System online
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'POWER', value: '100%' },
            { label: 'UPTIME', value: '99.9%' },
            { label: 'LATENCY', value: '1ms' },
            { label: 'SECURITY', value: 'MAX' },
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
              <div className="text-cyan-400 text-sm font-mono">{stat.label}</div>
              <div className="text-white font-bold font-mono">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-cyan-600 text-white font-medium font-mono"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#0891B2',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            ACTIVATE
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-cyan-600 text-cyan-400 font-medium font-mono"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(34, 211, 238, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            SCAN
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_55; 