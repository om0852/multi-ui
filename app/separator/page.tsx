"use client";
import React, { useState } from "react";
import RainbowWaveSeparator from "./tsx/Separator_1";
import GlowingDotsSeparator from "./tsx/Separator_2";
import NeonLineSeparator from "./tsx/Separator_3";
import GradientPulseSeparator from "./tsx/Separator_4";
import ShimmerLineSeparator from "./tsx/Separator_5";
import ParticleFlowSeparator from "./tsx/Separator_6";
import DoubleLineSeparator from "./tsx/Separator_7";
import PulseRingSeparator from "./tsx/Separator_8";
import DashFlowSeparator from "./tsx/Separator_9";
import LiquidWaveSeparator from "./tsx/Separator_10";
import DNAHelixSeparator from "./tsx/Separator_11";
import MorseCodeSeparator from "./tsx/Separator_12";
import CircuitBoardSeparator from "./tsx/Separator_13";
import SoundWaveSeparator from "./tsx/Separator_14";
import MatrixRainSeparator from "./tsx/Separator_15";
import PulseNetworkSeparator from "./tsx/Separator_16";
import ConstellationSeparator from "./tsx/Separator_17";
import HeartbeatSeparator from "./tsx/Separator_18";
import BubbleFlowSeparator from "./tsx/Separator_19";
import GeometricPatternSeparator from "./tsx/Separator_20";
import PixelFlowSeparator from "./tsx/Separator_21";
import MusicNotesSeparator from "./tsx/Separator_22";
import LightningBoltSeparator from "./tsx/Separator_23";
import FireworksSeparator from "./tsx/Separator_24";
import DNASpiralSeparator from "./tsx/Separator_25";
import CosmicDustSeparator from "./tsx/Separator_26";
import RetroWaveSeparator from "./tsx/Separator_27";
import CyberCircuitSeparator from "./tsx/Separator_28";
import CrystalFormationSeparator from "./tsx/Separator_29";
import QuantumWaveSeparator from "./tsx/Separator_30";
import NeonPulseSeparator from "./tsx/Separator_31";
import PlasmaFieldSeparator from "./tsx/Separator_32";
import FractalTreeSeparator from "./tsx/Separator_33";
import HologramGridSeparator from "./tsx/Separator_34";
import MagneticFieldSeparator from "./tsx/Separator_35";
import RippleWaveSeparator from "./tsx/Separator_36";
import AuroraGlowSeparator from "./tsx/Separator_37";
import DigitalRainSeparator from "./tsx/Separator_38";
import LaserBeamSeparator from "./tsx/Separator_39";
import VortexPortalSeparator from "./tsx/Separator_40";
import SonicWaveSeparator from "./tsx/Separator_41";
import NebulaFlowSeparator from "./tsx/Separator_42";
import TimeWarpSeparator from "./tsx/Separator_43";
import EnergyFieldSeparator from "./tsx/Separator_44";
import InfinityLoopSeparator from "./tsx/Separator_45";
import QuantumTunnelSeparator from "./tsx/Separator_46";
import CrystalPrismSeparator from "./tsx/Separator_47";
import PlasmaStormSeparator from "./tsx/Separator_48";
import NeuralNetworkSeparator from "./tsx/Separator_49";
import GalacticOrbitSeparator from "./tsx/Separator_50";

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
