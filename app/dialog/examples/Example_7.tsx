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
    <div className="p-8 space-y-8 bg-gradient-to-br from-gray-800 to-gray-900 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Frosted Glass Dialog</h2>
        <p className="text-gray-300">
          A modern dialog with frosted glass effect and multiple animations.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg text-white bg-gradient-to-r ${
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

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Frosted Dialog with {currentAnimation}
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Frosted Glass Dialog</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our elegant frosted glass dialog with {currentAnimation} animation.
                The backdrop blur effect creates a modern, translucent appearance.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-6">
              <p className="text-teal-600 font-semibold">
                Dialog_7 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Frosted glass effect with backdrop blur</li>
                <li>Four unique animation styles</li>
                <li>Light theme with gradient accents</li>
                <li>Smooth transitions</li>
                <li>Enhanced shadow effects</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-400 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
        <h3 className="text-teal-400 font-semibold mb-2">About this Dialog</h3>
        <p className="text-gray-300">
          Dialog_7 introduces a sophisticated frosted glass design with backdrop blur effects.
          It features four distinct animations: Slide Up, Fade In/Out, Scale In, and the unique
          Rotate Zoom. The light theme with teal accents creates a fresh, modern appearance,
          while the frosted glass effect adds depth and elegance.
        </p>
      </div>
    </div>
  );
}
