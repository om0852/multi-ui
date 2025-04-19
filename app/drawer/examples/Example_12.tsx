"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_12";

export default function Example_12() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-teal-50 to-cyan-100 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-900 text-center">
          Glassmorphism Drawer Example
          <span className="inline-block ml-2">✨</span>
        </h2>
        <p className="text-teal-700 text-center text-sm sm:text-base">
          A modern drawer with glass-like transparency effects
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open Glass Drawer</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="glass"
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[400px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-teal-900">
                  Glassmorphism Design
                </h2>
                <p className="mt-2 text-teal-700 text-sm sm:text-base">
                  This drawer showcases the popular glassmorphism design trend with frosted glass effects.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm">
                  <h3 className="font-medium text-teal-900 text-sm sm:text-base">Translucent UI</h3>
                  <p className="text-xs sm:text-sm text-teal-700">Semi-transparent elements with blur effects</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 shadow-sm">
                  <h3 className="font-medium text-teal-900 text-sm sm:text-base">Light Reflections</h3>
                  <p className="text-xs sm:text-sm text-teal-700">Subtle light effects and gradients</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-teal-100/50">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-teal-700 bg-white/70 backdrop-blur-sm border border-teal-200/50 hover:bg-white/90 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors text-sm sm:text-base"
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
