"use client";
import React, { useState } from 'react';
import ProgressBar_18 from '../tsx/ProgressBar_18';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [fileName, setFileName] = useState('secret_data.txt');
  const [encryptionLevel, setEncryptionLevel] = useState('AES-256');
  const [statusText, setStatusText] = useState('Ready to encrypt');
  
  // Array of encryption levels
  const encryptionLevels = ['AES-128', 'AES-256', 'RSA-2048', 'Quantum-Resistant'];
  
  // Array of file names
  const fileNames = [
    'secret_data.txt', 
    'corporate_secrets.dat', 
    'blackmail.enc', 
    'access_codes.bin',
    'neural_implant.sys',
    'classified.doc'
  ];
  
  // Function to simulate file encryption
  const startEncryption = () => {
    if (isProcessing) return;
    
    // Reset progress and state
    setProgress(0);
    setIsProcessing(true);
    setIsComplete(false);
    setStatusText('Initializing encryption...');
    
    // Choose a random file name and encryption level
    const randomFileName = fileNames[Math.floor(Math.random() * fileNames.length)];
    const randomEncryption = encryptionLevels[Math.floor(Math.random() * encryptionLevels.length)];
    setFileName(randomFileName);
    setEncryptionLevel(randomEncryption);
    
    // Simulate encryption process with varying speeds
    let phase = 0;
    const phases = [
      'Generating encryption keys...',
      'Analyzing file structure...',
      'Applying cipher...',
      'Obfuscating metadata...',
      'Finalizing encryption...'
    ];
    
    const interval = setInterval(() => {
      setProgress(prev => {
        // Random progress increment between 1 and 4
        const increment = Math.floor(Math.random() * 4) + 1;
        const newProgress = prev + increment;
        
        // Update status text at certain progress points
        if (newProgress > (phase + 1) * 20 && phase < phases.length - 1) {
          phase++;
          setStatusText(phases[phase]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setStatusText('Encryption complete');
          
          // Simulate completion delay
          setTimeout(() => {
            setIsComplete(true);
            setIsProcessing(false);
          }, 800);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 120);
  };
  
  // Function to reset the encryption
  const resetEncryption = () => {
    setProgress(0);
    setIsProcessing(false);
    setIsComplete(false);
    setStatusText('Ready to encrypt');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-lg border border-cyan-500/30">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-cyan-400">
            NEOCRYPT
          </h1>
          <p className="text-xs text-cyan-300 tracking-widest uppercase mt-1">Advanced File Encryption</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded-md border border-cyan-500/20">
            <div className="flex items-center">
              <span className="text-xl mr-3 text-cyan-400">📁</span>
              <div>
                <h3 className="font-medium text-cyan-300">{fileName}</h3>
                <p className="text-xs text-cyan-500">{Math.floor(Math.random() * 900) + 100} KB</p>
              </div>
            </div>
            <span className="text-xs bg-cyan-900 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">
              {encryptionLevel}
            </span>
          </div>
          
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-cyan-400 font-mono">{statusText}</p>
              {isComplete && <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">SECURE</span>}
            </div>
            
            <ProgressBar_18 
              progress={progress}
              height="h-3"
              color="bg-cyan-500"
              backgroundColor="bg-gray-900"
              rounded={true}
              animationDuration={0.3}
              showCounter={true}
            />
            
            <div className="flex justify-between text-xs text-cyan-600 font-mono">
              <span>0x00</span>
              <span>0xFF</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={startEncryption}
              disabled={isProcessing}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                isProcessing 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-cyan-800 hover:bg-cyan-700 border border-cyan-500/30'
              }`}
            >
              {isProcessing ? 'ENCRYPTING...' : 'ENCRYPT FILE'}
            </button>
            
            <button
              onClick={resetEncryption}
              disabled={isProcessing || (!isComplete && progress === 0)}
              className={`px-4 py-2 rounded-md font-medium ${
                isProcessing || (!isComplete && progress === 0)
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-900 text-cyan-400 hover:bg-gray-800 border border-cyan-500/30'
              }`}
            >
              RESET
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-gray-900 text-cyan-300 rounded-md text-center border border-cyan-500/30">
              <p className="font-medium font-mono">ENCRYPTION SUCCESSFUL</p>
              <p className="text-xs mt-1 text-cyan-500">File secured with {encryptionLevel} encryption</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
