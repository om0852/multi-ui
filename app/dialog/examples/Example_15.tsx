"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../tsx/Dialog_15";

type AnimationType = "hologram" | "warpSpeed" | "teleport" | "quantum";

export default function Example_15() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("hologram");

  const animations: AnimationType[] = ["hologram", "warpSpeed", "teleport", "quantum"];
  const techDescriptions = {
    hologram: "3D projection materialization",
    warpSpeed: "Faster-than-light transition",
    teleport: "Quantum state transfer",
    quantum: "Dimensional shift effect",
  };

  return (
    <div className="p-8 space-y-8 bg-black min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-cyan-500 flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          Holographic Interface
        </h2>
        <p className="text-cyan-300">
          Experience futuristic animations with holographic effects.
        </p>
        <div className="flex flex-wrap gap-3">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 rounded font-medium backdrop-blur-xl ${
                currentAnimation === animation
                  ? "bg-cyan-500 text-black border-cyan-400"
                  : "bg-black/80 text-cyan-500 hover:bg-black/90 border-cyan-500/30"
              } transition-all duration-300 border relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
              <span className="relative">{animation}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            Initialize System
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              System Interface
            </StyledDialogHeader>
            <StyledDialogDescription>
              Currently utilizing {currentAnimation} animation: {techDescriptions[currentAnimation]}.
              Select different animations to explore advanced holographic transitions.
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-cyan-500 font-semibold">
                Dialog_15 features:
              </p>
              <ul className="list-none mt-2 space-y-2 text-cyan-100">
                <li>→ Holographic display effects</li>
                <li>→ Scanning line animation</li>
                <li>→ Quantum-inspired transitions</li>
                <li>→ Cyber-grid background</li>
                <li>→ Advanced UI elements</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 bg-black/80 text-cyan-500 font-medium rounded hover:bg-black/90 
                  transition-colors border border-cyan-500/30 backdrop-blur-xl"
              >
                Terminate
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("System initialized!");
                }}
                className="px-6 py-2 bg-cyan-500 text-black font-medium rounded hover:bg-cyan-400 
                  transition-colors"
              >
                Execute
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 rounded bg-black/80 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative">
          <h3 className="text-cyan-500 font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            About this Dialog
          </h3>
          <p className="text-cyan-100">
            Dialog_15 represents the pinnacle of futuristic interface design with its
            holographic aesthetics. It features a scanning line animation, quantum-inspired
            transitions, and a cyber-grid background. The design incorporates advanced UI
            elements like animated borders, holographic overlays, and dynamic lighting
            effects that create an immersive sci-fi experience.
          </p>
        </div>
      </div>
    </div>
  );
}
