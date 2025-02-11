"use client"
import React from 'react';
import styled from 'styled-components';
import CosmicLoader from './_components/Loader_101';
import DNALoader from './_components/Loader_102';
import QuantumLoader from './_components/Loader_103';
import GeometricLoader from './_components/Loader_104';
import PulseRingLoader from './_components/Loader_105';
import NeuralLoader from './_components/Loader_106';
import MatrixLoader from './_components/Loader_107';
import FractalLoader from './_components/Loader_108';
import ParticleWaveLoader from './_components/Loader_109';
import HologramLoader from './_components/Loader_110';
import CrystalLoader from './_components/Loader_111';
import SoundWaveLoader from './_components/Loader_112';
import ConstellationLoader from './_components/Loader_113';
import CircuitBoardLoader from './_components/Loader_114';
import LiquidDropLoader from './_components/Loader_115';
import KaleidoscopeLoader from './_components/Loader_116';
import NeonLoader from './_components/Loader_117';
import MolecularLoader from './_components/Loader_118';
import VortexLoader from './_components/Loader_119';
import PlasmaLoader from './_components/Loader_120';
import WormholeLoader from './_components/Loader_121';
// import Loader_2 from './_components/Loader_2';
// import Loader_3 from './_components/Loader_3';
// import Loader_4 from './_components/Loader_4';
// import Loader_5 from './_components/Loader_5';
// import Loader_6 from './_components/Loader_6';
// import Loader_7 from './_components/Loader_7';
// import Loader_8 from './_components/Loader_8';
// import Loader_9 from './_components/Loader_9';
// import Loader_10 from './_components/Loader_10';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0B1026, #1B2240);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h2`
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(88, 88, 255, 0.5);
`;

const LoaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoaderLabel = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
`;

const LoaderPage = () => {
  return (
    <Container>
      <Section>
        <Title>Space & Time</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <WormholeLoader size="medium" color="#9C27B0" />
            <LoaderLabel>Wormhole</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <CosmicLoader size="medium" color="#5858FF" />
            <LoaderLabel>Cosmic</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <ConstellationLoader size="medium" color="#FFD700" />
            <LoaderLabel>Constellation</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Energy & Plasma</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <PlasmaLoader size="medium" color="#FF4081" />
            <LoaderLabel>Plasma Energy</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <NeonLoader size="medium" color="#00BCD4" />
            <LoaderLabel>Neon Pulse</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <VortexLoader size="medium" color="#4CAF50" />
            <LoaderLabel>Energy Vortex</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Molecular & Quantum</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <MolecularLoader size="medium" color="#FF9800" />
            <LoaderLabel>Molecular</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <QuantumLoader size="medium" color="#4CAF50" />
            <LoaderLabel>Quantum</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <ParticleWaveLoader size="medium" color="#E91E63" />
            <LoaderLabel>Particle Wave</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Digital & Tech</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <MatrixLoader size="medium" color="#00BCD4" />
            <LoaderLabel>Matrix Rain</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <CircuitBoardLoader size="medium" color="#64FFDA" />
            <LoaderLabel>Circuit Board</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <NeuralLoader size="medium" color="#00BCD4" />
            <LoaderLabel>Neural Network</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Natural Elements</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <LiquidDropLoader size="medium" color="#00BCD4" />
            <LoaderLabel>Liquid Drop</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <CrystalLoader size="medium" color="#E91E63" />
            <LoaderLabel>Crystal</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <FractalLoader size="medium" color="#9C27B0" />
            <LoaderLabel>Fractal Tree</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Scientific & Medical</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <DNALoader size="medium" color="#FF1E1E" />
            <LoaderLabel>DNA Helix</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <SoundWaveLoader size="medium" color="#4CAF50" />
            <LoaderLabel>Sound Wave</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <HologramLoader size="medium" color="#64FFDA" />
            <LoaderLabel>Hologram</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Abstract & Geometric</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <GeometricLoader size="medium" color="#9C27B0" />
            <LoaderLabel>Geometric Morph</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <KaleidoscopeLoader size="medium" color="#FF4081" />
            <LoaderLabel>Kaleidoscope</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <PulseRingLoader size="medium" color="#FFD700" />
            <LoaderLabel>Pulse Ring</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>

      <Section>
        <Title>Loading States</Title>
        <LoaderGrid>
          <LoaderWrapper>
            <WormholeLoader size="small" color="#9C27B0" />
            <LoaderLabel>Warping Space-Time...</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <PlasmaLoader size="medium" color="#FF4081" />
            <LoaderLabel>Charging Energy...</LoaderLabel>
          </LoaderWrapper>
          <LoaderWrapper>
            <MolecularLoader size="large" color="#00BCD4" />
            <LoaderLabel>Analyzing Structure...</LoaderLabel>
          </LoaderWrapper>
        </LoaderGrid>
      </Section>
    </Container>
  );
};

export default LoaderPage;
