
const ColorPicker_13 = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#2196f3');
  const [rippleColor, setRippleColor] = useState('');
  const [activePalette, setActivePalette] = useState('All');
  const [isRippling, setIsRippling] = useState(false);

  // Enhanced color palettes with more variety
  const colorPalettes = {
    'Red': ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000'],
    'Blue': ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff'],
    'Green': ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853'],
    'Purple': ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff'],
    'Orange': ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00'],
    'Teal': ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5'],
    'Pink': ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162'],
    'Indigo': ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe']
  };

  const allColors = [];
  Object.values(colorPalettes).forEach(palette => {
    allColors.push(...palette);
  });

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setRippleColor(color);
    setIsRippling(true);
    
    if (onChange) {
      onChange(color);
    }
    
    setTimeout(() => {
      setRippleColor('');
      setIsRippling(false);
    }, 500);
  };

  const getTextColor = (bgColor) => {
    // Convert hex to RGB
    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);
    
    // Calculate perceived brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Return black for light colors, white for dark colors
    return brightness > 155 ? '#000000' : '#ffffff';
  };

  const paletteAnimation = `
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    @keyframes ripple {
      0% { transform: scale(0.5); opacity: 0.6; }
      100% { transform: scale(4); opacity: 0; }
    }

    @keyframes pulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2); }
      70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
    }
  `;

  const renderColorPalette = (paletteName, colors) => (
    <div key={paletteName} style={{
      marginBottom: '20px',
      animation: 'scaleIn 0.3s ease-out',
      animationFillMode: 'both',
      animationDelay: `${Object.keys(colorPalettes).indexOf(paletteName) * 0.05}s`
    }}>
      <h3 style={{
        margin: '0 0 12px 0',
        fontSize: '0.95rem',
        color: '#4b5563',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          display: 'inline-block',
          width: '16px',
          height: '16px',
          borderRadius: '4px',
          background: colors[5],
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }} />
        {paletteName}
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(32px, 1fr))',
        gap: '10px',
      }}>
        {colors.map((color, index) => (
          <button
            key={`${paletteName}-${color}-${index}`}
            onClick={() => handleColorSelect(color)}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              borderRadius: '8px',
              background: color,
              border: selectedColor === color ? '2px solid #1f2937' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              transform: selectedColor === color ? 'scale(1.1)' : 'scale(1)',
              overflow: 'hidden',
              padding: 0,
              outline: 'none',
              boxShadow: selectedColor === color 
                ? `0 4px 12px ${color}80` 
                : '0 2px 4px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: `0 4px 12px ${color}80`,
              },
              '&:active': {
                transform: 'scale(0.95)',
              },
            }}
            aria-label={`Select ${color}`}
            title={color}
          >
            {rippleColor === color && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '20px',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 0.6s ease-out',
                pointerEvents: 'none',
              }} />
            )}
            {selectedColor === color && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: getTextColor(color),
                fontSize: '0.7rem',
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                pointerEvents: 'none',
              }}>
                ✓
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{
      padding: '28px',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      border: '1px solid rgba(0,0,0,0.05)'
    }}>
      <style>{paletteAnimation}</style>

      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '24px',
      }}>
        <h2 style={{
          margin: '0 0 8px 0',
          color: '#1f2937',
          fontSize: '1.8rem',
          fontWeight: '700',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Color Palette Picker
        </h2>
        <p style={{
          margin: '0',
          color: '#6b7280',
          fontSize: '0.95rem',
        }}>
          Click on a color to select it
        </p>
      </div>

      {/* Selected color preview */}
      <div style={{
        height: '100px',
        borderRadius: '16px',
        background: selectedColor,
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        animation: isRippling ? 'pulse 0.6s ease' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: getTextColor(selectedColor),
        fontSize: '1.1rem',
        fontWeight: '600',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          zIndex: '1',
        }} />
        <span style={{ position: 'relative', zIndex: '2' }}>{selectedColor}</span>
      </div>

      {/* Palette selector */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '8px',
        padding: '8px 0',
        marginBottom: '20px',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          height: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#a8a8a8',
        },
      }}>
        <button
          onClick={() => setActivePalette('All')}
          style={{
            padding: '8px 16px',
            background: activePalette === 'All' ? '#6366f1' : '#f3f4f6',
            color: activePalette === 'All' ? 'white' : '#4b5563',
            border: 'none',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
            flexShrink: '0',
            '&:hover': {
              background: activePalette === 'All' ? '#4f46e5' : '#e5e7eb',
            },
          }}
        >
          All Colors
        </button>
        {Object.keys(colorPalettes).map(paletteName => (
          <button
            key={paletteName}
            onClick={() => setActivePalette(paletteName)}
            style={{
              padding: '8px 16px',
              background: activePalette === paletteName ? '#6366f1' : '#f3f4f6',
              color: activePalette === paletteName ? 'white' : '#4b5563',
              border: 'none',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              flexShrink: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              '&:hover': {
                background: activePalette === paletteName ? '#4f46e5' : '#e5e7eb',
              },
            }}
          >
            <span style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              background: colorPalettes[paletteName][5],
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)'
            }} />
            {paletteName}
          </button>
        ))}
      </div>

      {/* Color palettes */}
      <div style={{
        maxHeight: '400px',
        overflowY: 'auto',
        paddingRight: '8px',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#a8a8a8',
        },
      }}>
        {activePalette === 'All' 
          ? Object.entries(colorPalettes).map(([paletteName, colors]) => 
              renderColorPalette(paletteName, colors)
            )
          : renderColorPalette(activePalette, colorPalettes[activePalette])
        }
      </div>

      {/* Color code */}
      <div style={{
        marginTop: '24px',
        display: 'flex',
        alignItems: 'center',
        background: '#f9fafb',
        borderRadius: '12px',
        padding: '12px 16px',
        border: '1px solid #e5e7eb',
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: selectedColor,
          border: '2px solid #fff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          marginRight: '12px',
          flexShrink: 0,
        }} />
        <div style={{
          flex: 1,
          fontFamily: 'monospace',
          fontSize: '0.95rem',
          color: '#1f2937',
          wordBreak: 'break-all',
        }}>
          {selectedColor}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(selectedColor);
            const copyBtn = document.getElementById('copy-btn');
            if (copyBtn) {
              copyBtn.textContent = '✓';
              setTimeout(() => {
                copyBtn.textContent = '⎘';
              }, 2000);
            }
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            fontSize: '1.1rem',
            padding: '4px',
            borderRadius: '4px',
            marginLeft: '8px',
            transition: 'all 0.2s ease',
            '&:hover': {
              color: '#4b5563',
              background: 'rgba(0, 0, 0, 0.05)',
            },
          }}
          id="copy-btn"
          title="Copy to clipboard"
          aria-label="Copy color to clipboard"
        >
          ⎘
        </button>
      </div>
    </div>
  );
};

// For React Live preview
const ColorPickerWithStyles = () => {
  const [selectedColor, setSelectedColor] = React.useState('#2196f3');
  
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #f6f7f9 0%, #e9ecf1 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ 
        color: '#1f2937', 
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '2.2rem',
        fontWeight: '800',
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
        letterSpacing: '-0.5px'
      }}>
        Color Palette Picker
      </h1>
      
      <ColorPicker_13 
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
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '0.95rem',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '320px',
        transition: 'all 0.3s ease',
        border: 'none',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ 
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
          zIndex: '1',
        }} />
        <div style={{ position: 'relative', zIndex: '2' }}>
          <div style={{ fontSize: '0.8rem', opacity: '0.9', marginBottom: '4px' }}>SELECTED COLOR</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px' }}>
            {selectedColor.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

  render(<ColorPickerWithStyles />);

