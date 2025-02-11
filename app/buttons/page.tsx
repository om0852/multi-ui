'use client';

import React from "react";
import DiagonalSwipeButton from './button122';
import SlideUpButton from './button123';
import SplitFillButton from './button124';
import CornerSlideButton from './button125';
import BorderRotateButton from './button126';
import CircleExpandButton from './button128';
import SliceSlideButton from './button129';
import DoubleLayerButton from './button130';
import CrossRevealButton from './button131';
import MagneticPullButton from './button132';
import InstagramButton from './button133';
import TwitterButton from './button134';
import LinkedInButton from './button135';
import GitHubButton from './button136';
import YouTubeButton from './button137';
import NeonPulseButton from './button138';
import LiquidFillButton from './button139';
import FlipButton from './button140';
import GlitchButton from './button141';
import ParticleButton from './button142';
import RippleButton from './button143';
import ShutterButton from './button144';
import GradientBorderButton from './button145';
import SpotlightButton from './button146';
import HolographicButton from './button147';
import PerspectiveTiltButton from './button148';
import MorphingButton from './button149';
import PixelButton from './button150';
import RetroWaveButton from './button151';
import MatrixButton from './button152';
import NeonScanButton from './button153';
import BubbleButton from './button154';
import GlowingRingButton from './button155';
import SmokeButton from './button156';
import LightningButton from './button157';
import CrystalButton from './button158';
import MagneticFieldButton from './button159';
import PlasmaButton from './button160';
import QuantumButton from './button161';
import CosmicButton from './button162';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: #1a1a1a;
  min-height: 100vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const ButtonLabel = styled.span`
  color: #888;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ButtonShowcase = () => {
  return (
    <Container>
      <Title>Interactive Buttons Collection (90-100)</Title>
      
      <Section>
        <ButtonGrid>
        
          <ButtonWrapper>
            <DiagonalSwipeButton>Swipe</DiagonalSwipeButton>
            <ButtonLabel>Button 122 - Diagonal Swipe</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <SlideUpButton>Slide Up</SlideUpButton>
            <ButtonLabel>Button 123 - Slide Up</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <SplitFillButton>Split</SplitFillButton>
            <ButtonLabel>Button 124 - Split Fill</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <CornerSlideButton>Corner</CornerSlideButton>
            <ButtonLabel>Button 125 - Corner Slide</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <BorderRotateButton>Rotate</BorderRotateButton>
            <ButtonLabel>Button 126 - Border Rotate</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <CircleExpandButton>Circle</CircleExpandButton>
            <ButtonLabel>Button 128 - Circle Expand</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <SliceSlideButton>Slice</SliceSlideButton>
            <ButtonLabel>Button 129 - Slice Slide</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <DoubleLayerButton>Double</DoubleLayerButton>
            <ButtonLabel>Button 130 - Double Layer</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <CrossRevealButton>Cross</CrossRevealButton>
            <ButtonLabel>Button 131 - Cross Reveal</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <MagneticPullButton>Magnetic</MagneticPullButton>
            <ButtonLabel>Button 132 - Magnetic Pull</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <InstagramButton />
            <ButtonLabel>Button 133 - Instagram</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <TwitterButton />
            <ButtonLabel>Button 134 - Twitter</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <LinkedInButton />
            <ButtonLabel>Button 135 - LinkedIn</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <GitHubButton />
            <ButtonLabel>Button 136 - GitHub</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <YouTubeButton />
            <ButtonLabel>Button 137 - YouTube</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <NeonPulseButton />
            <ButtonLabel>Button 138 - Neon Pulse</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <LiquidFillButton />
            <ButtonLabel>Button 139 - Liquid Fill</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <FlipButton />
            <ButtonLabel>Button 140 - 3D Flip</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <GlitchButton />
            <ButtonLabel>Button 141 - Glitch Effect</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <ParticleButton />
            <ButtonLabel>Button 142 - Particle Burst</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <RippleButton />
            <ButtonLabel>Button 143 - Ripple Effect</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <ShutterButton />
            <ButtonLabel>Button 144 - Shutter</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <GradientBorderButton />
            <ButtonLabel>Button 145 - Gradient Border</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <SpotlightButton />
            <ButtonLabel>Button 146 - Spotlight</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <HolographicButton />
            <ButtonLabel>Button 147 - Holographic</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <PerspectiveTiltButton />
            <ButtonLabel>Button 148 - Perspective Tilt</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <MorphingButton />
            <ButtonLabel>Button 149 - Morphing</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <PixelButton />
            <ButtonLabel>Button 150 - Pixel Effect</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <RetroWaveButton />
            <ButtonLabel>Button 151 - Retro Wave</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <MatrixButton />
            <ButtonLabel>Button 152 - Matrix Rain</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <NeonScanButton />
            <ButtonLabel>Button 153 - Neon Scan</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <BubbleButton />
            <ButtonLabel>Button 154 - Bubble Pop</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <GlowingRingButton />
            <ButtonLabel>Button 155 - Glowing Ring</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <SmokeButton />
            <ButtonLabel>Button 156 - Smoke Effect</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <LightningButton />
            <ButtonLabel>Button 157 - Lightning</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <CrystalButton />
            <ButtonLabel>Button 158 - Crystal</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <MagneticFieldButton />
            <ButtonLabel>Button 159 - Magnetic Field</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <PlasmaButton />
            <ButtonLabel>Button 160 - Plasma</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <QuantumButton />
            <ButtonLabel>Button 161 - Quantum</ButtonLabel>
          </ButtonWrapper>

          <ButtonWrapper>
            <CosmicButton />
            <ButtonLabel>Button 162 - Cosmic</ButtonLabel>
          </ButtonWrapper>

        </ButtonGrid>
      </Section>
    </Container>
  );
};

export default ButtonShowcase;
