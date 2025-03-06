'use client';
import React, { useState } from 'react';
import PlasmaFieldExample from './_examples/PlasmaFieldExample';
import MatrixRainExample from './_examples/MatrixRainExample';
import QuantumJumpExample from './_examples/QuantumJumpExample';
import OrigamiExample from './_examples/OrigamiExample';
import PrismExample from './_examples/PrismExample';
import AuroraExample from './_examples/AuroraExample';
import VortexExample from './_examples/VortexExample';
import CrystalExample from './_examples/CrystalExample';
import LiquidBubbleExample from './_examples/LiquidBubbleExample';
import CosmicGlowExample from './_examples/CosmicGlowExample';

export default function PaginationDemo() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      <PlasmaFieldExample/>
      <MatrixRainExample/>
      <QuantumJumpExample/>
      <OrigamiExample/>
      <PrismExample/>
      <AuroraExample/>
      <VortexExample />
      <CrystalExample />
      <LiquidBubbleExample />
      <CosmicGlowExample />
    </div>
  );
}
