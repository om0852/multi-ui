"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_13";

export default function Example_13() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">
          Neon Drawer Example
          <span className="inline-block ml-2">💫</span>
        </h2>
        <p className="text-purple-300 text-center text-sm sm:text-base">
          A futuristic drawer with vibrant neon effects
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open Neon Drawer</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="neon"
            position="left"
            className="w-[85%] sm:w-[65%] md:w-[380px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-300">
                  Neon Light Design
                </h2>
                <p className="mt-2 text-purple-200 text-sm sm:text-base">
                  This drawer features vibrant neon effects and cyberpunk aesthetics.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-lg bg-black/50 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <h3 className="font-bold text-purple-400 text-sm sm:text-base">Neon Glow</h3>
                  <p className="text-xs sm:text-sm text-purple-300">Vibrant glowing effects and borders</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg bg-black/50 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <h3 className="font-bold text-cyan-400 text-sm sm:text-base">Cyberpunk Style</h3>
                  <p className="text-xs sm:text-sm text-cyan-300">Futuristic aesthetic with bright accents</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-purple-500/30">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-black text-purple-400 border border-purple-500 hover:bg-purple-900/30 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-black bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-500 hover:to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-colors text-sm sm:text-base"
                >
                  Confirm
                </button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
