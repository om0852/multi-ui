"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_4";

export default function Example_4() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">
          Cyberpunk Drawer Example
          <span className="inline-block ml-2">🤖</span>
        </h2>
        <p className="text-cyan-400/80 text-center text-sm sm:text-base">
          Experience futuristic glitch animations
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">LAUNCH_CYBERPUNK.EXE</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="glitch"
            position="right"
            className="w-[85%] sm:w-[65%] md:w-auto max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  SYSTEM://CYBERPUNK-UI
                </h2>
                <p className="mt-2 text-cyan-400/80 text-sm sm:text-base">
                  &gt; Initializing futuristic interface module...
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border border-cyan-400/30 bg-black/50 relative group">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="font-bold text-cyan-400 text-sm sm:text-base">&gt; NEURAL_LINK_STATUS</h3>
                  <p className="text-xs sm:text-sm text-cyan-400/70">Connection established: 100%</p>
                </div>
                
                <div className="p-3 sm:p-4 border border-cyan-400/30 bg-black/50 relative group">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="font-bold text-cyan-400 text-sm sm:text-base">&gt; SYSTEM_DIAGNOSTICS</h3>
                  <p className="text-xs sm:text-sm text-cyan-400/70">All systems operational</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-cyan-400/30">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-black/50 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors text-sm sm:text-base"
                >
                  TERMINATE
                </button>
                <button
                  onClick={() => alert("SYSTEM ACTIVATED")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-colors text-sm sm:text-base"
                >
                  ACTIVATE
                </button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
