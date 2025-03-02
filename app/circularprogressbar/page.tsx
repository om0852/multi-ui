// "use client"
// import React from 'react'
// import CircularProgressBar from './_components/CircularProgressBar_10'
// import WaveCircularProgressBar from './_components/CircularProgressBar_4'
// import ParticleCircularProgressBar from './_components/CircularProgressBar_4'
// import GradientCircularProgressBar from './_components/CircularProgressBar_5'
// import TexturedCircularProgressBar from './_components/CircularProgressBar_5'
// import SegmentedCircularProgressBar from './_components/CircularProgressBar_6'
// import RotatingSegmentCircularProgressBar from './_components/CircularProgressBar_7'
// import PulsingRadialCircularProgressBar from './_components/CircularProgressBar_8'
// import RotatingProgressBar from './_components/CircularProgressBar_9'
// import WaveformCircularProgressBar from './_components/CircularProgressBar_10'
// import BlobCircularProgressBar from './_components/CircularProgressBar_10'
// import Dashboard from './_components/CircularProgressBar_10'
// import CircularProgressBar_11 from './_components/CircularProgressBar_11'
// import CircularProgressBar_12 from './_components/CircularProgressBar_12'
// import CircularProgressBar_13 from './_components/CircularProgressBar_13'
// import CircularProgressBar_14 from './_components/CircularProgressBar_14'
// import CircularProgressBar_15 from './_components/CircularProgressBar_15'
// import CircularProgressBar_16 from './_components/CircularProgressBar_16'
// import CircularProgressBar_17 from './_components/CircularProgressBar_17'
// import CircularProgressBar_18 from './_components/CircularProgressBar_18'
// import CircularProgressBar_19 from './_components/CircularProgressBar_19'
// import CircularProgressBar_20 from './_components/CircularProgressBar_20'
// import CircularProgressBar_21 from './_components/CircularProgressBar_21'
// import CircularProgressBar_22 from './_components/CircularProgressBar_22'
// import CircularProgressBar_23 from './_components/CircularProgressBar_23'
// import CircularProgressBar_24 from './_components/CircularProgressBar_24'
// import CircularProgressBar_25 from './_components/CircularProgressBar_25'
// import CircularProgressBar32 from './_components/CircularProgressBar_61'
// import CircularProgressBar41 from './_components/CircularProgressBar_62'
// import CircularProgressBar42 from './_components/CircularProgressBar_63'
// import CircularProgressBar43 from './_components/CircularProgressBar_63'
// import CircularProgressBar44 from './_components/CircularProgressBar_64'
// import CircularProgressBar45 from './_components/CircularProgressBar_65'
// import CircularProgressBar46 from './_components/CircularProgressBar_66'
// import CircularProgressBar47 from './_components/CircularProgressBar_67'
// import CircularProgressBar48 from './_components/CircularProgressBar_68'
// import CircularProgressBar49 from './_components/CircularProgressBar_69'
// import CircularProgressBar50 from './_components/CircularProgressBar_70'
// import CircularProgressBar51 from './_components/CircularProgressBar_51'
// import CircularProgressBar52 from './_components/CircularProgressBar_76'
// import LavaProgressBar from './_components/CircularProgressBar_77'
// import FallingBallsProgressBar from './_components/CircularProgressBar_78'
// import CrystalProgressBar from './_components/CircularProgressBar_79'
// import NeonLiquidProgressBar from './_components/CircularProgressBar_80'
// import RainDropsProgressBar from './_components/CircularProgressBar_81'
// import GrowingPlantProgressBar from './_components/CircularProgressBar_82'
// import ElectricChargeProgressBar from './_components/CircularProgressBar_83'
// import GalaxySpiralProgressBar from './_components/CircularProgressBar_84'
// import RealisticWaterProgressBar from './_components/CircularProgressBar_85'
// import StonesProgressBar from './_components/CircularProgressBar_86'

// const page = () => {
//   const progressBars = [
//     { Component: CircularProgressBar32, name: '3D Metallic' },
//     { Component: CircularProgressBar41, name: 'DNA Helix' },
//     { Component: CircularProgressBar42, name: 'Matrix Digital Rain' },
//     { Component: CircularProgressBar43, name: 'Sound Wave' },
//     { Component: CircularProgressBar44, name: 'Geometric Origami' },
//     { Component: CircularProgressBar45, name: 'Mechanical Gear' },
//     { Component: CircularProgressBar46, name: 'Quantum Particle' },
//     { Component: CircularProgressBar47, name: 'Neon Cyberpunk' },
//     { Component: CircularProgressBar48, name: 'Nature Growth' },
//     { Component: CircularProgressBar49, name: 'Fire Element' },
//     { Component: CircularProgressBar50, name: 'Cosmic Space' },
//     { Component: CircularProgressBar51, name: 'Underwater' },
//     { Component: CircularProgressBar52, name: 'Steampunk' },
//     { Component: LavaProgressBar, name: 'Molten Lava' },
//     { Component: FallingBallsProgressBar, name: 'Falling Balls' },
//     { Component: CrystalProgressBar, name: 'Crystal Growth' },
//     { Component: NeonLiquidProgressBar, name: 'Neon Liquid' },
//     { Component: RainDropsProgressBar, name: 'Rain Drops' },
//     { Component: GrowingPlantProgressBar, name: 'Growing Plant' },
//     { Component: ElectricChargeProgressBar, name: 'Electric Charge' },
//     { Component: GalaxySpiralProgressBar, name: 'Galaxy Spiral' },
//     { Component: RealisticWaterProgressBar, name: 'Realistic Water' },
//     { Component: StonesProgressBar, name: 'Falling Stones' },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
//       <h1 className="text-4xl font-bold text-white mb-8 text-center">
//         Circular Progress Bar Variants
//       </h1>

//       <div className="max-w-6xl mx-auto">
//         {/* Grid layout for progress bars */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {progressBars.map(({ Component, name }, index) => (
//             <div
//               key={index}
//               className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center"
//             >
//               <h2 className="text-xl font-semibold text-white mb-6">{name} Style</h2>
//               <Component value={75} max={100} size={200} strokeWidth={12} />
//               <p className="mt-4 text-gray-300 text-center">
//                 Smooth gradient animation with rotating outer ring
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Features Section */}
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-2">Responsive Design</h3>
//               <p className="text-gray-300">
//                 Fully responsive components that adapt to any screen size
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-2">Smooth Animations</h3>
//               <p className="text-gray-300">
//                 Fluid animations powered by Framer Motion
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-2">Customizable</h3>
//               <p className="text-gray-300">
//                 Easy to customize sizes, colors, and animations
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-2">Advanced Effects</h3>
//               <p className="text-gray-300">
//                 Complex animations and visual effects
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-2">Unique Designs</h3>
//               <p className="text-gray-300">
//                 Each variant offers a distinct visual style
//               </p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
//               <p className="text-gray-300">
//                 Optimized animations for smooth rendering
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default page
import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
