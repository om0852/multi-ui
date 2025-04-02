'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Menubar Component
const Menubar = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

  // Close the menu when clicking outside
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <div ref={menubarRef} className="relative inline-block">
      <AnimatePresence mode="wait">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            toggleMenu,
            isVisible,
            closeMenu,
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            childVariants: itemVariants
          })
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menubar; 