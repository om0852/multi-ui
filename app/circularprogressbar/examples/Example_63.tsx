import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_63';

const Example_63: React.FC = () => {
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
    <div className="flex flex-col items-center p-8 min-h-screen bg-gradient-to-br from-green-900 to-emerald-900">
      <h2 className="text-2xl font-bold mb-8 text-green-300" style={{ 
        fontFamily: "'Roboto', sans-serif",
        textShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
      }}>
        Nature Progress Ring
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

      <div className="w-full max-w-md space-y-4 p-6 rounded-lg bg-green-950/50 backdrop-blur-sm border border-green-500/30">
        <div>
          <label className="block text-sm font-medium text-green-300 mb-1">
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
          <label className="block text-sm font-medium text-green-300 mb-1">
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
          <label className="block text-sm font-medium text-green-300 mb-1">
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
          <label className="block text-sm font-medium text-green-300 mb-1">
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

      <div className="mt-8 p-6 rounded-lg bg-green-950/50 backdrop-blur-sm border border-green-500/30">
        <h3 className="text-lg font-semibold text-green-300 mb-4">Nature Features</h3>
        <ul className="list-disc list-inside space-y-2 text-green-200">
          <li>Animated leaves</li>
          <li>Forest gradient progress ring</li>
          <li>Forest atmosphere effects</li>
          <li>Dynamic forest core</li>
          <li>Vibrant nature aesthetic</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_63; 