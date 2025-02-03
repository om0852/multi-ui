"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import ListGroup from './_components/ListGroup_6';
import GlassmorphicListGroup from './_components/ListGroup_7';
import NeumorphicListGroup from './_components/ListGroup_7';
import GradientListGroup from './_components/ListGroup_9';
import CyberpunkListGroup from './_components/ListGroup_9';
import MinimalListGroup from './_components/ListGroup_11';
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
        return '#ffffff';
      default:
        return '#1f2937';
    }
  }};
  font-family: ${props => props.$theme === 'cyberpunk' ? 'Orbitron' : 'inherit'};
`;

const CardDescription = styled.p<{ $theme?: string }>`
  color: ${props => {
    switch (props.$theme) {
      case 'glass':
      case 'gradient':
      case 'cyberpunk':
        return 'rgba(255, 255, 255, 0.7)';
      default:
        return '#6b7280';
    }
  }};
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
  font-family: ${props => props.$theme === 'cyberpunk' ? 'Share Tech Mono' : 'inherit'};
`;

const ListGroupExample: React.FC = () => {
  const [activeItems, setActiveItems] = useState({
    default: '1',
    glass: '1',
    neumorphic: '1',
    gradient: '1',
    cyberpunk: '1',
    minimal: '1',
  });

  const defaultItems = [
    { id: '1', title: 'Dashboard', icon: <FiHome />, description: 'View your dashboard' },
    { id: '2', title: 'Messages', icon: <FiMail />, badge: '5', badgeColor: '#6366f1' },
    { id: '3', title: 'Profile', icon: <FiUser /> },
    { id: '4', title: 'Settings', icon: <FiSettings />, disabled: true },
  ];

  const systemItems = [
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

  const devItems = [
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

  const cyberpunkItems = [
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
            onSelect={(item) => setActiveItems({ ...activeItems, default: item.id })}
          />
        </Card>

        <Card $theme="glass">
          <CardTitle $theme="glass">Glassmorphic Style</CardTitle>
          <CardDescription $theme="glass">Frosted glass effect with blur and transparency</CardDescription>
          <GlassmorphicListGroup
            items={systemItems}
            activeItem={activeItems.glass}
            onSelect={(item) => setActiveItems({ ...activeItems, glass: item.id })}
          />
        </Card>

        <Card $theme="neumorphic">
          <CardTitle $theme="neumorphic">Neumorphic Style</CardTitle>
          <CardDescription $theme="neumorphic">Soft UI with pressed effects</CardDescription>
          <NeumorphicListGroup
            items={defaultItems}
            activeItem={activeItems.neumorphic}
            onSelect={(item) => setActiveItems({ ...activeItems, neumorphic: item.id })}
          />
        </Card>

        <Card $theme="gradient">
          <CardTitle $theme="gradient">Gradient Style</CardTitle>
          <CardDescription $theme="gradient">Beautiful gradients with floating animations</CardDescription>
          <GradientListGroup
            items={devItems}
            activeItem={activeItems.gradient}
            onSelect={(item) => setActiveItems({ ...activeItems, gradient: item.id })}
          />
        </Card>

        <Card $theme="cyberpunk">
          <CardTitle $theme="cyberpunk">Cyberpunk Style</CardTitle>
          <CardDescription $theme="cyberpunk">Futuristic design with glitch effects</CardDescription>
          <CyberpunkListGroup
            items={cyberpunkItems}
            activeItem={activeItems.cyberpunk}
            onSelect={(item) => setActiveItems({ ...activeItems, cyberpunk: item.id })}
          />
        </Card>

        <Card $theme="minimal">
          <CardTitle $theme="minimal">Minimal Style</CardTitle>
          <CardDescription $theme="minimal">Clean and subtle with minimal animations</CardDescription>
          <MinimalListGroup
            items={defaultItems}
            activeItem={activeItems.minimal}
            onSelect={(item) => setActiveItems({ ...activeItems, minimal: item.id })}
          />
        </Card>
      </Grid>
    </Container>
  );
};

export default ListGroupExample;