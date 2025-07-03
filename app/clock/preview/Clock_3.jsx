const MinimalistDigitalClock = () => {
  const [time, setTime] = useState(new Date());
  
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
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="text-center">
        <div className="text-7xl md:text-8xl font-light tracking-tight text-gray-800">
          <span className="transition-all duration-1000">{hours}</span>
          <span className="opacity-0">:</span>
          <span className="transition-all duration-1000 delay-300">{minutes}</span>
          <span className="opacity-0">:</span>
          <span className="text-5xl md:text-6xl text-gray-500 transition-all duration-1000 delay-500">
            {seconds}
          </span>
        </div>
        <div className="mt-6 text-lg text-gray-500 font-light tracking-wider">
          {time.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
        <div className="mt-2 text-sm text-gray-400">
          {time.toLocaleTimeString('en-US', {
            timeZoneName: 'short'
          })}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

render(<MinimalistDigitalClock />);
