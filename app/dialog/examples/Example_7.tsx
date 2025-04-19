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
} from "../_components/Dialog_7";

type AnimationType = "slideUp" | "fadeInOut" | "scaleIn" | "rotateZoom";

export default function Example_7() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("slideUp");

  const animations: AnimationType[] = ["slideUp", "fadeInOut", "scaleIn", "rotateZoom"];
  const animationColors = {
    slideUp: "from-blue-500 to-blue-600",
    fadeInOut: "from-teal-500 to-teal-600",
    scaleIn: "from-green-500 to-green-600",
    rotateZoom: "from-purple-500 to-purple-600",
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-gray-800 to-gray-900 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Frosted Glass Dialog</h2>
        <p className="text-sm sm:text-base text-gray-300">
          A modern dialog with frosted glass effect and multiple animations.
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
              } hover:opacity-90 transition-opacity backdrop-blur-sm`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Frosted Dialog with {currentAnimation}</span>
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
            className="w-[95%] max-w-[95%] sm:max-w-[85%] md:max-w-md p-3 sm:p-4 md:p-6"
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Frosted Glass Dialog</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our elegant frosted glass dialog with {currentAnimation} animation.
                The backdrop blur effect creates a modern, translucent appearance.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-teal-600 font-semibold text-sm sm:text-base">
                Dialog_7 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 text-sm sm:text-base">
                <li>Frosted glass effect with backdrop blur</li>
                <li>Four unique animation styles</li>
                <li>Light theme with gradient accents</li>
                <li>Smooth transitions</li>
                <li>Enhanced shadow effects</li>
              </ul>
            </div>
            <StyledDialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-400 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90 text-sm sm:text-base"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
        
        <div className="hidden sm:block text-sm bg-white/10 backdrop-blur-sm p-3 rounded-lg text-gray-300 max-w-xs border border-white/20">
          <p>This frosted glass dialog creates a modern, translucent appearance with smooth animations.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-white/10 backdrop-blur-sm p-3 rounded-lg text-gray-300 border border-white/20 mb-4">
        <p>This frosted glass dialog creates a modern, translucent appearance with smooth animations.</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
        <h3 className="text-teal-400 font-semibold mb-2 text-base sm:text-lg">About this Dialog</h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Dialog_7 introduces a sophisticated frosted glass design with backdrop blur effects.
          It features four distinct animations: Slide Up, Fade In/Out, Scale In, and the unique
          Rotate Zoom. The light theme with teal accents creates a fresh, modern appearance,
          while the frosted glass effect adds depth and elegance.
        </p>
      </div>
    </div>
  );
}
