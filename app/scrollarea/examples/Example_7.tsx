"use client";
import React from 'react';
import { ScrollAreaDemo } from '../tsx/ScrollArea_7';

export default function ScrollAreaExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-sky-950">
      <h1 className="text-2xl font-bold mb-6 text-sky-200">Weather Monitoring System</h1>
      <ScrollAreaDemo />
    </div>
  );
} 