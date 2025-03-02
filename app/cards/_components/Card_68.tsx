'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SparkleEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Sparkles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${4 + Math.random() * 4}px`,
                height: `${4 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 4px rgba(216, 180, 254, 0.8)',
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [20, -20],
                x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
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
              background: 'radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.2), transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_68: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.9))',
          boxShadow: '0 8px 32px rgba(216, 180, 254, 0.3)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">Mystic Realm</h3>
          <p className="text-purple-400">Discover the magic</p>
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
        background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.9))',
        boxShadow: '0 8px 32px rgba(216, 180, 254, 0.3)',
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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #D8B4FE, #E9D5FF)',
              fontFamily: 'Cinzel',
            }}
          >
            Mystic Realm
          </motion.h3>
          <motion.p className="text-purple-400">
            Discover the magic
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Wisdom', value: 'Level 99' },
            { label: 'Power', value: 'Legendary' },
            { label: 'Magic', value: 'Mastered' },
            { label: 'Experience', value: '∞' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-purple-900/30 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(147, 51, 234, 0.3)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(147, 51, 234, 0.3)',
                scale: 1,
              }}
            >
              <div className="text-purple-400 text-sm">{stat.label}</div>
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
            className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#9333EA',
              boxShadow: '0 0 20px rgba(216, 180, 254, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Cast Spell
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-purple-600 text-purple-400 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(216, 180, 254, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Enchant
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_68; 