"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCog, HiMail, HiBell, HiSearch, HiChartBar, HiFolder } from 'react-icons/hi';

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
    { id: 'home', icon: HiHome, label: 'Home', color: 'from-pink-500 to-rose-500' },
    { id: 'profile', icon: HiUser, label: 'Profile', color: 'from-purple-500 to-indigo-500' },
    { id: 'messages', icon: HiMail, label: 'Messages', color: 'from-blue-500 to-cyan-500', notifications: 3 },
    { id: 'analytics', icon: HiChartBar, label: 'Analytics', color: 'from-emerald-500 to-teal-500' },
    { id: 'files', icon: HiFolder, label: 'Files', color: 'from-orange-500 to-amber-500' },
    { id: 'notifications', icon: HiBell, label: 'Notifications', color: 'from-red-500 to-pink-500', notifications: 5 },
    { id: 'settings', icon: HiCog, label: 'Settings', color: 'from-violet-500 to-purple-500' },
  ];

  return (
    <motion.aside
      initial={{ width: isExpanded ? 280 : 80 }}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative min-h-screen bg-gray-900 text-white p-4 ${className}`}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-4 top-8 bg-white rounded-full p-2 text-gray-900 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <HiChartBar className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Logo */}
      <div className="flex items-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-12 h-12 rounded-xl bg-white flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="relative text-2xl font-bold text-white">L</span>
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Logo
              </h1>
              <p className="text-xs text-gray-400">Dashboard v2.0</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={isExpanded ? "Quick search..." : ""}
          className="w-full bg-gray-800/50 backdrop-blur-sm rounded-xl py-3 pl-12 pr-4 text-sm placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
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
            {/* Background Gradient */}
            <AnimatePresence>
              {(activeItem === item.id || hoveredItem === item.id) && (
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-80`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
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
                className={`ml-auto ${!isExpanded && 'mr-0'} bg-white/10 backdrop-blur-sm text-white text-xs rounded-full px-2 py-1`}
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
          className="relative p-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 cursor-pointer group"
          whileHover={{ y: -2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=random"
              alt="Profile"
              className="w-10 h-10 rounded-full ring-2 ring-indigo-500/50"
            />
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-gray-400">Administrator</div>
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