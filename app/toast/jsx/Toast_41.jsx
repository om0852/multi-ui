import React, { useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { 
  positionClasses, 
  useToastTimer,
} from "./utils";

const Toast_41 = ({
  message,
  close,
  icon,
  position = "top-right",
  theme = "dark",
  duration = 4000,
  animationType = "slide",
  autoDismiss = true,
  onHoverPause = true,
  actionButton,
  stack,
  audio
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );

  useEffect(() => {
    if (audio) {
      const sound = new Audio(audio);
      sound.play().catch(error => console.log('Audio playback failed:', error));
    }
  }, [audio]);

  const getAnimationConfig = () => {
    switch (animationType) {
      case "slide":
        return {
          initial: { x: 300, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 300, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
      case "bounce":
        return {
          initial: { scale: 0.9, y: -20, opacity: 0 },
          animate: { scale: 1, y: 0, opacity: 1 },
          exit: { scale: 0.9, y: -20, opacity: 0 },
          transition: { type: "spring", stiffness: 300, damping: 15 }
        };
      default:
        return {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
          transition: { type: "spring", stiffness: 200, damping: 20 }
        };
    }
  };

  const animation = getAnimationConfig();

  return (
    <motion.div
      {...animation}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative z-50",
        "w-[320px]",
        positionClasses[position],
        stack ? "static" : "fixed",
      )}
    >
      {/* Toast Container */}
      <div className={clsx(
        "relative p-4 rounded-lg",
        theme === 'dark'
          ? 'bg-gray-900 shadow-lg'
          : 'bg-gray-100 shadow-lg',
      )}>
        {/* Content */}
        <p className={clsx(
          "text-sm font-medium",
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        )}>{message}</p>
        {/* Close Button */}
        <button onClick={close} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">×</button>
      </div>
    </motion.div>
  );
};

export default React.memo(Toast_41); 