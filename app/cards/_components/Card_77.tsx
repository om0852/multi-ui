'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeafEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Floating leaves */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${20 + Math.random() * 10}px`,
                height: `${20 + Math.random() * 10}px`,
                left: `${Math.random() * 100}%`,
                background: 'rgba(34, 197, 94, 0.2)',
                clipPath: 'path("M10 0 C15 5 15 10 10 15 C5 10 5 5 10 0")',
                filter: 'blur(1px)',
              }}
              initial={{ 
                top: '120%',
                rotate: 0,
                scale: 0
              }}
              animate={{
                top: '-20%',
                rotate: 360,
                scale: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Wave effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1), transparent 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_77: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-green-600">Natural Growth</h3>
          <p className="text-green-500">Harmony with nature</p>
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
        boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)',
      }}
    >
      <LeafEffect isHovered={isHovered} />

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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #22C55E, #16A34A)',
              fontFamily: 'Playfair Display',
            }}
          >
            Natural Growth
          </motion.h3>
          <motion.p className="text-green-600">
            Harmony with nature
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Growth', value: '100%' },
            { label: 'Harmony', value: 'Perfect' },
            { label: 'Balance', value: 'Optimal' },
            { label: 'Energy', value: 'Flowing' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-green-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                scale: 1,
              }}
            >
              <div className="text-green-600 text-sm">{stat.label}</div>
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
            className="px-6 py-2 rounded-lg bg-green-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#16A34A',
              boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Nurture
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-green-600 text-green-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_77; 