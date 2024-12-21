// "use client";
// import React, { useEffect, useState } from "react";
// import ProgressBar from "./_components/ProgressBar_1";
// import AnimatedProgressBar from "./_components/ProgressBar_2";
// import StateBasedProgressBar from "./_components/ProgressBar_3";
// import OverlayProgressBar from "./_components/ProgressBar_5";
// import CircularOverlayProgressBar from "./_components/ProgressBar_4";

// const page = () => {
//   const [progress, setProgress] = useState(0);
//   const [showOverlay, setShowOverlay] = useState(true);
//   useEffect(() => {
//     if (progress < 100 && showOverlay) {
//       const timer = setTimeout(() => setProgress(progress + 10), 500);
//       return () => clearTimeout(timer);
//     }
//   }, [progress, showOverlay]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <button
//         className="px-4 py-2 bg-blue-600 text-white rounded-md"
//         onClick={() => {
//           setProgress(0); // Reset progress
//           setShowOverlay(true);
//         }}
//       >
//         Show Circular Progress
//       </button>

//       <CircularOverlayProgressBar
//         progress={progress}
//         show={showOverlay}
//         onClose={() => setShowOverlay(false)}
//         circleColor="stroke-green-500"
//         trackColor="stroke-gray-300"
//         overlayColor="bg-black bg-opacity-70"
//       />
//     </div>
//   );

//   // Simulate progress updates
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);
//   const steps = [
//     {
//       label: "Start",
//       value: 0,
//       onClick: () => console.log("Step 1 Clicked"),
//     },
//     {
//       label: "In Progress",
//       value: 1,
//       onClick: () => console.log("Step 2 Clicked"),
//     },
//     {
//       label: "Completed",
//       value: 2,
//       onClick: () => console.log("Step 3 Clicked"),
//     },
//     {
//       label: "Done",
//       value: 3,
//       onClick: () => console.log("Step 4 Clicked"),
//     },
//   ];
//   // const [progress, setProgress] = useState(0);
//   // const [showOverlay, setShowOverlay] = useState(true);

//   // Simulate progress
//   React.useEffect(() => {
//     if (progress < 100) {
//       const timer = setTimeout(() => setProgress(progress + 10), 500);
//       return () => clearTimeout(timer);
//     }
//   }, [progress]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <button
//         className="px-4 py-2 bg-blue-600 text-white rounded-md"
//         onClick={() => setShowOverlay(true)}
//       >
//         Show Progress
//       </button>

//       <OverlayProgressBar
//         progress={progress}
//         show={showOverlay}
//         onClose={() => setShowOverlay(false)}
//         barColor="bg-green-500"
//         overlayColor="bg-black bg-opacity-70"
//       />
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <StateBasedProgressBar
//         steps={steps}
//         activeColor="bg-blue-600"
//         completedColor="bg-green-400"
//         inactiveColor="bg-gray-300"
//       />
//     </div>
//   );
//   return (
//     <div>
//       {/* <ProgressBar
//         progress={10}
//         color="bg-red-500"
//         animationDuration={1}
//       />
//       <ProgressBar
//         progress={50}
//         color="bg-yellow-500"
//         animationDuration={1.5}
//       />
//       <ProgressBar progress={75} color="bg-green-500" animationDuration={2} />
//       <ProgressBar
//         progress={100}
//         color="bg-blue-600"
//         animationDuration={2}
//         showCounter
//       />
//       <ProgressBar
//         progress={60}
//         color="bg-purple-600"
//         animationDuration={1.2}
//         showCounter
//       />
//       <ProgressBar
//         progress={40}
//         height="h-2"
//         color="bg-indigo-500"
//         animationDuration={0.8}
//       />
//       <ProgressBar
//         progress={80}
//         height="h-6"
//         color="bg-teal-500"
//         animationDuration={1.8}
//         showCounter
//       />
//       <ProgressBar
//         progress={90}
//         height="h-8"
//         color="bg-pink-500"
//         animationDuration={2.5}
//       />
//       <ProgressBar
//         progress={20}
//         rounded={false}
//         color="bg-orange-400"
//         backgroundColor="bg-gray-400"
//         animationDuration={1.1}
//       />
//       <ProgressBar
//         progress={85}
//         height="h-5"
//         color="bg-cyan-500"
//         backgroundColor="bg-gray-300"
//         animationDuration={1.5}
//         showCounter
//       /> */}
//       <AnimatedProgressBar progress={progress} />

//     </div>
//   );
// };

// export default page;
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
