"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiHome, HiUser, HiCog, HiMail, HiBell, HiSearch } from 'react-icons/hi';

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
    { id: 'notifications', icon: HiBell, label: 'Notifications', notifications: 5 },
    { id: 'settings', icon: HiCog, label: 'Settings' },
  ];

  return (
    <motion.aside
      initial={{ width: isExpanded ? 240 : 80 }}
      animate={{ width: isExpanded ? 240 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 ${className}`}
    >
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-8 bg-indigo-600 rounded-full p-1.5 hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </motion.button>

      {/* Logo */}
      <div className="flex items-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center"
        >
          <span className="text-xl font-bold">L</span>
        </motion.div>
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="ml-3 text-xl font-semibold"
            >
              Logo
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder={isExpanded ? "Search..." : ""}
          className="w-full bg-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center w-full p-3 rounded-lg transition-colors ${
              activeItem === item.id
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon className="w-6 h-6" />
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="ml-3"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
            {item.notifications && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`ml-auto ${!isExpanded && 'mr-0'} bg-red-500 text-white text-xs rounded-full px-2 py-1`}
              >
                {item.notifications}
              </motion.div>
            )}
          </motion.button>
        ))}
      </nav>

      {/* Profile Section */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 flex items-center p-3 rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-600 transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="Profile"
          className="w-8 h-8 rounded-full"
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
              <div className="text-xs text-gray-400">Admin</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar; 