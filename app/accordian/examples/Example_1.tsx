"use client";

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionControls
} from '../_components/Accordian_1';

export default function AccordionExample1() {
  const items = ['item-1', 'item-2', 'item-3'];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Basic Accordion</h2>
      
      {/* Controls to expand/collapse all items */}
      <div className="mb-4">
        <AccordionControls items={items} />
      </div>

      {/* Accordion component */}
      <Accordion 
        multiple={true} 
        persistState={true} 
        storageKey="example1-accordion"
        className="max-w-2xl mx-auto"
      >
        <AccordionItem id="item-1">
          <AccordionTrigger id="item-1">
            Section 1
          </AccordionTrigger>
          <AccordionContent 
            id="item-1" 
            animation="fadeInDown"
            duration={0.4}
          >
            <div className="p-4 text-white/90">
              <p>This is the content for section 1.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item-2">
          <AccordionTrigger id="item-2">
            Section 2
          </AccordionTrigger>
          <AccordionContent 
            id="item-2"
            animation="slideFromRight"
            duration={0.5}
          >
            <div className="p-4 text-white/90">
              <p>This is the content for section 2.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="item-3" isCollapsible={true}>
          <AccordionTrigger id="item-3">
            Section 3
          </AccordionTrigger>
          <AccordionContent 
            id="item-3"
            animation="bounceIn"
            duration={0.6}
          >
            <div className="p-4 text-white/90">
              <p>This is the content for section 3.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 