"use client"
import React from "react";
import Tooltip_11 from "./_components/Tooltip_11";
import Tooltip_12 from "./_components/Tooltip_12";
import Tooltip_13 from "./_components/Tooltip_13";

const TooltipShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Neon Glow Tooltip */}
      <div className="mb-16">
        <h2 className="text-white mb-8 text-xl">Neon Glow Tooltips:</h2>
        <div className="flex gap-8 flex-wrap">
          <Tooltip_11 
            text="Neon Pink Tooltip! ✨"
            position="top"
            glowColor="#ff00ff"
          >
            <button className="px-4 py-2 bg-pink-600 text-white rounded-lg">
              Hover Me (Top)
            </button>
          </Tooltip_11>

          <Tooltip_11 
            text="Neon Blue Effect! 💫"
            position="bottom"
            glowColor="#00ffff"
          >
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg">
              Hover Me (Bottom)
            </button>
          </Tooltip_11>

          <Tooltip_11 
            text="Neon Green Magic! 🌟"
            position="right"
            glowColor="#00ff00"
          >
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
              Hover Me (Right)
            </button>
          </Tooltip_11>
        </div>
      </div>

      {/* Glass Morphism Tooltip */}
      <div className="mb-16">
        <h2 className="text-white mb-8 text-xl">Glass Morphism Tooltips:</h2>
        <div className="flex gap-8 flex-wrap">
          <Tooltip_12 
            text="Frosted Glass Effect"
            position="top"
            glassColor="rgba(255, 255, 255, 0.1)"
            borderColor="rgba(255, 255, 255, 0.2)"
          >
            <button className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20">
              Hover Me (Top)
            </button>
          </Tooltip_12>

          <Tooltip_12 
            text="Blue Glass Style"
            position="bottom"
            glassColor="rgba(59, 130, 246, 0.1)"
            borderColor="rgba(59, 130, 246, 0.2)"
          >
            <button className="px-4 py-2 bg-blue-500/10 backdrop-blur-md text-white rounded-lg border border-blue-500/20">
              Hover Me (Bottom)
            </button>
          </Tooltip_12>

          <Tooltip_12 
            text="Purple Glass Design"
            position="left"
            glassColor="rgba(147, 51, 234, 0.1)"
            borderColor="rgba(147, 51, 234, 0.2)"
          >
            <button className="px-4 py-2 bg-purple-500/10 backdrop-blur-md text-white rounded-lg border border-purple-500/20">
              Hover Me (Left)
            </button>
          </Tooltip_12>
        </div>
      </div>

      {/* 3D Floating Tooltip */}
      <div className="mb-16">
        <h2 className="text-white mb-8 text-xl">3D Floating Tooltips:</h2>
        <div className="flex gap-8 flex-wrap">
          <Tooltip_13 
            text="Floating Blue Tooltip"
            position="top"
            backgroundColor="#2563eb"
            shadowColor="rgba(37, 99, 235, 0.5)"
          >
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg">
              Hover Me (Top)
            </button>
          </Tooltip_13>

          <Tooltip_13 
            text="Floating Purple Effect"
            position="right"
            backgroundColor="#7c3aed"
            shadowColor="rgba(124, 58, 237, 0.5)"
          >
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-lg">
              Hover Me (Right)
            </button>
          </Tooltip_13>

          <Tooltip_13 
            text="Floating Green Style"
            position="bottom"
            backgroundColor="#059669"
            shadowColor="rgba(5, 150, 105, 0.5)"
          >
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-lg">
              Hover Me (Bottom)
            </button>
          </Tooltip_13>
        </div>
      </div>
    </div>
  );
};

export default TooltipShowcase;

