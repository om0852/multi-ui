// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export interface CountdownProps {
//   to: Date; // Ending date/time (must be a future date)
//   interval?: number; // Time between each decrement (in seconds)
//   className?: string; // Custom class for styling
//   formatter?: (time: string) => string; // Function to format the remaining time
//   onComplete?: () => void; // Function called when countdown completes
// }

// const Countdown: React.FC<CountdownProps> = ({
//   to,
//   interval = 1,
//   className = "",
//   formatter = (value) => value, // Default formatter just returns the string
//   onComplete,
// }) => {
//   const [timeRemaining, setTimeRemaining] = useState<number>(0); // Time remaining in milliseconds
//   const [visibleHours, setVisibleHours] = useState<number>(0);
//   const [visibleMinutes, setVisibleMinutes] = useState<number>(0);
//   const [visibleSeconds, setVisibleSeconds] = useState<number>(0); // For smooth animation

//   useEffect(() => {
//     const endTime = new Date(to).getTime();
//     const timerInterval = interval * 1000; // Interval in milliseconds

//     // Set initial time remaining as difference from current time
//     const calculateRemainingTime = () => {
//       const currentTime = Date.now();
//       const remainingTime = Math.max(0, endTime - currentTime);
//       return remainingTime;
//     };

//     // Function to calculate initial time
//     const initializeTime = () => {
//       const remainingTime = calculateRemainingTime();
//       const secondsRemaining = Math.floor(remainingTime / 1000); // Convert to seconds
//       const minutesRemaining = Math.floor(secondsRemaining / 60); // Convert to minutes
//       const hoursRemaining = Math.floor(minutesRemaining / 60); // Convert to hours

//       const newSeconds = secondsRemaining % 60;
//       const newMinutes = minutesRemaining % 60;
//       const newHours = hoursRemaining;

//       setVisibleSeconds(newSeconds);
//       setVisibleMinutes(newMinutes);
//       setVisibleHours(newHours);
//     };

//     initializeTime(); // Initialize time immediately

//     let intervalId = setInterval(() => {
//       const remainingTime = calculateRemainingTime();
//  
//       const secondsRemaining = Math.floor(remainingTime / 1000); // Convert to seconds
//       const minutesRemaining = Math.floor(secondsRemaining / 60); // Convert to minutes
//       const hoursRemaining = Math.floor(minutesRemaining / 60); // Convert to hours

//       const newSeconds = secondsRemaining % 60;
//       const newMinutes = minutesRemaining % 60;
//       const newHours = hoursRemaining;

//       // Only set visibleSeconds when they change, trigger animation on change
//       if (newSeconds !== visibleSeconds) {
//         setVisibleSeconds(newSeconds);
//       }

//       // Only set minutes and hours when they change (no animation)
//       if (newMinutes !== visibleMinutes) {
//         setVisibleMinutes(newMinutes);
//       }

//       if (newHours !== visibleHours) {
//         setVisibleHours(newHours);
//       }

//       // If the countdown is complete, clear the interval and call onComplete
//       if (remainingTime <= 0) {
//         clearInterval(intervalId);
//         setVisibleHours(0);
//         setVisibleMinutes(0);
//         setVisibleSeconds(0);
//         if (onComplete) onComplete();
//       }
//     }, timerInterval);

//     return () => clearInterval(intervalId); // Cleanup on unmount
//   }, [to, interval, visibleSeconds, visibleMinutes, visibleHours, onComplete]);

//   // Format time as hh:mm:ss
//   const formatTime = (time: number) => {
//     return time.toString().padStart(2, "0");
//   };

//   return (
//     <div
//       className={`relative flex flex-col items-center  justify-center overflow-hidden ${className}`}
//       style={{
//         fontFamily: "sans-serif",
//         color: "#fff",
//         borderRadius: "10px",
//         backgroundColor: "#1E3A8A",
//         padding: "10px 30px",
//         width: "300px",
//         height: "150px",
//       }}
//     >
//       <div className="flex justify-center items-center">
//         {/* Hours: Do not animate */}
//         <motion.div
//           key={`hours-${visibleHours}`} // Use a unique key for each component
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//           }}
//           className="text-4xl font-bold mx-2"
//         >
//           {formatTime(visibleHours)}
//         </motion.div>
//         <span className="text-4xl font-bold mx-2">:</span>

//         {/* Minutes: Do not animate */}
//         <motion.div
//           key={`minutes-${visibleMinutes}`} // Use a unique key for each component
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//           }}
//           className="text-4xl font-bold mx-2"
//         >
//           {formatTime(visibleMinutes)}
//         </motion.div>
//         <span className="text-4xl font-bold mx-2">:</span>

//         {/* Seconds: Animate with sliding effect */}
//         <motion.div
//           key={`seconds-${visibleSeconds}`} // Use a unique key for each component
//           initial={{ y: "100%", opacity: 0 }}
//           animate={{ y: "0%", opacity: 1 }}
//           exit={{ y: "-100%", opacity: 0 }}
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//           }}
//           className="text-4xl font-bold mx-2"
//         >
//           {formatTime(visibleSeconds)}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  formatter?: (time: string) => string;
  onComplete?: () => void;
}

const Countdown_2: React.FC<CountdownProps> = ({
  to,
  interval = 1,
  className = "",
  formatter = (value) => value,
  onComplete,
}) => {
   const [visibleTime, setVisibleTime] = useState<string>("");

  useEffect(() => {
    const endTime = new Date(to).getTime();
    const calculateRemainingTime = () => Math.max(0, endTime - Date.now());

    const updateTime = () => {
      const remainingTime = calculateRemainingTime();
       setVisibleTime(formatTime(Math.floor(remainingTime / 1000)));
      if (remainingTime <= 0) {
        if (onComplete) onComplete();
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, interval * 1000);

    return () => clearInterval(intervalId);
  }, [to, interval, onComplete]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`${className} flex justify-center items-center`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleTime}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-4xl font-bold"
        >
          {formatter(visibleTime)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Countdown_2;
