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
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Nebula effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.2), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
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

const Card_46: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(79, 70, 229, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white">Space Explorer</h3>
          <p className="text-indigo-300">Journey to the stars</p>
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
        boxShadow: '0 8px 32px rgba(79, 70, 229, 0.2)',
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
            className="w-20 h-20 mx-auto mb-4"
            animate={isHovered ? {
              rotate: 360,
              scale: [1, 1.1, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z M16 8L2 22M17.5 15H9" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #818CF8, #C7D2FE)',
            }}
          >
            Space Explorer
          </motion.h3>
          <motion.p className="text-indigo-300">
            Journey to the stars
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Distance', value: '1.2M ly' },
            { label: 'Velocity', value: '299,792 km/s' },
            { label: 'Temperature', value: '-270.45°C' },
            { label: 'Gravity', value: '9.8 m/s²' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-indigo-900/30 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(49, 46, 129, 0.3)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(49, 46, 129, 0.3)',
                scale: 1,
              }}
            >
              <div className="text-indigo-300 text-sm">{stat.label}</div>
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
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#4F46E5',
              boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Mission
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-indigo-600 text-indigo-400 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Stats
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_46; 