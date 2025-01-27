'use client';

import Accordion46 from './_components/Accordian_46';
import Accordion47 from './_components/Accordian_47';
import Accordion48 from './_components/Accordian_48';
import Accordion49 from './_components/Accordian_49';
import Accordion50 from './_components/Accordian_50';

const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces. It lets you create reusable UI components that manage their own state."
  },
  {
    title: "What are React Hooks?",
    content: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They let you use state and other React features without writing a class."
  },
  {
    title: "What is Virtual DOM?",
    content: "The Virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory and synced with the 'real' DOM by a library such as ReactDOM."
  }
];

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Modern Accordion Designs</h1>
      
      <div className="max-w-2xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Cyber Circuit Design</h2>
          <Accordion46 items={items} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cosmic Vortex Design</h2>
          <Accordion47 items={items} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Crystal Prism Design</h2>
          <Accordion48 items={items} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Molten Metal Design</h2>
          <Accordion49 items={items} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Aurora Borealis Design</h2>
          <Accordion50 items={items} />
        </section>
      </div>
    </div>
  );
}
