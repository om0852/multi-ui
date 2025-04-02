'use client';
import React, { useState, useEffect, useRef } from 'react';

// Tetrahedron component - a 3D triangle-based shape
const Tetrahedron = ({ size = 40, color = '#3b82f6', rotationSpeed = 2, position = {}, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    let animationId;
    
    const rotate = () => {
      setRotation(prev => ({
        x: prev.x + 0.3 * rotationSpeed,
        y: prev.y + 0.5 * rotationSpeed,
        z: prev.z + 0.2 * rotationSpeed
      }));
      animationId = requestAnimationFrame(rotate);
    };
    
    rotate();
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed]);
  
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
      }}
    >
      {/* Tetrahedron faces */}
      <div 
        className="absolute"
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.8,
            transform: 'rotateY(0deg) translateZ(20px)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.7,
            transform: 'rotateY(90deg) translateZ(20px)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.6,
            transform: 'rotateY(180deg) translateZ(20px)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.9,
            transform: 'rotateY(270deg) translateZ(20px)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </div>
    </div>
  );
};

// Cube component - a 3D six-sided shape
const Cube = ({ size = 40, color = '#10b981', rotationSpeed = 1, position = {}, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    let animationId;
    
    const rotate = () => {
      setRotation(prev => ({
        x: prev.x + 0.2 * rotationSpeed,
        y: prev.y + 0.4 * rotationSpeed,
        z: prev.z + 0.1 * rotationSpeed
      }));
      animationId = requestAnimationFrame(rotate);
    };
    
    rotate();
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed]);
  
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
      }}
    >
      {/* Cube faces */}
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.8,
          transform: `translateZ(${size / 2}px)`,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.7,
          transform: `rotateY(180deg) translateZ(${size / 2}px)`,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.9,
          transform: `rotateY(90deg) translateZ(${size / 2}px)`,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.6,
          transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.8,
          transform: `rotateX(90deg) translateZ(${size / 2}px)`,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.7,
          transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
        }}
      />
    </div>
  );
};

// Octahedron component - a 3D eight-faced shape
const Octahedron = ({ size = 40, color = '#ec4899', rotationSpeed = 1.5, position = {}, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    let animationId;
    
    const rotate = () => {
      setRotation(prev => ({
        x: prev.x + 0.3 * rotationSpeed,
        y: prev.y + 0.3 * rotationSpeed,
        z: prev.z + 0.2 * rotationSpeed
      }));
      animationId = requestAnimationFrame(rotate);
    };
    
    rotate();
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed]);
  
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
      }}
    >
      {/* Top pyramid */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.8,
            transform: 'rotateY(0deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.7,
            transform: 'rotateY(90deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.6,
            transform: 'rotateY(180deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.9,
            transform: 'rotateY(270deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </div>
      
      {/* Bottom pyramid (inverted) */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(180deg)',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.8,
            transform: 'rotateY(0deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.7,
            transform: 'rotateY(90deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.6,
            transform: 'rotateY(180deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: color,
            opacity: 0.9,
            transform: 'rotateY(270deg) translateZ(0)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </div>
    </div>
  );
};

// Dodecahedron (simplified version as a component)
const Dodecahedron = ({ size = 40, color = '#8b5cf6', rotationSpeed = 0.8, position = {}, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    let animationId;
    
    const rotate = () => {
      setRotation(prev => ({
        x: prev.x + 0.15 * rotationSpeed,
        y: prev.y + 0.25 * rotationSpeed,
        z: prev.z + 0.1 * rotationSpeed
      }));
      animationId = requestAnimationFrame(rotate);
    };
    
    rotate();
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed]);
  
  // A simplified dodecahedron as a morphed cube
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
      }}
    >
      {/* Creating 12 pentagonal faces by staggering multiple cubes */}
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '80%',
              height: '80%',
              backgroundColor: color,
              opacity: 0.7 + (i % 3) * 0.1,
              transform: `rotateX(${i * 30}deg) rotateY(${i * 30}deg) translateZ(${size / 3}px)`,
              borderRadius: '20%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Icosahedron (simplified version as a component)
const Icosahedron = ({ size = 40, color = '#ef4444', rotationSpeed = 1.2, position = {}, className = "" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    let animationId;
    
    const rotate = () => {
      setRotation(prev => ({
        x: prev.x + 0.2 * rotationSpeed,
        y: prev.y + 0.3 * rotationSpeed,
        z: prev.z + 0.15 * rotationSpeed
      }));
      animationId = requestAnimationFrame(rotate);
    };
    
    rotate();
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed]);
  
  // A simplified icosahedron
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
      }}
    >
      {/* Creating 20 triangular faces */}
      <div 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '80%',
              height: '80%',
              backgroundColor: color,
              opacity: 0.7 + (i % 3) * 0.1,
              transform: `rotateX(${i * 18}deg) rotateY(${i * 18}deg) translateZ(${size / 2.5}px)`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 3D Number component
const GeometricDigit = ({ digit, prevDigit, shape = 'cube' }) => {
  const [isChanging, setIsChanging] = useState(false);
  const shapeRef = useRef(null);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Choose shape based on prop
  const renderShape = () => {
    const commonProps = {
      size: 60,
      position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      className: isChanging ? 'animate-[geometricPulse_0.5s_ease-in-out]' : ''
    };
    
    switch (shape) {
      case 'tetrahedron':
        return <Tetrahedron {...commonProps} color="#3b82f6" rotationSpeed={isChanging ? 4 : 1} />;
      case 'octahedron':
        return <Octahedron {...commonProps} color="#ec4899" rotationSpeed={isChanging ? 4 : 1.5} />;
      case 'dodecahedron':
        return <Dodecahedron {...commonProps} color="#8b5cf6" rotationSpeed={isChanging ? 3 : 0.8} />;
      case 'icosahedron':
        return <Icosahedron {...commonProps} color="#ef4444" rotationSpeed={isChanging ? 3.5 : 1.2} />;
      case 'cube':
      default:
        return <Cube {...commonProps} color="#10b981" rotationSpeed={isChanging ? 3 : 1} />;
    }
  };
  
  return (
    <div className="relative w-20 h-32 perspective-[800px]" ref={shapeRef}>
      <div 
        className={`absolute inset-0 flex items-center justify-center ${
          isChanging ? 'animate-[geometricDigitChange_0.5s_ease-in-out]' : ''
        }`}
      >
        {renderShape()}
        
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
            zIndex: 10
          }}
        >
          {digit}
        </div>
      </div>
    </div>
  );
};

// Clock separator
const GeometricSeparator = () => {
  return (
    <div className="relative w-12 h-32 flex flex-col items-center justify-center space-y-3">
      <div className="w-3 h-3 bg-white rounded-full animate-[geometricPulse_1.5s_infinite]"></div>
      <div className="w-3 h-3 bg-white rounded-full animate-[geometricPulse_1.5s_infinite_0.75s]"></div>
    </div>
  );
};

// Main Clock component
const Clock_92 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [cameraAngle, setCameraAngle] = useState({ x: 15, y: 15 });
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [time]);
  
  // Gently move camera angle for parallax effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCameraAngle(prev => ({
        x: 15 + 5 * Math.sin(Date.now() / 5000),
        y: 15 + 5 * Math.cos(Date.now() / 7000)
      }));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');
  
  // Assign different shapes to each digit
  const shapes = ['cube', 'tetrahedron', 'octahedron', 'dodecahedron', 'icosahedron', 'cube'];

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-lg shadow-2xl overflow-hidden perspective-[1000px]"
      style={{
        minHeight: '280px',
        minWidth: '580px'
      }}
    >
      {/* Subtle grid lines for depth perception */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Background geometric decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <Tetrahedron size={50} position={{ top: '15%', left: '10%' }} color="#3b82f6" rotationSpeed={0.5} />
        <Cube size={40} position={{ top: '70%', left: '15%' }} color="#10b981" rotationSpeed={0.4} />
        <Octahedron size={45} position={{ top: '25%', right: '12%' }} color="#ec4899" rotationSpeed={0.6} />
        <Dodecahedron size={35} position={{ bottom: '20%', right: '18%' }} color="#8b5cf6" rotationSpeed={0.3} />
        <Icosahedron size={30} position={{ bottom: '10%', left: '40%' }} color="#ef4444" rotationSpeed={0.45} />
      </div>
      
      {/* 3D scene with camera angle */}
      <div 
        className="relative flex items-center justify-center transform-style-3d"
        style={{
          transform: `rotateX(${cameraAngle.x}deg) rotateY(${cameraAngle.y}deg)`,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
          zIndex: 10
        }}
      >
        {/* Clock digits */}
        <div className="flex items-center justify-center transform-style-3d"
             style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
          {/* Hours */}
          <GeometricDigit 
            digit={hours[0]} 
            prevDigit={prevHours[0]} 
            shape={shapes[0]} 
          />
          <GeometricDigit 
            digit={hours[1]} 
            prevDigit={prevHours[1]} 
            shape={shapes[1]} 
          />
          
          <GeometricSeparator />
          
          {/* Minutes */}
          <GeometricDigit 
            digit={minutes[0]} 
            prevDigit={prevMinutes[0]} 
            shape={shapes[2]} 
          />
          <GeometricDigit 
            digit={minutes[1]} 
            prevDigit={prevMinutes[1]} 
            shape={shapes[3]} 
          />
          
          <GeometricSeparator />
          
          {/* Seconds */}
          <GeometricDigit 
            digit={seconds[0]} 
            prevDigit={prevSeconds[0]} 
            shape={shapes[4]} 
          />
          <GeometricDigit 
            digit={seconds[1]} 
            prevDigit={prevSeconds[1]} 
            shape={shapes[5]} 
          />
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-white/70 text-sm tracking-widest">
          PLATONIC TIME
        </div>
        <div className="text-white/50 text-xs mt-1">
          {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default Clock_92;

// Add these keyframes to your globals.css:
/*
@keyframes geometricPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

@keyframes geometricDigitChange {
  0% { transform: scale(1) rotateY(0deg); }
  50% { transform: scale(1.1) rotateY(180deg); }
  100% { transform: scale(1) rotateY(360deg); }
}
*/ 