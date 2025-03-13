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
} from "../_components/Dialog_8";

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
    <div className="p-8 space-y-8 bg-gradient-to-br from-teal-900 via-green-800 to-emerald-900 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Nature-Inspired Dialog</h2>
        <p className="text-teal-100">
          A fresh take on the frosted glass dialog with nature-inspired colors.
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
              } hover:opacity-90 transition-opacity backdrop-blur-sm shadow-lg`}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Nature Dialog with {currentAnimation}
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
            <div className="my-6">
              <p className="text-teal-600 font-semibold">
                Dialog_8 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>Nature-inspired color palette</li>
                <li>Enhanced frosted glass effect</li>
                <li>Four smooth animations</li>
                <li>Gradient backgrounds and buttons</li>
                <li>Soft shadows and transitions</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-lg border border-teal-500 border-opacity-20">
        <h3 className="text-teal-300 font-semibold mb-2">About this Dialog</h3>
        <p className="text-teal-100">
          Dialog_8 takes the frosted glass concept further with a nature-inspired theme.
          It features calming gradients from blues to greens, enhanced backdrop blur effects,
          and smooth animations. The design aims to create a serene and modern user experience
          with its soft colors and transitions.
        </p>
      </div>
    </div>
  );
}
