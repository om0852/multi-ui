'use client';
import React from 'react';
import HolographicExample from './_examples/HolographicExample';
import ParallaxExample from './_examples/ParallaxExample';
import RippleWaveExample from './_examples/RippleWaveExample';
import FireflyExample from './_examples/FireflyExample';
import BorderAnimationExample from './_examples/BorderAnimationExample';
import MatrixRainExample from './_examples/MatrixRainExample';
import PortalExample from './_examples/PortalExample';
import StackExample from './_examples/StackExample';
import StaggeredExample from './_examples/StaggeredExample';
import SplitTextExample from './_examples/SplitTextExample';
import SwipeEffectExample from './_examples/SwipeEffectExample';
import SlideUpExample from './_examples/SlideUpExample';
import ShimmerExample from './_examples/ShimmerExample';
import SliderExample from './_examples/SliderExample';
import RainbowWaveExample from './_examples/RainbowWaveExample';
import QuantumJumpExample from './_examples/QuantumJumpExample';

export default function PaginationDemo() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Pagination Examples</h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Border Animation</h2>
            <BorderAnimationExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Holographic Effect</h2>
            <HolographicExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Parallax Movement</h2>
            <ParallaxExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Ripple Wave</h2>
            <RippleWaveExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Firefly Effect</h2>
            <FireflyExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Matrix Rain</h2>
            <MatrixRainExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Portal Effect</h2>
            <PortalExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Stack Effect</h2>
            <StackExample />
          </section>

          

          <section>
            <h2 className="text-2xl font-semibold mb-6">Staggered Animation</h2>
            <StaggeredExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Split Text</h2>
            <SplitTextExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Swipe Effect</h2>
            <SwipeEffectExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Slide Up</h2>
            <SlideUpExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Shimmer Effect</h2>
            <ShimmerExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Slider</h2>
            <SliderExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Rainbow Wave</h2>
            <RainbowWaveExample />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Quantum Jump</h2>
            <QuantumJumpExample />
          </section>
        </div>
      </div>
    </div>
  );
}
