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
    <div className="p-8 space-y-8 bg-gray-900 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Styled Dialog with Animations</h2>
        <p className="text-gray-300">
          A modern dialog with gradient themes and smooth animations.
        </p>
        <div className="flex flex-wrap gap-2">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg text-white bg-gradient-to-r ${
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

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Dialog with {currentAnimation}
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              <StyledDialogTitle>Styled Dialog Example</StyledDialogTitle>
              <StyledDialogDescription>
                Experience our beautifully styled dialog with {currentAnimation} animation.
              </StyledDialogDescription>
            </StyledDialogHeader>
            <div className="my-6">
              <p className="text-purple-300">
                Dialog_6 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                <li>Multiple animation styles</li>
                <li>Gradient background and buttons</li>
                <li>Modern dark theme</li>
                <li>Smooth transitions</li>
                <li>Responsive design</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Action confirmed!");
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-90"
              >
                Confirm
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-gray-800 border border-gray-700">
        <h3 className="text-purple-300 font-semibold mb-2">About this Dialog</h3>
        <p className="text-gray-400">
          Dialog_6 combines modern gradient styling with smooth animations. It features
          three distinct animation types: Slide Up, Fade In/Out, and Scale In. The
          dialog uses a dark theme with purple and pink accents for a contemporary look.
        </p>
      </div>
    </div>
  );
}
