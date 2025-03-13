"use client";

import { useState } from "react";
import {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogDescription,
  StyledDialogFooter,
} from "../_components/Dialog_19";
import { motion } from "framer-motion";

type AnimationType = "boot" | "glitch" | "scan" | "pixel";

export default function Example_19() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState<AnimationType>("boot");

  const animations: AnimationType[] = ["boot", "glitch", "scan", "pixel"];
  const systemDescriptions = {
    boot: "System initialization sequence",
    glitch: "Data corruption effect",
    scan: "Vertical scan lines",
    pixel: "Digital pixelation",
  };

  return (
    <div className="p-8 space-y-8 bg-black min-h-[400px]">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#00ff00] font-mono tracking-wider text-center">
          TERMINAL_INTERFACE.SYS
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-3 h-5 bg-[#00ff00] ml-2"
          />
        </h2>
        <p className="text-[#00ff00]/70 font-mono text-center text-sm">
          SELECT_ANIMATION_PROTOCOL
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {animations.map((animation) => (
            <button
              key={animation}
              onClick={() => setCurrentAnimation(animation)}
              className={`px-4 py-2 font-mono text-sm rounded ${
                currentAnimation === animation
                  ? "bg-[#00ff00]/20 text-[#00ff00] border-[#00ff00]"
                  : "bg-black text-[#00ff00]/70 hover:bg-[#00ff00]/10 border-[#00ff00]/50"
              } transition-all duration-300 border`}
            >
              {animation.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <StyledDialog>
          <StyledDialogTrigger onClick={() => setIsDialogOpen(true)}>
            EXECUTE_PROGRAM
          </StyledDialogTrigger>
          <StyledDialogContent
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            animationType={currentAnimation}
          >
            <StyledDialogHeader>
              SYSTEM_PROTOCOL
            </StyledDialogHeader>
            <StyledDialogDescription>
              {`> EXECUTING ${currentAnimation.toUpperCase()}_SEQUENCE\n`}
              {`> ${systemDescriptions[currentAnimation]}\n`}
              {`> INITIALIZING TERMINAL INTERFACE...\n`}
              {`> READY FOR INPUT`}
            </StyledDialogDescription>
            <div className="my-6">
              <p className="text-[#00ff00] font-mono text-sm">
                SYSTEM_FEATURES:
              </p>
              <ul className="list-none mt-2 space-y-1 font-mono text-sm text-[#00ff00]/70">
                <li> CRT screen simulation</li>
                <li> Scan line effects</li>
                <li> Terminal aesthetics</li>
                <li> Retro animations</li>
                <li> System glitch effects</li>
              </ul>
            </div>
            <StyledDialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2 bg-black text-[#00ff00] font-mono text-sm rounded 
                  hover:bg-[#00ff00]/10 transition-colors border border-[#00ff00]/50"
              >
                TERMINATE
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                  alert("SYSTEM PROTOCOL EXECUTED");
                }}
                className="px-6 py-2 bg-[#00ff00]/20 text-[#00ff00] font-mono text-sm rounded 
                  hover:bg-[#00ff00]/30 transition-colors border border-[#00ff00]"
              >
                CONFIRM
              </button>
            </StyledDialogFooter>
          </StyledDialogContent>
        </StyledDialog>
      </div>

      <div className="mt-8 p-6 bg-black border border-[#00ff00]/30 rounded relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] 
          bg-[length:100%_4px] pointer-events-none animate-scan opacity-20" />
        <h3 className="text-[#00ff00] font-bold mb-2 font-mono text-sm">
          SYSTEM_INFORMATION
        </h3>
        <p className="text-[#00ff00]/70 font-mono text-sm leading-relaxed">
          Dialog_19 emulates classic computer terminal interfaces with authentic CRT
          screen effects. Features include scan lines, screen flicker, and retro
          terminal aesthetics. The design incorporates classic terminal colors and
          monospace typography for an authentic computing experience.
        </p>
      </div>
    </div>
  );
}
