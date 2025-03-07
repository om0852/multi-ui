import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_84';

const Example_84: React.FC = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [size, setSize] = useState(200);
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [value, max, size, strokeWidth]);

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="mb-4">
          <CircularProgressBar
            key={key}
            value={value}
            max={max}
            size={size}
            strokeWidth={strokeWidth}
          />
        </div>

        <div className="w-80 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Value</label>
            <input
              type="range"
              min={0}
              max={max}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-600 text-right">{value}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Max</label>
            <input
              type="range"
              min={1}
              max={200}
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-600 text-right">{max}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="range"
              min={100}
              max={400}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-600 text-right">{size}px</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Stroke Width</label>
            <input
              type="range"
              min={2}
              max={20}
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-600 text-right">{strokeWidth}px</div>
          </div>
        </div>
      </div>

      <div className="w-80 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-purple-900 mb-4">Galaxy Features</h3>
        <ul className="space-y-2 text-sm text-purple-800">
          <li className="flex items-center">
            <span className="mr-2">🌌</span>
            Rotating spiral arm with glowing points
          </li>
          <li className="flex items-center">
            <span className="mr-2">✨</span>
            Twinkling stars with fade effects
          </li>
          <li className="flex items-center">
            <span className="mr-2">☁️</span>
            Nebula clouds with rotation and pulse
          </li>
          <li className="flex items-center">
            <span className="mr-2">🌈</span>
            Cosmic gradient fill animation
          </li>
          <li className="flex items-center">
            <span className="mr-2">💫</span>
            Stellar percentage display with glow
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Example_84; 