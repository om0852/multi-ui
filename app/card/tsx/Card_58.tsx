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
          {/* Circuit lines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px]"
              style={{
                top: `${(i + 1) * 10}%`,
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
                filter: 'blur(1px)',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.5, 0],
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Hologram overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, transparent, rgba(6, 182, 212, 0.1)),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(6, 182, 212, 0.05) 2px,
                  rgba(6, 182, 212, 0.05) 4px
                )
              `,
              filter: 'blur(0.5px)',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
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

const Card_58: React.FC = () => {
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
          <p className="text-cyan-300">System online</p>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #06B6D4, #67E8F9)',
              fontFamily: 'Space Grotesk',
            }}
          >
            Neural Interface
          </motion.h3>
          <motion.p className="text-cyan-300">
            System online
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'CPU', value: '3.6 GHz' },
            { label: 'Memory', value: '32 GB' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Latency', value: '1ms' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-cyan-900/30 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(8, 145, 178, 0.3)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(8, 145, 178, 0.3)',
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
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
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
            Scan
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_58; 