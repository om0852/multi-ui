const WordClock = () => {
  const [time, setTime] = useState(new Date());
  const [showGrid, setShowGrid] = useState(false);
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Word clock definitions
  const wordClocks = {
    en: {
      grid: [
        ['I', 'T', 'L', 'I', 'S', 'A', 'S', 'A', 'M', 'P', 'M'],
        ['A', 'C', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', 'D', 'C'],
        ['T', 'W', 'E', 'N', 'T', 'Y', 'F', 'I', 'V', 'E', 'X'],
        ['H', 'A', 'L', 'F', 'S', 'T', 'E', 'N', 'F', 'T', 'O'],
        ['P', 'A', 'S', 'T', 'E', 'R', 'U', 'N', 'I', 'N', 'E'],
        ['O', 'N', 'E', 'S', 'I', 'X', 'T', 'H', 'R', 'E', 'E'],
        ['F', 'O', 'U', 'R', 'F', 'I', 'V', 'E', 'T', 'W', 'O'],
        ['E', 'I', 'G', 'H', 'T', 'E', 'L', 'E', 'V', 'E', 'N'],
        ['S', 'E', 'V', 'E', 'N', 'T', 'W', 'E', 'L', 'V', 'E'],
        ['T', 'E', 'N', 'S', 'E', 'O', 'C', 'L', 'O', 'C', 'K']
      ],
      activeWords: (hours, minutes) => {
        const words = new Set(['IT', 'IS']);
        
        // Handle minutes
        if (minutes >= 0 && minutes < 5) {
          // O'CLOCK
          words.add('OCLOCK');
        } else if (minutes >= 5 && minutes < 10) {
          words.add('FIVE');
          words.add('PAST');
        } else if (minutes >= 10 && minutes < 15) {
          words.add('TEN');
          words.add('PAST');
        } else if (minutes >= 15 && minutes < 20) {
          words.add('QUARTER');
          words.add('PAST');
        } else if (minutes >= 20 && minutes < 25) {
          words.add('TWENTY');
          words.add('PAST');
        } else if (minutes >= 25 && minutes < 30) {
          words.add('TWENTY');
          words.add('FIVE');
          words.add('PAST');
        } else if (minutes >= 30 && minutes < 35) {
          words.add('HALF');
          words.add('PAST');
        } else if (minutes >= 35 && minutes < 40) {
          words.add('TWENTY');
          words.add('FIVE');
          words.add('TO');
        } else if (minutes >= 40 && minutes < 45) {
          words.add('TWENTY');
          words.add('TO');
        } else if (minutes >= 45 && minutes < 50) {
          words.add('QUARTER');
          words.add('TO');
        } else if (minutes >= 50 && minutes < 55) {
          words.add('TEN');
          words.add('TO');
        } else if (minutes >= 55) {
          words.add('FIVE');
          words.add('TO');
        }
        
        // Handle hours
        let displayHour = hours % 12;
        if (minutes >= 35) {
          displayHour = (displayHour + 1) % 12;
        }
        
        const hourWords = [
          'TWELVE', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 
          'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN'
        ];
        words.add(hourWords[displayHour]);
        
        // Handle AM/PM
        words.add(hours >= 12 ? 'PM' : 'AM');
        
        return words;
      }
    }
  };
  
  const { grid, activeWords } = wordClocks[language];
  const activeSet = activeWords(time.getHours(), time.getMinutes());
  
  // Check if a cell is part of an active word
  const isCellActive = (row, col) => {
    // Check horizontal words
    for (let i = 0; i <= grid[row].length - 2; i++) {
      const word2 = grid[row].slice(i, i + 2).join('');
      const word3 = i <= grid[row].length - 3 ? grid[row].slice(i, i + 3).join('') : '';
      const word4 = i <= grid[row].length - 4 ? grid[row].slice(i, i + 4).join('') : '';
      const word5 = i <= grid[row].length - 5 ? grid[row].slice(i, i + 5).join('') : '';
      const word6 = i <= grid[row].length - 6 ? grid[row].slice(i, i + 6).join('') : '';
      const word7 = i <= grid[row].length - 7 ? grid[row].slice(i, i + 7).join('') : '';
      const word8 = i <= grid[row].length - 8 ? grid[row].slice(i, i + 8).join('') : '';
      
      if (activeSet.has(word2) || 
          activeSet.has(word3) || 
          activeSet.has(word4) || 
          activeSet.has(word5) ||
          activeSet.has(word6) ||
          activeSet.has(word7) ||
          activeSet.has(word8)) {
        if (col >= i && col < i + 8) {
          return true;
        }
      }
    }
    
    return false;
  };
  
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
      <div className="w-full max-w-2xl">
        <div className="bg-black p-6 rounded-xl shadow-2xl">
          {/* Word grid */}
          <div className="grid grid-cols-11 gap-1 mb-8">
            {grid.map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((cell, colIndex) => {
                  const isActive = isCellActive(rowIndex, colIndex);
                  const isItIs = rowIndex === 0 && colIndex <= 4 && (colIndex <= 1 || (colIndex >= 3 && colIndex <= 4));
                  
                  return (
                    <div 
                      key={`${rowIndex}-${colIndex}`}
                      className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 ${
                        isActive || isItIs
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 transform scale-105'
                          : showGrid 
                            ? 'bg-gray-800 text-gray-600' 
                            : 'bg-transparent text-transparent'
                      }`}
                    >
                      {cell}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          
          {/* Digital time display */}
          <div className="text-center mb-6">
            <div className="text-4xl font-mono text-blue-400 mb-2">
              {formatTime()}
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
          
          {/* Controls */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                showGrid 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {showGrid ? 'Hide Grid' : 'Show Grid'}
            </button>
            
            <div className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-blue-400 font-medium">
              WORD CLOCK
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>The clock highlights words to form the current time in a sentence.</p>
          <p className="mt-1">Example: "IT IS FIVE PAST NINE"</p>
        </div>
      </div>
    </div>
  );
};

render(<WordClock />);
