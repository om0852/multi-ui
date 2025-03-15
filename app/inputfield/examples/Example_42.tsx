import React, { useState } from 'react';
import InputField from '../_components/InputField_42';

const Example_42: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    command: '',
    accessKey: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateUsername = (username: string): boolean => {
    return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#0a0a0a',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Scanline effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
        zIndex: 1
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 2
      }}>
        <h3 style={{ 
          color: '#00ff00',
          fontSize: '2rem',
          fontFamily: "'VT323', monospace",
          textShadow: '0 0 10px rgba(0, 255, 0, 0.7)',
          marginBottom: '0.5rem',
          letterSpacing: '2px'
        }}>
          TERMINAL ACCESS
        </h3>
        <p style={{ 
          color: '#00ff00',
          fontFamily: "'VT323', monospace",
          textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
          letterSpacing: '1px'
        }}>
          &gt; ENTER CREDENTIALS TO PROCEED
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        <div>
          <InputField
            label="USERNAME"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange('username')}
            success={validateUsername(formData.username)}
            error={formData.username && !validateUsername(formData.username) ? 'INVALID USERNAME FORMAT' : ''}
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
            label="PASSWORD"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange('password')}
            success={formData.password.length >= 8}
            error={formData.password.length > 0 && formData.password.length < 8 ? 'PASSWORD TOO SHORT' : ''}
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="COMMAND"
            placeholder="Enter command"
            value={formData.command}
            onChange={handleChange('command')}
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="ACCESS KEY"
            placeholder="Biometric scan required"
            value={formData.accessKey}
            onChange={handleChange('accessKey')}
            disabled
            icon={
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #00ff00',
        borderRadius: '4px',
        color: '#00ff00',
        fontFamily: "'VT323', monospace",
        fontSize: '16px',
        position: 'relative',
        zIndex: 2,
        textShadow: '0 0 8px rgba(0, 255, 0, 0.5)'
      }}>
        <div>&gt; SYSTEM STATUS: {formData.username && formData.password ? 'AUTHENTICATING...' : 'AWAITING INPUT'}</div>
        <div>&gt; SECURITY LEVEL: ALPHA</div>
        <div style={{ animation: 'blink 1s step-end infinite' }}>&gt; _</div>
        <style jsx>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Example_42;
