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
    <div className="p-8 space-y-8 bg-black min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-cyan-300">Neon Dialog Example</h2>
        <p className="text-cyan-500">
          A cyberpunk-inspired dialog with glowing neon effects and smooth animations.
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <NeonDialog>
          <NeonDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Neon Dialog
          </NeonDialogTrigger>
          <NeonDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          >
            <NeonDialogHeader>
              <NeonDialogTitle>Welcome to the Future</NeonDialogTitle>
              <NeonDialogDescription>
                Experience our neon-themed dialog with stunning glow effects and smooth animations.
              </NeonDialogDescription>
            </NeonDialogHeader>
            <div className="my-6">
              <p className="text-cyan-400">
                Neon Dialog features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-cyan-500">
                <li>Cyberpunk-inspired design</li>
                <li>Glowing neon borders</li>
                <li>Smooth fade and scale animations</li>
                <li>Dark theme optimized</li>
                <li>Custom neon button styles</li>
              </ul>
            </div>
            <NeonDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-800 text-cyan-300 py-2 px-4 rounded-lg hover:bg-gray-700 border border-cyan-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Welcome to the future!");
                }}
                className="bg-cyan-300 text-black py-2 px-4 rounded-lg hover:bg-cyan-400"
              >
                Enter
              </button>
            </NeonDialogFooter>
          </NeonDialogContent>
        </NeonDialog>
      </div>

      <div className="mt-8 p-4 border border-cyan-300 rounded-lg bg-black bg-opacity-50">
        <h3 className="text-cyan-300 font-semibold mb-2">About this Dialog</h3>
        <p className="text-cyan-500">
          Dialog_5 is designed with a futuristic neon aesthetic, featuring a single
          glow animation that creates a stunning visual effect. The dark background
          and cyan accents create an immersive cyberpunk experience.
        </p>
      </div>
    </div>
  );
}
