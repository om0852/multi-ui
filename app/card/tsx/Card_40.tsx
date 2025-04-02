'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SparkleEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Sparkles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-yellow-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Magical aura */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.2), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_40: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(216, 180, 254, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Mystical Realm</h3>
          <p className="text-purple-500">Discover the magic within</p>
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
        boxShadow: '0 8px 32px rgba(216, 180, 254, 0.2)',
      }}
    >
      <SparkleEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-4 relative"
            animate={isHovered ? {
              rotate: 360,
            } : {
              rotate: 0,
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full text-purple-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            {/* Orbital circles */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-purple-200"
                style={{
                  transform: `scale(${1.2 + i * 0.2})`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #9333EA, #D8B4FE)',
            }}
            animate={isHovered ? {
              backgroundImage: 'linear-gradient(135deg, #D8B4FE, #9333EA)',
            } : {
              backgroundImage: 'linear-gradient(135deg, #9333EA, #D8B4FE)',
            }}
          >
            Mystical Realm
          </motion.h3>
          <motion.p className="text-purple-500">
            Discover the magic within
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Wisdom', 'Power', 'Magic'].map((stat, i) => (
            <motion.div
              key={stat}
              className="text-center"
              initial={false}
              animate={isHovered ? {
                scale: 1.1,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <motion.div
                className="w-3 h-3 mx-auto mb-2 rounded-full bg-purple-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
              <div className="text-sm font-medium text-purple-600">{stat}</div>
              <div className="text-xs text-purple-400">Level 99</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-2 rounded-full bg-purple-100 overflow-hidden">
            <motion.div
              className="h-full bg-purple-500 rounded-full"
              initial={{ width: '60%' }}
              animate={isHovered ? {
                width: '100%',
                backgroundColor: '#9333EA',
              } : {
                width: '60%',
                backgroundColor: '#A855F7',
              }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-purple-600">Experience</span>
            <motion.span
              className="font-medium text-purple-600"
              animate={isHovered ? {
                scale: 1.1,
              } : {
                scale: 1,
              }}
            >
              {isHovered ? '100%' : '60%'}
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#9333EA',
              boxShadow: '0 0 20px rgba(216, 180, 254, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Journey
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_40; 