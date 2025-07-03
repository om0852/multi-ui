const ParticleClock = () => {
  const [time, setTime] = useState(new Date());
  const [particles, setParticles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Initialize particles
  useEffect(() => {
    const initialParticles = [];
    const particleCount = 200;
    
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
      });
    }
    
    setParticles(initialParticles);
    
    // Animation loop
    let animationId;
    const animate = () => {
      if (isPlaying) {
        setParticles(prevParticles => 
          prevParticles.map(p => {
            let newX = p.x + p.speedX;
            let newY = p.y + p.speedY;
            let newSpeedX = p.speedX;
            let newSpeedY = p.speedY;
            
            // Bounce off edges
            if (newX < 0 || newX > 100) {
              newSpeedX *= -1;
              newX = newX < 0 ? 0 : 100;
            }
            if (newY < 0 || newY > 100) {
              newSpeedY *= -1;
              newY = newY < 0 ? 0 : 100;
            }
            
            return {
              ...p,
              x: newX,
              y: newY,
              speedX: newSpeedX,
              speedY: newSpeedY,
            };
          })
        );
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (num) => num < 10 ? `0${num}` : num;
  
  const hours = formatTime(time.getHours() % 12 || 12);
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  
  // Create time segments for the circle
  const timeSegments = [];
  const totalSegments = 60;
  const segmentAngle = (2 * Math.PI) / totalSegments;
  
  for (let i = 0; i < totalSegments; i++) {
    const isActive = i < seconds || (i < (time.getHours() * 5) && i < 60);
    const isMinuteMarker = i % 5 === 0;
    
    const angle = (i / totalSegments) * 2 * Math.PI - Math.PI / 2;
    const x1 = 50 + Math.cos(angle) * 40;
    const y1 = 50 + Math.sin(angle) * 40;
    const x2 = 50 + Math.cos(angle) * 45;
    const y2 = 50 + Math.sin(angle) * 45;
    
    timeSegments.push({
      id: i,
      x1, y1, x2, y2,
      isActive,
      isMinuteMarker,
      angle: angle + Math.PI / 2, // Adjust angle for rotation
    });
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="relative w-full max-w-md h-96">
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: 0.8,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
          
          {/* Clock face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-full bg-black bg-opacity-30 backdrop-blur-sm border border-white border-opacity-10">
              {/* Time segments */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {timeSegments.map(segment => (
                  <line
                    key={segment.id}
                    x1={segment.x1}
                    y1={segment.y1}
                    x2={segment.x2}
                    y2={segment.y2}
                    stroke={segment.isActive ? '#3b82f6' : 'rgba(255,255,255,0.1)'}
                    strokeWidth={segment.isMinuteMarker ? 2 : 1}
                    strokeLinecap="round"
                  />
                ))}
                
                {/* Hour hand */}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="30"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform={`rotate(${(time.getHours() % 12) * 30 + (time.getMinutes() / 2)} 50 50)`}
                />
                
                {/* Minute hand */}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  transform={`rotate(${time.getMinutes() * 6 + (time.getSeconds() / 10)} 50 50)`}
                />
                
                {/* Second hand */}
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="15"
                  stroke="#ef4444"
                  strokeWidth="1"
                  strokeLinecap="round"
                  transform={`rotate(${time.getSeconds() * 6} 50 50)`}
                />
                
                {/* Center dot */}
                <circle cx="50" cy="50" r="2" fill="white" />
              </svg>
            </div>
          </div>
          
          {/* Digital time */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className="inline-block bg-black bg-opacity-50 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="text-2xl font-mono text-white">
                {hours}:{minutes}
                <span className="text-sm text-gray-300 ml-1">{ampm}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {time.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="mt-8 flex items-center space-x-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="text-sm text-gray-400">
          {particles.length} particles
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

render(<ParticleClock />);
