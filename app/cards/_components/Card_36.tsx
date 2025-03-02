'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StarEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Nebula effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2), transparent)',
              filter: 'blur(30px)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_36: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">Cosmic Explorer</h3>
          <p className="text-indigo-300">Journey through the stars</p>
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
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)',
      }}
    >
      <StarEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-4 relative"
            animate={isHovered ? {
              rotate: 360,
            } : {
              rotate: 0,
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Planet */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600"
              animate={isHovered ? {
                boxShadow: [
                  '0 0 20px rgba(99, 102, 241, 0.3)',
                  '0 0 40px rgba(99, 102, 241, 0.3)',
                  '0 0 20px rgba(99, 102, 241, 0.3)',
                ],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Orbital rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-indigo-300/30"
                style={{
                  transform: `scale(${1.2 + i * 0.2}) rotate(${i * 30}deg)`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #818CF8, #C7D2FE)',
            }}
          >
            Cosmic Explorer
          </motion.h3>
          <motion.p className="text-indigo-300">
            Journey through the stars
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Distance', value: '149.6M km' },
            { label: 'Velocity', value: '107,000 km/h' },
            { label: 'Temperature', value: '-270°C' },
            { label: 'Gravity', value: '9.8 m/s²' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-slate-800/50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                scale: 1,
              }}
            >
              <div className="text-indigo-300 text-sm">{stat.label}</div>
              <div className="text-white font-mono">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-indigo-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#4F46E5',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Mission
          </motion.button>
          <motion.button
            className="p-2 rounded-lg bg-slate-800/50"
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_36; 