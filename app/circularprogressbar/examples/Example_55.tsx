import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_55';

const Example_55: React.FC = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(300);
  const [strokeWidth, setStrokeWidth] = useState(12);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [value, max, size, strokeWidth]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(Number(e.target.value));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value));
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(Number(e.target.value));
  };

  const percentage = (value / max) * 100;

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-green-950 to-emerald-950" style={{ imageRendering: 'pixelated' }}>
      <h2 className="text-2xl font-bold mb-8 text-green-400" style={{ 
        fontFamily: "'Press Start 2P', monospace",
        textShadow: '2px 2px #166534'
      }}>
        8-Bit Progress Ring
      </h2>
      
      <div className="relative mb-8">
        <CircularProgressBar
          key={key}
          value={value}
          max={max}
          size={size}
          strokeWidth={strokeWidth}
        />
      </div>

      <div className="w-full max-w-md space-y-4 p-6 bg-green-900/30 border-4 border-green-500">
        <div>
          <label className="block text-sm font-medium text-green-400 mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Value: {value} ({percentage.toFixed(1)}%)
          </label>
          <input
            type="range"
            min={0}
            max={max}
            value={value}
            onChange={handleValueChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-400 mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Maximum: {max}
          </label>
          <input
            type="range"
            min={50}
            max={200}
            value={max}
            onChange={handleMaxChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-400 mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Size: {size}px
          </label>
          <input
            type="range"
            min={200}
            max={500}
            value={size}
            onChange={handleSizeChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-400 mb-1" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Stroke: {strokeWidth}px
          </label>
          <input
            type="range"
            min={8}
            max={24}
            value={strokeWidth}
            onChange={handleStrokeWidthChange}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-900/30 border-4 border-green-500">
        <h3 className="text-lg font-semibold text-green-400 mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          Retro Features
        </h3>
        <ul className="list-none space-y-2 text-green-300" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          <li>→ Pixel art styling</li>
          <li>→ 8-bit animations</li>
          <li>→ Power indicators</li>
          <li>→ Dashed progress ring</li>
          <li>→ Retro color scheme</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_55; 