'use client'
import React from "react";
import BounceOnClickBadge from "./BounceOnClickBadge";
import PulsingGlowBadge from "./PulsingGlowBadge";
import SpinBadge from "./SpinBadge";
import ScaleBadge from "./ScaleBadge";
import ShakeBadge from "./ShakeBadge";
import SlidingBorderBadge from "./SlidingBorderBadge";
import SlideInBadge from "./SlideInBadge";
import GradientBorderBadge from "./GradientBorderBadge";
import TiltBadge from "./TiltBadge";
import BlurBadge from "./BlurBadge";
import OutlineBadge from "./OutlineBadge";
import RippleBadge from "./RippleBadge";
import FlipBadge from "./FlipBadge";
import TypingBadge from "./TypingBadge";
import NeonBadge from "./NeonBadge";
import FloatingBadge from "./FloatingBadge";

export default function BadgesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Interactive Badges</h1>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Bounce Badge (Click me!)</h2>
          <BounceOnClickBadge text="Click to Bounce" color="bg-red-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Pulsing Glow Badge</h2>
          <PulsingGlowBadge text="Glowing" color="bg-purple-500" glowColor="purple" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Spin Badge (Hover me!)</h2>
          <SpinBadge text="Spin Me" color="bg-blue-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Scale Badge (Hover & Click me!)</h2>
          <ScaleBadge text="Scale Me" color="bg-green-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Shake Badge (Hover me!)</h2>
          <ShakeBadge text="Shake Me" color="bg-yellow-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Sliding Border Badge (Hover me!)</h2>
          <SlidingBorderBadge text="Slide Effect" color="bg-indigo-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Slide In Badge (Hover me!)</h2>
          <SlideInBadge text="Slide In" color="bg-pink-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Gradient Border Badge (Hover me!)</h2>
          <GradientBorderBadge text="Gradient" color="bg-slate-800" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Tilt Badge (Hover me!)</h2>
          <TiltBadge text="Tilt" color="bg-cyan-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Blur Badge (Hover me!)</h2>
          <BlurBadge text="Blur" color="bg-orange-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Outline Badge (Hover me!)</h2>
          <OutlineBadge text="Outline" color="bg-emerald-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Ripple Badge (Click me!)</h2>
          <RippleBadge text="Click for Ripple" color="bg-violet-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">3D Flip Badge (Hover me!)</h2>
          <FlipBadge text="Flip Me" color="bg-rose-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Typing Badge (Hover me!)</h2>
          <TypingBadge text="Type Effect" color="bg-teal-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Neon Badge (Hover me!)</h2>
          <NeonBadge text="Neon Glow" color="bg-fuchsia-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Floating Badge (Hover me!)</h2>
          <FloatingBadge text="Float" color="bg-amber-500" />
        </div>

        {/* Color Variants Example */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Color Variants</h2>
          <div className="space-x-4">
            <BounceOnClickBadge text="Red" color="bg-red-500" />
            <BounceOnClickBadge text="Blue" color="bg-blue-500" />
            <BounceOnClickBadge text="Green" color="bg-green-500" />
            <BounceOnClickBadge text="Yellow" color="bg-yellow-500" />
            <BounceOnClickBadge text="Purple" color="bg-purple-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">New Color Variants</h2>
          <div className="space-x-4">
            <SlideInBadge text="Pink" color="bg-pink-500" />
            <GradientBorderBadge text="Slate" color="bg-slate-800" />
            <TiltBadge text="Cyan" color="bg-cyan-500" />
            <BlurBadge text="Orange" color="bg-orange-500" />
            <OutlineBadge text="Emerald" color="bg-emerald-500" />
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">How to Use</h2>
        <div className="space-y-2 text-sm">
          <p>• BounceOnClickBadge: Click to trigger bounce animation</p>
          <p>• PulsingGlowBadge: Continuously pulses with glow effect</p>
          <p>• SpinBadge: Hover to trigger 180° rotation</p>
          <p>• ScaleBadge: Hover to scale up, click to scale down</p>
          <p>• ShakeBadge: Hover to trigger shake animation</p>
          <p>• SlidingBorderBadge: Hover to see sliding border effect</p>
          <p>• SlideInBadge: Hover to slide in with shadow effect</p>
          <p>• GradientBorderBadge: Hover to animate gradient border</p>
          <p>• TiltBadge: Hover to see tilt transformation</p>
          <p>• BlurBadge: Hover for blur and scale effect</p>
          <p>• OutlineBadge: Hover to show outline ring</p>
          <p>• RippleBadge: Click to see ripple animation effect</p>
          <p>• FlipBadge: Hover to see 3D flip animation</p>
          <p>• TypingBadge: Hover to see typing animation</p>
          <p>• NeonBadge: Hover for neon glow effect</p>
          <p>• FloatingBadge: Hover to see floating animation</p>
        </div>
      </div>
    </div>
  );
}
