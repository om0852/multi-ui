import React, { useState } from 'react';
import InputField from '../_components/InputField_56';

const Example_56: React.FC = () => {
  const [formData, setFormData] = useState({
    playerName: '',
    highScore: '',
    cheatCode: '',
    gameOver: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validatePlayerName = (name: string): boolean => {
    return name.length >= 3 && /^[A-Z0-9_]+$/.test(name);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#000000',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(51, 255, 51, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden',
      imageRendering: 'pixelated'
    }}>
      {/* CRT scanlines effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 2px)',
        backgroundSize: '100% 4px',
        animation: 'scanlines 1s linear infinite',
        pointerEvents: 'none',
        opacity: 0.5
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <h3 style={{ 
          color: '#33ff33',
          fontSize: '2rem',
          fontFamily: "'Press Start 2P', monospace",
          fontWeight: 400,
          marginBottom: '0.5rem',
          textShadow: '0 0 10px rgba(51, 255, 51, 0.5)',
          letterSpacing: '2px'
        }}>
          HIGH SCORE ENTRY
        </h3>
        <p style={{ 
          color: '#33ff33',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '0.8rem',
          opacity: 0.8
        }}>
          ENTER YOUR ACHIEVEMENTS
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        width: '100%',
        position: 'relative',
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="PLAYER NAME"
            placeholder="ENTER YOUR NAME"
            value={formData.playerName}
            onChange={handleChange('playerName')}
            success={validatePlayerName(formData.playerName)}
            error={formData.playerName && !validatePlayerName(formData.playerName) ? 'INVALID FORMAT' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="HIGH SCORE"
            type="number"
            placeholder="ENTER SCORE"
            value={formData.highScore}
            onChange={handleChange('highScore')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="CHEAT CODE"
            type="password"
            placeholder="ENTER CODE"
            value={formData.cheatCode}
            onChange={handleChange('cheatCode')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="GAME OVER"
            placeholder="PRESS START"
            value={formData.gameOver}
            onChange={handleChange('gameOver')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(51, 255, 51, 0.1)',
        borderRadius: '4px',
        border: '2px solid #33ff33',
        color: '#33ff33',
        fontSize: '0.8rem',
        textAlign: 'center',
        fontFamily: "'Press Start 2P', monospace",
        position: 'relative',
        boxShadow: 'inset 0 0 10px rgba(51, 255, 51, 0.2)'
      }}>
        FOCUS ON ANY INPUT FIELD TO ACTIVATE THE RETRO PIXEL EFFECTS
      </div>
    </div>
  );
};

export default Example_56; 