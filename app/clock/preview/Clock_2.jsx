const FlipClock = () => {
  const [time, setTime] = useState(new Date());
  const [flip, setFlip] = useState({
    hours: false,
    minutes: false,
    seconds: false
  });
  
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
  
  // Animate flip effect
  useEffect(() => {
    setFlip({
      hours: true,
      minutes: true,
      seconds: true
    });
    
    const timer = setTimeout(() => {
      setFlip({
        hours: false,
        minutes: false,
        seconds: false
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [time]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="flex space-x-2 sm:space-x-4">
        <div className="relative">
          <div className="flex">
            <div className="relative w-16 h-24 sm:w-20 sm:h-28 bg-gray-800 rounded-lg overflow-hidden">
              <div className={`absolute w-full h-1/2 bg-gray-900 top-0 flex items-end justify-center overflow-hidden ${flip.hours ? 'animate-flip-top' : ''}`}>
                <span className="text-4xl sm:text-5xl font-bold text-white mb-1">{hours}</span>
              </div>
              <div className="absolute w-full h-1/2 top-1/2 bg-gray-800 flex items-start justify-center overflow-hidden">
                <span className="text-4xl sm:text-5xl font-bold text-white -mt-1">{hours}</span>
              </div>
              <div className="absolute top-1/2 w-full h-0.5 bg-black z-10"></div>
            </div>
            <div className="relative w-16 h-24 sm:w-20 sm:h-28 bg-gray-800 rounded-lg overflow-hidden ml-2">
              <div className={`absolute w-full h-1/2 bg-gray-900 top-0 flex items-end justify-center overflow-hidden ${flip.minutes ? 'animate-flip-top' : ''}`}>
                <span className="text-4xl sm:text-5xl font-bold text-white mb-1">{minutes}</span>
              </div>
              <div className="absolute w-full h-1/2 top-1/2 bg-gray-800 flex items-start justify-center overflow-hidden">
                <span className="text-4xl sm:text-5xl font-bold text-white -mt-1">{minutes}</span>
              </div>
              <div className="absolute top-1/2 w-full h-0.5 bg-black z-10"></div>
            </div>
          </div>
          <div className="flex justify-between px-1 mt-1">
            <span className="text-xs text-gray-400">HOURS</span>
            <span className="text-xs text-gray-400">MINUTES</span>
          </div>
        </div>
        
        <div className="flex items-center text-4xl sm:text-5xl font-bold text-white mx-1">:</div>
        
        <div className="relative">
          <div className="relative w-16 h-24 sm:w-20 sm:h-28 bg-gray-800 rounded-lg overflow-hidden">
            <div className={`absolute w-full h-1/2 bg-gray-900 top-0 flex items-end justify-center overflow-hidden ${flip.seconds ? 'animate-flip-top' : ''}`}>
              <span className="text-4xl sm:text-5xl font-bold text-white mb-1">{seconds}</span>
            </div>
            <div className="absolute w-full h-1/2 top-1/2 bg-gray-800 flex items-start justify-center overflow-hidden">
              <span className="text-4xl sm:text-5xl font-bold text-white -mt-1">{seconds}</span>
            </div>
            <div className="absolute top-1/2 w-full h-0.5 bg-black z-10"></div>
          </div>
          <div className="text-center mt-1">
            <span className="text-xs text-gray-400">SECONDS</span>
          </div>
        </div>
        
        <div className="flex items-center ml-2">
          <div className="bg-gray-800 px-2 py-1 rounded">
            <span className="text-sm font-medium text-white">{ampm}</span>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes flipTop {
          0% { transform: rotateX(0deg); z-index: 10; }
          50% { transform: rotateX(-90deg); z-index: 10; }
          100% { transform: rotateX(-180deg); z-index: 1; }
        }
        
        .animate-flip-top {
          animation: flipTop 0.5s cubic-bezier(0.37, 0, 0.63, 1);
          transform-origin: bottom;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

render(<FlipClock />);
