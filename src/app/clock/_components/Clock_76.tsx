'use client';
import React, { useEffect, useState } from 'react';

const terminalAnimationKeyframes = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
  }
  @keyframes textShadow {
    0% { text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    5% { text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    10% { text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    15% { text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    20% { text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    25% { text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    30% { text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    35% { text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    40% { text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    45% { text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    50% { text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    55% { text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    60% { text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    65% { text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    70% { text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    75% { text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    80% { text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    85% { text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    90% { text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    95% { text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
    100% { text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px; }
  }
`;

const TerminalDigit = ({ value }: { value: string }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    setGlitching(true);
    const timer = setTimeout(() => setGlitching(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      background: '#000',
      border: '2px solid #32cd32',
      borderRadius: '4px',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 10px rgba(50, 205, 50, 0.5)',
    }}>
      <style>{terminalAnimationKeyframes}</style>

      {/* CRT scanline effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.5) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
      }} />

      {/* Moving scanline */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(transparent 0%, rgba(50, 205, 50, 0.15) 50%, transparent 100%)',
        animation: 'scanline 4s linear infinite',
        pointerEvents: 'none',
      }} />

      {/* Number display */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#32cd32',
        animation: glitching ? 'glitch 0.1s ease-in-out, textShadow 1.6s infinite' : 'textShadow 1.6s infinite',
      }}>
        {value}
      </div>

      {/* Terminal cursor */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        width: '8px',
        height: '2px',
        background: '#32cd32',
        animation: 'blink 1s step-end infinite',
      }} />
    </div>
  );
};

const Clock_76 = () => {
  const [time, setTime] = useState(new Date());
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Simulate random terminal commands
      if (Math.random() < 0.1) {
        setCommandHistory(prev => [
          ...prev.slice(-4),
          ['ls -la', 'cat /proc/uptime', 'top', 'date', 'who'][Math.floor(Math.random() * 5)]
        ]);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: '#000',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 0 30px rgba(50, 205, 50, 0.2)',
      border: '4px solid #32cd32',
    }}>
      {/* Terminal header */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '20px',
        color: '#32cd32',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
      }}>
        root@timeserver:~# chronometer --display
      </div>

      {/* Command history */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '20px',
        color: '#32cd32',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        opacity: 0.6,
      }}>
        {commandHistory.map((cmd, i) => (
          <div key={i}>$ {cmd}</div>
        ))}
      </div>

      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <TerminalDigit value={hours[0]} />
          <TerminalDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: '#32cd32',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(50, 205, 50, 0.5)',
                animation: 'blink 1s step-end infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <TerminalDigit value={minutes[0]} />
          <TerminalDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                background: '#32cd32',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(50, 205, 50, 0.5)',
                animation: 'blink 1s step-end infinite',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <TerminalDigit value={seconds[0]} />
          <TerminalDigit value={seconds[1]} />
        </div>
      </div>

      {/* System stats */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#32cd32',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        opacity: 0.6,
      }}>
        <div>CPU: {Math.floor(Math.random() * 100)}%</div>
        <div>MEM: {Math.floor(Math.random() * 1024)}MB</div>
        <div>UPTIME: {Math.floor(time.getTime() / 1000)}s</div>
      </div>
    </div>
  );
};

export default Clock_76; 