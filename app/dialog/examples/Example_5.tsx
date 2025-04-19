"use client";
import { useState } from "react";
import {
  NeonDialog,
  NeonDialogTrigger,
  NeonDialogContent,
  NeonDialogHeader,
  NeonDialogTitle,
  NeonDialogDescription,
  NeonDialogFooter,
} from "../_components/Dialog_5";

export default function Example_5() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-black min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300">Neon Dialog Example</h2>
        <p className="text-sm sm:text-base text-cyan-500">
          A cyberpunk-inspired dialog with glowing neon effects and smooth animations.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <NeonDialog>
          <NeonDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Neon Dialog</span>
          </NeonDialogTrigger>
          <NeonDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            className="w-[95%] max-w-[95%] sm:max-w-[85%] md:max-w-md p-3 sm:p-4 md:p-6"
          >
            <NeonDialogHeader>
              <NeonDialogTitle>Welcome to the Future</NeonDialogTitle>
              <NeonDialogDescription>
                Experience our neon-themed dialog with stunning glow effects and smooth animations.
              </NeonDialogDescription>
            </NeonDialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-cyan-400 text-sm sm:text-base">
                Neon Dialog features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-cyan-500 text-sm sm:text-base">
                <li>Cyberpunk-inspired design</li>
                <li>Glowing neon borders</li>
                <li>Smooth fade and scale animations</li>
                <li>Dark theme optimized</li>
                <li>Custom neon button styles</li>
              </ul>
            </div>
            <NeonDialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-800 text-cyan-300 py-2 px-4 rounded-lg hover:bg-gray-700 border border-cyan-300 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Welcome to the future!");
                }}
                className="w-full sm:w-auto bg-cyan-300 text-black py-2 px-4 rounded-lg hover:bg-cyan-400 text-sm sm:text-base"
              >
                Enter
              </button>
            </NeonDialogFooter>
          </NeonDialogContent>
        </NeonDialog>
        
        <div className="hidden sm:block text-sm bg-gray-900 p-3 rounded-lg text-cyan-300 max-w-xs border border-cyan-900">
          <p>Experience the future with this cyberpunk-inspired neon dialog that glows in the dark.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-gray-900 p-3 rounded-lg text-cyan-300 border border-cyan-900 mb-4">
        <p>Experience the future with this cyberpunk-inspired neon dialog that glows in the dark.</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-4 border border-cyan-300 rounded-lg bg-black bg-opacity-50">
        <h3 className="text-cyan-300 font-semibold mb-2 text-base sm:text-lg">About this Dialog</h3>
        <p className="text-cyan-500 text-sm sm:text-base">
          Dialog_5 is designed with a futuristic neon aesthetic, featuring a single
          glow animation that creates a stunning visual effect. The dark background
          and cyan accents create an immersive cyberpunk experience.
        </p>
      </div>
    </div>
  );
}
