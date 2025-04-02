'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InkEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Ink drops */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(17, 24, 39, 0.1), transparent)',
                left: `${30 + i * 20}%`,
                top: `${20 + i * 20}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 2],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          
          {/* Brush strokes */}
          <motion.div
            className="absolute inset-x-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(17, 24, 39, 0.1), transparent)',
              top: '50%',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
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

const Card_43: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(17, 24, 39, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Zen Simplicity</h3>
          <p className="text-gray-500">Find peace in minimalism</p>
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
        boxShadow: '0 8px 32px rgba(17, 24, 39, 0.1)',
      }}
    >
      <InkEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-8 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-6"
            animate={isHovered ? {
              scale: 1.1,
              rotate: 180,
            } : {
              scale: 1,
              rotate: 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-full h-full text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="1" />
              <path d="M12 8v8M8 12h8" strokeWidth="1" />
            </svg>
          </motion.div>
          <motion.h3
            className="text-2xl font-serif mb-2"
            style={{ fontFamily: 'Noto Serif' }}
            animate={isHovered ? { y: -2 } : { y: 0 }}
          >
            Zen Simplicity
          </motion.h3>
          <motion.p
            className="text-gray-500"
            style={{ fontFamily: 'Noto Serif' }}
          >
            Find peace in minimalism
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-6 mb-8"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Mindful Design', 'Peaceful Interface', 'Focused Content'].map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center justify-center"
              initial={false}
              animate={isHovered ? {
                x: 0,
                opacity: 1,
                transition: { delay: i * 0.1 },
              } : {
                x: 0,
                opacity: 0.7,
              }}
            >
              <span className="text-gray-600" style={{ fontFamily: 'Noto Serif' }}>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-gray-900 text-white"
            style={{ fontFamily: 'Noto Serif' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#1F2937',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border border-gray-900 text-gray-900"
            style={{ fontFamily: 'Noto Serif' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(17, 24, 39, 0.05)',
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

export default Card_43; 