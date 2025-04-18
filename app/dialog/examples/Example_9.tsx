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
    <div className="p-8 space-y-8 bg-gradient-to-bl from-gray-900 via-slate-900 to-gray-800 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-lime-400">Dark Gradient Dialog</h2>
        <p className="text-gray-300">
          A sophisticated dialog with dark gradients and vibrant lime accents.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-xl text-white bg-gradient-to-r ${
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

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Dark Dialog with {currentAnimation}
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Dark Gradient Design</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our dark-themed dialog with {currentAnimation} animation.
                Notice the enhanced backdrop blur and smooth transitions.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-6">
              <p className="text-lime-400 font-semibold">
                Dialog_9 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Dark gradient theme with lime accents</li>
                <li>Enhanced backdrop blur effect</li>
                <li>Longer animation duration (0.6s)</li>
                <li>Rounded corners and borders</li>
                <li>Modern minimalist design</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-700 text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-gradient-to-r from-lime-500 to-green-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-md"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
        <h3 className="text-lime-400 font-bold mb-2">About this Dialog</h3>
        <p className="text-gray-300">
          Dialog_9 introduces a sophisticated dark theme with vibrant lime accents.
          It features enhanced backdrop blur, longer animation durations, and a
          modern minimalist design. The dark gradients and lime highlights create
          a striking contrast that draws attention to important elements.
        </p>
      </div>
    </div>
  );
}
