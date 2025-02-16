// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Toast_27 from './_components/Toast_27';
// import Toast_28 from './_components/Toast_28';
// import Toast_29 from './_components/Toast_29';
// import Toast_30 from './_components/Toast_30';
// import Toast_31 from './_components/Toast_31';
// import Toast_32 from './_components/Toast_32';
// import Toast_33 from './_components/Toast_33';

// // Audio files (you'll need to add these to your public folder)
// const AUDIO_FILES = {
//   success: '/audio/success.mp3',
//   error: '/audio/error.mp3',
//   info: '/audio/info.mp3',
//   warning: '/audio/warning.mp3',
//   notification: '/audio/notification.mp3'
// };

// type ToastVariant = 'modern' | 'neumorphic' | 'gaming' | 'terminal' | 'holographic' | 'paper' | 'hud';

// export default function ToastExamplePage() {
//   const [toasts, setToasts] = useState<Array<{
//     id: number;
//     component: React.ReactNode;
//   }>>([]);

//   const getToastComponent = (variant: ToastVariant) => {
//     switch (variant) {
//       case 'modern': return Toast_27;
//       case 'neumorphic': return Toast_28;
//       case 'gaming': return Toast_29;
//       case 'terminal': return Toast_30;
//       case 'holographic': return Toast_31;
//       case 'paper': return Toast_32;
//       case 'hud': return Toast_33;
//       default: return Toast_27;
//     }
//   };

//   const addToast = (config: {
//     message: string;
//     theme?: string;
//     position?: string;
//     icon?: string;
//     variant: ToastVariant;
//     audio?: string;
//   }) => {
//     const id = Date.now();
//     const ToastComponent = getToastComponent(config.variant);

//     const toast = (
//       <ToastComponent
//         key={id}
//         message={config.message}
//         theme={config.theme}
//         position={config.position}
//         icon={config.icon}
//         audio={config.audio}
//         close={() => removeToast(id)}
//         actionButton={{
//           label: 'Action',
//           onClick: () => console.log('Action clicked'),
//         }}
//         duration={5000}
//         autoDismiss={true}
//         onHoverPause={true}
//       />
//     );

//     setToasts(prev => [...prev, { id, component: toast }]);
//   };

//   const removeToast = (id: number) => {
//     setToasts(prev => prev.filter(toast => toast.id !== id));
//   };

//   const showExampleToasts = () => {
//     // Modern Toast (Toast_27)
//     addToast({
//       message: "Modern toast with light theme",
//       theme: "light",
//       position: "top-left",
//       icon: "🌟",
//       variant: "modern",
//       audio: AUDIO_FILES.success
//     });

//     // Neumorphic Toast (Toast_28)
//     setTimeout(() => {
//       addToast({
//         message: "Neumorphic toast with dark theme",
//         theme: "dark",
//         position: "top-right",
//         icon: "🌙",
//         variant: "neumorphic",
//         audio: AUDIO_FILES.notification
//       });
//     }, 1000);

//     // Gaming Toast (Toast_29)
//     setTimeout(() => {
//       addToast({
//         message: "Gaming-style notification",
//         theme: "dark",
//         position: "bottom-left",
//         icon: "🎮",
//         variant: "gaming",
//         audio: AUDIO_FILES.info
//       });
//     }, 2000);

//     // Terminal Toast (Toast_30)
//     setTimeout(() => {
//       addToast({
//         message: "Terminal command executed",
//         theme: "dark",
//         position: "bottom-right",
//         icon: ">_",
//         variant: "terminal",
//         audio: AUDIO_FILES.success
//       });
//     }, 3000);

//     // Holographic Toast (Toast_31)
//     setTimeout(() => {
//       addToast({
//         message: "Holographic message received",
//         theme: "dark",
//         position: "top-center",
//         icon: "👾",
//         variant: "holographic",
//         audio: AUDIO_FILES.notification
//       });
//     }, 4000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-white mb-8">Toast Examples</h1>

//         {/* Demo Section */}
//         <div className="bg-gray-800 rounded-xl p-8 mb-8">
//           <h2 className="text-2xl font-semibold text-white mb-6">Interactive Demo</h2>
          
//           {/* Demo Buttons Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Modern Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">Modern Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "Success notification with modern design",
//                   theme: "light",
//                   position: "top-left",
//                   icon: "✅",
//                   variant: "modern",
//                   audio: AUDIO_FILES.success
//                 })}
//                 className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 Show Modern Toast
//               </button>
//             </div>

//             {/* Neumorphic Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">Neumorphic Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "Info notification with neumorphic design",
//                   theme: "dark",
//                   position: "top-right",
//                   icon: "ℹ️",
//                   variant: "neumorphic",
//                   audio: AUDIO_FILES.info
//                 })}
//                 className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//               >
//                 Show Neumorphic Toast
//               </button>
//             </div>

//             {/* Gaming Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">Gaming Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "Achievement unlocked!",
//                   theme: "dark",
//                   position: "bottom-left",
//                   icon: "🎮",
//                   variant: "gaming",
//                   audio: AUDIO_FILES.notification
//                 })}
//                 className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
//               >
//                 Show Gaming Toast
//               </button>
//             </div>

//             {/* Terminal Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">Terminal Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "Command executed successfully",
//                   theme: "dark",
//                   position: "bottom-right",
//                   icon: ">_",
//                   variant: "terminal",
//                   audio: AUDIO_FILES.success
//                 })}
//                 className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 Show Terminal Toast
//               </button>
//             </div>

//             {/* Holographic Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">Holographic Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "Incoming transmission",
//                   theme: "dark",
//                   position: "top-center",
//                   icon: "👾",
//                   variant: "holographic",
//                   audio: AUDIO_FILES.notification
//                 })}
//                 className="w-full px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors"
//               >
//                 Show Holographic Toast
//               </button>
//             </div>

//             {/* Paper Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">Paper Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "New note added",
//                   theme: "light",
//                   position: "bottom-center",
//                   icon: "📝",
//                   variant: "paper",
//                   audio: AUDIO_FILES.info
//                 })}
//                 className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
//               >
//                 Show Paper Toast
//               </button>
//             </div>

//             {/* HUD Toast */}
//             <div className="space-y-4">
//               <h3 className="text-xl text-white mb-4">HUD Toast</h3>
//               <button
//                 onClick={() => addToast({
//                   message: "System status update",
//                   theme: "dark",
//                   position: "top-right",
//                   icon: "🎯",
//                   variant: "hud",
//                   audio: AUDIO_FILES.warning
//                 })}
//                 className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
//               >
//                 Show HUD Toast
//               </button>
//             </div>
//           </div>

//           {/* Show All Button */}
//           <button
//             onClick={showExampleToasts}
//             className="w-full mt-8 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
//           >
//             Show All Toast Variations
//           </button>
//         </div>

//         {/* Documentation */}
//         <div className="bg-gray-800 rounded-xl p-8">
//           <h2 className="text-2xl font-semibold text-white mb-6">Features</h2>
//           <ul className="list-disc list-inside text-gray-300 space-y-2">
//             <li>7 unique toast designs (Modern, Neumorphic, Gaming, Terminal, Holographic, Paper, HUD)</li>
//             <li>Audio feedback support</li>
//             <li>Light and Dark theme support</li>
//             <li>Custom positioning</li>
//             <li>Progress indicators</li>
//             <li>Hover pause functionality</li>
//             <li>Action buttons</li>
//             <li>Animated icons</li>
//             <li>Auto-dismiss with configurable duration</li>
//           </ul>
//         </div>
//       </div>

//       {/* Toast Container */}
//       <div className="fixed inset-0 pointer-events-none">
//         {toasts.map(({ id, component }) => (
//           <div key={id} className="pointer-events-auto">
//             {component}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
