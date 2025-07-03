const AnalogClock = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-full p-6 shadow-xl">
        <div className="relative w-64 h-64 rounded-full border-4 border-gray-800">
          {/* Clock face */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-3 bg-gray-800 transform origin-bottom"
              style={{
                left: '50%',
                top: '10px',
                marginLeft: '-0.5px',
                transform: `rotate(${i * 30}deg) translateY(32px)`,
              }}
            />
          ))}
          
          {/* Center point */}
          <div className="absolute w-4 h-4 bg-gray-800 rounded-full" style={{
            left: '50%',
            top: '50%',
            marginLeft: '-8px',
            marginTop: '-8px',
            zIndex: 10
          }} />
          
          {/* Hour hand */}
          <div 
            className="absolute w-1.5 h-16 bg-gray-900 rounded-full transform origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-3px',
              marginTop: '-50%',
              transform: `rotate(${hourDegrees}deg)`,
              transformOrigin: 'bottom center',
              transition: 'transform 0.3s cubic-bezier(0.4, 2.1, 0.8, 1)',
            }}
          />
          
          {/* Minute hand */}
          <div 
            className="absolute w-1 h-20 bg-gray-700 rounded-full transform origin-bottom"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-1.5px',
              marginTop: '-60%',
              transform: `rotate(${minuteDegrees}deg)`,
              transformOrigin: 'bottom center',
              transition: 'transform 0.3s cubic-bezier(0.4, 2.1, 0.8, 1)',
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
              transition: 'transform 0.2s cubic-bezier(0.4, 2.1, 0.8, 1)',
            }}
          />
        </div>
        
        <div className="text-center mt-4 text-gray-700 font-medium">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

render(<AnalogClock />);
