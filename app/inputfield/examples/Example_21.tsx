"use client"
import React, { useState } from 'react';
import InputField from '../_components/InputField_21';

const Example_21: React.FC = () => {
  const [command, setCommand] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateCommand = (cmd: string): string => {
    if (!cmd) return '';
    const validCommands = ['help', 'login', 'status', 'exit'];
    return !validCommands.includes(cmd.toLowerCase()) ? 'Unknown command. Try: help, login, status, exit' : '';
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#1a1b26',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      <div>
        <h4 style={{ color: '#a9b1d6', marginBottom: '1rem', fontFamily: 'Courier New' }}>Terminal Session</h4>
        <InputField
          label="Command"
          placeholder="Enter command"
          value={command}
          onChange={setCommand}
          error={validateCommand(command)}
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      <div>
        <InputField
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={setUsername}
          success={username.length >= 3}
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
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
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
          label="System Path"
          placeholder="/usr/local/bin"
          disabled
          icon={
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Example_21;
