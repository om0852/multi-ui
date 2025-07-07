"use client";
import React from 'react';
import { ScrollAreaDemo } from '../tsx/ScrollArea_4';

export default function ScrollAreaExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-emerald-800">Plant Care Dashboard</h1>
      <ScrollAreaDemo />
    </div>
  );
} 