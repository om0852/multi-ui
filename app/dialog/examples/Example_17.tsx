"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_17";

type AnimationType = "grow" | "bloom" | "leaf" | "roots";

export default function Example_17() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("grow");

  const animations: AnimationType[] = ["grow", "bloom", "leaf", "roots"];
  const natureDescriptions = {
    grow: "Natural upward growth",
    bloom: "Flower blossoming",
    leaf: "Gentle leaf swaying",
    roots: "Deep roots expanding",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-green-800 flex items-center gap-2 justify-center">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Botanical Dialog
        </h2>
        <p className="text-green-700 text-center">
          Experience nature-inspired animations with organic transitions.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-full font-medium ${
                currentAnimation === animation
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  : "bg-white text-green-700 hover:bg-green-50 border-green-200"
              } transition-all duration-300 border shadow-sm`}
            >
              {animation.charAt(0).toUpperCase() + animation.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Open Garden View
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Natural Harmony
            </StyledDialogHeader>
            <StyledDialogDescription>
              Witnessing the {currentAnimation} animation: {natureDescriptions[currentAnimation]}.
              Explore different natural movements inspired by garden elements!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-green-800 font-semibold">
                Dialog_17 features:
              </p>
              <ul className="list-none mt-2 space-y-2 text-green-700">
                <li>🌱 Organic animations</li>
                <li>🌿 Floating leaf effects</li>
                <li>🍃 Animated vine patterns</li>
                <li>🌺 Nature-inspired design</li>
                <li>🌳 Gentle transitions</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 bg-white text-green-700 font-medium rounded-full hover:bg-green-50 
                  transition-colors border border-green-200"
              >
                Close Garden
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Nature's beauty captured!");
                }}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white 
                  font-medium rounded-full hover:opacity-90"
              >
                Embrace Nature
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200">
        <h3 className="text-green-800 font-bold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          About this Dialog
        </h3>
        <p className="text-green-700">
          Dialog_17 brings the beauty of nature to life with its organic design and animations.
          The dialog features floating leaves, animated vines, and natural transitions that
          mimic the gentle movements found in gardens. The soft color palette and botanical
          elements create a serene and harmonious user experience.
        </p>
      </div>
    </div>
  );
}
