// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export interface NumericClockProps {
//   interval?: number; // Update interval in milliseconds (default: 1000)
//   formatter?: (value: number) => string; // Format the numeric display
//   containerClassName?: string; // Custom container styles
//   digitClassName?: string; // Custom digit styles
// }

// const NumericClock: React.FC<NumericClockProps> = ({
//   interval = 1000, // Default update interval
//   formatter = (value) => value.toString().padStart(2, "0"), // Default formatter for digits
//   containerClassName = "flex justify-center items-center h-screen bg-gray-900",
//   digitClassName = "text-6xl font-bold text-white mx-2",
// }) => {
//   const [time, setTime] = useState<number[]>([]);

//   const updateTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     setTime([hours, minutes, seconds]);
//   };

//   useEffect(() => {
//     updateTime(); // Initialize time on mount
//     const timerId = setInterval(updateTime, interval);
//     return () => clearInterval(timerId); // Cleanup timer on unmount
//   }, [interval]);

//   return (
//     <div className={containerClassName}>
//       {time.map((unit, index) => (
//         <motion.div key={`time-unit-${index}`} className="flex items-center">
//           {formatter(unit)
//             .split("") // Split each digit for animation
//             .map((digit, digitIndex) => (
//               <motion.span
//                 key={`digit-${index}-${digitIndex}`}
//                 className={digitClassName}
//                 initial={digitAnimation.initial}
//                 animate={digitAnimation.animate}
//                 exit={digitAnimation.exit}
//                 transition={digitAnimation.transition}
//               >
//                 {digit}
//               </motion.span>
//             ))}
//           {index < time.length - 1 && (
//             <motion.span
//               className="text-red-400 mx-1 text-5xl"
//               initial={digitAnimation.initial}
//               animate={digitAnimation.animate}
//               exit={digitAnimation.exit}
//               transition={digitAnimation.transition}
//             >
//               :
//             </motion.span>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default NumericClock;
