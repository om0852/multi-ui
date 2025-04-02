"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCog, HiMail, HiBell, HiSearch, HiLightBulb, HiCalendar } from 'react-icons/hi';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { id: 'home', icon: HiHome, label: 'Home' },
    { id: 'profile', icon: HiUser, label: 'Profile' },
    { id: 'messages', icon: HiMail, label: 'Messages', notifications: 3 },
    { id: 'calendar', icon: HiCalendar, label: 'Calendar' },
    { id: 'ideas', icon: HiLightBulb, label: 'Ideas' },
    { id: 'notifications', icon: HiBell, label: 'Notifications', notifications: 5 },
    { id: 'settings', icon: HiCog, label: 'Settings' },
  ];

  return (
    <motion.aside
      initial={{ width: isExpanded ? 280 : 80 }}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative min-h-screen backdrop-blur-xl bg-white/10 text-white ${className}`}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glass Border Effect */}
      <div className="absolute inset-0 border-r border-white/10" />

      {/* Content Container */}
      <div className="relative p-6 space-y-8">
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-8 bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <HiSearch className="w-4 h-4" />
          </motion.div>
        </motion.button>

        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            className="relative w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="text-2xl font-bold">L</span>
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="ml-4"
              >
                <h1 className="text-xl font-bold">Luminous</h1>
                <p className="text-xs text-white/60">Glass UI</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`relative w-full flex items-center rounded-xl p-3 transition-all ${
                activeItem === item.id
                  ? 'text-white bg-white/20'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active Item Highlight */}
              {activeItem === item.id && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Icon */}
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
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
                    className="ml-4 text-sm font-medium relative"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Notification Badge */}
              {item.notifications && (
                <motion.div
                  className={`ml-auto ${!isExpanded && 'mr-0'} bg-white/20 backdrop-blur-sm text-white text-xs rounded-full px-2 py-0.5`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                  }}
                >
                  {item.notifications}
                </motion.div>
              )}
            </motion.button>
          ))}
        </nav>

        {/* User Profile */}
        <motion.div
          className="absolute bottom-6 left-6 right-6"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="relative p-4 rounded-xl bg-white/10 backdrop-blur-lg cursor-pointer group"
            whileHover={{ y: -2 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100"
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
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=random"
                  alt="Profile"
                  className="relative w-10 h-10 rounded-full border-2 border-white/20"
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
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-white/60">Premium User</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default Sidebar; 