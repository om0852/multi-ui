const RetroFlipClock = () => {
  const [time, setTime] = useState(new Date());
  const [flipStates, setFlipStates] = useState({
    hours: { current: '00', next: '00', isFlipping: false },
    minutes: { current: '00', next: '00', isFlipping: false },
    seconds: { current: '00', next: '00', isFlipping: false },
  });
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      
      // Format time parts with leading zeros
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      
      // Check if each part has changed and needs to flip
      setFlipStates(prev => {
        const newState = { ...prev };
        
        if (hours !== prev.hours.current && !prev.hours.isFlipping) {
          newState.hours = {
            current: hours,
            next: hours,
            isFlipping: true
          };
          
          // Reset flip state after animation
          setTimeout(() => {
            setFlipStates(s => ({
              ...s,
              hours: { ...s.hours, isFlipping: false }
            }));
          }, 600);
        }
        
        if (minutes !== prev.minutes.current && !prev.minutes.isFlipping) {
          newState.minutes = {
            current: minutes,
            next: minutes,
            isFlipping: true
          };
          
          setTimeout(() => {
            setFlipStates(s => ({
              ...s,
              minutes: { ...s.minutes, isFlipping: false }
            }));
          }, 600);
        }
        
        if (seconds !== prev.seconds.current && !prev.seconds.isFlipping) {
          newState.seconds = {
            current: seconds,
            next: seconds,
            isFlipping: true
          };
          
          setTimeout(() => {
            setFlipStates(s => ({
              ...s,
              seconds: { ...s.seconds, isFlipping: false }
            }));
          }, 600);
        }
        
        return newState;
      });
      
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (num) => num < 10 ? `0${num}` : num;
  
  const hours = formatTime(time.getHours() % 12 || 12);
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  
  // Format date as "Weekday, Month Day"
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  
  // Flip card component
  const FlipCard = ({ label, value, isFlipping }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="text-xs text-gray-400 mb-1">{label}</div>
        <div className="relative w-16 h-20 bg-gray-800 rounded-md overflow-hidden">
          {/* Top half */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 flex items-end justify-center overflow-hidden">
            <span className="text-3xl font-bold text-gray-200 -mb-1">{value}</span>
          </div>
          
          {/* Bottom half */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-800 flex items-start justify-center overflow-hidden">
            <span className="text-3xl font-bold text-gray-200 -mt-1">{value}</span>
          </div>
          
          {/* Flip animation */}
          <div 
            className={`absolute top-0 left-0 w-full h-1/2 bg-gray-700 flex items-end justify-center origin-bottom overflow-hidden transition-transform duration-300 ${isFlipping ? 'rotate-x-180' : ''}`}
            style={{
              transform: isFlipping ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
            }}
          >
            <span className="text-3xl font-bold text-gray-200 -mb-1">{value}</span>
          </div>
          
          {/* Divider */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black"></div>
          
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-2">Retro Flip Clock</h1>
        <p className="text-center text-gray-400 text-sm mb-8">Vintage flip clock with smooth animations</p>
        
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          {/* Hours */}
          <FlipCard 
            label="HOURS" 
            value={flipStates.hours.current} 
            isFlipping={flipStates.hours.isFlipping} 
          />
          
          <div className="text-4xl font-bold text-blue-400 mb-6">:</div>
          
          {/* Minutes */}
          <FlipCard 
            label="MINUTES" 
            value={flipStates.minutes.current} 
            isFlipping={flipStates.minutes.isFlipping} 
          />
          
          <div className="text-4xl font-bold text-blue-400 mb-6">:</div>
          
          {/* Seconds */}
          <FlipCard 
            label="SECONDS" 
            value={flipStates.seconds.current} 
            isFlipping={flipStates.seconds.isFlipping} 
          />
          
          {/* AM/PM */}
          <div className="flex flex-col items-center ml-2">
            <div className="text-xs text-gray-400 mb-1 opacity-0">AM/PM</div>
            <div className="w-12 h-10 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-sm font-bold text-blue-300">{ampm}</span>
            </div>
          </div>
        </div>
        
        {/* Date display */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gray-700 bg-opacity-50 rounded-full px-4 py-2">
            <div className="text-sm text-gray-300">{formattedDate}</div>
            <div className="text-xs text-gray-500 mt-1">
              {time.toLocaleTimeString('en-US', {
                timeZoneName: 'short'
              })}
            </div>
          </div>
        </div>
        
        {/* Retro style controls */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Set Alarm
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm font-medium transition-colors flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes flip {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-90deg); }
          100% { transform: rotateX(-180deg); }
        }
        
        .rotate-x-180 {
          animation: flip 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

render(<RetroFlipClock />);
