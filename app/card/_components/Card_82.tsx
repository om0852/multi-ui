'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MagicEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Sparkles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle, rgba(216, 180, 254, 1), rgba(216, 180, 254, 0))',
                filter: 'blur(0.5px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Magic aura */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.2), transparent)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_82: React.FC = () => {
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
        background: 'linear-gradient(145deg, rgba(233, 213, 255, 0.2), rgba(216, 180, 254, 0.1))',
        boxShadow: '0 8px 32px rgba(216, 180, 254, 0.2)',
        border: '1px solid rgba(216, 180, 254, 0.2)',
      }}
    >
      <MagicEffect isHovered={isHovered} />

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
            <div className="absolute inset-0 rounded-full bg-purple-400/20 animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center p-4">
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
            Unleash the magic
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Mana', value: 'Full' },
            { label: 'Spells', value: '12' },
            { label: 'Power', value: 'High' },
            { label: 'Level', value: 'Master' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-purple-900/10 rounded-lg p-3 border border-purple-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-purple-300 text-sm" style={{ fontFamily: 'Cinzel' }}>{stat.label}</div>
              <div className="text-purple-100 font-bold" style={{ fontFamily: 'Cinzel' }}>{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium"
            style={{ fontFamily: 'Cinzel' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(216, 180, 254, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Cast Spell
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg text-purple-400 font-medium"
            style={{ 
              fontFamily: 'Cinzel',
              border: '1px solid rgba(216, 180, 254, 0.5)',
            }}
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

export default Card_82; 