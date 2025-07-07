"use client";
import React from 'react';
import { ScrollAreaDemo } from '../tsx/ScrollArea_5';

export default function ScrollAreaExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-950">
      <h1 className="text-2xl font-bold mb-6 text-indigo-200">Space Explorer Console</h1>
      <ScrollAreaDemo />
    </div>
  );
} 