'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherAnimation: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sun rays */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-1 origin-left"
              style={{
                background: 'linear-gradient(90deg, rgba(250, 204, 21, 0.4), transparent)',
                left: '30%',
                top: '30%',
                transform: `rotate(${i * 30}deg)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          
          {/* Clouds */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              className="absolute"
              style={{
                width: 60 + i * 20,
                height: 60 + i * 20,
                borderRadius: '40px',
                background: 'rgba(255, 255, 255, 0.8)',
                filter: 'blur(8px)',
                top: `${20 + i * 10}%`,
              }}
              initial={{ x: '-100%' }}
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 20 - i * 4,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_26: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(250, 204, 21, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">San Francisco</h3>
            <span className="text-sm text-gray-500">Today</span>
          </div>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-gray-900">72°</div>
            <div className="text-gray-500">Sunny</div>
          </div>
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
        boxShadow: '0 8px 32px rgba(250, 204, 21, 0.1)',
      }}
    >
      <WeatherAnimation isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div 
          className="flex items-center justify-between mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-900">San Francisco</h3>
          <span className="text-sm text-gray-500">Today</span>
        </motion.div>

        <motion.div 
          className="text-center mb-6"
          animate={isHovered ? { y: -4 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-6xl font-bold text-gray-900"
            animate={isHovered ? {
              scale: 1.1,
              color: '#F59E0B',
            } : {
              scale: 1,
              color: '#111827',
            }}
            transition={{ duration: 0.3 }}
          >
            72°
          </motion.div>
          <div className="text-gray-500">Sunny</div>
        </motion.div>

        <motion.div
          className="grid grid-cols-4 gap-2 pt-4 border-t border-gray-100"
          initial={false}
        >
          {['9AM', '12PM', '3PM', '6PM'].map((time, i) => (
            <motion.div
              key={time}
              className="text-center"
              animate={isHovered ? { y: -2 } : { y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="text-sm text-gray-500">{time}</div>
              <motion.div
                className="text-lg font-semibold text-gray-900"
                animate={isHovered ? {
                  scale: 1.1,
                  color: '#F59E0B',
                } : {
                  scale: 1,
                  color: '#111827',
                }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {70 + i * 2}°
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-3 gap-2"
          initial={false}
        >
          {[
            { label: 'Humidity', value: '65%' },
            { label: 'Wind', value: '12mph' },
            { label: 'UV Index', value: 'High' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center p-2 rounded-lg bg-gray-50"
              animate={isHovered ? {
                y: -2,
                backgroundColor: 'rgba(250, 204, 21, 0.1)',
              } : {
                y: 0,
                backgroundColor: 'rgba(249, 250, 251, 1)',
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div className="text-xs text-gray-500">{item.label}</div>
              <div className="text-sm font-semibold text-gray-900">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_26; 