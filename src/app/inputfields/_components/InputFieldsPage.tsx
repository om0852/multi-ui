"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMail, FiLock, FiUser, FiSearch, FiKey } from 'react-icons/fi';
import MinimalistInput from './InputField_27';
import NeonBorderInput from './InputField_28';
import PaperInput from './InputField_29';
import CyberpunkInput from './InputField_30';
import MorphicInput from './InputField_31';
import InkInput from './InputField_32';
import HolographicInput from './InputField_33';
import PixelInput from './InputField_34';
import CosmicInput from './InputField_35';
import OrigamiInput from './InputField_36';
import GlassmorphicInput from './InputField_37';
import GradientBorderInput from './InputField_38';
import TypewriterInput from './InputField_39';
import FloatingLabelInput from './InputField_40';
import NeumorphicInput from './InputField_41';

const PageContainer = styled.div`
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div<{ $background?: string }>`
  padding: 2rem;
  border-radius: 12px;
  background: ${props => props.$background || '#ffffff'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2<{ $color?: string }>`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.$color || '#000000'};
  text-align: center;
`;

const InputFieldsPage: React.FC = () => {
  const [minimalist, setMinimalist] = useState('');
  const [neonBorder, setNeonBorder] = useState('');
  const [paper, setPaper] = useState('');
  const [cyberpunk, setCyberpunk] = useState('');
  const [morphic, setMorphic] = useState('');
  const [ink, setInk] = useState('');
  const [holographic, setHolographic] = useState('');
  const [pixel, setPixel] = useState('');
  const [cosmic, setCosmic] = useState('');
  const [origami, setOrigami] = useState('');
  const [glassmorphic, setGlassmorphic] = useState('');
  const [gradientBorder, setGradientBorder] = useState('');
  const [typewriter, setTypewriter] = useState('');
  const [floatingLabel, setFloatingLabel] = useState('');
  const [neumorphic, setNeumorphic] = useState('');

  return (
    <PageContainer>
      <Grid>
        <Section>
          <Title>Minimalist Style</Title>
          <MinimalistInput
            label="Email"
            placeholder="Enter your email"
            icon={<FiMail />}
            value={minimalist}
            onChange={setMinimalist}
          />
        </Section>

        <Section $background="#1a1a1a">
          <Title $color="#00ffff">Neon Border Style</Title>
          <NeonBorderInput
            label="Password"
            placeholder="Enter password"
            type="password"
            icon={<FiLock />}
            value={neonBorder}
            onChange={setNeonBorder}
          />
        </Section>

        <Section $background="#f8f8f8">
          <Title>Paper Style</Title>
          <PaperInput
            label="Username"
            placeholder="Enter username"
            icon={<FiUser />}
            value={paper}
            onChange={setPaper}
          />
        </Section>

        <Section $background="#0a0a16">
          <Title $color="#00ffff">Cyberpunk Style</Title>
          <CyberpunkInput
            label="Search"
            placeholder="Enter search term"
            icon={<FiSearch />}
            value={cyberpunk}
            onChange={setCyberpunk}
          />
        </Section>

        <Section $background="linear-gradient(135deg, #ff6b6b, #4ecdc4)">
          <Title $color="#ffffff">Morphic Style</Title>
          <MorphicInput
            label="API Key"
            placeholder="Enter API key"
            icon={<FiKey />}
            value={morphic}
            onChange={setMorphic}
          />
        </Section>

        <Section $background="#ffffff">
          <Title>Ink Style</Title>
          <InkInput
            label="Name"
            placeholder="Enter your name"
            icon={<FiUser />}
            value={ink}
            onChange={setInk}
          />
        </Section>

        <Section $background="#000000">
          <Title $color="#ffffff">Holographic Style</Title>
          <HolographicInput
            label="Code"
            placeholder="Enter code"
            icon={<FiKey />}
            value={holographic}
            onChange={setHolographic}
          />
        </Section>

        <Section $background="#2d2d2d">
          <Title $color="#33ff33">Pixel Style</Title>
          <PixelInput
            label="Username"
            placeholder="Enter username"
            icon={<FiUser />}
            value={pixel}
            onChange={setPixel}
          />
        </Section>

        <Section $background="#0a0a1a">
          <Title $color="#ffffff">Cosmic Style</Title>
          <CosmicInput
            label="Email"
            placeholder="Enter your email"
            icon={<FiMail />}
            value={cosmic}
            onChange={setCosmic}
          />
        </Section>

        <Section $background="#f5f5f5">
          <Title>Origami Style</Title>
          <OrigamiInput
            label="Message"
            placeholder="Enter your message"
            icon={<FiMail />}
            value={origami}
            onChange={setOrigami}
          />
        </Section>

        <Section $background="#1a1a2e">
          <Title $color="#ffffff">Glassmorphic Style</Title>
          <GlassmorphicInput
            label="Email"
            placeholder="Enter your email"
            icon={<FiMail />}
            value={glassmorphic}
            onChange={setGlassmorphic}
          />
        </Section>

        <Section $background="#ffffff">
          <Title>Gradient Border Style</Title>
          <GradientBorderInput
            label="Password"
            placeholder="Enter password"
            type="password"
            icon={<FiLock />}
            value={gradientBorder}
            onChange={setGradientBorder}
          />
        </Section>

        <Section $background="#f8f9fa">
          <Title>Typewriter Style</Title>
          <TypewriterInput
            label="Message"
            placeholder="Type your message"
            icon={<FiMail />}
            value={typewriter}
            onChange={setTypewriter}
          />
        </Section>

        <Section $background="#ffffff">
          <Title>Floating Label Style</Title>
          <FloatingLabelInput
            label="Username"
            placeholder="Enter username"
            icon={<FiUser />}
            value={floatingLabel}
            onChange={setFloatingLabel}
          />
        </Section>

        <Section $background="#e0e5ec">
          <Title>Neumorphic Style</Title>
          <NeumorphicInput
            label="Search"
            placeholder="Search..."
            icon={<FiSearch />}
            value={neumorphic}
            onChange={setNeumorphic}
          />
        </Section>
      </Grid>
    </PageContainer>
  );
};

export default InputFieldsPage; 