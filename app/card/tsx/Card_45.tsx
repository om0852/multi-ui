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
              className="absolute w-4 h-4"
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
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <svg className="w-full h-full text-emerald-500/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21,3c0,0-6.293,2.256-9,5C9.185,5.164,4.89,2,3,2C1.611,2,1,3.611,1,5c0,1.892,3.164,6.185,6,9c-2.744,2.707-5,9-5,9 s6.293-2.256,9-5c2.815,2.836,7.11,6,9,6c1.389,0,2-1.611,2-3c0-1.892-3.164-6.185-6-9C18.744,9.293,21,3,21,3z" />
              </svg>
            </motion.div>
          ))}
          
          {/* Wave effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent)',
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

const Card_45: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-emerald-800">Natural Growth</h3>
          <p className="text-emerald-600">Harmony with nature</p>
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
        boxShadow: '0 8px 32px rgba(16, 185, 129, 0.1)',
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
            className="w-20 h-20 mx-auto mb-4"
            animate={isHovered ? {
              rotate: 360,
              scale: [1, 1.1, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 text-emerald-800"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Natural Growth
          </motion.h3>
          <motion.p className="text-emerald-600">
            Harmony with nature
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Sustainability', value: '100%' },
            { label: 'Eco-friendly', value: 'Certified' },
            { label: 'Carbon', value: 'Neutral' },
            { label: 'Renewable', value: 'Energy' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-emerald-50 rounded-lg p-3"
              initial={false}
              animate={isHovered ? {
                backgroundColor: 'rgb(236, 253, 245)',
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                backgroundColor: 'rgb(236, 253, 245)',
                scale: 1,
              }}
            >
              <div className="text-emerald-600 text-sm">{stat.label}</div>
              <div className="text-emerald-800 font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-emerald-600 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#059669',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-emerald-600 text-emerald-600 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_45; 