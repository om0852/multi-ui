"use client";
import React, { useState } from 'react';
import ProgressBar_22 from '../_components/ProgressBar_22';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('npm install');
  
  // List of possible commands
  const commands = [
    { cmd: 'npm install', text: 'Installing dependencies...' },
    { cmd: 'git clone', text: 'Cloning repository...' },
    { cmd: 'docker build', text: 'Building container...' },
    { cmd: 'webpack --build', text: 'Bundling assets...' },
    { cmd: 'yarn deploy', text: 'Deploying application...' }
  ];
  
  // Function to simulate command execution
  const executeCommand = () => {
    if (isRunning) return;
    
    // Reset state
    setProgress(0);
    setIsRunning(true);
    
    // Choose a random command
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    setCurrentCommand(randomCommand.cmd);
    
    // Add command to output
    const newOutput = [...commandOutput];
    newOutput.push(`$ ${randomCommand.cmd}`);
    setCommandOutput(newOutput);
    
    // Simulate command execution with progress updates
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 5) + 1;
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        
        // Add completion message to output
        setTimeout(() => {
          const completedOutput = [...newOutput];
          completedOutput.push(`✓ ${randomCommand.text} Complete!`);
          completedOutput.push('');
          setCommandOutput(completedOutput);
          setIsRunning(false);
        }, 500);
        
        return;
      }
      
      setProgress(currentProgress);
      
      // Occasionally add some output text
      if (Math.random() > 0.8) {
        const outputs = [
          'Resolving dependencies...',
          'Fetching packages...',
          'Compiling modules...',
          'Processing files...',
          'Optimizing output...'
        ];
        const randomOutput = outputs[Math.floor(Math.random() * outputs.length)];
        newOutput.push(randomOutput);
        setCommandOutput([...newOutput]);
      }
    }, 200);
  };
  
  // Clear terminal
  const clearTerminal = () => {
    setCommandOutput([]);
    setProgress(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 font-mono">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-gray-400">Terminal</div>
          <button 
            onClick={clearTerminal}
            className="text-xs text-gray-400 hover:text-gray-200"
          >
            Clear
          </button>
        </div>
        
        <div className="bg-black rounded-md p-4 h-80 overflow-y-auto text-sm">
          <div className="text-green-400 mb-4">
            Welcome to Terminal. Type a command or click Run to execute.
          </div>
          
          {commandOutput.map((line, index) => (
            <div key={index} className={`mb-1 ${
              line.startsWith('$') ? 'text-blue-400' : 
              line.startsWith('✓') ? 'text-green-400' : 'text-gray-300'
            }`}>
              {line}
            </div>
          ))}
          
          {isRunning && (
            <div className="mt-2">
              <ProgressBar_22 
                progress={progress}
                text={commands.find(c => c.cmd === currentCommand)?.text || 'Processing...'}
                animationDuration={0.3}
                showCounter={true}
              />
            </div>
          )}
          
          {!isRunning && (
            <div className="flex items-center mt-2">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-white">{currentCommand}</span>
              <span className="ml-1 animate-blink">|</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 flex justify-between">
          <div className="flex space-x-2">
            <button
              onClick={executeCommand}
              disabled={isRunning}
              className={`px-4 py-1 rounded text-sm font-medium ${
                isRunning 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-green-700 text-white hover:bg-green-600'
              }`}
            >
              Run
            </button>
            
            <button
              onClick={() => setCurrentCommand(commands[Math.floor(Math.random() * commands.length)].cmd)}
              disabled={isRunning}
              className={`px-4 py-1 rounded text-sm font-medium ${
                isRunning 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-700 text-white hover:bg-blue-600'
              }`}
            >
              Change Command
            </button>
          </div>
          
          <div className="text-xs text-gray-400 flex items-center">
            {isRunning ? `${progress}% complete` : 'Ready'}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
