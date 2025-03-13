"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_21";

type AnimationType = "fade" | "slide" | "bounce" | "spin";

export default function Example_21() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("fade");

  const animations: AnimationType[] = ["fade", "slide", "bounce", "spin"];
  const animationDescriptions = {
    fade: "Smooth opacity transition",
    slide: "Horizontal sliding motion",
    bounce: "Playful bouncing effect",
    spin: "Rotating transformation",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-light text-gray-900 dark:text-white text-center">
          Minimalist Dialog
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
          Clean and simple interactions with smooth transitions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg text-sm ${
                currentAnimation === animation
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              } transition-all duration-200 shadow-sm`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Dialog
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Clean Design
            </StyledDialogHeader>
            <StyledDialogDescription>
              Currently viewing the {currentAnimation} animation: {animationDescriptions[currentAnimation]}.
              Try different animations to see smooth transitions in action.
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                Design Features:
              </p>
              <ul className="list-none mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>◦ Minimalist aesthetics</li>
                <li>◦ Smooth transitions</li>
                <li>◦ Clean typography</li>
                <li>◦ Responsive layout</li>
                <li>◦ Dark mode support</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 
                  dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                  rounded-lg hover:opacity-90 transition-opacity"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <h3 className="text-gray-900 dark:text-white font-medium mb-2">
          About this Dialog
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          Dialog_21 embraces minimalist design principles with clean lines and 
          thoughtful spacing. The interface features smooth animations that enhance 
          user interaction without being distracting. The design adapts seamlessly 
          between light and dark modes, maintaining excellent readability and visual 
          hierarchy throughout.
        </p>
      </div>
    </div>
  );
}
