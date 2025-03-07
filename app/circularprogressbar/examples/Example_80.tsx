import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_80';

const Example_80: React.FC = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(200);
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [value, max, size, strokeWidth]);

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Value: {value}
          </label>
          <input
            type="range"
            min={0}
            max={max}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Maximum: {max}
          </label>
          <input
            type="range"
            min={10}
            max={200}
            value={max}
            onChange={(e) => setMax(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Size: {size}px
          </label>
          <input
            type="range"
            min={100}
            max={400}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Stroke Width: {strokeWidth}px
          </label>
          <input
            type="range"
            min={2}
            max={20}
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <CircularProgressBar
          key={key}
          value={value}
          max={max}
          size={size}
          strokeWidth={strokeWidth}
        />
      </div>

      <div className="w-full max-w-md bg-gradient-to-br from-fuchsia-900 to-purple-900 rounded-lg shadow-md p-6 border border-fuchsia-500/30">
        <h3 className="text-lg font-semibold text-fuchsia-300 mb-4">
          Neon Liquid Features
        </h3>
        <ul className="list-disc list-inside space-y-2 text-fuchsia-100">
          <li>Glowing neon liquid with color transitions</li>
          <li>Animated neon waves with different timings</li>
          <li>Floating neon particles with random paths</li>
          <li>Luminous surface glow effect</li>
          <li>Pulsing neon percentage display</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_80; 