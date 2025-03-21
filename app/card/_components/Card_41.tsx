'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HologramEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Hologram layers */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(${i * 120}deg, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0))`,
                border: '1px solid rgba(56, 189, 248, 0.2)',
                transform: `scale(${1 + i * 0.02})`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1 + i * 0.02, 1 + i * 0.03, 1 + i * 0.02],
              }}
              transition={{
                rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          ))}
          
          {/* Scanning line */}
          <motion.div
            className="absolute w-full h-1 bg-sky-400/20 blur-sm"
            animate={{
              top: ["0%", "100%", "0%"],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_41: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          boxShadow: '0 8px 32px rgba(56, 189, 248, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-sky-400">Holographic Interface</h3>
          <p className="text-sky-300">Next generation display</p>
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
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 8px 32px rgba(56, 189, 248, 0.1)',
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
            className="w-20 h-20 mx-auto mb-4"
            animate={isHovered ? {
              rotateY: 360,
            } : {
              rotateY: 0,
            }}
            transition={{ duration: 2 }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #38BDF8, #7DD3FC)',
            }}
          >
            Holographic Interface
          </motion.h3>
          <motion.p className="text-sky-300">
            Next generation display
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            '3D Rendering',
            'Motion Tracking',
            'Gesture Control',
            'Voice Commands'
          ].map((feature, i) => (
            <motion.div
              key={feature}
              className="bg-sky-500/10 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                scale: 1,
              }}
            >
              <div className="text-sky-300 text-sm">{feature}</div>
              <div className="text-sky-400 font-bold">Enabled</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-between items-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-sky-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#0EA5E9',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Demo
          </motion.button>

          <motion.button
            className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center"
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(56, 189, 248, 0.2)',
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_41; 