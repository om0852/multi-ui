// "use client"
// import React,{useState} from 'react'
// import Switch_56 from './_components/Switch_56'
// import Switch_89 from './_components/Switch_89'
// import Switch_90 from './_components/Switch_107'
// import Switch_91 from './_components/Switch_91'
// import Switch_92 from './_components/Switch_126'
// import Switch_93 from './_components/Switch_127'
// import Switch_94 from './_components/Switch_128'
// import Switch_95 from './_components/Switch_129'
// import Switch_96 from './_components/Switch_130'

// const Page = () => {
//     const [switches, setSwitches] = useState({
//       cosmos: false,
//       dna: false,
//       crystal: false,
//       cartoon: false,
//       bounce: false,
//       rotate: false,
//       neon: false,
//       liquid: false,
//       flip: false,
//       magnetic: false,
//       morph: false,
//       weather: false,
//       heart: false,
//       portal: false,
//       music: false,
//       galaxy: false,
//       retro: false,
//       paper: false,
//       clock: false,
//       helix: false,
//       bubble: false,
//       rainbow: false,
//       circuit: false,
//       gear: false,
//       wave: false,
//       firework: false,
//       ninja: false,
//       plant: false,
//       magic: false,
//       robot: false,
//       space: false,
//       candy: false,
//       ocean: false,
//       dragon: false,
//       pixel: false,
//       origami: false,
//       crystal2: false,
//       compass: false,
//       galaxy2: false,
//       matrix: false
//     });

//     const handleSwitchChange = (type: keyof typeof switches) => (newValue: boolean) => {
//       setSwitches(prev => ({ ...prev, [type]: newValue }));
//     };
  
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
//         <h1 className="mb-8 text-3xl font-bold">Animated Switches</h1>
    
//           {/* Pixel Art Switch */}
//           <div className="flex flex-col items-center">
//             <h2 className="mb-4 text-xl font-semibold">Pixel Art Switch</h2>
//             <Switch_90 checked={switches.pixel} onChange={handleSwitchChange('pixel')} />
//             <p className="mt-2 text-gray-600">
//               State: <span className="font-medium">{switches.pixel ? "ON" : "OFF"}</span>
//             </p>
//           </div>

//           {/* Origami Switch */}
//           <div className="flex flex-col items-center">
//             <h2 className="mb-4 text-xl font-semibold">Origami Switch</h2>
//             <Switch_92 checked={switches.origami} onChange={handleSwitchChange('origami')} />
//             <p className="mt-2 text-gray-600">
//               State: <span className="font-medium">{switches.origami ? "ON" : "OFF"}</span>
//             </p>
//           </div>

//           {/* Crystal Switch */}
//           <div className="flex flex-col items-center">
//             <h2 className="mb-4 text-xl font-semibold">Crystal Switch</h2>
//             <Switch_93 checked={switches.crystal2} onChange={handleSwitchChange('crystal2')} />
//             <p className="mt-2 text-gray-600">
//               State: <span className="font-medium">{switches.crystal2 ? "ON" : "OFF"}</span>
//             </p>
//           </div>

//           {/* Compass Switch */}
//           <div className="flex flex-col items-center">
//             <h2 className="mb-4 text-xl font-semibold">Compass Switch</h2>
//             <Switch_94 checked={switches.compass} onChange={handleSwitchChange('compass')} />
//             <p className="mt-2 text-gray-600">
//               State: <span className="font-medium">{switches.compass ? "ON" : "OFF"}</span>
//             </p>
//           </div>

//           {/* Galaxy Switch */}
//           <div className="flex flex-col items-center">
//             <h2 className="mb-4 text-xl font-semibold">Galaxy Switch</h2>
//             <Switch_95 checked={switches.galaxy2} onChange={handleSwitchChange('galaxy2')} />
//             <p className="mt-2 text-gray-600">
//               State: <span className="font-medium">{switches.galaxy2 ? "ON" : "OFF"}</span>
//             </p>
//           </div>

//           {/* Matrix Switch */}
//           <div className="flex flex-col items-center">
//             <h2 className="mb-4 text-xl font-semibold">Matrix Switch</h2>
//             <Switch_96 checked={switches.matrix} onChange={handleSwitchChange('matrix')} />
//             <p className="mt-2 text-gray-600">
//               State: <span className="font-medium">{switches.matrix ? "ON" : "OFF"}</span>
//             </p>
//           </div>
//         </div>
//     );
//   };

// export default Page

import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page
