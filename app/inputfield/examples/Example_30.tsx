import React, { useState } from 'react';
import InputField_30 from '../_components/InputField_30';
import { FaUser, FaLock, FaTerminal, FaKey } from 'react-icons/fa';

const Example_30 = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    terminal: '',
    accessKey: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateUsername = (username: string) => {
    return username.length >= 4 && /^[a-zA-Z0-9_]+$/.test(username);
  };

  return (
    <div style={{
      background: '#000',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <div style={{ 
        color: '#0ff', 
        fontFamily: "'Share Tech Mono', monospace",
        marginBottom: '2rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '3px'
      }}>
        [System Access Terminal]
      </div>

      <InputField_30
        label="Username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange('username')}
        icon={<FaUser size={16} />}
        required
        error={formData.username && !validateUsername(formData.username) ? 
          'Invalid username format' : undefined}
        success={Boolean(formData.username && validateUsername(formData.username))}
      />

      <InputField_30
        label="Password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange('password')}
        icon={<FaLock size={16} />}
        required
        success={formData.password.length >= 8}
      />

      <InputField_30
        label="Terminal Command"
        placeholder="> execute command"
        value={formData.terminal}
        onChange={handleChange('terminal')}
        icon={<FaTerminal size={16} />}
      />

      <InputField_30
        label="Access Key"
        placeholder="Enter access key"
        value={formData.accessKey}
        onChange={handleChange('accessKey')}
        icon={<FaKey size={16} />}
        disabled
      />
    </div>
  );
};

export default Example_30;
