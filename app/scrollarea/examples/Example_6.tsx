"use client";
import React from 'react';
import { ScrollAreaDemo } from '../_components/ScrollArea_6';

export default function ScrollAreaExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-zinc-950">
      <h1 className="text-2xl font-bold mb-6 text-cyan-200">Circuit Control Matrix</h1>
      <ScrollAreaDemo />
    </div>
  );
} 