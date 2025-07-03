const ParticleSystemClock = () => {
  const [time, setTime] = useState(new Date());
  const [particles, setParticles] = useState([]);
  const [showParticles, setShowParticles] = useState(true);
  const [particleCount, setParticleCount] = useState(100);
  const [particleSpeed, setParticleSpeed] = useState(1);
  const [particleSize, setParticleSize] = useState(2);
  const [connectDistance, setConnectDistance] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setTime(new Date());
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isPaused]);
  
  // Initialize particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`
      });
    }
    setParticles(newParticles);
  }, [particleCount, particleSpeed]);
  
  // Animation loop
  useEffect(() => {
    if (isPaused) return;
    
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(p => {
          let x = p.x + p.vx;
          let y = p.y + p.vy;
          let vx = p.vx;
          let vy = p.vy;
          
          // Bounce off edges
          if (x < 0 || x > 100) {
            vx *= -1;
            x = x < 0 ? 0 : 100;
          }
          if (y < 0 || y > 100) {
            vy *= -1;
            y = y < 0 ? 0 : 100;
          }
          
          return {
            ...p,
            x,
            y,
            vx,
            vy
          };
        })
      );
      
      if (!isPaused) {
        requestAnimationFrame(animate);
      }
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  
  // Format time for display
  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };
  
  // Format date
  const formatDate = () => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Draw connections between particles
  const drawConnections = (ctx, width, height) => {
    if (!showParticles) return;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = (p1.x / 100 * width) - (p2.x / 100 * width);
        const dy = (p1.y / 100 * height) - (p2.y / 100 * height);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectDistance) {
          const opacity = 1 - (distance / connectDistance);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x / 100 * width, p1.y / 100 * height);
          ctx.lineTo(p2.x / 100 * width, p2.y / 100 * height);
          ctx.stroke();
        }
      }
    }
  };
  
  // Canvas ref for drawing connections
  const canvasRef = useRef(null);
  
  // Draw on canvas when particles update
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    drawConnections(ctx, width, height);
  }, [particles, showParticles, connectDistance]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      
      drawConnections(ctx, width, height);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [particles, showParticles, connectDistance]);
  
  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* Canvas for particle connections */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Particles */}
      {showParticles && particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particleSize}px`,
            height: `${particleSize}px`,
            backgroundColor: particle.color,
            transform: 'translate(-50%, -50%)',
            transition: isPaused ? 'none' : 'all 0.1s linear',
            boxShadow: `0 0 ${particleSize * 2}px ${particle.color}`,
            opacity: 0.8
          }}
        />
      ))}
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Time display */}
        <div 
          className="text-6xl md:text-8xl font-bold text-white mb-4 text-center"
          style={{
            textShadow: '0 0 20px rgba(255,255,255,0.3)',
            fontFamily: 'monospace',
            letterSpacing: '2px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '0.5rem 2rem',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)'
          }}
        >
          {formatTime()}
        </div>
        
        {/* Date */}
        <div 
          className="text-xl text-white text-center mb-8"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '0.5rem 1.5rem',
            borderRadius: '20px',
            backdropFilter: 'blur(5px)'
          }}
        >
          {formatDate()}
        </div>
        
        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
          <div className="space-y-2">
            <label className="text-white text-sm">Particles: {particleCount}</label>
            <input
              type="range"
              min="10"
              max="500"
              value={particleCount}
              onChange={(e) => setParticleCount(parseInt(e.target.value))}
              className="w-full"
            />
            
            <label className="text-white text-sm">Speed: {particleSpeed.toFixed(1)}</label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={particleSpeed}
              onChange={(e) => setParticleSpeed(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-white text-sm">Size: {particleSize}px</label>
            <input
              type="range"
              min="1"
              max="10"
              value={particleSize}
              onChange={(e) => setParticleSize(parseInt(e.target.value))}
              className="w-full"
            />
            
            <label className="text-white text-sm">Connection Distance: {connectDistance}px</label>
            <input
              type="range"
              min="20"
              max="200"
              value={connectDistance}
              onChange={(e) => setConnectDistance(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="flex space-x-4 col-span-1 md:col-span-2 pt-2">
            <button
              onClick={() => setShowParticles(!showParticles)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                showParticles
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {showParticles ? 'Hide Particles' : 'Show Particles'}
            </button>
            
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                isPaused
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
            
            <button
              onClick={() => {
                const newParticles = particles.map(p => ({
                  ...p,
                  x: Math.random() * 100,
                  y: Math.random() * 100
                }));
                setParticles(newParticles);
              }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium"
            >
              Shuffle
            </button>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        input[type="range"] {
          -webkit-appearance: none;
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(90deg, #4f46e5, #8b5cf6, #ec4899);
          outline: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

render(<ParticleSystemClock />);
