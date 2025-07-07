"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCog, HiMail, HiBell, HiSearch, HiChartBar, HiCode } from 'react-icons/hi';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { id: 'home', icon: HiHome, label: 'Home', color: '#FF00FF' },
    { id: 'profile', icon: HiUser, label: 'Profile', color: '#00FFFF' },
    { id: 'messages', icon: HiMail, label: 'Messages', color: '#FF00AA', notifications: 3 },
    { id: 'code', icon: HiCode, label: 'Code', color: '#00FF00' },
    { id: 'analytics', icon: HiChartBar, label: 'Analytics', color: '#FF3300' },
    { id: 'notifications', icon: HiBell, label: 'Alerts', color: '#FFFF00', notifications: 5 },
    { id: 'settings', icon: HiCog, label: 'Settings', color: '#00FF99' },
  ];

  return (
    <motion.aside
      initial={{ width: isExpanded ? 280 : 80 }}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative min-h-screen bg-gray-950 text-white ${className}`}
      style={{
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
      }}
    >
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-4 top-8 bg-cyan-500 rounded-full p-2 text-black shadow-lg hover:shadow-cyan-500/50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
        }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <HiChartBar className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Logo */}
      <div className="flex items-center p-4 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          }}
        >
          <motion.div
            animate={{
              boxShadow: ['0 0 20px rgba(0, 255, 255, 0.5)', '0 0 40px rgba(0, 255, 255, 0.8)', '0 0 20px rgba(0, 255, 255, 0.5)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-xl"
          />
          <span className="relative text-2xl font-bold text-black">N</span>
        </motion.div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="ml-4"
            >
              <h1 className="text-xl font-bold text-cyan-500">NEON</h1>
              <p className="text-xs text-cyan-300">CYBERPUNK v2.0</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <div className="relative px-4 mb-8">
        <HiSearch className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500" />
        <input
          type="text"
          placeholder={isExpanded ? "Search..." : ""}
          className="w-full bg-gray-900/50 rounded-xl py-3 pl-12 pr-4 text-sm text-cyan-500 placeholder-cyan-700 border border-cyan-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          style={{
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.1)',
          }}
        />
      </div>

      {/* Menu Items */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
            className={`relative w-full flex items-center rounded-xl p-3 transition-all ${
              activeItem === item.id
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Neon Glow Background */}
            <AnimatePresence>
              {(activeItem === item.id || hoveredItem === item.id) && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    boxShadow: `0 0 20px ${item.color}50`,
                    border: `1px solid ${item.color}50`,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Icon */}
            <motion.div
              className="relative"
              animate={{
                color: activeItem === item.id ? item.color : undefined,
              }}
            >
              <item.icon className="w-6 h-6" />
            </motion.div>

            {/* Label */}
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 text-sm font-medium"
                  style={{
                    color: activeItem === item.id ? item.color : undefined,
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            {item.notifications && (
              <motion.div
                className={`ml-auto ${!isExpanded && 'mr-0'} px-2 py-1 rounded-full text-xs`}
                style={{
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                  border: `1px solid ${item.color}50`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.notifications}
              </motion.div>
            )}
          </motion.button>
        ))}
      </nav>

      {/* User Profile */}
      <motion.div
        className="absolute bottom-4 left-4 right-4"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="relative p-4 rounded-xl bg-gray-900 cursor-pointer"
          whileHover={{ y: -2 }}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
            border: '1px solid rgba(0, 255, 255, 0.1)',
          }}
        >
          <div className="relative flex items-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: ['0 0 20px rgba(0, 255, 255, 0.5)', '0 0 40px rgba(0, 255, 255, 0.8)', '0 0 20px rgba(0, 255, 255, 0.5)'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://ui-avatars.com/api/?background=0D9488&color=fff"
                alt="Profile"
                className="relative w-10 h-10 rounded-full border-2 border-cyan-500"
              />
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  <div className="text-sm font-medium text-cyan-500">CyberUser</div>
                  <div className="text-xs text-cyan-700">Level 42</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar; 