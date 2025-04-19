"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_9";

export default function Example_9() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-pink-50 to-rose-100 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-rose-800 text-center">
          Sweet Drawer Example
          <span className="inline-block ml-2">🍬</span>
        </h2>
        <p className="text-rose-700 text-center text-sm sm:text-base">
          A playful drawer with sweet animations
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open Sweet Drawer</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[400px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-rose-800">
                  Sweet Design
                </h2>
                <p className="mt-2 text-rose-700 text-sm sm:text-base">
                  A playful, candy-inspired drawer with sweet animations and design elements.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-white border-2 border-pink-200">
                  <h3 className="font-bold text-rose-800 text-sm sm:text-base">Playful Animations</h3>
                  <p className="text-xs sm:text-sm text-rose-700">Fun and bouncy transitions for a delightful experience</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-xl bg-white border-2 border-pink-200">
                  <h3 className="font-bold text-rose-800 text-sm sm:text-base">Sweet Design</h3>
                  <p className="text-xs sm:text-sm text-rose-700">Candy-inspired colors and playful elements</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-pink-200">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-rose-700 bg-white border-2 border-rose-300 hover:bg-rose-50 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 transition-colors text-sm sm:text-base"
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
