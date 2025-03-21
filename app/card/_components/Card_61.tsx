'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GeometricEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Animated shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '100px',
                height: '100px',
                left: `${(i % 3) * 35}%`,
                top: `${Math.floor(i / 3) * 40}%`,
                background: `linear-gradient(${60 * i}deg, rgba(244, 63, 94, 0.1), rgba(251, 113, 133, 0.1))`,
                borderRadius: i % 2 === 0 ? '50%' : '0%',
                transform: `rotate(${45 * i}deg)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [`${45 * i}deg`, `${45 * i + 180}deg`, `${45 * i + 360}deg`],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          
          {/* Pattern overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(45deg, transparent 45%, rgba(244, 63, 94, 0.1) 45%, rgba(244, 63, 94, 0.1) 55%, transparent 55%),
                linear-gradient(-45deg, transparent 45%, rgba(244, 63, 94, 0.1) 45%, rgba(244, 63, 94, 0.1) 55%, transparent 55%)
              `,
              backgroundSize: '30px 30px',
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              backgroundPosition: ['0% 0%', '100% 100%'],
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

const Card_61: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9))',
          boxShadow: '0 8px 32px rgba(244, 63, 94, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Abstract Forms</h3>
          <p className="text-rose-600">Geometric harmony</p>
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
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9))',
        boxShadow: '0 8px 32px rgba(244, 63, 94, 0.2)',
      }}
    >
      <GeometricEffect isHovered={isHovered} />

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
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #F43F5E, #FB7185)',
              fontFamily: 'Montserrat',
            }}
          >
            Abstract Forms
          </motion.h3>
          <motion.p className="text-rose-600">
            Geometric harmony
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Shapes', value: 'Dynamic' },
            { label: 'Pattern', value: 'Complex' },
            { label: 'Motion', value: 'Fluid' },
            { label: 'Balance', value: 'Perfect' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-rose-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(244, 63, 94, 0.1)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(244, 63, 94, 0.1)',
                scale: 1,
              }}
            >
              <div className="text-rose-600 text-sm">{stat.label}</div>
              <div className="text-gray-900 font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-rose-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#E11D48',
              boxShadow: '0 0 20px rgba(244, 63, 94, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Transform
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-rose-600 text-rose-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(244, 63, 94, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_61; 