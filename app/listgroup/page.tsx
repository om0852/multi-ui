"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import ListGroup from './_components/ListGroup_6';
import GlassmorphicListGroup from './_components/ListGroup_7';
import NeumorphicListGroup from './_components/ListGroup_8';
import GradientListGroup from './_components/ListGroup_9';
import CyberpunkListGroup from './_components/ListGroup_10';
import MinimalListGroup from './_components/ListGroup_11';
import MagneticListGroup from './_components/ListGroup_12';
import RetroListGroup from './_components/ListGroup_13';
import NatureListGroup from './_components/ListGroup_14';
import SteampunkListGroup from './_components/ListGroup_15';
import HolographicListGroup from './_components/ListGroup_16';
import NeonListGroup from './_components/ListGroup_17';
import PaperListGroup from './_components/ListGroup_18';
import CosmicListGroup from './_components/ListGroup_19';
import AquaListGroup from './_components/ListGroup_20';
import OrigamiListGroup from './_components/ListGroup_21';
import JungleListGroup from './_components/ListGroup_25';
import ZenListGroup from './_components/ListGroup_26';
import CandyListGroup from './_components/ListGroup_27';
import NordicListGroup from './_components/ListGroup_28';
import VintageListGroup from './_components/ListGroup_29';
import SciFiListGroup from './_components/ListGroup_30';
import MedievalListGroup from './_components/ListGroup_31';
import TropicalListGroup from './_components/ListGroup_32';
import GeometricListGroup from './_components/ListGroup_33';
import BotanicalListGroup from './_components/ListGroup_34';
import CrystallineListGroup from './_components/ListGroup_35';
import CelestialListGroup from './_components/ListGroup_36';
import IndustrialListGroup from './_components/ListGroup_37';
import ArtDecoListGroup from './_components/ListGroup_38';
import PixelListGroup from './_components/ListGroup_39';
import NoireListGroup from './_components/ListGroup_40';
import EtherealListGroup from './_components/ListGroup_41';
import { 
  FiHome, 
  FiSettings, 
  FiMail, 
  FiUser, 
  FiStar,
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiPackage,
  FiShield,
  FiCode,
  FiGlobe,
  FiLayers,
  FiZap,
  FiTerminal
} from 'react-icons/fi';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: #f9fafb;
  min-height: 100vh;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #1f2937;
  margin: 0;
  font-weight: 600;
`;

const Description = styled.p`
  color: #6b7280;
  margin: 0;
  font-size: 0.875rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const Card = styled.div<{ $theme?: string }>`
  padding: 1.5rem;
  border-radius: 16px;
  background: ${props => {
    switch (props.$theme) {
      case 'glass': return 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)';
      case 'neumorphic': return '#e0e5ec';
      case 'gradient': return 'linear-gradient(135deg, #1a1a1a 0%, #2d3436 100%)';
      case 'cyberpunk': return '#1a1a1a';
      case 'minimal': return '#ffffff';
      case 'retro': return '#000000';
      case 'nature': return '#f0f7f4';
      case 'steampunk': return '#2c2420';
      case 'holographic': return 'linear-gradient(135deg, #111 0%, #222 100%)';
      case 'neon': return '#0a0a0a';
      case 'paper': return '#f5e6d3';
      case 'cosmic': return '#0f0f1e';
      case 'aqua': return '#081b29';
      case 'origami': return '#ffffff';
      case 'zen': return '#ffffff';
      case 'candy': return '#ffd1dc';
      case 'nordic': return '#e6f3ff';
      case 'vintage': return '#f0f0f0';
      case 'scifi': return '#000000';
      case 'medieval': return '#ffd700';
      case 'tropical': return 'linear-gradient(135deg, #ffd700 0%, #ffa500 100%)';
      case 'geometric': return 'linear-gradient(135deg, #ffa500 0%, #ff6347 100%)';
      case 'botanical': return 'linear-gradient(135deg, #ff6347 0%, #ff4500 100%)';
      case 'crystalline': return 'linear-gradient(135deg, #ff4500 0%, #ff0000 100%)';
      case 'celestial': return 'linear-gradient(135deg, #ff0000 0%, #ff00ff 100%)';
      case 'industrial': return '#2c3137';
      case 'artdeco': return '#2c2c34';
      case 'pixel': return '#000000';
      case 'noire': return '#111111';
      case 'ethereal': return 'rgba(255, 255, 255, 0.1)';
      default: return '#ffffff';
    }
  }};
  box-shadow: ${props => {
    switch (props.$theme) {
      case 'glass': return '0 8px 32px rgba(0, 0, 0, 0.3)';
      case 'neumorphic': return '20px 20px 60px #bec3c9, -20px -20px 60px #ffffff';
      case 'gradient': return '0 20px 40px rgba(0, 0, 0, 0.2)';
      case 'cyberpunk': return '0 0 20px rgba(0, 255, 255, 0.2)';
      case 'minimal': return '0 1px 3px rgba(0, 0, 0, 0.1)';
      case 'retro': return '0 0 10px rgba(51, 255, 51, 0.3)';
      case 'nature': return '0 10px 30px rgba(0, 100, 0, 0.1)';
      case 'steampunk': return '0 10px 30px rgba(205, 155, 29, 0.2)';
      case 'holographic': return '0 0 30px rgba(255, 0, 255, 0.2)';
      case 'neon': return '0 0 30px rgba(255, 0, 255, 0.2)';
      case 'paper': return '0 10px 30px rgba(139, 69, 19, 0.1)';
      case 'cosmic': return '0 0 40px rgba(88, 88, 255, 0.2)';
      case 'aqua': return '0 10px 40px rgba(0, 255, 255, 0.1)';
      case 'origami': return '0 10px 30px rgba(0, 0, 0, 0.05)';
      case 'zen': return '0 10px 30px rgba(0, 0, 0, 0.05)';
      case 'candy': return '0 10px 30px rgba(255, 219, 220, 0.1)';
      case 'nordic': return '0 10px 30px rgba(222, 235, 255, 0.1)';
      case 'vintage': return '0 10px 30px rgba(240, 240, 240, 0.1)';
      case 'scifi': return '0 10px 30px rgba(0, 0, 0, 0.1)';
      case 'medieval': return '0 10px 30px rgba(255, 215, 0, 0.1)';
      case 'tropical': return '0 10px 30px rgba(255, 215, 0, 0.1)';
      case 'geometric': return '0 10px 30px rgba(0, 0, 0, 0.1)';
      case 'botanical': return '0 10px 30px rgba(0, 0, 0, 0.1)';
      case 'crystalline': return '0 10px 30px rgba(0, 0, 0, 0.1)';
      case 'celestial': return '0 10px 30px rgba(0, 0, 0, 0.1)';
      case 'industrial': return '0 10px 30px rgba(0, 0, 0, 0.3)';
      case 'artdeco': return '0 10px 30px rgba(212, 175, 55, 0.2)';
      case 'pixel': return '0 10px 30px rgba(51, 255, 51, 0.2)';
      case 'noire': return '0 10px 30px rgba(0, 0, 0, 0.8)';
      case 'ethereal': return '0 10px 30px rgba(31, 38, 135, 0.15)';
      default: return '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
  }};
`;

const CardTitle = styled.h3<{ $theme?: string }>`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: ${props => {
    switch (props.$theme) {
      case 'glass':
      case 'gradient':
      case 'cyberpunk':
      case 'retro':
      case 'holographic':
      case 'neon':
      case 'cosmic':
      case 'aqua':
        return '#ffffff';
      case 'paper':
        return '#8b4513';
      case 'zen':
        return '#ffffff';
      case 'candy':
        return '#ff1493';
      case 'nordic':
        return '#0000ff';
      case 'vintage':
        return '#808080';
      case 'scifi':
        return '#ffffff';
      case 'medieval':
        return '#ffd700';
      case 'tropical':
        return '#ffd700';
      case 'geometric':
        return '#ff6347';
      case 'botanical':
        return '#ff6347';
      case 'crystalline':
        return '#ff4500';
      case 'celestial':
        return '#ff00ff';
      case 'industrial':
        return '#e0e0e0';
      case 'artdeco':
        return '#d4af37';
      case 'pixel':
        return '#33ff33';
      case 'noire':
        return '#ffffff';
      case 'ethereal':
        return '#ffffff';
      default:
        return '#1f2937';
    }
  }};
  font-family: ${props => {
    switch (props.$theme) {
      case 'cyberpunk':
        return 'Orbitron';
      case 'retro':
        return '"Press Start 2P"';
      case 'paper':
        return 'Crimson Text';
      case 'origami':
        return 'Noto Sans';
      case 'zen':
        return 'Noto Sans';
      case 'candy':
        return 'Candy';
      case 'nordic':
        return 'Arial';
      case 'vintage':
        return 'Times New Roman';
      case 'scifi':
        return 'Orbitron';
      case 'medieval':
        return 'Papyrus';
      case 'tropical':
        return 'Orbitron';
      case 'geometric':
        return 'Orbitron';
      case 'botanical':
        return 'Orbitron';
      case 'crystalline':
        return 'Orbitron';
      case 'celestial':
        return 'Orbitron';
      case 'industrial':
        return 'Orbitron';
      case 'artdeco':
        return 'Orbitron';
      case 'pixel':
        return 'Orbitron';
      case 'noire':
        return 'Orbitron';
      case 'ethereal':
        return 'Orbitron';
      default:
        return 'inherit';
    }
  }};
`;

const CardDescription = styled.p<{ $theme?: string }>`
  color: ${props => {
    switch (props.$theme) {
      case 'glass':
      case 'gradient':
      case 'cyberpunk':
      case 'retro':
      case 'holographic':
      case 'neon':
      case 'cosmic':
      case 'aqua':
        return 'rgba(255, 255, 255, 0.7)';
      case 'paper':
        return '#a67b5b';
      case 'zen':
        return '#ffffff';
      case 'candy':
        return '#ff69b4';
      case 'nordic':
        return '#0000ff';
      case 'vintage':
        return '#808080';
      case 'scifi':
        return '#ffffff';
      case 'medieval':
        return '#ffd700';
      case 'tropical':
        return '#ffd700';
      case 'geometric':
        return '#ff6347';
      case 'botanical':
        return '#ff6347';
      case 'crystalline':
        return '#ff4500';
      case 'celestial':
        return '#ff00ff';
      case 'industrial':
        return '#a0a0a0';
      case 'artdeco':
        return '#a08a3c';
      case 'pixel':
        return '#00cc00';
      case 'noire':
        return 'rgba(255, 255, 255, 0.7)';
      case 'ethereal':
        return 'rgba(255, 255, 255, 0.9)';
      default:
        return '#6b7280';
    }
  }};
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
  font-family: ${props => {
    switch (props.$theme) {
      case 'cyberpunk':
        return 'Share Tech Mono';
      case 'retro':
        return '"Press Start 2P"';
      case 'paper':
        return 'Crimson Text';
      case 'origami':
        return 'Noto Sans';
      case 'zen':
        return 'Noto Sans';
      case 'candy':
        return 'Candy';
      case 'nordic':
        return 'Arial';
      case 'vintage':
        return 'Times New Roman';
      case 'scifi':
        return 'Orbitron';
      case 'medieval':
        return 'Papyrus';
      case 'tropical':
        return 'Orbitron';
      case 'geometric':
        return 'Orbitron';
      case 'botanical':
        return 'Orbitron';
      case 'crystalline':
        return 'Orbitron';
      case 'celestial':
        return 'Orbitron';
      case 'industrial':
        return 'Orbitron';
      case 'artdeco':
        return 'Orbitron';
      case 'pixel':
        return 'Orbitron';
      case 'noire':
        return 'Orbitron';
      case 'ethereal':
        return 'Orbitron';
      default:
        return 'inherit';
    }
  }};
`;

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: string;
  disabled?: boolean;
}

const ListGroupExample: React.FC = () => {
  const [activeItems, setActiveItems] = useState({
    default: '1',
    glass: '1',
    neumorphic: '1',
    gradient: '1',
    cyberpunk: '1',
    minimal: '1',
    magnetic: '1',
    retro: '1',
    nature: '1',
    steampunk: '1',
    holographic: '1',
    neon: '1',
    paper: '1',
    cosmic: '1',
    aqua: '1',
    origami: '1',
    jungle: '1',
    zen: '1',
    candy: '1',
    nordic: '1',
    vintage: '1',
    scifi: '1',
    medieval: '1',
    tropical: '1',
    geometric: '1',
    botanical: '1',
    crystalline: '1',
    celestial: '1',
    industrial: '1',
    artdeco: '1',
    pixel: '1',
    noire: '1',
    ethereal: '1'
  });

  const defaultItems: ListItem[] = [
    { id: '1', title: 'Dashboard', icon: <FiHome />, description: 'View your dashboard' },
    { id: '2', title: 'Messages', icon: <FiMail />, badge: '5', badgeColor: '#6366f1' },
    { id: '3', title: 'Profile', icon: <FiUser /> },
    { id: '4', title: 'Settings', icon: <FiSettings />, disabled: true },
  ];

  const systemItems: ListItem[] = [
    {
      id: '1',
      title: 'System Status',
      description: 'All systems operational',
      icon: <FiCheckCircle />,
      badge: 'Stable',
      badgeColor: '#10b981',
    },
    {
      id: '2',
      title: 'Updates Available',
      description: '3 new updates ready',
      icon: <FiAlertCircle />,
      badge: 'Update',
      badgeColor: '#f59e0b',
    },
    {
      id: '3',
      title: 'Maintenance',
      description: 'Scheduled in 2 hours',
      icon: <FiClock />,
      badge: 'Soon',
      badgeColor: '#6366f1',
    },
  ];

  const devItems: ListItem[] = [
    {
      id: '1',
      title: 'API Status',
      icon: <FiCode />,
      description: 'All endpoints healthy',
      badge: 'Online',
      badgeColor: '#10b981',
    },
    {
      id: '2',
      title: 'Deployments',
      icon: <FiGlobe />,
      description: '2 pending deployments',
      badge: '2',
      badgeColor: '#f59e0b',
    },
    {
      id: '3',
      title: 'Services',
      icon: <FiLayers />,
      description: '15/15 services running',
    },
  ];

  const cyberpunkItems: ListItem[] = [
    {
      id: '1',
      title: 'Neural Link',
      icon: <FiZap />,
      description: 'Connection stable',
      badge: 'Active',
      badgeColor: '#0ff',
    },
    {
      id: '2',
      title: 'System Core',
      icon: <FiTerminal />,
      description: 'Processing at 92%',
      badge: '92%',
      badgeColor: '#f0f',
    },
    {
      id: '3',
      title: 'Security',
      icon: <FiShield />,
      description: 'Firewall engaged',
      badge: 'Secure',
      badgeColor: '#0f0',
    },
  ];

  return (
    <Container>
      <Section>
        <Title>ListGroup Components</Title>
        <Description>
          A collection of different ListGroup variants with unique themes and animations.
        </Description>
      </Section>

      <Grid>
        <Card>
          <CardTitle>Default Style</CardTitle>
          <CardDescription>Clean and modern design with smooth transitions</CardDescription>
          <ListGroup
            items={defaultItems}
            activeItem={activeItems.default}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, default: item.id })}
          />
        </Card>

        <Card $theme="glass">
          <CardTitle $theme="glass">Glassmorphic Style</CardTitle>
          <CardDescription $theme="glass">Frosted glass effect with blur and transparency</CardDescription>
          <GlassmorphicListGroup
            items={systemItems}
            activeItem={activeItems.glass}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, glass: item.id })}
          />
        </Card>

        <Card $theme="neumorphic">
          <CardTitle $theme="neumorphic">Neumorphic Style</CardTitle>
          <CardDescription $theme="neumorphic">Soft UI with pressed effects</CardDescription>
          <NeumorphicListGroup
            items={defaultItems}
            activeItem={activeItems.neumorphic}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, neumorphic: item.id })}
          />
        </Card>

        <Card $theme="gradient">
          <CardTitle $theme="gradient">Gradient Style</CardTitle>
          <CardDescription $theme="gradient">Beautiful gradients with floating animations</CardDescription>
          <GradientListGroup
            items={devItems}
            activeItem={activeItems.gradient}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, gradient: item.id })}
          />
        </Card>

        <Card $theme="cyberpunk">
          <CardTitle $theme="cyberpunk">Cyberpunk Style</CardTitle>
          <CardDescription $theme="cyberpunk">Futuristic design with glitch effects</CardDescription>
          <CyberpunkListGroup
            items={cyberpunkItems}
            activeItem={activeItems.cyberpunk}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, cyberpunk: item.id })}
          />
        </Card>

        <Card $theme="minimal">
          <CardTitle $theme="minimal">Minimal Style</CardTitle>
          <CardDescription $theme="minimal">Clean and subtle with minimal animations</CardDescription>
          <MinimalListGroup
            items={defaultItems}
            activeItem={activeItems.minimal}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, minimal: item.id })}
          />
        </Card>

        <Card>
          <CardTitle>Magnetic Style</CardTitle>
          <CardDescription>Magnetic effect with floating animations</CardDescription>
          <MagneticListGroup
            items={defaultItems}
            activeItem={activeItems.magnetic}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, magnetic: item.id })}
          />
        </Card>

        <Card $theme="retro">
          <CardTitle $theme="retro">Retro Style</CardTitle>
          <CardDescription $theme="retro">8-bit retro gaming aesthetic with pixel art effects</CardDescription>
          <RetroListGroup
            items={defaultItems}
            activeItem={activeItems.retro}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, retro: item.id })}
          />
        </Card>

        <Card $theme="nature">
          <CardTitle $theme="nature">Nature Style</CardTitle>
          <CardDescription $theme="nature">Organic animations and earthy color palette</CardDescription>
          <NatureListGroup
            items={defaultItems}
            activeItem={activeItems.nature}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, nature: item.id })}
          />
        </Card>

        <Card $theme="steampunk">
          <CardTitle $theme="steampunk">Steampunk Style</CardTitle>
          <CardDescription $theme="steampunk">Victorian-era industrial design with brass accents</CardDescription>
          <SteampunkListGroup
            items={defaultItems}
            activeItem={activeItems.steampunk}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, steampunk: item.id })}
          />
        </Card>

        <Card $theme="holographic">
          <CardTitle $theme="holographic">Holographic Style</CardTitle>
          <CardDescription $theme="holographic">Futuristic hologram effect with iridescent colors</CardDescription>
          <HolographicListGroup
            items={defaultItems}
            activeItem={activeItems.holographic}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, holographic: item.id })}
          />
        </Card>

        <Card $theme="neon">
          <CardTitle $theme="neon">Neon Style</CardTitle>
          <CardDescription $theme="neon">Vibrant neon effects with glowing animations</CardDescription>
          <NeonListGroup
            items={defaultItems}
            activeItem={activeItems.neon}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, neon: item.id })}
          />
        </Card>

        <Card $theme="paper">
          <CardTitle $theme="paper">Paper Style</CardTitle>
          <CardDescription $theme="paper">Handcrafted paper texture with subtle animations</CardDescription>
          <PaperListGroup
            items={defaultItems}
            activeItem={activeItems.paper}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, paper: item.id })}
          />
        </Card>

        <Card $theme="cosmic">
          <CardTitle $theme="cosmic">Cosmic Style</CardTitle>
          <CardDescription $theme="cosmic">Space-themed design with starfield effects</CardDescription>
          <CosmicListGroup
            items={defaultItems}
            activeItem={activeItems.cosmic}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, cosmic: item.id })}
          />
        </Card>

        <Card $theme="aqua">
          <CardTitle $theme="aqua">Aqua Style</CardTitle>
          <CardDescription $theme="aqua">Water-inspired design with fluid animations</CardDescription>
          <AquaListGroup
            items={defaultItems}
            activeItem={activeItems.aqua}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, aqua: item.id })}
          />
        </Card>

        <Card $theme="origami">
          <CardTitle $theme="origami">Origami Style</CardTitle>
          <CardDescription $theme="origami">Paper-folding inspired with elegant transitions</CardDescription>
          <OrigamiListGroup
            items={defaultItems}
            activeItem={activeItems.origami}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, origami: item.id })}
          />
        </Card>

        <Card $theme="jungle">
          <CardTitle $theme="jungle">Jungle Style</CardTitle>
          <CardDescription $theme="jungle">Exotic jungle theme with lush green colors</CardDescription>
          <JungleListGroup
            items={defaultItems}
            activeItem={activeItems.jungle}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, jungle: item.id })}
          />
        </Card>

        <Card $theme="zen">
          <CardTitle $theme="zen">Zen Style</CardTitle>
          <CardDescription $theme="zen">Minimalist Japanese aesthetic with subtle animations</CardDescription>
          <ZenListGroup
            items={defaultItems}
            activeItem={activeItems.zen}
            onSelect={(item) => setActiveItems({ ...activeItems, zen: item.id })}
          />
        </Card>

        <Card $theme="candy">
          <CardTitle $theme="candy">Candy Style</CardTitle>
          <CardDescription $theme="candy">Sweet and playful design with bouncy animations</CardDescription>
          <CandyListGroup
            items={defaultItems}
            activeItem={activeItems.candy}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, candy: item.id })}
          />
        </Card>

        <Card $theme="nordic">
          <CardTitle $theme="nordic">Nordic Style</CardTitle>
          <CardDescription $theme="nordic">Clean Scandinavian design with frost effects</CardDescription>
          <NordicListGroup
            items={defaultItems}
            activeItem={activeItems.nordic}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, nordic: item.id })}
          />
        </Card>

        <Card $theme="vintage">
          <CardTitle $theme="vintage">Vintage Style</CardTitle>
          <CardDescription $theme="vintage">Retro aesthetics with aged textures</CardDescription>
          <VintageListGroup
            items={defaultItems}
            activeItem={activeItems.vintage}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, vintage: item.id })}
          />
        </Card>

        <Card $theme="scifi">
          <CardTitle $theme="scifi">Sci-Fi Style</CardTitle>
          <CardDescription $theme="scifi">Futuristic design with holographic effects</CardDescription>
          <SciFiListGroup
            items={defaultItems}
            activeItem={activeItems.scifi}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, scifi: item.id })}
          />
        </Card>

        <Card $theme="medieval">
          <CardTitle $theme="medieval">Medieval Style</CardTitle>
          <CardDescription $theme="medieval">Fantasy RPG theme with magical effects</CardDescription>
          <MedievalListGroup
            items={defaultItems}
            activeItem={activeItems.medieval}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, medieval: item.id })}
          />
        </Card>

        <Card $theme="celestial">
          <CardTitle $theme="celestial">Celestial Style</CardTitle>
          <CardDescription $theme="celestial">Space and constellation themed with starry effects</CardDescription>
          <CelestialListGroup
            items={defaultItems}
            activeItem={activeItems.celestial}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, celestial: item.id })}
          />
        </Card>

        <Card $theme="industrial">
          <CardTitle $theme="industrial">Industrial Style</CardTitle>
          <CardDescription $theme="industrial">Metallic textures with mechanical animations</CardDescription>
          <IndustrialListGroup
            items={defaultItems}
            activeItem={activeItems.industrial}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, industrial: item.id })}
          />
        </Card>

        <Card $theme="artdeco">
          <CardTitle $theme="artdeco">Art Deco Style</CardTitle>
          <CardDescription $theme="artdeco">Geometric patterns with elegant transitions</CardDescription>
          <ArtDecoListGroup
            items={defaultItems}
            activeItem={activeItems.artdeco}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, artdeco: item.id })}
          />
        </Card>

        <Card $theme="pixel">
          <CardTitle $theme="pixel">Pixel Style</CardTitle>
          <CardDescription $theme="pixel">Retro gaming aesthetics with 8-bit animations</CardDescription>
          <PixelListGroup
            items={defaultItems}
            activeItem={activeItems.pixel}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, pixel: item.id })}
          />
        </Card>

        <Card $theme="noire">
          <CardTitle $theme="noire">Noire Style</CardTitle>
          <CardDescription $theme="noire">Dark detective theme with film noir effects</CardDescription>
          <NoireListGroup
            items={defaultItems}
            activeItem={activeItems.noire}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, noire: item.id })}
          />
        </Card>

        <Card $theme="ethereal">
          <CardTitle $theme="ethereal">Ethereal Style</CardTitle>
          <CardDescription $theme="ethereal">Dreamy translucent effects with floating elements</CardDescription>
          <EtherealListGroup
            items={defaultItems}
            activeItem={activeItems.ethereal}
            onSelect={(item: ListItem) => setActiveItems({ ...activeItems, ethereal: item.id })}
          />
        </Card>
      </Grid>
    </Container>
  );
};

export default ListGroupExample;