import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_81';

const Example_81: React.FC = () => {
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

      <div className="w-full max-w-md bg-gradient-to-br from-sky-100 to-white rounded-lg shadow-md p-6 border border-sky-200">
        <h3 className="text-lg font-semibold text-sky-600 mb-4">
          Rain Features
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Realistic falling raindrops with physics</li>
          <li>Dynamic water accumulation at the bottom</li>
          <li>Ripple effects on the water surface</li>
          <li>Smooth container with rain gradient</li>
          <li>Water-themed percentage display with glow</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_81; 