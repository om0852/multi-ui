'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GearAnimation: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Background gears */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: 100 + i * 40,
                height: 100 + i * 40,
                border: '4px dashed rgba(99, 102, 241, 0.1)',
                borderRadius: '50%',
                top: `${20 + i * 20}%`,
                right: `${-20 - i * 10}%`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
          
          {/* Circuit lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), transparent)',
                width: '100%',
                top: `${20 + i * 15}%`,
                transform: `rotate(${i * 15}deg)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_29: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeToggles, setActiveToggles] = React.useState(new Set([1, 3]));

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSetting = (id: number) => {
    setActiveToggles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (!mounted) {
    return (
      <div 
        className="relative w-[380px] rounded-2xl backdrop-blur-sm overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Notifications</span>
              <div className="w-11 h-6 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const settings = [
    { id: 1, name: 'Notifications', description: 'Receive alerts and updates' },
    { id: 2, name: 'Dark Mode', description: 'Enable dark theme' },
    { id: 3, name: 'Auto-Sync', description: 'Sync data automatically' },
    { id: 4, name: 'Sound Effects', description: 'Play interface sounds' },
  ];

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
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
      }}
    >
      <GearAnimation isHovered={isHovered} />

      <div className="relative p-6">
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Settings
        </motion.h3>

        <motion.div
          className="space-y-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {settings.map((setting, i) => (
            <motion.div
              key={setting.id}
              className="flex items-center justify-between"
              initial={false}
              animate={isHovered ? {
                x: 0,
                opacity: 1,
              } : {
                x: 0,
                opacity: 0.9,
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div>
                <div className="text-gray-700 font-medium">{setting.name}</div>
                <div className="text-sm text-gray-500">{setting.description}</div>
              </div>
              <motion.button
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  activeToggles.has(setting.id) ? 'bg-indigo-500' : 'bg-gray-200'
                }`}
                onClick={() => toggleSetting(setting.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute w-4 h-4 bg-white rounded-full top-1"
                  initial={false}
                  animate={{
                    left: activeToggles.has(setting.id) ? '24px' : '4px',
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 pt-4 border-t border-gray-100"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="w-full px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium"
            whileHover={{
              scale: 1.02,
              backgroundColor: '#4F46E5',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Save Changes
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_29; 