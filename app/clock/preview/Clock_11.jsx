const CyberpunkClock = () => {
  const [time, setTime] = useState(new Date());
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Random glitch effect
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatSegment = (num) => {
    return num.toString().padStart(2, '0');
  };
  
  const hours = formatSegment(time.getHours());
  const minutes = formatSegment(time.getMinutes());
  const seconds = formatSegment(time.getSeconds());
  
  const glitchEffect = glitch ? {
    textShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff',
    transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`,
    opacity: 0.8 + Math.random() * 0.4
  } : {};
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 font-mono">
      <div className="relative w-full max-w-2xl">
        {/* Scanlines overlay */}
        <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" 
             style={{
               backgroundImage: 'linear-gradient(transparent 99%, rgba(0, 255, 255, 0.1) 99%)',
               backgroundSize: '100% 2px'
             }}>
        </div>
        
        {/* Main display */}
        <div className="relative border-2 border-cyan-400 p-8 bg-black bg-opacity-80">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 border-b border-cyan-400 pb-4">
            <div className="text-cyan-400 text-xl">NEOTOKYO_OS</div>
            <div className="text-pink-500">v2.0.47</div>
          </div>
          
          {/* Time display */}
          <div className="text-center mb-8">
            <div 
              className={`text-8xl md:text-9xl font-bold mb-2 text-cyan-400 transition-all duration-100 ${glitch ? 'text-pink-500' : ''}`}
              style={glitchEffect}
            >
              {hours}:{minutes}
              <span className="text-pink-500">:</span>
              <span className={glitch ? 'text-cyan-400' : 'text-pink-500'}>{seconds}</span>
            </div>
            <div className="text-cyan-400 text-xl">
              {time.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          
          {/* Status bars */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            {['SYSTEM', 'NETWORK', 'SECURITY'].map((item, idx) => (
              <div key={idx} className="border border-cyan-400 p-2">
                <div className="text-cyan-400 text-xs mb-1">{item}</div>
                <div className="h-2 bg-gray-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-pink-500"
                    style={{ width: `${70 + Math.random() * 30}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-cyan-400 text-xs text-cyan-400 flex justify-between">
            <div>STATUS: <span className="text-green-400">ONLINE</span></div>
            <div>ACCESS: <span className="text-pink-400">GRANTED</span></div>
            <div>USER: <span className="text-amber-400">ADMIN</span></div>
          </div>
        </div>
        
        {/* Glitch effect overlay */}
        {glitch && (
          <div className="absolute inset-0 bg-cyan-400 mix-blend-overlay opacity-10"></div>
        )}
        
        {/* Corner decorations */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
          <div 
            key={corner}
            className={`absolute w-8 h-8 border-${corner.includes('right') ? 'l' : 'r'}-4 border-${corner.includes('top') ? 'b' : 't'}-4 border-cyan-400`}
            style={{
              [corner.includes('left') ? 'left' : 'right']: 0,
              [corner.includes('top') ? 'top' : 'bottom']: 0,
            }}
          ></div>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes glitch {
          0% { text-shadow: 2px 0 #0ff, -2px 0 #f0f; }
          25% { text-shadow: -2px 0 #0ff, 2px 0 #f0f; }
          50% { text-shadow: 2px 0 #f0f, -2px 0 #0ff; }
          75% { text-shadow: -2px 0 #0ff, 2px 0 #f0f; }
          100% { text-shadow: 2px 0 #f0f, -2px 0 #0ff; }
        }
        
        .glitch {
          animation: glitch 0.1s infinite;
        }
      `}</style>
    </div>
  );
};

render(<CyberpunkClock />);
