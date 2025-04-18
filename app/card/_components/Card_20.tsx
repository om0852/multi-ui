'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_20: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeToggles, setActiveToggles] = React.useState(new Set([1, 3]));

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

  const settings = [
    { id: 1, name: 'Notifications', description: 'Receive alerts and updates' },
    { id: 2, name: 'Dark Mode', description: 'Enable dark theme' },
    { id: 3, name: 'Auto-Sync', description: 'Sync data automatically' },
    { id: 4, name: 'Sound Effects', description: 'Play interface sounds' },
  ];

  return (
    <motion.div
      className="relative w-full rounded-2xl backdrop-blur-sm overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <motion.h3
          className="text-xl font-bold text-white mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p className="text-gray-400 text-sm mb-6">
          {description}
        </motion.p>

        <div className="space-y-4">
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
                <div className="text-gray-200 font-medium">{setting.name}</div>
                <div className="text-sm text-gray-500">{setting.description}</div>
              </div>
              <motion.button
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  activeToggles.has(setting.id) ? 'bg-emerald-500' : 'bg-gray-600'
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
        </div>

        <motion.div
          className="mt-6 pt-4 border-t border-gray-800"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={link} passHref>
            <motion.a
              className="block w-full px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium text-center"
              whileHover={{
                scale: 1.02,
                backgroundColor: '#059669',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {btnText}
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_20; 