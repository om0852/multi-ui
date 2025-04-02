'use client';
import React from 'react';
import Collapsible_1 from './tsx/Collapsible_1';
import Collapsible_2 from './tsx/Collapsible_2';
import Collapsible_3 from './tsx/Collapsible_3';
import Collapsible_4 from './tsx/Collapsible_4';
import Collapsible_5 from './tsx/Collapsible_5';
import Collapsible_6 from './tsx/Collapsible_6';
import Collapsible_7 from './tsx/Collapsible_7';
import Collapsible_8 from './tsx/Collapsible_8';
import Collapsible_9 from './tsx/Collapsible_9';
import Collapsible_10 from './tsx/Collapsible_10';
import Collapsible_11 from './tsx/Collapsible_11';
import Collapsible_12 from './tsx/Collapsible_12';
import Collapsible_13 from './tsx/Collapsible_13';
import Collapsible_14 from './tsx/Collapsible_14';
import Collapsible_15 from './tsx/Collapsible_15';
import Collapsible_16 from './tsx/Collapsible_16';
import Collapsible_17 from './tsx/Collapsible_17';
import Collapsible_18 from './tsx/Collapsible_18';

const CollapsiblePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1f3d 100%)',
      padding: '2rem',
    }}>
      <h1 style={{
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: 600,
      }}>
        Collapsible Components Showcase
      </h1>

      {/* Modern Clean Design */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          1. Modern Clean Design
        </h2>
        <Collapsible_1 title="What is this component?">
          <p>This is a modern, clean collapsible component with smooth slide animations and a gradient accent border.</p>
        </Collapsible_1>
      </div>

      {/* Neumorphic Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          2. Neumorphic Design
        </h2>
        <Collapsible_2 title="What is Neumorphism?" accentColor="#9333ea">
          <p>Neumorphic design combines soft shadows and highlights to create a modern, tactile interface.</p>
        </Collapsible_2>
      </div>

      {/* Glassmorphism Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          3. Glassmorphism Design
        </h2>
        <Collapsible_3 title="What is Glassmorphism?">
          <p>Glassmorphism creates a frosted glass effect with transparency and blur.</p>
        </Collapsible_3>
      </div>

      {/* Terminal Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          4. Terminal Design
        </h2>
        <Collapsible_4 title="Terminal Style">
          <p>A retro terminal-inspired design with typing animations and scanline effects.</p>
        </Collapsible_4>
      </div>

      {/* Material Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          5. Material Design
        </h2>
        <Collapsible_5 title="Material Style" color="#ec4899">
          <p>Material design with ripple effects and elevation animations.</p>
        </Collapsible_5>
      </div>

      {/* 3D Flip Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          6. 3D Flip Design
        </h2>
        <Collapsible_6 title="3D Animation">
          <p>Features smooth 3D flip animations and perspective transforms.</p>
        </Collapsible_6>
      </div>

      {/* Minimalist Accordion */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          7. Minimalist Accordion
        </h2>
        <Collapsible_7 title="Clean Minimalism">
          <p>A minimalist accordion design with subtle animations and clean typography.</p>
        </Collapsible_7>
      </div>

      {/* Brutalist Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          8. Brutalist Design
        </h2>
        <Collapsible_8 title="RETRO BRUTALISM">
          <p>A bold brutalist design with glitch effects and retro aesthetics.</p>
        </Collapsible_8>
      </div>

      {/* Cyberpunk Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          9. Cyberpunk Design
        </h2>
        <Collapsible_9 title="CYBER-INTERFACE">
          <p>A cyberpunk-themed design with neon effects and data stream animations.</p>
        </Collapsible_9>
      </div>

      {/* Origami Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          10. Origami Design
        </h2>
        <Collapsible_10 title="Paper Fold">
          <p>An origami-inspired design with paper fold animations and textures.</p>
        </Collapsible_10>
      </div>

      {/* Retro Gaming Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          11. Retro Gaming Design
        </h2>
        <Collapsible_11 title="8-BIT MENU">
          <p>A retro gaming inspired design with pixel art and scanline effects.</p>
        </Collapsible_11>
      </div>

      {/* Steampunk Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          12. Steampunk Design
        </h2>
        <Collapsible_12 title="Mechanical Interface">
          <p>A steampunk-themed design with gear animations and metallic textures.</p>
        </Collapsible_12>
      </div>

      {/* Hologram Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          13. Hologram Design
        </h2>
        <Collapsible_13 title="HOLO-PANEL">
          <p>A futuristic hologram interface with glowing effects and scan lines.</p>
        </Collapsible_13>
      </div>

      {/* Vintage Newspaper Design */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          14. Vintage Newspaper Design
        </h2>
        <Collapsible_14 title="BREAKING NEWS">
          <p>A vintage newspaper-inspired design with aged paper effects and classic typography.</p>
        </Collapsible_14>
      </div>

      {/* Space Theme */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          15. Space Theme
        </h2>
        <Collapsible_15 title="STELLAR INTERFACE">
          <p>A sci-fi space-themed design with star field and nebula effects.</p>
        </Collapsible_15>
      </div>

      {/* Spellbook Theme */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          16. Spellbook Theme
        </h2>
        <Collapsible_16 title="Ancient Tome">
          <p>A magical spellbook design with mystical runes and glowing effects.</p>
        </Collapsible_16>
      </div>

      {/* Cassette Tape Theme */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          17. Cassette Tape Theme
        </h2>
        <Collapsible_17 title="MIXTAPE 90s">
          <p>A retro cassette tape design with spinning reels and tape movement effects.</p>
        </Collapsible_17>
      </div>

      {/* Polaroid Theme */}
      <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{
          color: '#ffffff',
          marginBottom: '1rem',
          fontSize: '1.5rem',
          opacity: 0.9,
        }}>
          18. Polaroid Theme
        </h2>
        <Collapsible_18 title="Instant Memory">
          <p>A vintage Polaroid-inspired design with developing photo effects and film grain texture.</p>
        </Collapsible_18>
      </div>
    </div>
  );
};

export default CollapsiblePage;
