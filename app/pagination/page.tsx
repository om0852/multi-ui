'use client';
import React, { useState } from 'react';
import HolographicExample from './_examples/HolographicExample';
import ParallaxExample from './_examples/ParallaxExample';
import RippleWaveExample from './_examples/RippleWaveExample';
import FireflyExample from './_examples/FireflyExample';
import BorderAnimationExample from './_examples/BorderAnimationExample';

export default function PaginationDemo() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <BorderAnimationExample />
      <HolographicExample />
      <ParallaxExample />
      <RippleWaveExample />
      <FireflyExample />
    </div>
  );
}
