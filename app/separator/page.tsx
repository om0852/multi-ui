"use client";
import React, { useState } from "react";
import RainbowWaveSeparator from "./_components/Separator_1";
import GlowingDotsSeparator from "./_components/Separator_2";
import NeonLineSeparator from "./_components/Separator_3";
import GradientPulseSeparator from "./_components/Separator_4";
import ShimmerLineSeparator from "./_components/Separator_5";
import ParticleFlowSeparator from "./_components/Separator_6";
import DoubleLineSeparator from "./_components/Separator_7";
import PulseRingSeparator from "./_components/Separator_8";
import DashFlowSeparator from "./_components/Separator_9";
import LiquidWaveSeparator from "./_components/Separator_10";
import DNAHelixSeparator from "./_components/Separator_11";
import MorseCodeSeparator from "./_components/Separator_12";
import CircuitBoardSeparator from "./_components/Separator_13";
import SoundWaveSeparator from "./_components/Separator_14";
import MatrixRainSeparator from "./_components/Separator_15";
import PulseNetworkSeparator from "./_components/Separator_16";
import ConstellationSeparator from "./_components/Separator_17";
import HeartbeatSeparator from "./_components/Separator_18";
import BubbleFlowSeparator from "./_components/Separator_19";
import GeometricPatternSeparator from "./_components/Separator_20";
import PixelFlowSeparator from "./_components/Separator_21";
import MusicNotesSeparator from "./_components/Separator_22";
import LightningBoltSeparator from "./_components/Separator_23";
import FireworksSeparator from "./_components/Separator_24";
import DNASpiralSeparator from "./_components/Separator_25";
import CosmicDustSeparator from "./_components/Separator_26";
import RetroWaveSeparator from "./_components/Separator_27";
import CyberCircuitSeparator from "./_components/Separator_28";
import CrystalFormationSeparator from "./_components/Separator_29";
import QuantumWaveSeparator from "./_components/Separator_30";
import NeonPulseSeparator from "./_components/Separator_31";
import PlasmaFieldSeparator from "./_components/Separator_32";
import FractalTreeSeparator from "./_components/Separator_33";
import HologramGridSeparator from "./_components/Separator_34";
import MagneticFieldSeparator from "./_components/Separator_35";
import RippleWaveSeparator from "./_components/Separator_36";
import AuroraGlowSeparator from "./_components/Separator_37";
import DigitalRainSeparator from "./_components/Separator_38";
import LaserBeamSeparator from "./_components/Separator_39";
import VortexPortalSeparator from "./_components/Separator_40";
import SonicWaveSeparator from "./_components/Separator_41";
import NebulaFlowSeparator from "./_components/Separator_42";
import TimeWarpSeparator from "./_components/Separator_43";
import EnergyFieldSeparator from "./_components/Separator_44";
import InfinityLoopSeparator from "./_components/Separator_45";
import QuantumTunnelSeparator from "./_components/Separator_46";
import CrystalPrismSeparator from "./_components/Separator_47";
import PlasmaStormSeparator from "./_components/Separator_48";
import NeuralNetworkSeparator from "./_components/Separator_49";
import GalacticOrbitSeparator from "./_components/Separator_50";

const SeparatorDemo = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(6);
  const [animated, setAnimated] = useState(true);

  const separators = [
    { component: RainbowWaveSeparator, name: "Rainbow Wave" },
    { component: GlowingDotsSeparator, name: "Glowing Dots" },
    { component: NeonLineSeparator, name: "Neon Line" },
    { component: GradientPulseSeparator, name: "Gradient Pulse" },
    { component: ShimmerLineSeparator, name: "Shimmer Line" },
    { component: ParticleFlowSeparator, name: "Particle Flow" },
    { component: DoubleLineSeparator, name: "Double Line" },
    { component: PulseRingSeparator, name: "Pulse Ring" },
    { component: DashFlowSeparator, name: "Dash Flow" },
    { component: LiquidWaveSeparator, name: "Liquid Wave" },
    { component: DNAHelixSeparator, name: "DNA Helix" },
    { component: MorseCodeSeparator, name: "Morse Code" },
    { component: CircuitBoardSeparator, name: "Circuit Board" },
    { component: SoundWaveSeparator, name: "Sound Wave" },
    { component: MatrixRainSeparator, name: "Matrix Rain" },
    { component: PulseNetworkSeparator, name: "Pulse Network" },
    { component: ConstellationSeparator, name: "Constellation" },
    { component: HeartbeatSeparator, name: "Heartbeat" },
    { component: BubbleFlowSeparator, name: "Bubble Flow" },
    { component: GeometricPatternSeparator, name: "Geometric Pattern" },
    { component: PixelFlowSeparator, name: "Pixel Flow" },
    { component: MusicNotesSeparator, name: "Music Notes" },
    { component: LightningBoltSeparator, name: "Lightning Bolt" },
    { component: FireworksSeparator, name: "Fireworks" },
    { component: DNASpiralSeparator, name: "DNA Spiral" },
    { component: CosmicDustSeparator, name: "Cosmic Dust" },
    { component: RetroWaveSeparator, name: "Retro Wave" },
    { component: CyberCircuitSeparator, name: "Cyber Circuit" },
    { component: CrystalFormationSeparator, name: "Crystal Formation" },
    { component: QuantumWaveSeparator, name: "Quantum Wave" },
    { component: NeonPulseSeparator, name: "Neon Pulse" },
    { component: PlasmaFieldSeparator, name: "Plasma Field" },
    { component: FractalTreeSeparator, name: "Fractal Tree" },
    { component: HologramGridSeparator, name: "Hologram Grid" },
    { component: MagneticFieldSeparator, name: "Magnetic Field" },
    { component: RippleWaveSeparator, name: "Ripple Wave" },
    { component: AuroraGlowSeparator, name: "Aurora Glow" },
    { component: DigitalRainSeparator, name: "Digital Rain" },
    { component: LaserBeamSeparator, name: "Laser Beam" },
    { component: VortexPortalSeparator, name: "Vortex Portal" },
    { component: SonicWaveSeparator, name: "Sonic Wave" },
    { component: NebulaFlowSeparator, name: "Nebula Flow" },
    { component: TimeWarpSeparator, name: "Time Warp" },
    { component: EnergyFieldSeparator, name: "Energy Field" },
    { component: InfinityLoopSeparator, name: "Infinity Loop" },
    { component: QuantumTunnelSeparator, name: "Quantum Tunnel" },
    { component: CrystalPrismSeparator, name: "Crystal Prism" },
    { component: PlasmaStormSeparator, name: "Plasma Storm" },
    { component: NeuralNetworkSeparator, name: "Neural Network" },
    { component: GalacticOrbitSeparator, name: "Galactic Orbit" },
  ];

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Separator Demo</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setOrientation(orientation === "horizontal" ? "vertical" : "horizontal")}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Toggle Orientation
          </button>
          <button
            onClick={() => setAnimated(!animated)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Toggle Animation
          </button>
          <input
            type="range"
            min="1"
            max="20"
            value={thickness}
            onChange={(e) => setThickness(parseInt(e.target.value))}
            className="w-32"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {separators.map(({ component: Component, name }) => (
          <div key={name} className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <Component orientation={orientation} thickness={thickness} animated={animated} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeparatorDemo;
