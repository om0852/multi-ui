
const ColorPicker_15 = ({ onChange }) => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const [selectedColor, setSelectedColor] = useState('hsl(180, 50%, 50%)');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showPresets, setShowPresets] = useState(false);

  // Color presets
  const colorPresets = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', 
    '#D4A5A5', '#9B786F', '#E8C07D', '#F8F4E6', '#2C3E50',
    '#E74C3C', '#E67E22', '#F1C40F', '#2ECC71', '#3498DB',
    '#9B59B6', '#1ABC9C', '#E91E63', '#8E44AD', '#16A085'
  ];

  // Update color when HSL changes
  useEffect(() => {
    const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setSelectedColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  }, [hue, saturation, lightness, onChange]);

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // Handle color selection from presets
  const handlePresetSelect = (color) => {
    // Convert hex to HSL
    const r = parseInt(color.slice(1, 3), 16) / 255;
    const g = parseInt(color.slice(3, 5), 16) / 255;
    const b = parseInt(color.slice(5, 7), 16) / 255;
    
    // Convert RGB to HSL
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }

    // Update state with new HSL values
    setHue(Math.round(h * 360));
    setSaturation(Math.round(s * 100));
    setLightness(Math.round(l * 100));
  };

  // Copy color to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedColor);
    setCopied(true);
  };

  // Get text color based on background brightness
  const getTextColor = (bgColor) => {
    // If color is in HSL format, convert to hex first
    let hex = bgColor;
    if (bgColor.startsWith('hsl')) {
      // Extract HSL values
      const hsl = bgColor.match(/\d+/g);
      if (hsl && hsl.length >= 3) {
        const [h, s, l] = hsl.map(Number);
        // Simple HSL to RGB conversion
        const c = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l / 100 - c / 2;
        
        let r, g, b;
        if (h < 60) { r = c; g = x; b = 0; }
        else if (h < 120) { r = x; g = c; b = 0; }
        else if (h < 180) { r = 0; g = c; b = x; }
        else if (h < 240) { r = 0; g = x; b = c; }
        else if (h < 300) { r = x; g = 0; b = c; }
        else { r = c; g = 0; b = x; }
        
        // Convert to 0-255 range
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        
        // Convert to hex
        hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      }
    }
    
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    return brightness > 155 ? '#000000' : '#ffffff';
  };

  // Theme variables
  const theme = {
    background: isDarkMode ? '#1E1E2E' : '#F5F5F7',
    surface: isDarkMode ? '#2A2A3A' : '#FFFFFF',
    text: isDarkMode ? '#E2E2E9' : '#333333',
    muted: isDarkMode ? '#8A8A9E' : '#666666',
    border: isDarkMode ? '#3A3A4A' : '#E0E0E0',
    shadow: isDarkMode ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.1)',
    highlight: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  };

  return (
    <div style={{
      maxWidth: '360px',
      margin: '0 auto',
      padding: '24px',
      borderRadius: '24px',
      background: theme.background,
      color: theme.text,
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxShadow: theme.shadow,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${selectedColor}20 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: '0',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${selectedColor}10 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: '0',
      }} />

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        position: 'relative',
        zIndex: '1',
      }}>
        <h1 style={{
          margin: '0',
          fontSize: '1.8rem',
          fontWeight: '800',
          background: `linear-gradient(90deg, ${selectedColor}, ${selectedColor}cc)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.03em',
        }}>
          Color Picker
        </h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: theme.surface,
            border: `1px solid ${theme.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.text,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:hover': {
              background: theme.highlight,
              transform: 'translateY(-2px)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Color preview */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '180px',
        borderRadius: '20px',
        background: selectedColor,
        marginBottom: '28px',
        overflow: 'hidden',
        boxShadow: `0 8px 20px ${selectedColor}40`,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px',
        color: getTextColor(selectedColor),
        animation: 'colorPop 1s ease',
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
          zIndex: '1',
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: '2',
        }}>
          <div style={{
            fontSize: '0.9rem',
            opacity: '0.9',
            marginBottom: '4px',
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
          }}>
            SELECTED COLOR
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}>
            <div style={{
              fontSize: '1.6rem',
              fontWeight: '800',
              letterSpacing: '0.5px',
            }}>
              {selectedColor}
            </div>
            <button
              onClick={copyToClipboard}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: getTextColor(selectedColor),
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(5px)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.25)',
                  transform: 'translateY(-1px)',
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            >
              {copied ? '✓ Copied!' : '⎘ Copy'}
            </button>
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
            fontSize: '0.85rem',
            opacity: '0.9',
          }}>
            <span>H: {hue}°</span>
            <span>S: {saturation}%</span>
            <span>L: {lightness}%</span>
          </div>
        </div>
      </div>

      {/* Color picker controls */}
      <div style={{
        marginBottom: '24px',
      }}>
        {/* Hue slider */}
        <div style={{
          marginBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <label style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: theme.text,
            }}>
              Hue
            </label>
            <span style={{
              fontSize: '0.85rem',
              color: theme.muted,
              fontFamily: 'monospace',
            }}>
              {hue}°
            </span>
          </div>
          <div style={{
            position: 'relative',
            height: '8px',
            borderRadius: '4px',
            background: 'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
            cursor: 'pointer',
            overflow: 'hidden',
          }}>
            <div 
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
              }}
              onMouseDown={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const newHue = Math.round((x / rect.width) * 360);
                setHue(newHue);
                
                const moveHandler = (moveEvent) => {
                  const newX = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
                  const newHue = Math.round((newX / rect.width) * 360);
                  setHue(newHue);
                };
                
                const upHandler = () => {
                  document.removeEventListener('mousemove', moveHandler);
                  document.removeEventListener('mouseup', upHandler);
                };
                
                document.addEventListener('mousemove', moveHandler);
                document.addEventListener('mouseup', upHandler);
              }}
            >
              <div style={{
                position: 'absolute',
                left: `${hue / 3.6}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'white',
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </div>

        {/* Saturation and Lightness picker */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '200px',
          borderRadius: '12px',
          marginBottom: '20px',
          background: `hsl(${hue}, 100%, 50%)`,
          backgroundImage: 'linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)',
          cursor: 'crosshair',
          overflow: 'hidden',
        }}>
          <div 
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              right: '0',
              bottom: '0',
            }}
            onMouseDown={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const newSaturation = Math.round((x / rect.width) * 100);
              const newLightness = 100 - Math.round((y / rect.height) * 100);
              
              setSaturation(newSaturation);
              setLightness(newLightness);
              
              const moveHandler = (moveEvent) => {
                const newX = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
                const newY = Math.max(0, Math.min(moveEvent.clientY - rect.top, rect.height));
                
                const newSaturation = Math.round((newX / rect.width) * 100);
                const newLightness = 100 - Math.round((newY / rect.height) * 100);
                
                setSaturation(newSaturation);
                setLightness(newLightness);
              };
              
              const upHandler = () => {
                document.removeEventListener('mousemove', moveHandler);
                document.removeEventListener('mouseup', upHandler);
              };
              
              document.addEventListener('mousemove', moveHandler);
              document.addEventListener('mouseup', upHandler);
            }}
          >
            <div style={{
              position: 'absolute',
              left: `${saturation}%`,
              top: `${100 - lightness}%`,
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              border: '2px solid white',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </div>

      {/* Color presets */}
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}>
          <h3 style={{
            margin: '0',
            fontSize: '1rem',
            fontWeight: '600',
            color: theme.text,
          }}>
            Color Presets
          </h3>
          <button
            onClick={() => setShowPresets(!showPresets)}
            style={{
              background: 'none',
              border: 'none',
              color: theme.muted,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              '&:hover': {
                color: theme.text,
              },
            }}
          >
            {showPresets ? 'Hide' : 'Show'}
            <span style={{
              transform: `rotate(${showPresets ? '180deg' : '0'})`,
              transition: 'transform 0.2s ease',
              display: 'inline-flex',
            }}>
              ▼
            </span>
          </button>
        </div>
        
        {showPresets && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            marginBottom: '16px',
          }}>
            {colorPresets.map((color, index) => (
              <button
                key={index}
                onClick={() => handlePresetSelect(color)}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '8px',
                  background: color,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${color}80`,
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                }}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#7c3aed');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#e5e7eb',
    }}>
      <ColorPicker_15 
        onChange={(color) => {
          setSelectedColor(color);
          console.log('Selected color:', color);
        }} 
      />
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        borderRadius: '16px',
        background: selectedColor,
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '320px',
        transition: 'all 0.3s ease',
        border: 'none',
        outline: 'none',
      }}>
        <div style={{ 
          fontSize: '0.8rem', 
          opacity: '0.9', 
          marginBottom: '4px' 
        }}>
          SELECTED COLOR
        </div>
        <div style={{ 
          fontSize: '1.2rem', 
          fontWeight: '700', 
          letterSpacing: '1px' 
        }}>
          {selectedColor.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

  root.render(<ColorPickerWithStyles />);
