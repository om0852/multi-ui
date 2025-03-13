"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../_components/Drawer_4";

export default function Example_4() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Cyberpunk Drawer Example
          <span className="inline-block ml-2">🗂️</span>
        </h2>
        <p className="text-gray-600 text-center text-sm">
          Experience futuristic glitch animations
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            LAUNCH_CYBERPUNK.EXE
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="glitch"
            position="right"
          >
            <div className="space-y-6 pt-8">
              <div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  SYSTEM://CYBERPUNK-UI
                </h2>
                <p className="mt-2 text-cyan-400/80">
                  &gt; Initializing futuristic interface module...
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-bold text-cyan-400">&gt; NEURAL_LINK_STATUS</h3>
                  <p className="text-sm text-cyan-400/70">Connection established: 100%</p>
                </div>
                
                <div className="p-4 border border-cyan-400/30 bg-black/50 relative group">
                  <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-bold text-cyan-400">&gt; SYSTEM_DIAGNOSTICS</h3>
                  <p className="text-sm text-cyan-400/70">All systems operational</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 mt-6 border-t border-cyan-400/30">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-4 py-2 bg-black/50 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
                >
                  TERMINATE
                </button>
                <button
                  onClick={() => alert("SYSTEM ACTIVATED")}
                  className="px-4 py-2 bg-cyan-400 text-black hover:bg-cyan-300 transition-colors"
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
