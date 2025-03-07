import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_54';

const Example_54: React.FC = () => {
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
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-indigo-950 to-purple-950">
      <h2 className="text-2xl font-bold mb-8 text-fuchsia-300" style={{ 
        textShadow: '2px 0 #0ff, -2px 0 #f0f, 0 2px #ff0',
        filter: 'blur(0.5px)'
      }}>
        Holographic Progress Ring
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

      <div className="w-full max-w-md space-y-4 p-6 rounded-lg bg-indigo-950/30 backdrop-blur-sm border border-fuchsia-500/20">
        <div>
          <label className="block text-sm font-medium text-fuchsia-300 mb-1">
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
          <label className="block text-sm font-medium text-fuchsia-300 mb-1">
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
          <label className="block text-sm font-medium text-fuchsia-300 mb-1">
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
          <label className="block text-sm font-medium text-fuchsia-300 mb-1">
            Stroke Width: {strokeWidth}px
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

      <div className="mt-8 p-6 rounded-lg bg-indigo-950/30 backdrop-blur-sm border border-fuchsia-500/20">
        <h3 className="text-lg font-semibold text-fuchsia-300 mb-4">Holographic Features</h3>
        <ul className="list-disc list-inside space-y-2 text-fuchsia-200">
          <li>Chromatic aberration effects</li>
          <li>Animated glitch overlays</li>
          <li>Color-shifting gradient segments</li>
          <li>Digital distortion patterns</li>
          <li>Cyberpunk-inspired visual effects</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_54; 