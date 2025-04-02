'use client';
import React, { useState, useEffect } from 'react';

// Weather conditions
const WEATHER_TYPES = {
  SUNNY: 'sunny',
  CLOUDY: 'cloudy',
  RAINY: 'rainy',
  STORMY: 'stormy',
  SNOWY: 'snowy',
};

// Sun component for sunny weather
const Sun = ({ isRising = false }) => {
  return (
    <div className="relative">
      <div 
        className="absolute w-16 h-16 rounded-full bg-yellow-400 animate-[sunPulse_3s_ease-in-out_infinite]"
        style={{ 
          boxShadow: '0 0 40px rgba(250, 204, 21, 0.8), 0 0 20px rgba(250, 204, 21, 0.4)',
          top: isRising ? '50%' : '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Sun rays */}
      <div className="absolute w-20 h-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 bg-yellow-300" 
            style={{
              height: '100%',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              transformOrigin: 'center',
              opacity: 0.6,
              animation: `sunRayPulse ${2 + i * 0.2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Cloud component
const Cloud = ({ size = 'md', speed = 'normal', top, left, delay = 0 }) => {
  const sizes = {
    sm: 'w-12 h-6',
    md: 'w-20 h-10',
    lg: 'w-32 h-16',
  };
  
  const speeds = {
    slow: 'animate-[cloudFloat_60s_linear_infinite]',
    normal: 'animate-[cloudFloat_40s_linear_infinite]',
    fast: 'animate-[cloudFloat_25s_linear_infinite]',
  };
  
  return (
    <div 
      className={`absolute ${sizes[size]} ${speeds[speed]}`}
      style={{ 
        top, 
        left,
        animationDelay: `${delay}s`,
        filter: 'blur(1px)'
      }}
    >
      <div className="absolute w-1/2 h-full bg-white rounded-full left-0"></div>
      <div className="absolute w-1/3 h-full bg-white rounded-full left-1/4 top-1/4"></div>
      <div className="absolute w-1/2 h-full bg-white rounded-full right-0"></div>
    </div>
  );
};

// Rain component
const Rain = () => {
  // Generate random rain drops
  const drops = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 0.5 + Math.random() * 1.5,
    opacity: 0.5 + Math.random() * 0.5,
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map(drop => (
        <div 
          key={drop.id}
          className="absolute w-0.5 bg-blue-400"
          style={{
            height: `${5 + Math.random() * 15}px`,
            top: '-15px',
            left: drop.left,
            opacity: drop.opacity,
            animation: `raindrop ${drop.duration}s linear infinite`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Snow component
const Snow = () => {
  // Generate random snowflakes
  const flakes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 3 + Math.random() * 5,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10,
    horizontalMovement: Math.random() * 50,
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flakes.map(flake => (
        <div 
          key={flake.id}
          className="absolute bg-white rounded-full animate-[snowfall_linear_infinite]"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            top: '-10px',
            left: flake.left,
            opacity: 0.8,
            filter: 'blur(0.5px)',
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            '--horizontal-movement': `${flake.horizontalMovement}px`,
          }}
        />
      ))}
    </div>
  );
};

// Lightning component
const Lightning = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  
  useEffect(() => {
    const flashInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 100);
        
        // Double flash occasionally
        if (Math.random() > 0.5) {
          setTimeout(() => {
            setIsFlashing(true);
            setTimeout(() => setIsFlashing(false), 100);
          }, 200);
        }
      }
    }, 3000);
    
    return () => clearInterval(flashInterval);
  }, []);
  
  if (!isFlashing) return null;
  
  return (
    <div 
      className="absolute inset-0 bg-white bg-opacity-70 z-20 pointer-events-none"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

// Temperature component
const Temperature = ({ temp = 24, unit = 'C' }) => {
  // Define color based on temperature
  const getColor = (temperature) => {
    if (temperature < 0) return 'text-blue-600';
    if (temperature < 15) return 'text-blue-400';
    if (temperature < 25) return 'text-green-500';
    if (temperature < 30) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <div className="flex items-center">
      <div className={`text-4xl font-bold ${getColor(temp)}`}>
        {temp > 0 ? temp : temp}
      </div>
      <div className="text-2xl ml-1">°{unit}</div>
    </div>
  );
};

// Barometer component
const Barometer = ({ pressure = 1013 }) => {
  // Normalize pressure to a percentage for the gauge
  // Normal pressure range: ~980-1040 hPa
  const normalizedPressure = Math.min(100, Math.max(0, ((pressure - 980) / 60) * 100));
  
  // Determine pressure trend
  const getPressureStatus = (pressure) => {
    if (pressure < 1000) return { text: 'Low', color: 'text-blue-500' };
    if (pressure > 1020) return { text: 'High', color: 'text-red-500' };
    return { text: 'Normal', color: 'text-green-500' };
  };
  
  const status = getPressureStatus(pressure);
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs uppercase mb-1">Barometer</div>
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500"
          style={{ width: `${normalizedPressure}%` }}
        />
      </div>
      <div className="flex justify-between w-full text-xs mt-1">
        <span>980</span>
        <span className={status.color}>{pressure} hPa</span>
        <span>1040</span>
      </div>
    </div>
  );
};

// Humidity gauge
const HumidityGauge = ({ humidity = 50 }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs uppercase mb-1">Humidity</div>
      <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500"
          style={{ width: `${humidity}%` }}
        />
      </div>
      <div className="flex justify-center w-full text-xs mt-1 text-blue-600">
        {humidity}%
      </div>
    </div>
  );
};

// Weather symbol
const WeatherSymbol = ({ weather }) => {
  switch (weather) {
    case WEATHER_TYPES.SUNNY:
      return <div className="text-2xl">☀️</div>;
    case WEATHER_TYPES.CLOUDY:
      return <div className="text-2xl">☁️</div>;
    case WEATHER_TYPES.RAINY:
      return <div className="text-2xl">🌧️</div>;
    case WEATHER_TYPES.STORMY:
      return <div className="text-2xl">⛈️</div>;
    case WEATHER_TYPES.SNOWY:
      return <div className="text-2xl">❄️</div>;
    default:
      return <div className="text-2xl">☀️</div>;
  }
};

// Weather digit display
const WeatherDigit = ({ digit, prevDigit, weather }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Define styles based on weather type
  const getWeatherStyles = (weatherType) => {
    switch (weatherType) {
      case WEATHER_TYPES.SUNNY:
        return {
          color: '#f59e0b',
          textShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
          className: isChanging ? 'animate-[sunnyDigitChange_0.3s]' : ''
        };
      case WEATHER_TYPES.CLOUDY:
        return {
          color: '#9ca3af',
          textShadow: '0 0 10px rgba(156, 163, 175, 0.5)',
          className: isChanging ? 'animate-[cloudyDigitChange_0.3s]' : ''
        };
      case WEATHER_TYPES.RAINY:
        return {
          color: '#3b82f6',
          textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
          className: isChanging ? 'animate-[rainyDigitChange_0.3s]' : ''
        };
      case WEATHER_TYPES.STORMY:
        return {
          color: '#6366f1',
          textShadow: '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
          className: isChanging ? 'animate-[stormyDigitChange_0.3s]' : ''
        };
      case WEATHER_TYPES.SNOWY:
        return {
          color: '#e5e7eb',
          textShadow: '0 0 10px rgba(229, 231, 235, 0.7)',
          className: isChanging ? 'animate-[snowyDigitChange_0.3s]' : ''
        };
      default:
        return {
          color: '#f59e0b',
          textShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
          className: isChanging ? 'animate-[sunnyDigitChange_0.3s]' : ''
        };
    }
  };
  
  const styles = getWeatherStyles(weather);
  
  return (
    <div className="relative mx-1">
      <div 
        className={`text-5xl font-bold ${styles.className}`}
        style={{ 
          color: styles.color,
          textShadow: styles.textShadow
        }}
      >
        {digit}
      </div>
    </div>
  );
};

// Weather separator
const WeatherSeparator = ({ weather }) => {
  // Define styles based on weather
  const getWeatherStyles = (weatherType) => {
    switch (weatherType) {
      case WEATHER_TYPES.SUNNY:
        return { color: '#f59e0b' };
      case WEATHER_TYPES.CLOUDY:
        return { color: '#9ca3af' };
      case WEATHER_TYPES.RAINY:
        return { color: '#3b82f6' };
      case WEATHER_TYPES.STORMY:
        return { color: '#6366f1' };
      case WEATHER_TYPES.SNOWY:
        return { color: '#e5e7eb' };
      default:
        return { color: '#f59e0b' };
    }
  };
  
  const styles = getWeatherStyles(weather);
  
  return (
    <div className="flex flex-col items-center mx-1 space-y-1">
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: styles.color }}></div>
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: styles.color }}></div>
    </div>
  );
};

// Wind direction indicator
const WindDirection = ({ degrees = 0, speed = 0 }) => {
  // Convert wind speed to descriptive term (Beaufort scale simplified)
  const getWindDescription = (speed) => {
    if (speed < 1) return 'Calm';
    if (speed < 6) return 'Light';
    if (speed < 12) return 'Moderate';
    if (speed < 20) return 'Strong';
    if (speed < 30) return 'Very Strong';
    return 'Storm';
  };
  
  // Convert degrees to cardinal direction
  const getCardinalDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(degrees / 45) % 8];
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs uppercase mb-1">Wind</div>
      <div className="relative h-12 w-12 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute text-xs font-bold" style={{ top: '2px' }}>N</div>
        <div className="absolute text-xs font-bold" style={{ right: '2px' }}>E</div>
        <div className="absolute text-xs font-bold" style={{ bottom: '2px' }}>S</div>
        <div className="absolute text-xs font-bold" style={{ left: '2px' }}>W</div>
        
        <div 
          className="w-1 h-5 bg-blue-500 rounded origin-bottom"
          style={{ transform: `rotate(${degrees}deg)` }}
        />
      </div>
      <div className="text-xs mt-1">{getCardinalDirection(degrees)} {speed} km/h</div>
      <div className="text-xs text-blue-600">{getWindDescription(speed)}</div>
    </div>
  );
};

// Main weather clock component
const Clock_90 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [weather, setWeather] = useState(WEATHER_TYPES.SUNNY);
  const [temperature, setTemperature] = useState(24);
  const [pressure, setPressure] = useState(1013);
  const [humidity, setHumidity] = useState(60);
  const [windDirection, setWindDirection] = useState(0);
  const [windSpeed, setWindSpeed] = useState(8);
  
  // Update time every second and occasionally change weather
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Occasionally update weather (roughly every 30 seconds)
      if (Math.random() > 0.97) {
        const weatherTypes = Object.values(WEATHER_TYPES);
        const newWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        setWeather(newWeather);
        
        // Update other meteorological data
        setTemperature(Math.floor(Math.random() * 40) - 5);
        setPressure(980 + Math.floor(Math.random() * 60));
        setHumidity(Math.floor(Math.random() * 100));
        setWindDirection(Math.floor(Math.random() * 360));
        setWindSpeed(Math.floor(Math.random() * 30));
      }
      
      // Small variations in meteorological data
      if (Math.random() > 0.8) {
        setTemperature(prev => prev + (Math.random() > 0.5 ? 1 : -1));
        setPressure(prev => prev + (Math.random() > 0.5 ? 1 : -1));
        setHumidity(prev => Math.min(100, Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1))));
        setWindDirection(prev => (prev + 5) % 360);
        setWindSpeed(prev => Math.max(0, prev + (Math.random() > 0.5 ? 1 : -1)));
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [time]);
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');
  
  // Format date
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  // Weather background based on current weather
  const renderWeatherBackground = () => {
    switch (weather) {
      case WEATHER_TYPES.SUNNY:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200"></div>
            <Sun />
          </>
        );
      case WEATHER_TYPES.CLOUDY:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200"></div>
            <Cloud size="lg" top="10%" left="10%" />
            <Cloud size="md" top="30%" left="30%" delay={5} />
            <Cloud size="lg" top="15%" left="60%" delay={10} />
            <Cloud size="sm" top="40%" left="70%" speed="fast" delay={2} />
          </>
        );
      case WEATHER_TYPES.RAINY:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400"></div>
            <Cloud size="lg" top="5%" left="10%" />
            <Cloud size="lg" top="10%" left="40%" delay={6} />
            <Cloud size="lg" top="15%" left="70%" delay={12} />
            <Rain />
          </>
        );
      case WEATHER_TYPES.STORMY:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600"></div>
            <Cloud size="lg" top="5%" left="10%" />
            <Cloud size="lg" top="10%" left="40%" delay={6} />
            <Cloud size="lg" top="15%" left="70%" delay={12} />
            <Rain />
            <Lightning />
          </>
        );
      case WEATHER_TYPES.SNOWY:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-100"></div>
            <Cloud size="lg" top="5%" left="10%" />
            <Cloud size="lg" top="10%" left="40%" delay={6} />
            <Cloud size="lg" top="15%" left="70%" delay={12} />
            <Snow />
          </>
        );
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200"></div>
        );
    }
  };
  
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ height: '400px' }}>
      {/* Weather background */}
      <div className="absolute inset-0 overflow-hidden">
        {renderWeatherBackground()}
      </div>
      
      {/* Content container with glass effect */}
      <div 
        className="relative h-full p-6 flex flex-col"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Weather station header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="font-bold text-gray-800">Weather Station</h2>
            <div className="text-sm text-gray-700">{formattedDate}</div>
          </div>
          <div className="flex items-center">
            <WeatherSymbol weather={weather} />
            <Temperature temp={temperature} unit="C" />
          </div>
        </div>
        
        {/* Clock display */}
        <div className="bg-white bg-opacity-30 p-4 rounded-lg backdrop-blur mb-4 flex justify-center items-center">
          <div className="flex">
            <WeatherDigit digit={hours[0]} prevDigit={prevHours[0]} weather={weather} />
            <WeatherDigit digit={hours[1]} prevDigit={prevHours[1]} weather={weather} />
          </div>
          
          <WeatherSeparator weather={weather} />
          
          <div className="flex">
            <WeatherDigit digit={minutes[0]} prevDigit={prevMinutes[0]} weather={weather} />
            <WeatherDigit digit={minutes[1]} prevDigit={prevMinutes[1]} weather={weather} />
          </div>
          
          <WeatherSeparator weather={weather} />
          
          <div className="flex">
            <WeatherDigit digit={seconds[0]} prevDigit={prevSeconds[0]} weather={weather} />
            <WeatherDigit digit={seconds[1]} prevDigit={prevSeconds[1]} weather={weather} />
          </div>
        </div>
        
        {/* Weather measurements grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white bg-opacity-30 p-3 rounded-lg backdrop-blur">
            <Barometer pressure={pressure} />
          </div>
          <div className="bg-white bg-opacity-30 p-3 rounded-lg backdrop-blur">
            <HumidityGauge humidity={humidity} />
          </div>
        </div>
        
        {/* Wind direction */}
        <div className="mt-auto">
          <div className="bg-white bg-opacity-30 p-3 rounded-lg backdrop-blur">
            <WindDirection degrees={windDirection} speed={windSpeed} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-xs text-center mt-2 text-gray-700">
          Meteorological Clock • Data updates automatically
        </div>
      </div>
    </div>
  );
};

export default Clock_90;

// Add these keyframes to your globals.css:
/*
@keyframes sunPulse {
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
}

@keyframes sunRayPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}

@keyframes cloudFloat {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100vw); }
}

@keyframes raindrop {
  0% { transform: translateY(-15px); opacity: 0; }
  10% { opacity: var(--opacity, 0.7); }
  90% { opacity: var(--opacity, 0.7); }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes snowfall {
  0% { 
    transform: translateY(-10px) translateX(0); 
    opacity: 0; 
  }
  10% { opacity: 0.8; }
  90% { opacity: 0.8; }
  100% { 
    transform: translateY(100vh) translateX(var(--horizontal-movement, 20px)); 
    opacity: 0; 
  }
}

@keyframes sunnyDigitChange {
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.1); filter: brightness(1.3); }
  100% { transform: scale(1); filter: brightness(1); }
}

@keyframes cloudyDigitChange {
  0% { transform: translateY(0); filter: brightness(1); }
  50% { transform: translateY(-5px); filter: brightness(1.2); }
  100% { transform: translateY(0); filter: brightness(1); }
}

@keyframes rainyDigitChange {
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.05); filter: brightness(1.2); }
  100% { transform: scale(1); filter: brightness(1); }
}

@keyframes stormyDigitChange {
  0% { transform: scale(1) rotate(0deg); filter: brightness(1); }
  25% { transform: scale(1.05) rotate(-2deg); filter: brightness(1.3); }
  75% { transform: scale(1.05) rotate(2deg); filter: brightness(1.3); }
  100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
}

@keyframes snowyDigitChange {
  0% { transform: translateY(0); filter: brightness(1); }
  50% { transform: translateY(-3px); filter: brightness(1.1); }
  100% { transform: translateY(0); filter: brightness(1); }
}
*/