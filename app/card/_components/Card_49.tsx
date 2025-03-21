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
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                top: ['0%', '120%'],
                left: `${Math.random() * 100}%`,
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <svg className="w-full h-full text-teal-500/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21,3c0,0-6.293,2.256-9,5C9.185,5.164,4.89,2,3,2C1.611,2,1,3.611,1,5c0,1.892,3.164,6.185,6,9c-2.744,2.707-5,9-5,9 s6.293-2.256,9-5c2.815,2.836,7.11,6,9,6c1.389,0,2-1.611,2-3c0-1.892-3.164-6.185-6-9C18.744,9.293,21,3,21,3z" />
              </svg>
            </motion.div>
          ))}
          
          {/* Wave effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1), transparent)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
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

const Card_49: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(20, 184, 166, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-teal-800">Organic Growth</h3>
          <p className="text-teal-600">Nature&apos;s wisdom</p>
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
        boxShadow: '0 8px 32px rgba(20, 184, 166, 0.1)',
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
            <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 text-teal-800"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Organic Growth
          </motion.h3>
          <motion.p className="text-teal-600">
            Nature&apos;s wisdom
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Growth Rate', value: '+128%' },
            { label: 'Sustainability', value: '100%' },
            { label: 'Biodiversity', value: 'High' },
            { label: 'Ecosystem', value: 'Balanced' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-teal-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgb(240, 253, 250)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgb(240, 253, 250)',
                scale: 1,
              }}
            >
              <div className="text-teal-600 text-sm">{stat.label}</div>
              <div className="text-teal-800 font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-teal-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#0D9488',
              boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Nature
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-teal-600 text-teal-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(20, 184, 166, 0.1)',
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

export default Card_49; 