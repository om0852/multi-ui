"use client";

import React from 'react';
import Accordion from '../tsx/Accordian_38';

export default function AccordionExample38() {
  const accordionItems = [
    {
      title: "Section 1",
      content: "This is the content for section 1."
    },
    {
      title: "Section 2",
      content: "This is the content for section 2."
    },
    {
      title: "Section 3",
      content: "This is the content for section 3."
    }
  ];

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold text-indigo-400 mb-6">Magnetic Field Accordion</h2>
      
      <div className="max-w-2xl mx-auto">
        <Accordion items={accordionItems} allowMultiple={true} />
      </div>
    </div>
  );
} 