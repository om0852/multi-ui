"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_11";

export default function Example_11() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-orange-50 to-amber-100 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-amber-900 text-center">
          Origami Drawer Example
          <span className="inline-block ml-2">📄</span>
        </h2>
        <p className="text-amber-800 text-center text-sm sm:text-base">
          A drawer with paper-folding animation effects
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">Open Folding Drawer</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="fold"
            position="left"
            className="w-[85%] sm:w-[65%] md:w-[380px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium text-amber-900">
                  Origami-Inspired Design
                </h2>
                <p className="mt-2 text-amber-700 text-sm sm:text-base">
                  This drawer features folding paper animations inspired by the art of origami.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-lg bg-white border border-amber-200 shadow-sm">
                  <h3 className="font-medium text-amber-900 text-sm sm:text-base">Paper Folding</h3>
                  <p className="text-xs sm:text-sm text-amber-700">Animation inspired by origami techniques</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded-lg bg-white border border-amber-200 shadow-sm">
                  <h3 className="font-medium text-amber-900 text-sm sm:text-base">Clean Transitions</h3>
                  <p className="text-xs sm:text-sm text-amber-700">Smooth folding and unfolding effects</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-amber-200">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-amber-800 bg-white border border-amber-300 hover:bg-amber-50 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white bg-amber-600 hover:bg-amber-700 transition-colors text-sm sm:text-base"
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
