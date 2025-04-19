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
} from "../_components/Dialog_9";

type AnimationType = "slideUp" | "fadeInOut" | "scaleIn" | "rotateZoom";

export default function Example_9() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("slideUp");

  const animations: AnimationType[] = ["slideUp", "fadeInOut", "scaleIn", "rotateZoom"];
  const animationColors = {
    slideUp: "from-cyan-500 to-cyan-600",
    fadeInOut: "from-teal-500 to-teal-600",
    scaleIn: "from-lime-500 to-lime-600",
    rotateZoom: "from-green-500 to-green-600",
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-bl from-gray-900 via-slate-900 to-gray-800 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-lime-400">Dark Gradient Dialog</h2>
        <p className="text-sm sm:text-base text-gray-300">
          A sophisticated dialog with dark gradients and vibrant lime accents.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm text-white bg-gradient-to-r ${
                currentAnimation === animation
                  ? animationColors[animation]
                  : "from-gray-700 to-gray-800"
              } hover:opacity-90 transition-opacity shadow-lg border border-gray-700`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Dark Dialog with {currentAnimation}</span>
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
            className="w-[95%] max-w-[95%] sm:max-w-[85%] md:max-w-md p-3 sm:p-4 md:p-6"
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Dark Gradient Design</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our dark-themed dialog with {currentAnimation} animation.
                Notice the enhanced backdrop blur and smooth transitions.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-lime-400 font-semibold text-sm sm:text-base">
                Dialog_9 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 text-sm sm:text-base">
                <li>Dark gradient theme with lime accents</li>
                <li>Enhanced backdrop blur effect</li>
                <li>Longer animation duration (0.6s)</li>
                <li>Rounded corners and borders</li>
                <li>Modern minimalist design</li>
              </ul>
            </div>
            <StyledDialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-700 text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md text-sm sm:text-base"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
        
        <div className="hidden sm:block text-sm bg-gray-800/80 p-3 rounded-lg text-gray-300 max-w-xs border border-gray-700">
          <p>This dialog features a dark gradient theme with vibrant lime accents and smooth animations.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-gray-800/80 p-3 rounded-lg text-gray-300 border border-gray-700 mb-4">
        <p>This dialog features a dark gradient theme with vibrant lime accents and smooth animations.</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
        <h3 className="text-lime-400 font-bold mb-2 text-base sm:text-lg">About this Dialog</h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Dialog_9 introduces a sophisticated dark theme with vibrant lime accents.
          It features enhanced backdrop blur, longer animation durations, and a
          modern minimalist design. The dark gradients and lime highlights create
          a striking contrast that draws attention to important elements.
        </p>
      </div>
    </div>
  );
}
