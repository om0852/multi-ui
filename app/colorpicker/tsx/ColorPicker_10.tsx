"use client";
import React, { useState, useEffect } from 'react';

const accessibilityAnimation = `
  @keyframes checkmarkDraw {
    from { stroke-dashoffset: 100; }
    to { stroke-dashoffset: 0; }
  }

  @keyframes slideUp {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

interface WCAGResult {
  level: string;
  pass: boolean;
  ratio: number;
}

const ColorPicker_10: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);
  const [wcagResults, setWcagResults] = useState<WCAGResult[]>([]);
  const [previewText, setPreviewText] = useState('Preview Text');

  const calculateRelativeLuminance = (hex: string) => {
    const rgb = hex.match(/[A-Za-z0-9]{2}/g)?.map(v => parseInt(v, 16) / 255) || [0, 0, 0];
    const [r, g, b] = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const calculateContrastRatio = (l1: number, l2: number) => {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  useEffect(() => {
    const textLuminance = calculateRelativeLuminance(textColor);
    const bgLuminance = calculateRelativeLuminance(backgroundColor);
    const ratio = calculateContrastRatio(textLuminance, bgLuminance);

    const results: WCAGResult[] = [
      { level: 'AA Large', pass: ratio >= 3, ratio },
      { level: 'AA Normal', pass: ratio >= 4.5, ratio },
      { level: 'AAA Large', pass: ratio >= 4.5, ratio },
      { level: 'AAA Normal', pass: ratio >= 7, ratio },
    ];

    setWcagResults(results);
    onChange?.(textColor);
  }, [textColor, backgroundColor, onChange]);

  return (
    <div className="w-full p-4 sm:p-6 rounded-xl dark:bg-gray-800 transition-all">
      <style>{accessibilityAnimation}</style>

      {/* Text preview */}
      <div 
        className="p-3 sm:p-4 md:p-5 rounded-lg mb-4 sm:mb-6 min-h-[120px] sm:min-h-[150px] flex flex-col gap-2 sm:gap-3 animate-[slideUp_0.3s_ease-out]"
        style={{ background: backgroundColor }}
      >
        <p 
          className="m-0 transition-all duration-300"
          style={{
            color: textColor,
            fontSize: `${fontSize}px`,
          }}
        >
          {previewText}
        </p>
        <input
          type="text"
          value={previewText}
          onChange={(e) => setPreviewText(e.target.value)}
          className="w-full rounded-md px-2 py-1.5 text-sm bg-transparent transition-all"
          style={{
            border: `1px solid ${textColor}`,
            color: textColor,
          }}
          placeholder="Enter preview text"
        />
      </div>

      {/* Color controls */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex-1">
          <label className="block mb-1.5 text-gray-600 dark:text-gray-300 text-sm">
            Text Color
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-10 h-10 p-0 border-2 border-gray-200 dark:border-gray-700 rounded-md cursor-pointer"
            />
            <input
              type="text"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="flex-1 p-2 border-2 border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-300 font-mono"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block mb-1.5 text-gray-600 dark:text-gray-300 text-sm">
            Background
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-10 h-10 p-0 border-2 border-gray-200 dark:border-gray-700 rounded-md cursor-pointer"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="flex-1 p-2 border-2 border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-300 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Font size control */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between mb-1.5">
          <label className="text-gray-600 dark:text-gray-300 text-sm">
            Font Size
          </label>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-mono">
            {fontSize}px
          </span>
        </div>
        <input
          type="range"
          min="12"
          max="32"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full h-1.5 rounded bg-gray-200 dark:bg-gray-700 appearance-none cursor-pointer accent-blue-500 dark:accent-blue-400"
        />
      </div>

      {/* WCAG results */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
        {wcagResults.map((result, index) => (
          <div
            key={result.level}
            className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-md flex flex-col items-center gap-1 sm:gap-2"
            style={{
              animation: `slideUp 0.3s ease-out ${index * 0.1}s`
            }}
          >
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
              {result.level}
            </div>
            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-colors ${
              result.pass ? 'bg-green-400 dark:bg-green-500' : 'bg-red-400 dark:bg-red-500'
            }`}>
              <span className="text-white text-xs sm:text-sm">
                {result.pass ? '✓' : '×'}
              </span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
              {result.ratio.toFixed(2)}:1
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_10;
