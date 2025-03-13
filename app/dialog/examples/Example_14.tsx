"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_14";

type AnimationType = "bubble" | "reaction" | "dissolve" | "catalyst";

export default function Example_14() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("bubble");

  const animations: AnimationType[] = ["bubble", "reaction", "dissolve", "catalyst"];
  const reactionDescriptions = {
    bubble: "Effervescent rising effect",
    reaction: "Chemical transformation",
    dissolve: "Smooth dissolution",
    catalyst: "Accelerated motion",
  };

  return (
    <div className="p-8 space-y-8 bg-gradient-to-br from-emerald-100 to-green-50 min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-emerald-700 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          Laboratory Dialog
        </h2>
        <p className="text-emerald-600">
          Experience chemistry-inspired animations with a clean, scientific design.
        </p>
        <div className="flex flex-wrap gap-3">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentAnimation === animation
                  ? "bg-emerald-500 text-white border-emerald-600"
                  : "bg-white/80 text-emerald-700 hover:bg-white/90 border-emerald-200"
              } backdrop-blur-sm transition-all duration-300 border`}
            >
              {animation.charAt(0).toUpperCase() + animation.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            View Chemical Analysis
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              Experiment Results
            </StyledDialogHeader>
            <StyledDialogDescription>
              Currently demonstrating the {currentAnimation} animation: {reactionDescriptions[currentAnimation]}.
              Observe different chemical reactions through unique animations!
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-emerald-700 font-semibold">
                Dialog_14 features:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-emerald-600">
                <li>Animated bubbling effects</li>
                <li>Laboratory glassware aesthetics</li>
                <li>Chemical reaction animations</li>
                <li>Clean, scientific design</li>
                <li>Precise measurements and indicators</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 bg-emerald-100 text-emerald-700 font-medium rounded-lg hover:bg-emerald-200 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("Results recorded!");
                }}
                className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-green-500 text-white font-medium rounded-lg hover:opacity-90"
              >
                Record Results
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-emerald-200">
        <h3 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          About this Dialog
        </h3>
        <p className="text-emerald-600">
          Dialog_14 brings laboratory aesthetics to life with its chemistry-inspired design.
          The dialog features animated bubbles, reaction-based transitions, and a clean,
          scientific interface. The design includes laboratory glassware effects, precise
          measurements, and a professional color scheme that emphasizes accuracy and clarity.
        </p>
      </div>
    </div>
  );
}
