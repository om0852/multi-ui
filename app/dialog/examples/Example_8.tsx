"use client";
import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogTitle,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../tsx/Dialog_8";

type AnimationType = "slideUp" | "fadeInOut" | "scaleIn" | "rotateZoom";

export default function Example_8() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("slideUp");

  const animations: AnimationType[] = ["slideUp", "fadeInOut", "scaleIn", "rotateZoom"];
  const animationColors = {
    slideUp: "from-blue-400 to-blue-500",
    fadeInOut: "from-teal-400 to-teal-500",
    scaleIn: "from-green-400 to-green-500",
    rotateZoom: "from-emerald-400 to-emerald-500",
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-teal-900 via-green-800 to-emerald-900 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Nature-Inspired Dialog</h2>
        <p className="text-sm sm:text-base text-teal-100">
          A fresh take on the frosted glass dialog with nature-inspired colors.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-white bg-gradient-to-r ${
                currentAnimation === animation
                  ? animationColors[animation]
                  : "from-gray-600 to-gray-700"
              } hover:opacity-90 transition-opacity backdrop-blur-sm shadow-lg`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Nature Dialog with {currentAnimation}</span>
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Nature-Inspired Design</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our nature-themed dialog with {currentAnimation} animation.
                The soft gradients and frosted glass create a calming atmosphere.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-teal-600 font-semibold text-sm sm:text-base">
                Dialog_8 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Nature-inspired color palette</li>
                <li>Enhanced frosted glass effect</li>
                <li>Four smooth animations</li>
                <li>Gradient backgrounds and buttons</li>
                <li>Soft shadows and transitions</li>
              </ul>
            </div>
            <StyledDialogFooter >
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md text-sm sm:text-base"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
        
        <div className="hidden sm:block text-sm bg-white/5 backdrop-blur-md p-3 rounded-lg text-teal-100 max-w-xs border border-teal-500/20">
          <p>This nature-inspired dialog features calming gradients, frosted glass effects, and smooth animations.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-white/5 backdrop-blur-md p-3 rounded-lg text-teal-100 border border-teal-500/20 mb-4">
        <p>This nature-inspired dialog features calming gradients, frosted glass effects, and smooth animations.</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-lg border border-teal-500 border-opacity-20">
        <h3 className="text-teal-300 font-semibold mb-2 text-base sm:text-lg">About this Dialog</h3>
        <p className="text-teal-100 text-sm sm:text-base">
          Dialog_8 takes the frosted glass concept further with a nature-inspired theme.
          It features calming gradients from blues to greens, enhanced backdrop blur effects,
          and smooth animations. The design aims to create a serene and modern user experience
          with its soft colors and transitions.
        </p>
      </div>
    </div>
  );
}
