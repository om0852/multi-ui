'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CelebrationEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Confetti particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2"
              style={{
                background: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 360],
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random(),
              }}
            />
          ))}
          
          {/* Radial glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(245, 158, 11, 0.2), transparent)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
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

const Card_28: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(245, 158, 11, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6 text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Achievement Unlocked!</h3>
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
        boxShadow: '0 8px 32px rgba(245, 158, 11, 0.1)',
      }}
    >
      <CelebrationEffect isHovered={isHovered} />

      <div className="relative p-6 text-center">
        <motion.div
          className="w-24 h-24 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center"
          animate={isHovered ? {
            scale: 1.1,
            rotate: [0, -10, 10, 0],
            backgroundColor: 'rgb(254, 243, 199)',
          } : {
            scale: 1,
            rotate: 0,
            backgroundColor: 'rgb(254, 249, 195)',
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            className="w-12 h-12 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isHovered ? {
              scale: 1.2,
              rotate: 360,
            } : {
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </motion.svg>
        </motion.div>

        <motion.div
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-2"
            animate={isHovered ? { color: '#D97706' } : { color: '#111827' }}
            transition={{ duration: 0.3 }}
          >
            Achievement Unlocked!
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-6"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Master Explorer - Level 10
          </motion.p>

          <div className="flex justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-amber-400"
                animate={isHovered ? {
                  scale: [1, 1.5, 1],
                  backgroundColor: ['rgb(251, 191, 36)', 'rgb(245, 158, 11)', 'rgb(251, 191, 36)'],
                } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          <motion.div
            className="text-sm text-gray-500 mb-6"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-medium">Rewards Earned:</div>
            <div>• 1000 XP Points</div>
            <div>• Golden Badge</div>
            <div>• Special Access</div>
          </motion.div>

          <motion.button
            className="px-6 py-2 rounded-lg bg-amber-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#D97706',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Rewards
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_28; 