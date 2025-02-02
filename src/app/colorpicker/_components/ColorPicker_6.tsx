"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ColorPickerProps {
  initialColor?: string;
  className?: string;
  onChange?: (color: string) => void;
}

const filterAnimation = `
  @keyframes filterPreview {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }

  @keyframes sliderPulse {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
`;

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = "#ffffff", className = "", onChange }) => {
  const [baseColor, setBaseColor] = useState(initialColor);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 100,
    hueRotate: 0,
    blur: 0,
    opacity: 100,
  });

  const filterRanges = {
    brightness: { min: 0, max: 200, unit: '%' },
    contrast: { min: 0, max: 200, unit: '%' },
    saturate: { min: 0, max: 200, unit: '%' },
    hueRotate: { min: 0, max: 360, unit: 'deg' },
    blur: { min: 0, max: 10, unit: 'px' },
    opacity: { min: 0, max: 100, unit: '%' },
  };

  const getFilterStyle = () => {
    return `
      brightness(${filters.brightness}%)
      contrast(${filters.contrast}%)
      saturate(${filters.saturate}%)
      hue-rotate(${filters.hueRotate}deg)
      blur(${filters.blur}px)
      opacity(${filters.opacity}%)
    `;
  };

  useEffect(() => {
    onChange?.(baseColor);
  }, [baseColor, onChange]);

  const handleFilterChange = (filter: keyof typeof filters, value: number) => {
    setFilters(prev => ({
      ...prev,
      [filter]: value,
    }));
  };

  const FilterSlider = ({ name, label }: { name: keyof typeof filters, label: string }) => (
    <div style={{
      marginBottom: '16px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px',
      }}>
        <label style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {label}
        </label>
        <span style={{
          fontSize: '0.9rem',
          color: '#6b7280',
          fontFamily: 'monospace',
        }}>
          {filters[name]}{filterRanges[name].unit}
        </span>
      </div>
      <input
        type="range"
        min={filterRanges[name].min}
        max={filterRanges[name].max}
        value={filters[name]}
        onChange={(e) => handleFilterChange(name, Number(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          background: `linear-gradient(90deg, 
            ${baseColor}40,
            ${baseColor}
          )`,
          backgroundSize: '200% 100%',
          animation: 'sliderPulse 2s ease infinite',
          appearance: 'none',
          cursor: 'pointer',
        }}
      />
    </div>
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <style>{filterAnimation}</style>

      {/* Animated Color Box with Smooth Slide In */}
      <motion.div
        className="w-36 h-36 rounded-md"
        style={{
          backgroundColor: baseColor,
          filter: getFilterStyle(),
          animation: 'filterPreview 2s ease infinite',
        }}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Slider Input with Custom Styling */}
      <div className="relative mt-4 w-full max-w-xs">
        <motion.input
          type="color"
          value={baseColor}
          onChange={(e) => setBaseColor(e.target.value)}
          className="w-full h-2 rounded-md cursor-pointer bg-transparent"
          style={{
            background: `linear-gradient(to right, ${baseColor} 0%, #ffffff 100%)`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.2 },
          }}
        />
      </div>

      {/* Filter controls */}
      <div>
        <FilterSlider name="brightness" label="Brightness" />
        <FilterSlider name="contrast" label="Contrast" />
        <FilterSlider name="saturate" label="Saturation" />
        <FilterSlider name="hueRotate" label="Hue Rotate" />
        <FilterSlider name="blur" label="Blur" />
        <FilterSlider name="opacity" label="Opacity" />
      </div>

      {/* Reset button */}
      <button
        onClick={() => setFilters({
          brightness: 100,
          contrast: 100,
          saturate: 100,
          hueRotate: 0,
          blur: 0,
          opacity: 100,
        })}
        style={{
          width: '100%',
          marginTop: '16px',
          padding: '12px',
          background: '#f3f4f6',
          border: 'none',
          borderRadius: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default ColorPicker;
