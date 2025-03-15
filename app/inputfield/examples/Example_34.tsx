import React, { useState } from 'react';
import InputField from '../_components/InputField_34';

const Example_34: React.FC = () => {
  const [formData, setFormData] = useState({
    player: '',
    score: '',
    level: '',
    cheatCode: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validatePlayerName = (name: string): boolean => {
    return name.length >= 3 && name.length <= 12;
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#121212',
      border: '8px solid #33ff33',
      boxShadow: '0 0 0 4px #000000, 0 0 20px rgba(51, 255, 51, 0.5)',
      imageRendering: 'pixelated',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          color: '#33ff33',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '1.5rem',
          textShadow: '3px 3px #000000',
          marginBottom: '1rem',
          letterSpacing: '2px'
        }}>
          PLAYER STATS
        </h3>
        <div style={{
          width: '100%',
          height: '4px',
          background: '#33ff33',
          boxShadow: '0 2px #000000',
          margin: '0.5rem 0'
        }}></div>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        width: '100%'
      }}>
        <div>
          <InputField
            label="PLAYER NAME"
            placeholder="ENTER NAME"
            value={formData.player}
            onChange={handleChange('player')}
            success={validatePlayerName(formData.player)}
            error={formData.player && !validatePlayerName(formData.player) ? 'INVALID NAME' : ''}
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            placeholder="0000000"
            value={formData.score}
            onChange={handleChange('score')}
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="LEVEL"
            type="number"
            placeholder="01"
            value={formData.level}
            onChange={handleChange('level')}
            success={formData.level !== '' && !isNaN(Number(formData.level))}
            error={formData.level !== '' && isNaN(Number(formData.level)) ? 'NUMBERS ONLY' : ''}
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="CHEAT CODE"
            placeholder="???"
            value={formData.cheatCode}
            onChange={handleChange('cheatCode')}
            disabled
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: '10px',
        color: '#33ff33',
        textAlign: 'center',
        marginTop: '1rem',
        textShadow: '1px 1px #000000'
      }}>
        PRESS ENTER TO CONTINUE
      </div>
    </div>
  );
};

export default Example_34;
