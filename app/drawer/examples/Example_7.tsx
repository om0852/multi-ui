"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from "../tsx/Drawer_7";

export default function Example_7() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-amber-100 to-amber-50 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-amber-900 text-center">
          Vintage Drawer Example
          <span className="inline-block ml-2">📜</span>
        </h2>
        <p className="text-amber-800 text-center text-sm sm:text-base">
          A nostalgic drawer with vintage animations
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Drawer>
          <DrawerTrigger onClick={() => setIsDrawerOpen(true)}>
            <span className="text-sm sm:text-base">OPEN VINTAGE DRAWER</span>
          </DrawerTrigger>
          <DrawerContent
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            animationType="slideShow"
            position="right"
            className="w-[85%] sm:w-[65%] md:w-[450px] max-h-screen overflow-y-auto z-[100]"
          >
            <div className="space-y-4 sm:space-y-6 pt-4">
              <div className="relative">
                <h2 className="text-xl sm:text-2xl font-bold text-amber-900 font-serif uppercase tracking-wide">
                  Vintage Design
                </h2>
                <p className="mt-2 text-amber-800 text-sm sm:text-base font-serif">
                  Experience our nostalgic drawer with slideshow animations and vintage design elements.
                </p>
              </div>
              
              <div className="grid gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded bg-amber-50 border-2 border-amber-800">
                  <h3 className="font-bold text-amber-900 text-sm sm:text-base font-serif">Slideshow Effect</h3>
                  <p className="text-xs sm:text-sm text-amber-800">Nostalgic animations reminiscent of vintage slideshows</p>
                </div>
                
                <div className="p-3 sm:p-4 rounded bg-amber-50 border-2 border-amber-800">
                  <h3 className="font-bold text-amber-900 text-sm sm:text-base font-serif">Vintage Aesthetics</h3>
                  <p className="text-xs sm:text-sm text-amber-800">Inspired by the charm of yesteryear</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t-2 border-amber-800">
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-200 text-amber-900 border-2 border-amber-900 shadow-[2px_2px_0_0_rgba(120,53,15,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm sm:text-base font-serif uppercase tracking-wide"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Action confirmed!")}
                  className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-900 text-amber-100 border-2 border-amber-700 shadow-[2px_2px_0_0_rgba(120,53,15,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm sm:text-base font-serif uppercase tracking-wide"
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
