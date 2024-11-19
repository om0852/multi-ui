// utils.ts
import React from 'react';
import { Variants } from "framer-motion";

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
};

export const themeClasses = {
  light: "bg-white text-black border-gray-300",
  dark: "bg-gray-800 text-white border-gray-700",
  custom: "bg-blue-500 text-white border-blue-700",
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
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startTimer = React.useCallback(() => {
    if (autoDismiss) {
      timerRef.current = setTimeout(close, duration);
    }
  }, [autoDismiss, duration, close]);

  const handleMouseEnter = () => {
    if (onHoverPause && timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    if (onHoverPause) startTimer();
  };

  React.useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startTimer]);

  return { handleMouseEnter, handleMouseLeave };
};
