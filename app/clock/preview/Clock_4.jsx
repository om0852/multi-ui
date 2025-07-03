const NeumorphicClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <div className="relative w-64 h-64 rounded-full flex items-center justify-center" 
           style={{
             background: '#e0e5ec',
             boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
           }}>
        
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const size = i % 3 === 0 ? 6 : 3;
          const x = Math.sin(angle) * 90 + 120;
          const y = -Math.cos(angle) * 90 + 120;
          
          return (
            <div 
              key={i}
              className="absolute rounded-full bg-gray-400"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x - size/2}px`,
                top: `${y - size/2}px`,
                boxShadow: i % 3 === 0 
                  ? 'inset 2px 2px 4px rgba(0,0,0,0.2)'
                  : 'none',
              }}
            />
          );
        })}
        
        {/* Hour hand */}
        <div 
          className="absolute w-1.5 h-16 bg-gray-800 rounded-full transform origin-bottom"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-3px',
            marginTop: '-50%',
            transform: `rotate(${hourDegrees}deg)`,
            transformOrigin: 'bottom center',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            transition: 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)',
          }}
        />
        
        {/* Minute hand */}
        <div 
          className="absolute w-1 h-20 bg-gray-600 rounded-full transform origin-bottom"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-1.5px',
            marginTop: '-60%',
            transform: `rotate(${minuteDegrees}deg)`,
            transformOrigin: 'bottom center',
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            transition: 'transform 0.5s cubic-bezier(0.4, 2.1, 0.8, 1)',
          }}
        />
        
        {/* Second hand */}
        <div 
          className="absolute w-0.5 h-24 bg-red-500 rounded-full transform origin-bottom"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-0.5px',
            marginTop: '-70%',
            transform: `rotate(${secondDegrees}deg)`,
            transformOrigin: 'bottom center',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s cubic-bezier(0.4, 2.1, 0.8, 1)',
          }}
        />
        
        {/* Center dot */}
        <div 
          className="absolute w-4 h-4 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-8px',
            marginTop: '-8px',
            background: '#e0e5ec',
            boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)',
            zIndex: 10,
          }}
        />
      </div>
      
      <div className="mt-8 text-center">
        <div className="text-2xl font-medium text-gray-700">
          {time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          })}
        </div>
        <div className="mt-2 text-gray-500">
          {time.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

render(<NeumorphicClock />);
