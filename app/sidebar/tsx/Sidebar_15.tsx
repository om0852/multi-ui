"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCog, HiMail, HiBell, HiSearch, HiHeart, HiSun } from 'react-icons/hi';

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
    { id: 'home', icon: HiHome, label: 'Home' },
    { id: 'profile', icon: HiUser, label: 'Profile' },
    { id: 'messages', icon: HiMail, label: 'Messages', notifications: 3 },
    { id: 'wellness', icon: HiHeart, label: 'Wellness' },
    { id: 'mindfulness', icon: HiSun, label: 'Mindfulness' },
    { id: 'notifications', icon: HiBell, label: 'Notifications', notifications: 5 },
    { id: 'settings', icon: HiCog, label: 'Settings' },
  ];

  return (
    <motion.aside
      initial={{ width: isExpanded ? 280 : 80 }}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 ${className}`}
    >
      {/* Nature Pattern Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM30 10C41.0457 10 50 18.9543 50 30C50 41.0457 41.0457 50 30 50C18.9543 50 10 41.0457 10 30C10 18.9543 18.9543 10 30 10Z' fill='%23059669' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-4 top-8 bg-white dark:bg-emerald-800 rounded-full p-2 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <HiSun className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
        </motion.div>
      </motion.button>

      {/* Logo */}
      <div className="flex items-center p-4 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-700/50 flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 30%, rgba(5, 150, 105, 0.4), transparent)',
                'radial-gradient(circle at 70% 70%, rgba(5, 150, 105, 0.4), transparent)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="relative text-2xl font-bold text-emerald-700 dark:text-emerald-300">Z</span>
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
              <h1 className="text-xl font-bold text-emerald-800 dark:text-emerald-200">Zen</h1>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Find your balance</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <div className="relative px-4 mb-8">
        <HiSearch className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
        <input
          type="text"
          placeholder={isExpanded ? "Search..." : ""}
          className="w-full bg-white/50 dark:bg-emerald-800/50 backdrop-blur-sm rounded-xl py-3 pl-12 pr-4 text-sm text-emerald-900 dark:text-emerald-100 placeholder-emerald-500 border border-emerald-200 dark:border-emerald-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                ? 'text-emerald-900 dark:text-emerald-100'
                : 'text-emerald-600 dark:text-emerald-400'
            }`}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Active/Hover Background */}
            <AnimatePresence>
              {(activeItem === item.id || hoveredItem === item.id) && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-white/80 dark:bg-emerald-800/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            {/* Icon */}
            <motion.div
              className="relative"
              animate={{
                scale: activeItem === item.id ? 1.1 : 1,
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
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Notification Badge */}
            {item.notifications && (
              <motion.div
                className={`ml-auto ${!isExpanded && 'mr-0'} bg-emerald-200/80 dark:bg-emerald-700/80 backdrop-blur-sm text-emerald-900 dark:text-emerald-100 text-xs rounded-full px-2 py-1`}
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
          className="relative p-4 rounded-xl bg-white/50 dark:bg-emerald-800/50 backdrop-blur-sm cursor-pointer border border-emerald-200 dark:border-emerald-700"
          whileHover={{ y: -2 }}
        >
          <div className="relative flex items-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0 2px rgba(5, 150, 105, 0.2)',
                    '0 0 0 4px rgba(5, 150, 105, 0.2)',
                    '0 0 0 2px rgba(5, 150, 105, 0.2)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://ui-avatars.com/api/?background=059669&color=fff"
                alt="Profile"
                className="relative w-10 h-10 rounded-full"
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
                  <div className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Zen Master</div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400">Inner Peace</div>
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