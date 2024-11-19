// import React, { useState, useEffect, ReactNode } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface ToastProps {
//   id: string; // Unique identifier for stacking
//   message: string | ReactNode; // Dynamic or rich content
//   type?: "success" | "error" | "warning" | "info";
//   icon?: ReactNode; // Optional icon
//   position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
//   duration?: number; // Display time in milliseconds
//   autoDismiss?: boolean;
//   onClose?: () => void;
//   actionButton?: { label: string; onClick: () => void }; // Optional action button
//   theme?: "light" | "dark" | "custom";
//   customClass?: string; // Custom styles
//   animationType?: "slide" | "fade" | "zoom" | "bounce";
// }

// const Toast: React.FC<ToastProps> = ({
//   id,
//   message,
//   type = "info",
//   icon,
//   position = "top-right",
//   duration = 3000,
//   autoDismiss = true,
//   onClose,
//   actionButton,
//   theme = "light",
//   customClass = "",
//   animationType = "fade",
// }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   // Close the toast
//   const handleClose = () => {
//     setIsVisible(false);
//     if (onClose) onClose();
//   };

//   // Auto-dismiss logic
//   useEffect(() => {
//     if (autoDismiss) {
//       const timer = setTimeout(() => {
//         handleClose();
//       }, duration);
//       return () => clearTimeout(timer);
//     }
//   }, [autoDismiss, duration]);

//   // Positioning classes
//   const positionClasses = {
//     "top-right": "top-4 right-4",
//     "top-left": "top-4 left-4",
//     "bottom-right": "bottom-4 right-4",
//     "bottom-left": "bottom-4 left-4",
//     center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
//   };

//   // Theme classes
//   const themeClasses = {
//     light: "bg-white text-black shadow-md",
//     dark: "bg-gray-800 text-white shadow-lg",
//     custom: "",
//   };

//   // Type classes
//   const typeClasses = {
//     success: "border-l-4 border-green-500",
//     error: "border-l-4 border-red-500",
//     warning: "border-l-4 border-yellow-500",
//     info: "border-l-4 border-blue-500",
//   };

//   // Animation variants
//   const animationVariants = {
//     slide: { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 }, exit: { x: 100, opacity: 0 } },
//     fade: { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } },
//     zoom: { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 }, exit: { scale: 0, opacity: 0 } },
//     bounce: {
//       hidden: { y: -50, opacity: 0 },
//       visible: { y: 0, opacity: 1 },
//       exit: { y: 50, opacity: 0 },
//     },
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className={`fixed z-50 p-4 rounded-lg ${themeClasses[theme]} ${typeClasses[type]} ${positionClasses[position]} ${customClass}`}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           variants={animationVariants[animationType]}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           <div className="flex items-center space-x-3">
//             {icon && <div className="text-xl">{icon}</div>}
//             <div className="flex-1">{message}</div>
//             {actionButton && (
//               <button
//                 className="px-3 py-1 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
//                 onClick={actionButton.onClick}
//               >
//                 {actionButton.label}
//               </button>
//             )}
//             <button
//               className="text-lg font-bold focus:outline-none"
//               onClick={handleClose}
//               aria-label="Close Toast"
//             >
//               &times;
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Toast
"use client"
import React from "react";

interface Toast_1Props {
  message: string;
  onClose?: () => void;
}

const Toast_1: React.FC<Toast_1Props> = ({ message, onClose }) => {
  return (
    <div className="p-4 bg-green-500 text-white rounded shadow flex justify-between">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold">&times;</button>
    </div>
  );
};

export default Toast_1;
