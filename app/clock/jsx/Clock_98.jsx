'use client';
import React, { useEffect, useState } from 'react';

// Flipping character for display board effect
const FlipChar = ({ char, prevChar, isFrozen = false }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  
  useEffect(() => {
    if (char !== prevChar && !isFrozen) {
      setIsFlipping(true);
      setTimeout(() => setIsFlipping(false), 500);
    }
  }, [char, prevChar, isFrozen]);
  
  return (
    <div className="relative h-full aspect-[2/3] bg-neutral-950 text-center mx-[1px] overflow-hidden rounded-sm">
      {/* Top half */}
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
        {isFlipping ? (
          <div className="w-full h-full flex items-end justify-center bg-neutral-950 text-amber-400 animate-[topFlip_0.5s_ease-in-out]">
            <span className="text-[inherit] font-mono font-bold translate-y-1/2 animate-[fadeChar_0.5s_ease-in-out]">
              {prevChar}
            </span>
          </div>
        ) : (
          <div className="w-full h-full flex items-end justify-center bg-neutral-950 text-amber-400">
            <span className="text-[inherit] font-mono font-bold translate-y-1/2">
              {char}
            </span>
          </div>
        )}
      </div>
      
      {/* Bottom half */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden">
        {isFlipping ? (
          <div className="w-full h-full flex items-start justify-center bg-neutral-950 text-amber-400 animate-[bottomFlip_0.5s_ease-in-out]">
            <span className="text-[inherit] font-mono font-bold -translate-y-1/2 animate-[fadeChar_0.5s_ease-in-out]">
              {char}
            </span>
          </div>
        ) : (
          <div className="w-full h-full flex items-start justify-center bg-neutral-950 text-amber-400">
            <span className="text-[inherit] font-mono font-bold -translate-y-1/2">
              {char}
            </span>
          </div>
        )}
      </div>
      
      {/* Divider line */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-neutral-800"></div>
    </div>
  );
};

// Flight/destination display
const FlightBoard = ({ destination, code, status, gate, time }) => {
  return (
    <div className="flex items-center p-2 border-b border-neutral-700">
      <div className="flex-1 font-medium text-white">
        <div className="flex items-center">
          <div className="text-xl">{destination}</div>
          <div className="ml-2 text-sm text-amber-400">{code}</div>
        </div>
        <div className="text-sm text-neutral-400">{gate}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-lg text-white">{time}</div>
        <div className={`text-sm rounded px-2 uppercase ${
          status === 'On Time' ? 'text-green-500' : 
          status === 'Delayed' ? 'text-amber-500' : 
          status === 'Boarding' ? 'text-cyan-400' : 'text-red-500'
        }`}>
          {status}
        </div>
      </div>
    </div>
  );
};

// Airplane silhouette that moves across the screen
const Airplane = ({ isVisible = true, position = 0, size = 30 }) => {
  return (
    <div 
      className={`absolute ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
      style={{
        top: '15%',
        left: `${position}%`,
        width: size,
        height: size * 0.4,
        transition: 'left 10s linear',
      }}
    >
      <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
      </svg>
    </div>
  );
};

// Boarding pass
const BoardingPass = ({ origin, destination, date, passenger, flight, gate, seat }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transform perspective-1000 hover:rotate-y-5 transition-transform duration-500">
      <div className="relative bg-blue-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium opacity-80">BOARDING PASS</div>
          <div className="text-sm font-medium opacity-80">TIME</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-baseline">
            <div className="text-2xl font-bold">{origin}</div>
            <div className="mx-2">to</div>
            <div className="text-2xl font-bold">{destination}</div>
          </div>
          <div className="text-xl font-mono">{date}</div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between">
          <div>
            <div className="text-xs text-gray-500">PASSENGER</div>
            <div className="text-sm font-medium">{passenger}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">FLIGHT</div>
            <div className="text-sm font-medium">{flight}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">GATE</div>
            <div className="text-sm font-medium">{gate}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">SEAT</div>
            <div className="text-sm font-medium">{seat}</div>
          </div>
        </div>
        
        {/* Barcode */}
        <div className="mt-4 h-10 bg-gradient-to-r from-black via-gray-800 to-black"></div>
      </div>
      
      {/* Tear line */}
      <div className="h-2 border-t border-dashed border-gray-300"></div>
    </div>
  );
};

// Time zone display
const TimeZone = ({ city, code, utcOffset, time }) => {
  return (
    <div className="flex flex-col items-center p-3 bg-neutral-800 rounded-lg">
      <div className="text-sm text-gray-400">{city}</div>
      <div className="text-xs text-amber-400">{code}</div>
      <div className="text-lg font-mono text-white">{time}</div>
      <div className="text-xs text-gray-400">UTC{utcOffset}</div>
    </div>
  );
};

// Flight path with dotted line
const FlightPath = ({ start = 10, end = 90, hasPlane = true, curvature = 20 }) => {
  // Calculate curve path
  const midX = (start + end) / 2;
  const pathD = `M${start},50 Q${midX},${50 - curvature} ${end},50`;
  
  return (
    <div className="absolute inset-x-0 top-1/4 h-8">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Path line */}
        <path 
          d={pathD} 
          fill="none" 
          stroke="white" 
          strokeWidth="1" 
          strokeDasharray="2,2" 
          opacity="0.3"
        />
        
        {/* Start point */}
        <circle cx={start} cy="50" r="2" fill="white" opacity="0.6" />
        
        {/* End point */}
        <circle cx={end} cy="50" r="2" fill="white" opacity="0.6" />
      </svg>
      
      {/* Airplane icon */}
      {hasPlane && (
        <div className="absolute top-1/2 -translate-y-1/2" style={{ left: `${(start + end) / 2}%` }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

// Digital display like those at airports
const AirportDigit = ({ digit, prevDigit }) => {
  const chars = digit.toString().padStart(2, '0').split('');
  const prevChars = prevDigit ? prevDigit.toString().padStart(2, '0').split('') : chars;
  
  return (
    <div className="flex h-24 mx-1">
      {chars.map((char, i) => (
        <FlipChar 
          key={i} 
          char={char} 
          prevChar={prevChars[i]} 
        />
      ))}
    </div>
  );
};

// Separator dots
const AirportSeparator = ({ blink = true }) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    if (blink) {
      const interval = setInterval(() => {
        setVisible(v => !v);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [blink]);
  
  return (
    <div className="h-24 flex flex-col justify-center mx-1">
      <div className={`w-2 h-2 bg-amber-400 rounded-full mb-4 ${visible ? 'opacity-100' : 'opacity-30'}`}></div>
      <div className={`w-2 h-2 bg-amber-400 rounded-full ${visible ? 'opacity-100' : 'opacity-30'}`}></div>
    </div>
  );
};

// Main Clock component
const Clock_98 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [airplanePosition, setAirplanePosition] = useState(-10);
  const [isAirplaneVisible, setIsAirplaneVisible] = useState(false);
  const [flights, setFlights] = useState([
    { destination: 'New York', code: 'JFK', status: 'On Time', gate: 'Gate A1', time: '09:45' },
    { destination: 'London', code: 'LHR', status: 'Boarding', gate: 'Gate B3', time: '10:30' },
    { destination: 'Tokyo', code: 'HND', status: 'Delayed', gate: 'Gate C5', time: '11:15' },
    { destination: 'Sydney', code: 'SYD', status: 'Cancelled', gate: 'Gate D7', time: '12:00' },
  ]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);
    
    // Move airplane across the screen periodically
    const animateAirplane = () => {
      setIsAirplaneVisible(true);
      setAirplanePosition(-10);
      
      setTimeout(() => {
        setAirplanePosition(110);
      }, 500);
      
      setTimeout(() => {
        setIsAirplaneVisible(false);
      }, 11000);
    };
    
    // Start animation and set interval
    animateAirplane();
    const airplaneTimer = setInterval(animateAirplane, 30000);
    
    // Update flight statuses occasionally
    const flightTimer = setInterval(() => {
      setFlights(prev => {
        const statuses = ['On Time', 'Boarding', 'Delayed', 'Delayed', 'On Time'];
        const newFlights = [...prev];
        const randomIndex = Math.floor(Math.random() * newFlights.length);
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        newFlights[randomIndex] = { ...newFlights[randomIndex], status: randomStatus };
        return newFlights;
      });
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(airplaneTimer);
      clearInterval(flightTimer);
    };
  }, [time]);
  
  // Format times for different time zones
  const formatTimeForZone = (date, offsetHours) => {
    const localTime = new Date(date);
    const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime + (3600000 * offsetHours));
    return targetTime.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    });
  };

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative p-8 rounded-lg bg-neutral-900 shadow-2xl overflow-hidden min-h-[400px]">
      {/* Background grid lines for that airport display look */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}></div>
      </div>
      
      {/* Airplane animation */}
      <Airplane isVisible={isAirplaneVisible} position={airplanePosition} />
      
      {/* Flight paths */}
      <FlightPath start={10} end={90} curvature={20} />
      <FlightPath start={30} end={70} curvature={-10} hasPlane={false} />
      
      {/* Header section */}
      <div className="relative z-10 mb-8 flex justify-between items-center">
        <div className="text-2xl text-white font-medium tracking-wider">WORLD TRAVEL CLOCK</div>
        <div className="py-1 px-3 bg-blue-600 text-white text-sm rounded">LIVE</div>
      </div>
      
      {/* Main clock display */}
      <div className="relative z-10 flex justify-center items-center my-6">
        {/* Hours */}
        <AirportDigit digit={hours} prevDigit={prevHours} />
        
        <AirportSeparator blink={true} />
        
        {/* Minutes */}
        <AirportDigit digit={minutes} prevDigit={prevMinutes} />
        
        <AirportSeparator blink={true} />
        
        {/* Seconds */}
        <AirportDigit digit={seconds} prevDigit={prevSeconds} />
      </div>
      
      {/* World time zones */}
      <div className="relative z-10 mt-8 grid grid-cols-4 gap-2">
        <TimeZone 
          city="New York" 
          code="JFK" 
          utcOffset="-5:00" 
          time={formatTimeForZone(time, -5)} 
        />
        <TimeZone 
          city="London" 
          code="LHR" 
          utcOffset="+0:00" 
          time={formatTimeForZone(time, 0)} 
        />
        <TimeZone 
          city="Tokyo" 
          code="HND" 
          utcOffset="+9:00" 
          time={formatTimeForZone(time, 9)} 
        />
        <TimeZone 
          city="Sydney" 
          code="SYD" 
          utcOffset="+11:00" 
          time={formatTimeForZone(time, 11)} 
        />
      </div>
      
      {/* Flight board */}
      <div className="relative z-10 mt-8 bg-neutral-800 rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white py-2 px-4 flex justify-between items-center">
          <div className="font-medium">DEPARTURES</div>
          <div className="text-sm">{time.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          })}</div>
        </div>
        <div className="max-h-40 overflow-y-auto">
          {flights.map((flight, i) => (
            <FlightBoard 
              key={i}
              destination={flight.destination}
              code={flight.code}
              status={flight.status}
              gate={flight.gate}
              time={flight.time}
            />
          ))}
        </div>
      </div>
      
      {/* Boarding pass */}
      <div className="relative z-10 mt-8 flex justify-center">
        <BoardingPass 
          origin="SFO" 
          destination="JFK" 
          date={`${hours}:${minutes}`}
          passenger="JOHN DOE"
          flight="TW-123"
          gate="A12"
          seat="24A"
        />
      </div>
    </div>
  );
};

export default Clock_98;

// Add these keyframes to your globals.css:
/*
@keyframes topFlip {
  0% { transform: perspective(400px) rotateX(0); }
  100% { transform: perspective(400px) rotateX(-90deg); }
}

@keyframes bottomFlip {
  0% { transform: perspective(400px) rotateX(90deg); }
  100% { transform: perspective(400px) rotateX(0); }
}

@keyframes fadeChar {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
*/ 