import React, { useState } from 'react';
import InputField from '../_components/InputField_53';

const Example_53: React.FC = () => {
  const [formData, setFormData] = useState({
    userId: '',
    securityKey: '',
    systemCommand: '',
    accessToken: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateUserId = (userId: string): boolean => {
    return userId.length >= 5 && /^[a-zA-Z0-9_]+$/.test(userId);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '3rem',
      background: '#0a0a0a',
      borderRadius: '8px',
      boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Circuit board background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          radial-gradient(rgba(0, 255, 255, 0.05) 2px, transparent 2px)
        `,
        backgroundSize: '50px 50px, 50px 50px, 50px 50px',
        backgroundPosition: '0 0, 0 0, 25px 25px',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      
      <div style={{ 
        textAlign: 'center',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1
      }}>
        <h3 style={{ 
          color: '#00ffff',
          fontSize: '2rem',
          fontFamily: "'Share Tech Mono', monospace",
          fontWeight: 400,
          marginBottom: '0.5rem',
          textShadow: '0 0 10px rgba(0, 255, 255, 0.7)',
          textTransform: 'uppercase',
          letterSpacing: '3px'
        }}>
          SYSTEM ACCESS TERMINAL
        </h3>
        <p style={{ 
          color: 'rgba(0, 255, 255, 0.7)',
          fontFamily: "'Share Tech Mono', monospace",
          letterSpacing: '1px'
        }}>
          &gt; ENTER CREDENTIALS TO INITIALIZE CONNECTION
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        justifyItems: 'center'
      }}>
        <div>
          <InputField
            label="USER ID"
            placeholder="Enter user identifier"
            value={formData.userId}
            onChange={handleChange('userId')}
            success={validateUserId(formData.userId)}
            error={formData.userId && !validateUserId(formData.userId) ? 'INVALID FORMAT' : ''}
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
            label="SECURITY KEY"
            type="password"
            placeholder="Enter security key"
            value={formData.securityKey}
            onChange={handleChange('securityKey')}
            success={formData.securityKey.length >= 8}
            error={formData.securityKey.length > 0 && formData.securityKey.length < 8 ? 'INSUFFICIENT LENGTH' : ''}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            required
          />
        </div>

        <div>
          <InputField
            label="SYSTEM COMMAND"
            placeholder="Enter command"
            value={formData.systemCommand}
            onChange={handleChange('systemCommand')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
        </div>

        <div>
          <InputField
            label="ACCESS TOKEN"
            placeholder="Biometric verification required"
            value={formData.accessToken}
            onChange={handleChange('accessToken')}
            disabled
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            }
          />
        </div>
      </div>
      
      <div style={{
        marginTop: '1rem',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '4px',
        border: '1px solid rgba(0, 255, 255, 0.3)',
        color: 'rgba(0, 255, 255, 0.7)',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '14px',
        position: 'relative',
        zIndex: 1,
        boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
      }}>
        <div>&gt; SYSTEM STATUS: {formData.userId && formData.securityKey ? 'AUTHENTICATING...' : 'AWAITING INPUT'}</div>
        <div>&gt; FOCUS ON ANY INPUT FIELD TO ACTIVATE NEON CIRCUIT EFFECTS</div>
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

export default Example_53; 