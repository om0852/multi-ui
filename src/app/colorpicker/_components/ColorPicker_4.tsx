"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ColorPickerProps {
  initialColor?: string;
  className?: string;
}

const schemeAnimation = `
  @keyframes fadeSlide {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes colorPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = "#ffffff", className = "" }) => {
  const [baseColor, setBaseColor] = useState(initialColor);
  const [schemes, setSchemes] = useState({
    complementary: ['#6366f1', '#f16363'],
    analogous: ['#6366f1', '#6363f1', '#6663f1'],
    monochromatic: ['#6366f1', '#7c7ff3', '#9599f5', '#aeb1f7', '#c7c9f9'],
  });

  // Convert hex to HSL
  const hexToHSL = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [0, 0, 0];
    
    let r = parseInt(result[1], 16) / 255;
    let g = parseInt(result[2], 16) / 255;
    let b = parseInt(result[3], 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h * 360, s * 100, l * 100];
  };

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  // Generate color schemes
  useEffect(() => {
    const [h, s, l] = hexToHSL(baseColor);
    
    // Complementary
    const complementary = [
      baseColor,
      hslToHex((h + 180) % 360, s, l),
    ];
    
    // Analogous
    const analogous = [
      hslToHex((h - 30 + 360) % 360, s, l),
      baseColor,
      hslToHex((h + 30) % 360, s, l),
    ];
    
    // Monochromatic
    const monochromatic = [
      baseColor,
      hslToHex(h, s, Math.min(l + 10, 100)),
      hslToHex(h, s, Math.min(l + 20, 100)),
      hslToHex(h, s, Math.min(l + 30, 100)),
      hslToHex(h, s, Math.min(l + 40, 100)),
    ];

    setSchemes({ complementary, analogous, monochromatic });
  }, [baseColor]);

  const ColorSwatch = ({ color, onClick }: { color: string; onClick?: () => void }) => (
    <button
      onClick={onClick}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: color,
        border: color === baseColor ? '2px solid #000' : 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease',
        animation: 'fadeSlide 0.3s ease-out',
      }}
    />
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <style>{schemeAnimation}</style>

      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Floating Color Box */}
        <motion.div
          className="w-32 h-32 rounded-xl"
          style={{
            backgroundColor: baseColor,
          }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0px 4px 20px rgba(0,0,0,0.1)",
              "0px 8px 25px rgba(0,0,0,0.2)",
              "0px 4px 20px rgba(0,0,0,0.1)",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        />
      </motion.div>

      {/* Color Input with Gradient Animation */}
      <motion.input
        type="color"
        value={baseColor}
        onChange={(e) => setBaseColor(e.target.value)}
        className="w-16 h-16 cursor-pointer rounded-full border-4 border-transparent"
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.5 },
        }}
        whileTap={{
          scale: 0.9,
          rotate: -180,
          transition: { duration: 0.2 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Color schemes */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {/* Complementary */}
        <div>
          <div style={{
            fontSize: '0.9rem',
            color: '#4b5563',
            marginBottom: '12px',
          }}>
            Complementary
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            {schemes.complementary.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                onClick={() => setBaseColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Analogous */}
        <div>
          <div style={{
            fontSize: '0.9rem',
            color: '#4b5563',
            marginBottom: '12px',
          }}>
            Analogous
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            {schemes.analogous.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                onClick={() => setBaseColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Monochromatic */}
        <div>
          <div style={{
            fontSize: '0.9rem',
            color: '#4b5563',
            marginBottom: '12px',
          }}>
            Monochromatic
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            {schemes.monochromatic.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                onClick={() => setBaseColor(color)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
