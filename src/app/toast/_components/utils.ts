// utils.ts
import React, { useEffect, useState } from 'react';
import { Variants } from "framer-motion";

export type ToastProps = {
  message: string | React.ReactNode;
  close: () => void;
  icon?: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  theme?: "success" | "warn" | "info" | "danger"; // Themes
  duration?: number;
  animationType?: "slide" | "fade" | "zoom" | "bounce";
  autoDismiss?: boolean;
  onHoverPause?: boolean;
  actionButton?: { label: string; onClick: () => void };
  stack?: boolean;
};

export const animationVariants: Record<
  string,
  Variants
> = {
  slide: { hidden: { x: 300, opacity: 0 }, visible: { x: 0, opacity: 1 }, exit: { x: 300, opacity: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } },
  zoom: { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 }, exit: { scale: 0, opacity: 0 } },
  bounce: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  },
  zoomflip: {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -15,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: 15,
      x: "50%",
      y: "-50%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        duration: 0.5,
      },
    },
  },
  PopOutIn: {
    hidden: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      opacity: 0,
      scale: 0.5,
      y: -20,
    },
    visible: {
      width: "320px",
      height: "100px",
      borderRadius: "16px",
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6,
      },
    },
    exit: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      opacity: 0,
      scale: 0.5,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6,
      },
    },
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
  },
  wobble: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: [0, 10, -10, 5, -5, 0],
      transition: { duration: 0.8 },
    },
    exit: { scale: 0.5, opacity: 0 },
  },
  flip: {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1 },
    exit: { scaleY: 0, opacity: 0 },
  },
  staggeredZoom: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: [0.5, 1.2, 1],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: { scale: 0.5, opacity: 0 },
  },
  drop: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { bounce: 0.5, duration: 0.6 } },
    exit: { y: 100, opacity: 0 },
  },
  pulse: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: [1, 1.1, 1],
      opacity: 1,
      transition: { repeat: Infinity, repeatType: "mirror", duration: 0.8 },
    },
    exit: { scale: 0.9, opacity: 0 },
  },
  ripple: {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0.8, 1.2, 1],
      opacity: [0, 1, 1],
      transition: { duration: 0.8 },
    },
    exit: { scale: 0.8, opacity: 0 },
  },
  roll: {
    hidden: { rotate: -360, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { rotate: 360, opacity: 0 },
  },
  twist: {
    hidden: { x: -50, rotate: -15, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: { x: 50, rotate: 15, opacity: 0 },
  },
};

export const themeClasses = {
  light: "bg-white text-black border-gray-300",
  dark: "bg-gray-800 text-white border-gray-700",
  custom: "bg-blue-500 text-white border-blue-700",
  success: "bg-green-500 text-white border-green-600",
  danger: "bg-red-500 text-white border-red-600",
  warning: "bg-yellow-500 text-black border-yellow-600",
  info: "bg-blue-400 text-white border-blue-500",
  neutral: "bg-gray-100 text-gray-800 border-gray-200",
  vibrant: "bg-purple-500 text-white border-purple-600",
  pink: "bg-pink-500 text-white border-pink-600",
  cyan: "bg-cyan-500 text-black border-cyan-600",
  teal: "bg-teal-500 text-white border-teal-600",
};
export const textColor = {
  light: "text-black", // Dark text for light backgrounds
  dark: "text-white", // White text for dark backgrounds
  custom: "text-white", // White text for custom themes
  success: "text-white", // White text for success theme
  danger: "text-white", // White text for danger theme
  warning: "text-black", // Dark text for warning theme
  info: "text-white", // White text for info theme
  neutral: "text-gray-800", // Dark gray text for neutral theme
  vibrant: "text-white", // White text for vibrant theme
  pink: "text-white", // White text for pink theme
  cyan: "text-black", // Dark text for cyan theme
  teal: "text-white", // White text for teal theme
};

export const progressBarColors = {
  light: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
  dark: "bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400",
  warn: "bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-400",
  danger: "bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500",
    success: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
  info: "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500",
  neutral: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500",
  vibrant: "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-600",
  pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600",
  cyan: "bg-gradient-to-r from-cyan-400 via-teal-400 to-teal-500",
  teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600",
  custom: "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
};
  



export const gradientThemeClasses = {
  light: "bg-gradient-to-br from-gray-50 to-white text-black border-gray-200",
  dark: "bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white border-gray-600",
  custom: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white border-blue-500",
  success: "bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white border-green-500",
  danger: "bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white border-red-500",
  warning: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black border-yellow-500",
  info: "bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 text-white border-blue-400",
  neutral: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-gray-800 border-gray-300",
  vibrant: "bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 text-white border-purple-500",
  pink: "bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 text-white border-pink-500",
  cyan: "bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-500 text-black border-cyan-400",
  teal: "bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 text-white border-teal-500",
};
export const closeIconColors = {
  light: "text-gray-700", // Darker text for light themes
  dark: "text-white", // White for dark themes
  custom: "text-white",
  success: "text-white",
  danger: "text-white",
  warning: "text-gray-800",
  info: "text-white",
  neutral: "text-gray-800",
  vibrant: "text-white",
  pink: "text-white",
  cyan: "text-black",
  teal: "text-white",
};

export const ThemeClassesBorder = {
  light: "bg-white text-black border-l-[5px] border-gray-200",
  dark: "bg-white text-white border-l-[5px] border-gray-600",
  custom: "bg-white text-white border-l-[5px] border-blue-500",
  success: "bg-white text-white border-l-[5px] border-green-500",
  danger: "bg-white text-white border-l-[5px] border-red-500",
  warning: "bg-white text-black border-l-[5px] border-yellow-500",
  info: "bg-white text-white border-l-[5px] border-blue-400",
  neutral: "bg-white text-gray-800 border-l-[5px] border-gray-300",
  vibrant: "bg-white text-white border-l-[5px] border-purple-500",
  pink: "bg-white text-white border-l-[5px] border-pink-500",
  cyan: "bg-white text-black border-l-[5px] border-cyan-400",
  teal: "bg-white text-white border-l-[5px] border-teal-500",
};
export const gradientProgressBarColors = {
  light: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500", // Contrasting vibrant colors
  dark: "bg-gradient-to-r from-teal-400 via-green-500 to-lime-400", // Bright, vivid greens for contrast
  custom: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500", // Warm tones against blue
  success: "bg-gradient-to-r from-lime-500 via-emerald-500 to-teal-500", // Refreshing greens
  danger: "bg-gradient-to-r from-orange-500 via-red-600 to-rose-500", // Bold warm tones
  warning: "bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-400", // Gradient emphasizing caution
  info: "bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500", // Cool blues and indigo
  neutral: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600", // Subtle but distinct grayscale
  vibrant: "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600", // Bold and eye-catching
  pink: "bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500", // Lively pink tones
  cyan: "bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-500", // Bright teal and cyan
  teal: "bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600", // Harmonious green-teal-cyan
};

export const positionClasses = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
};

// Handles timer logic for auto-dismiss
export const useToastTimer = (
  autoDismiss: boolean,
  duration: number,
  close: () => void,
  onHoverPause: boolean
) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  // Calculate the elapsed percentage
  const elapsedPercent = (elapsedTime / duration) * 100;

  // Handle mouse enter to pause the timer
  const handleMouseEnter = () => {
    if (onHoverPause) {
      setTimerActive(false);
    }
  };

  // Handle mouse leave to resume the timer
  const handleMouseLeave = () => {
    if (onHoverPause) {
      setTimerActive(true);
    }
  };

  // Start the timer
  useEffect(() => {
    if (!timerActive) return;

    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 100); // Increment every 100ms
    }, 100);

    if (elapsedTime >= duration) {
      clearInterval(interval);
      close(); // Close the toast once the duration is over
    }

    return () => clearInterval(interval);
  }, [elapsedTime, timerActive, duration, close]);

  return { handleMouseEnter, handleMouseLeave, elapsedPercent };
};