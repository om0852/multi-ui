const SolarSystemClock = () => {
  const [time, setTime] = useState(new Date());
  const [showOrbits, setShowOrbits] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Calculate planet positions based on current time
  const getPlanetPositions = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    // Each planet's position is based on the current time component
    return [
      // Mercury (hours)
      {
        name: 'Mercury',
        size: 8,
        color: 'bg-amber-600',
        orbit: 60,
        angle: (hours / 24) * 2 * Math.PI,
        speed: 0.02,
        info: 'Hour hand'
      },
      // Venus (minutes)
      {
        name: 'Venus',
        size: 12,
        color: 'bg-yellow-500',
        orbit: 90,
        angle: (minutes / 60) * 2 * Math.PI,
        speed: 0.03,
        info: 'Minute hand'
      },
      // Earth (seconds)
      {
        name: 'Earth',
        size: 14,
        color: 'bg-blue-500',
        orbit: 130,
        angle: (seconds / 60) * 2 * Math.PI,
        speed: 0.05,
        info: 'Second hand'
      },
      // Mars (date)
      {
        name: 'Mars',
        size: 10,
        color: 'bg-red-500',
        orbit: 170,
        angle: ((time.getDate() / 31) * 2 * Math.PI) % (2 * Math.PI),
        speed: 0.001,
        info: 'Day of month'
      },
      // Jupiter (month)
      {
        name: 'Jupiter',
        size: 24,
        color: 'bg-amber-400',
        orbit: 220,
        angle: ((time.getMonth() / 12) * 2 * Math.PI) % (2 * Math.PI),
        speed: 0.0001,
        info: 'Current month'
      },
      // Saturn (year)
      {
        name: 'Saturn',
        size: 20,
        color: 'bg-yellow-200',
        orbit: 280,
        angle: ((time.getFullYear() % 100) / 100) * 2 * Math.PI,
        speed: 0.00001,
        info: 'Year (last 2 digits)',
        ring: true
      }
    ];
  };
  
  const planets = getPlanetPositions();
  
  // Format time for digital display
  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="relative w-full max-w-2xl h-96">
        {/* Sun */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-yellow-400/30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-600 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-70"></div>
        </div>
        
        {/* Orbits */}
        {showOrbits && planets.map((planet, idx) => (
          <div 
            key={`orbit-${idx}`}
            className="absolute border border-gray-700 rounded-full"
            style={{
              width: `${planet.orbit * 2}px`,
              height: `${planet.orbit * 2}px`,
              top: `calc(50% - ${planet.orbit}px)`,
              left: `calc(50% - ${planet.orbit}px)`,
              opacity: 0.3
            }}
          />
        ))}
        
        {/* Planets */}
        {planets.map((planet, idx) => {
          const x = Math.cos(planet.angle) * planet.orbit + 50;
          const y = Math.sin(planet.angle) * planet.orbit + 50;
          
          return (
            <div 
              key={idx}
              className={`absolute ${planet.color} rounded-full flex items-center justify-center text-white text-xs font-bold cursor-help`}
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                left: `calc(${x}% - ${planet.size/2}px)`,
                top: `calc(${y}% - ${planet.size/2}px)`,
                transition: 'all 0.5s ease-out',
                transform: `rotate(${planet.angle * (180/Math.PI)}deg)`,
                boxShadow: '0 0 10px rgba(255,255,255,0.3)'
              }}
              onMouseEnter={() => setShowInfo(planet.name)}
              onMouseLeave={() => setShowInfo(false)}
              title={`${planet.name}: ${planet.info}`}
            >
              {planet.ring && (
                <div className="absolute w-full h-1 bg-yellow-200 rounded-full transform rotate-12" style={{ top: '50%' }}></div>
              )}
              {showInfo === planet.name && (
                <div className="absolute -top-8 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {planet.name}: {planet.info}
                </div>
              )}
            </div>
          );
        })}
        
        {/* Digital time display */}
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <div className="inline-block bg-black bg-opacity-70 text-white px-6 py-3 rounded-lg">
            <div className="text-3xl font-mono">{formatTime()}</div>
            <div className="text-sm text-gray-300 mt-1">
              {time.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Controls */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={() => setShowOrbits(!showOrbits)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showOrbits 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
          }`}
        >
          {showOrbits ? 'Hide Orbits' : 'Show Orbits'}
        </button>
        
        <div className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300">
          <span className="text-yellow-400">☉</span> Solar System Clock
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 text-center text-gray-400 text-sm max-w-md">
        <p>Each planet represents a different time unit, with their positions determined by the current time.</p>
        <p className="mt-2">Hover over planets for details about what they represent.</p>
      </div>
    </div>
  );
};

render(<SolarSystemClock />);
