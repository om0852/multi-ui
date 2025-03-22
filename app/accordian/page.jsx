// 'use client';

// import Accordion46 from './_components/Accordian_46';
// import Accordion47 from './_components/Accordian_47';
// import Accordion48 from './_components/Accordian_81';
// import Accordion49 from './_components/Accordian_82';
// import Accordion50 from './_components/Accordian_80';
// import Accordion53 from './_components/Accordian_83';
// import Accordion54 from './_components/Accordian_84';
// import Accordion55 from './_components/Accordian_85';
// import Accordion56 from './_components/Accordian_66';
// import Accordion57 from './_components/Accordian_67';
// import Accordion58 from './_components/Accordian_68';
// import Accordion59 from './_components/Accordian_69';
// import Accordion60 from './_components/Accordian_70';
// import Accordion101 from './_components/Accordian_101';
// import Accordion102 from './_components/Accordian_102';
// import Accordion103 from './_components/Accordian_103';
// import Accordion104 from './_components/Accordian_104';
// import Accordion105 from './_components/Accordian_105';

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components that manage their own state."
//   },
//   {
//     title: "What are React Hooks?",
//     content: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They let you use state and other React features without writing a class."
//   },
//   {
//     title: "What is Virtual DOM?",
//     content: "The Virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM."
//   }
// ];

// export default function AccordionPage() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Modern Accordion Designs</h1>
      
//       <div className="max-w-2xl mx-auto space-y-12">
//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Cyber Circuit Design</h2>
//           <Accordion46 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Cosmic Vortex Design</h2>
//           <Accordion47 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Crystal Prism Design</h2>
//           <Accordion48 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Molten Metal Design</h2>
//           <Accordion49 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Aurora Borealis Design</h2>
//           <Accordion50 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Cyberpunk Neon Design</h2>
//           <Accordion53 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Holographic Glass Design</h2>
//           <Accordion54 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Floating Islands Design</h2>
//           <Accordion55 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Neon Synthwave Design</h2>
//           <Accordion56 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Cosmic Galaxy Design</h2>
//           <Accordion57 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Liquid Metal Design</h2>
//           <Accordion58 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Frost Glass Design</h2>
//           <Accordion59 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Neon Origami Design</h2>
//           <Accordion60 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Quantum Portal Design</h2>
//           <Accordion101 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Plasma Wave Design</h2>
//           <Accordion102 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Crystal Matrix Design</h2>
//           <Accordion103 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Nebula Pulse Design</h2>
//           <Accordion104 items={items} />
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Void Echo Design</h2>
//           <Accordion105 items={items} />
//         </section>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import { AccordionExample } from './_components/Accordian_1'
const page = () => {
  return (
    <div>
      <AccordionExample />
    </div>
  )
}

export default page
