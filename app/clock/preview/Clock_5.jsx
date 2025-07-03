const BinaryClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (num) => {
    const binary = num.toString(2).padStart(4, '0');
    return binary.split('').map(bit => parseInt(bit));
  };
  
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  // Split into separate digits and convert to binary
  const timeDigits = [
    ...(hours < 10 ? [0] : []),
    ...hours.toString().split('').map(Number),
    ...minutes.toString().split('').map(Number),
    ...seconds.toString().split('').map(Number)
  ].filter(Boolean);
  
  // Ensure we have 6 digits (HH:MM:SS)
  while (timeDigits.length < 6) {
    timeDigits.unshift(0);
  }
  
  // Convert each digit to 4-bit binary
  const binaryDigits = timeDigits.map(digit => {
    return digit.toString(2).padStart(4, '0').split('').map(Number);
  });
  
  // Column labels (8 4 2 1 for each digit)
  const bitValues = [8, 4, 2, 1];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-white mb-8">Binary Clock</h1>
      
      <div className="grid grid-cols-6 gap-4 mb-8">
        {['H', 'H', 'M', 'M', 'S', 'S'].map((label, i) => (
          <div key={i} className="text-center">
            <div className="text-white text-sm mb-2">{label}</div>
            <div className="flex flex-col space-y-2">
              {bitValues.map((bit, j) => (
                <div 
                  key={`${i}-${j}`}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono
                    ${binaryDigits[i]?.[j] === 1 
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50' 
                      : 'bg-gray-800 text-gray-600'}`}
                >
                  {bit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <div className="text-4xl font-mono text-white mb-2">
          {time.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        <div className="text-gray-400">
          {time.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="text-sm text-gray-500 mb-2">How to read:</div>
        <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto text-xs text-gray-400">
          <div>8</div>
          <div>4</div>
          <div>2</div>
          <div>1</div>
          <div className="col-span-4 h-px bg-gray-700 my-1"></div>
          <div>8</div>
          <div>4</div>
          <div>2</div>
          <div>1</div>
          <div className="col-span-4 text-center text-xs">= 15 (8+4+2+1)</div>
        </div>
      </div>
    </div>
  );
};

render(<BinaryClock />);
