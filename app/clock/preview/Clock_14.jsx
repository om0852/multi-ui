const MatrixRainClock = () => {
  const [time, setTime] = useState(new Date());
  const [drops, setDrops] = useState([]);
  const [showClock, setShowClock] = useState(true);
  const [showDate, setShowDate] = useState(true);
  const [charSet, setCharSet] = useState('japanese');
  
  // Character sets
  const charSets = {
    binary: '01',
    numeric: '0123456789',
    hex: '0123456789ABCDEF',
    latin: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    japanese: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    matrix: '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏﾝｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ012345789Z:・."=*+-<>',
  };
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Initialize matrix rain
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Set up the columns
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    // Drawing the characters
    function draw() {
      // Black background with opacity for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set style for the characters
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character to print
        const text = charSets[charSet];
        const char = text[Math.floor(Math.random() * text.length)];
        
        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move the drop down
        drops[i]++;
      }
      
      // Continue the animation
      requestAnimationFrame(draw);
    }
    
    draw();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [charSet]);
  
  // Format time for digital display
  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };
  
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Matrix rain canvas */}
      <canvas 
        id="matrix-canvas" 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Clock overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Digital clock */}
        {showClock && (
          <div 
            className="text-green-500 font-mono text-6xl md:text-8xl mb-4 text-center text-shadow-lg shadow-green-500/50"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 0, 0.7)',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '2px',
              marginBottom: '1rem',
              backgroundColor: 'rgba(0, 15, 0, 0.5)',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(0, 255, 0, 0.3)'
            }}
          >
            {formatTime()}
          </div>
        )}
        
        {/* Date */}
        {showDate && (
          <div 
            className="text-green-400 text-xl md:text-2xl mb-8 text-center"
            style={{
              textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
              backgroundColor: 'rgba(0, 15, 0, 0.5)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(0, 255, 0, 0.2)'
            }}
          >
            {time.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}
        
        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button
            onClick={() => setShowClock(!showClock)}
            className="px-4 py-2 bg-green-900 hover:bg-green-800 text-green-100 rounded text-sm font-mono"
          >
            {showClock ? 'HIDE CLOCK' : 'SHOW CLOCK'}
          </button>
          
          <button
            onClick={() => setShowDate(!showDate)}
            className="px-4 py-2 bg-green-900 hover:bg-green-800 text-green-100 rounded text-sm font-mono"
          >
            {showDate ? 'HIDE DATE' : 'SHOW DATE'}
          </button>
          
          <select
            value={charSet}
            onChange={(e) => setCharSet(e.target.value)}
            className="px-4 py-2 bg-green-900 hover:bg-green-800 text-green-100 rounded text-sm font-mono border border-green-700"
          >
            {Object.keys(charSets).map((set) => (
              <option key={set} value={set} className="bg-black text-green-100">
                {set.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        
        {/* Instructions */}
        <div className="mt-8 text-center text-green-500 text-sm font-mono max-w-md opacity-70">
          <p>SYSTEM STATUS: ONLINE</p>
          <p className="mt-1">DATA STREAM: ACTIVE</p>
          <p className="mt-4 text-xs text-green-600">
            The Matrix has you...
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        @font-face {
          font-family: 'Matrix';
          src: url('https://www.fontsaddict.com/fontface/matrix-code-nfi.otf');
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'Courier New', monospace;
          background: #000;
          color: #0F0;
        }
        
        canvas {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .control-panel {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          display: flex;
          gap: 10px;
          background: rgba(0, 30, 0, 0.7);
          padding: 10px 20px;
          border-radius: 5px;
          border: 1px solid #0F0;
        }
        
        button, select {
          background: rgba(0, 60, 0, 0.7);
          color: #0F0;
          border: 1px solid #0F0;
          padding: 5px 10px;
          border-radius: 3px;
          cursor: pointer;
          font-family: 'Courier New', monospace;
          transition: all 0.3s ease;
        }
        
        button:hover, select:hover {
          background: rgba(0, 90, 0, 0.7);
          box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

render(<MatrixRainClock />);
