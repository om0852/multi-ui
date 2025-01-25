'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InkEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ink drops */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.1), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Brush stroke */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent)',
              transform: 'skewX(-20deg)',
            }}
            animate={{
              x: ['-100%', '200%'],
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

const Card_48: React.FC = () => {
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
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900">Zen Simplicity</h3>
          <p className="text-gray-600">Find peace in minimalism</p>
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
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <InkEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-4"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 text-gray-900"
            style={{
              fontFamily: "'Noto Serif', serif",
            }}
          >
            Zen Simplicity
          </motion.h3>
          <motion.p className="text-gray-600">
            Find peace in minimalism
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            'Mindful Design',
            'Peaceful Interface',
            'Focused Content',
          ].map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-center space-x-3"
              initial={false}
              animate={isHovered ? {
                x: 10,
                transition: { delay: i * 0.1 },
              } : {
                x: 0,
              }}
            >
              <div className="w-1 h-1 rounded-full bg-gray-400" />
              <div className="text-gray-600" style={{ fontFamily: "'Noto Serif', serif" }}>{feature}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-gray-900 text-white font-medium"
            style={{ fontFamily: "'Noto Serif', serif" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#1F2937',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-gray-900 text-gray-900 font-medium"
            style={{ fontFamily: "'Noto Serif', serif" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
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

export default Card_48; 