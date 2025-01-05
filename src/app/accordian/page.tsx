'use client';

import Accordion from "./_components/Accordian_10";


export default function App() {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'What is Framer Motion?',
      content: 'Framer Motion is a library for animations in React.',
    },
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for building custom designs.',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <Accordion items={items} allowMultiple={true} />
    </div>
  );
}
