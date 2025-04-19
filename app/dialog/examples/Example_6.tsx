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
} from "../_components/Dialog_6";

type AnimationType = "slideUp" | "fadeInOut" | "scaleIn";

export default function Example_6() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("slideUp");

  const animations: AnimationType[] = ["slideUp", "fadeInOut", "scaleIn"];
  const animationColors = {
    slideUp: "from-blue-500 to-blue-600",
    fadeInOut: "from-purple-500 to-purple-600",
    scaleIn: "from-pink-500 to-pink-600",
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-gray-900 min-h-[400px] max-w-5xl mx-auto">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Styled Dialog with Animations</h2>
        <p className="text-sm sm:text-base text-gray-300">
          A modern dialog with gradient themes and smooth animations.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-white bg-gradient-to-r ${
                currentAnimation === animation
                  ? animationColors[animation]
                  : "from-gray-700 to-gray-800"
              } hover:opacity-90 transition-opacity`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            <span className="block text-sm sm:text-base">Open Dialog with {currentAnimation}</span>
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
            className="w-[95%] max-w-[95%] sm:max-w-[85%] md:max-w-md p-3 sm:p-4 md:p-6"
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Styled Dialog Example</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our beautifully styled dialog with {currentAnimation} animation.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-3 sm:my-4 md:my-6">
              <p className="text-purple-300 text-sm sm:text-base">
                Dialog_6 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400 text-sm sm:text-base">
                <li>Multiple animation styles</li>
                <li>Gradient background and buttons</li>
                <li>Modern dark theme</li>
                <li>Smooth transitions</li>
                <li>Responsive design</li>
              </ul>
            </div>
            <StyledDialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="w-full sm:w-auto bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90 text-sm sm:text-base"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
        
        <div className="hidden sm:block text-sm bg-gray-800 p-3 rounded-lg text-gray-300 max-w-xs border border-gray-700">
          <p>This modern dialog features gradient styling with three animation options: Slide Up, Fade In/Out, and Scale In.</p>
        </div>
      </div>
      
      <div className="sm:hidden text-sm bg-gray-800 p-3 rounded-lg text-gray-300 border border-gray-700 mb-4">
        <p>This modern dialog features gradient styling with three animation options: Slide Up, Fade In/Out, and Scale In.</p>
      </div>

      <div className="mt-4 sm:mt-8 p-3 sm:p-4 rounded-lg bg-gray-800 border border-gray-700">
        <h3 className="text-purple-300 font-semibold mb-2 text-base sm:text-lg">About this Dialog</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          Dialog_6 combines modern gradient styling with smooth animations. It features
          three distinct animation types: Slide Up, Fade In/Out, and Scale In. The
          dialog uses a dark theme with purple and pink accents for a contemporary look.
        </p>
      </div>
    </div>
  );
}
