"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_10";

export default function Example_10() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-blue-100 to-indigo-50 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-900 text-center">
          3D Drawer Example
          <span className="inline-block ml-2">🔮</span>
        </h2>
        <p className="text-indigo-700 text-center text-sm sm:text-base">
          Experience immersive 3D animations and effects
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open 3D Drawer</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[400px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-indigo-900">
                  3D Animation Effects
                </h2>
                <p className="mt-2 text-indigo-700 text-sm sm:text-base">
                  This drawer features stunning 3D transformation effects and perspective animations.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-indigo-200 shadow-md">
                  <h3 className="font-bold text-indigo-900 text-sm sm:text-base">3D Perspective</h3>
                  <p className="text-xs sm:text-sm text-indigo-700">Immersive depth and perspective transforms</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-xl bg-white border border-indigo-200 shadow-md">
                  <h3 className="font-bold text-indigo-900 text-sm sm:text-base">Spatial Animations</h3>
                  <p className="text-xs sm:text-sm text-indigo-700">Responsive animations with depth perception</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-indigo-200">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-indigo-700 bg-white border border-indigo-300 hover:bg-indigo-50 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors text-sm sm:text-base"
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
