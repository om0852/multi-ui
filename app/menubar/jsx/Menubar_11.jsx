'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Menubar Component
const Menubar = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div ref={menubarRef} className="relative inline-block">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            toggleMenu,
            isVisible,
            closeMenu,
          });
        }
        return child;
      })}
    </div>
  );
};

// MenubarItem Component
const MenubarItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
    >
      {children}
    </li>
  );
};

// MenubarSub Component
const MenubarSub = ({ label, children }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  return (
    <div className="relative">
      <MenubarItem onClick={() => setIsSubmenuVisible((prev) => !prev)}>{label}</MenubarItem>

      <AnimatePresence>
        {isSubmenuVisible && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-full top-0 ml-3 w-56 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg shadow-md border border-teal-300 z-30"
          >
            <ul className="py-3 px-4 space-y-2">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Menubar, MenubarItem, MenubarSub }; 