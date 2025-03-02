"use client"

import React, { useState } from 'react';
import styled from 'styled-components';
import Clipboard_6 from './_components/Clipboard_6';
import Clipboard_7 from './_components/Clipboard_7';
import Clipboard_8 from './_components/Clipboard_8';
import Clipboard_9 from './_components/Clipboard_9';
import Clipboard_10 from './_components/Clipboard_10';
import Clipboard_11 from './_components/Clipboard_11';
import Clipboard_12 from './_components/Clipboard_12';
import Clipboard_13 from './_components/Clipboard_13';
import Clipboard_14 from './_components/Clipboard_14';
import Clipboard_15 from './_components/Clipboard_15';
import Clipboard_16 from './_components/Clipboard_21';
import Clipboard_17 from './_components/Clipboard_22';
import Clipboard_18 from './_components/Clipboard_23';
import Clipboard_19 from './_components/Clipboard_24';
import Clipboard_20 from './_components/Clipboard_25';
import Clipboard_26 from './_components/Clipboard_26';
import Clipboard_27 from './_components/Clipboard_27';
import Clipboard_28 from './_components/Clipboard_28';
import Clipboard_29 from './_components/Clipboard_29';
import Clipboard_30 from './_components/Clipboard_30';
import Clipboard_36 from './_components/Clipboard_36';
import Clipboard_37 from './_components/Clipboard_37';
import Clipboard_38 from './_components/Clipboard_38';
import Clipboard_39 from './_components/Clipboard_39';
import Clipboard_40 from './_components/Clipboard_40';
import Clipboard_45 from './_components/Clipboard_45';
import Clipboard_46 from './_components/Clipboard_46';
import Clipboard_47 from './_components/Clipboard_47';
import Clipboard_48 from './_components/Clipboard_48';
import Clipboard_49 from './_components/Clipboard_49';
import Clipboard_50 from './_components/Clipboard_50';
import Clipboard_51 from './_components/Clipboard_51';
import Clipboard_52 from './_components/Clipboard_52';
import Clipboard_53 from './_components/Clipboard_53';
import Clipboard_54 from './_components/Clipboard_54';
import Clipboard_55 from './_components/Clipboard_55';
import Clipboard_56 from './_components/Clipboard_56';
import Clipboard_57 from './_components/Clipboard_57';
import Clipboard_58 from './_components/Clipboard_58';
import Clipboard_59 from './_components/Clipboard_59';
import Clipboard_60 from './_components/Clipboard_60';
import Clipboard_61 from './_components/Clipboard_61';
import Clipboard_62 from './_components/Clipboard_62';
import Clipboard_63 from './_components/Clipboard_63';
import Clipboard_64 from './_components/Clipboard_64';
import Clipboard_65 from './_components/Clipboard_65';
import Clipboard_66 from './_components/Clipboard_66';
import Clipboard_67 from './_components/Clipboard_67';
import Clipboard_68 from './_components/Clipboard_68';
import Clipboard_69 from './_components/Clipboard_69';
import Clipboard_70 from './_components/Clipboard_70';
import Clipboard_71 from './_components/Clipboard_71';
import Clipboard_72 from './_components/Clipboard_72';
import Clipboard_73 from './_components/Clipboard_73';
import Clipboard_74 from './_components/Clipboard_86';
import Clipboard_75 from './_components/Clipboard_87';
import Clipboard_76 from './_components/Clipboard_88';
import Clipboard_77 from './_components/Clipboard_89';
import Clipboard_78 from './_components/Clipboard_90';
import Clipboard_79 from './_components/Clipboard_91';
import Clipboard_80 from './_components/Clipboard_92';
import Clipboard_81 from './_components/Clipboard_93';
import Clipboard_82 from './_components/Clipboard_94';
import Clipboard_83 from './_components/Clipboard_95';
import Clipboard_84 from './_components/Clipboard_96';
import Clipboard_85 from './_components/Clipboard_97';

const ClipboardPage = () => {
  const [notification, setNotification] = useState('');

  const handleCopy = (text: string) => {
    setNotification(`Copied: ${text}`);
    setTimeout(() => setNotification(''), 2000);
  };

  return (
    <StyledWrapper>
      <h1>Clipboard Examples</h1>
      {notification && <div className="notification">{notification}</div>}
      <div className="clipboard-grid">
        <div className="clipboard-item">
          <h2>Neon Theme</h2>
          <Clipboard_6 
            text="Click to copy this neon text!" 
            onCopy={() => handleCopy("Click to copy this neon text!")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Holographic Theme</h2>
          <Clipboard_7 
            text="Holographic data ready to copy" 
            onCopy={() => handleCopy("Holographic data ready to copy")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Crystal Theme</h2>
          <Clipboard_8 
            text="Crystal clear copying experience" 
            onCopy={() => handleCopy("Crystal clear copying experience")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Plasma Theme</h2>
          <Clipboard_9 
            text="Energetic plasma clipboard here!" 
            onCopy={() => handleCopy("Energetic plasma clipboard here!")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Matrix Theme</h2>
          <Clipboard_10 
            text="Enter the Matrix clipboard" 
            onCopy={() => handleCopy("Enter the Matrix clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Cyberpunk Theme</h2>
          <Clipboard_11 
            text="High-tech cyberpunk clipboard" 
            onCopy={() => handleCopy("High-tech cyberpunk clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Retrowave Theme</h2>
          <Clipboard_12 
            text="Retro vibes clipboard" 
            onCopy={() => handleCopy("Retro vibes clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Quantum Theme</h2>
          <Clipboard_13 
            text="Quantum state clipboard" 
            onCopy={() => handleCopy("Quantum state clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Cosmic Theme</h2>
          <Clipboard_14 
            text="Cosmic nebula clipboard" 
            onCopy={() => handleCopy("Cosmic nebula clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Bio-organic Theme</h2>
          <Clipboard_15 
            text="Living cell clipboard" 
            onCopy={() => handleCopy("Living cell clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Minimal Theme</h2>
          <Clipboard_16 
            text="Simple minimal clipboard" 
            onCopy={() => handleCopy("Simple minimal clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Outline Theme</h2>
          <Clipboard_17 
            text="Gradient outline clipboard" 
            onCopy={() => handleCopy("Gradient outline clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Pill Theme</h2>
          <Clipboard_18 
            text="Rounded pill clipboard" 
            onCopy={() => handleCopy("Rounded pill clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Glass Theme</h2>
          <Clipboard_19 
            text="Frosted glass clipboard" 
            onCopy={() => handleCopy("Frosted glass clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Dark Theme</h2>
          <Clipboard_20 
            text="Dark mode clipboard" 
            onCopy={() => handleCopy("Dark mode clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Animated Border Theme</h2>
          <Clipboard_26 
            text="Animated border clipboard" 
            onCopy={() => handleCopy("Animated border clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Minimalist Outline Theme</h2>
          <Clipboard_27 
            text="Minimalist outline clipboard" 
            onCopy={() => handleCopy("Minimalist outline clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Floating Card Theme</h2>
          <Clipboard_28 
            text="Floating card clipboard" 
            onCopy={() => handleCopy("Floating card clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Neon Glow Theme</h2>
          <Clipboard_29 
            text="Neon glow clipboard" 
            onCopy={() => handleCopy("Neon glow clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Geometric Theme</h2>
          <Clipboard_30 
            text="Geometric pattern clipboard" 
            onCopy={() => handleCopy("Geometric pattern clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>3D Flip Theme</h2>
          <Clipboard_36 
            text="3D flip clipboard" 
            onCopy={() => handleCopy("3D flip clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Wave Theme</h2>
          <Clipboard_37 
            text="Wave effect clipboard" 
            onCopy={() => handleCopy("Wave effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Spotlight Theme</h2>
          <Clipboard_38 
            text="Spotlight effect clipboard" 
            onCopy={() => handleCopy("Spotlight effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Particle Theme</h2>
          <Clipboard_39 
            text="Particle effect clipboard" 
            onCopy={() => handleCopy("Particle effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Gradient Pulse Theme</h2>
          <Clipboard_40 
            text="Gradient pulse clipboard" 
            onCopy={() => handleCopy("Gradient pulse clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h3>Shattered Glass Theme</h3>
          <Clipboard_45 text="Click to copy this text" onCopy={() => handleCopy("Shattered glass clipboard")} />
        </div>

        <div className="clipboard-item">
          <h2>Neon Pulse Theme</h2>
          <Clipboard_46 
            text="Neon pulse clipboard" 
            onCopy={() => handleCopy("Neon pulse clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Glitch Theme</h2>
          <Clipboard_47 
            text="Glitch effect clipboard" 
            onCopy={() => handleCopy("Glitch effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Hologram Theme</h2>
          <Clipboard_48 
            text="Hologram effect clipboard" 
            onCopy={() => handleCopy("Hologram effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Magnetic Theme</h2>
          <Clipboard_49 
            text="Magnetic effect clipboard" 
            onCopy={() => handleCopy("Magnetic effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h2>Portal Theme</h2>
          <Clipboard_50 
            text="Portal effect clipboard" 
            onCopy={() => handleCopy("Portal effect clipboard")} 
          />
        </div>

        <div className="clipboard-item">
          <h3>Terminal Theme</h3>
          <Clipboard_51 text="Terminal effect clipboard" onCopy={() => handleCopy("Terminal effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Glitch Theme</h3>
          <Clipboard_52 text="Glitch effect clipboard" onCopy={() => handleCopy("Glitch effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Hologram Theme</h3>
          <Clipboard_53 text="Hologram effect clipboard" onCopy={() => handleCopy("Hologram effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Magnetic Theme</h3>
          <Clipboard_54 text="Magnetic effect clipboard" onCopy={() => handleCopy("Magnetic effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Portal Theme</h3>
          <Clipboard_55 text="Portal effect clipboard" onCopy={() => handleCopy("Portal effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Liquid Theme</h3>
          <Clipboard_56 text="Liquid effect clipboard" onCopy={() => handleCopy("Liquid effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Circuit Theme</h3>
          <Clipboard_57 text="Circuit effect clipboard" onCopy={() => handleCopy("Circuit effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Cosmic Theme</h3>
          <Clipboard_58 text="Cosmic effect clipboard" onCopy={() => handleCopy("Cosmic effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Fire Theme</h3>
          <Clipboard_59 text="Fire effect clipboard" onCopy={() => handleCopy("Fire effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Crystal Theme</h3>
          <Clipboard_60 text="Crystal effect clipboard" onCopy={() => handleCopy("Crystal effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Ring Theme</h3>
          <Clipboard_61 text="Neon ring effect clipboard" onCopy={() => handleCopy("Neon ring effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Rainbow Theme</h3>
          <Clipboard_62 text="Rainbow effect clipboard" onCopy={() => handleCopy("Rainbow effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Pixel Theme</h3>
          <Clipboard_63 text="Pixel effect clipboard" onCopy={() => handleCopy("Pixel effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Smoke Theme</h3>
          <Clipboard_64 text="Smoke effect clipboard" onCopy={() => handleCopy("Smoke effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Matrix Rain Theme</h3>
          <Clipboard_65 text="Matrix rain effect clipboard" onCopy={() => handleCopy("Matrix rain effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Cyberpunk Theme</h3>
          <Clipboard_66 text="Cyberpunk effect clipboard" onCopy={() => handleCopy("Cyberpunk effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Pulse Wave Theme</h3>
          <Clipboard_67 text="Pulse wave effect clipboard" onCopy={() => handleCopy("Pulse wave effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Origami Theme</h3>
          <Clipboard_68 text="Origami effect clipboard" onCopy={() => handleCopy("Origami effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Constellation Theme</h3>
          <Clipboard_69 text="Constellation effect clipboard" onCopy={() => handleCopy("Constellation effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Hexagon Theme</h3>
          <Clipboard_70 text="Neon hexagon effect clipboard" onCopy={() => handleCopy("Neon hexagon effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Tunnel Theme</h3>
          <Clipboard_71 text="Neon tunnel effect clipboard" onCopy={() => console.log('Copied Neon Tunnel')} />
        </div>

        <div className="clipboard-item">
          <h3>Digital Rain Theme</h3>
          <Clipboard_72 text="Digital rain effect clipboard" onCopy={() => console.log('Copied Digital Rain')} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Grid Theme</h3>
          <Clipboard_73 text="Neon grid effect clipboard" onCopy={() => console.log('Copied Neon Grid')} />
        </div>

        <div className="clipboard-item">
          <h3>Plasma Energy Theme</h3>
          <Clipboard_74 text="Plasma energy effect clipboard" onCopy={() => console.log('Copied Plasma Energy')} />
        </div>

        <div className="clipboard-item">
          <h3>Quantum Field Theme</h3>
          <Clipboard_75 text="Quantum field effect clipboard" onCopy={() => console.log('Copied Quantum Field')} />
        </div>

        <div className="clipboard-item">
          <h3>DNA Helix Theme</h3>
          <Clipboard_76 text="DNA helix effect clipboard" onCopy={() => handleCopy("DNA helix effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Fractal Theme</h3>
          <Clipboard_77 text="Fractal effect clipboard" onCopy={() => handleCopy("Fractal effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Voronoi Theme</h3>
          <Clipboard_78 text="Voronoi effect clipboard" onCopy={() => handleCopy("Voronoi effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neural Network Theme</h3>
          <Clipboard_79 text="Neural network effect clipboard" onCopy={() => handleCopy("Neural network effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Kaleidoscope Theme</h3>
          <Clipboard_80 text="Kaleidoscope effect clipboard" onCopy={() => handleCopy("Kaleidoscope effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Ripple Theme</h3>
          <Clipboard_81 text="Neon ripple effect clipboard" onCopy={() => handleCopy("Neon ripple effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Prism Theme</h3>
          <Clipboard_82 text="Neon prism effect clipboard" onCopy={() => handleCopy("Neon prism effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Vortex Theme</h3>
          <Clipboard_83 text="Neon vortex effect clipboard" onCopy={() => handleCopy("Neon vortex effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Cube Theme</h3>
          <Clipboard_84 text="Neon cube effect clipboard" onCopy={() => handleCopy("Neon cube effect clipboard")} />
        </div>

        <div className="clipboard-item">
          <h3>Neon Infinity Theme</h3>
          <Clipboard_85 text="Neon infinity effect clipboard" onCopy={() => handleCopy("Neon infinity effect clipboard")} />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: #1a1a1a;
  color: #ffffff;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .clipboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .clipboard-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      font-size: 1.5rem;
      margin: 0;
      text-align: center;
      color: #ffffff;
      opacity: 0.9;
    }
  }

  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 255, 0, 0.2);
    color: #00ff00;
    padding: 1rem 2rem;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default ClipboardPage;
