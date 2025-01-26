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
              className="absolute w-2 h-2"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle, rgba(192, 132, 252, 1), rgba(192, 132, 252, 0))',
                filter: 'blur(1px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Magical aura */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(192, 132, 252, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(192, 132, 252, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(192, 132, 252, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 30%, rgba(192, 132, 252, 0.2) 0%, transparent 50%)
              `,
              filter: 'blur(20px)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [0.8, 1.1, 0.8],
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

const Card_57: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(192, 132, 252, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">Enchanted Realm</h3>
          <p className="text-purple-300">Unleash the magic</p>
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
        boxShadow: '0 8px 32px rgba(192, 132, 252, 0.2)',
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
              backgroundImage: 'linear-gradient(135deg, #C084FC, #E9D5FF)',
              fontFamily: 'Cinzel',
            }}
          >
            Enchanted Realm
          </motion.h3>
          <motion.p className="text-purple-300">
            Unleash the magic
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Mana', value: '100/100' },
            { label: 'Spells', value: 'Mastered' },
            { label: 'Power', value: 'Legendary' },
            { label: 'Wisdom', value: 'Ancient' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-purple-900/30 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(126, 34, 206, 0.3)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(126, 34, 206, 0.3)',
                scale: 1,
              }}
            >
              <div className="text-purple-300 text-sm">{stat.label}</div>
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
              backgroundColor: '#7C3AED',
              boxShadow: '0 0 20px rgba(192, 132, 252, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Cast Spell
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-purple-600 text-purple-400 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(192, 132, 252, 0.1)',
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

export default Card_57; 